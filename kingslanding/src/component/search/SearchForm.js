import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { searchQuery } from "../../actions/search";

const SearchForm = (props) => {
  const [formData, setFormDData] = useState({
    queryString: "",
  });
  const { queryString } = formData;
  const onChangeHandler = (e) => {
    setFormDData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // createOrUpdateProfile(formData, history); // some function in controller.
    searchQuery(formData);
    console.log(formData);
  };
  return (
    <Fragment>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Search here..."
            name="queryString"
            value={queryString}
            onChange={(e) => onChangeHandler(e)}
            required
          />
          <input type="submit" className="btn btn-primary my-1" />
        </div>
      </form>
    </Fragment>
  );
};

SearchForm.propTypes = {};

export default SearchForm;
