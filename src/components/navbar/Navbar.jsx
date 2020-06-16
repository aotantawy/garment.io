import React, { useState } from "react";
import store from "./../../utilities/store";
import * as actions from "./../../utilities/actionCreators";
import { getAllBusinesses } from "./../../utilities/axiosRequest";
import styles from "./styles/navbar.module.css";

function inputHandle(e, setFormInputs) {
  const { name, value } = e.target;
  setFormInputs((prev) => ({
    ...prev,
    [name]: value,
  }));
}

function searchHandle(e, formInputs, setFormInputs) {
  store.dispatch(actions.fetchData());
  getAllBusinesses(formInputs.businessName, formInputs.location)
    .then((res) => {
      store.dispatch(actions.fetchDataSuccess(res.data.businesses));
    })
    .catch((err) => {
      store.dispatch(actions.fetchDataFailure());
    })
    .finally(() => {
      setFormInputs({
        businessName: "",
        location: "",
      });
    });
  e.preventDefault();
}

const SearchForm = () => {
  const [formInputs, setFormInputs] = useState({
    businessName: "",
    location: "",
  });
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${styles["navbar-and-search"]}`}
    >
      <span className="navbar-brand" href="#">
        Garment io
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <div className="navbar-nav mr-auto"></div>
        <form
          className="form-inline"
          onSubmit={(e) => searchHandle(e, formInputs, setFormInputs)}
        >
          <input
            className="form-control mr-sm-2"
            name="businessName"
            value={formInputs.businessName}
            onChange={(e) => inputHandle(e, setFormInputs)}
            type="search"
            placeholder="business name"
            required
          />
          <input
            className="form-control mr-sm-2"
            name="location"
            value={formInputs.location}
            onChange={(e) => inputHandle(e, setFormInputs)}
            type="search"
            placeholder="location"
            required
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default SearchForm;
