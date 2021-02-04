import React, { Fragment } from "react";
import PropTypes from "prop-types";

const SearchResultItem = ({ resultItem: { title, text, source, url } }) => {
  return (
    <Fragment>
      <h3>{title}</h3>
      <p>{text.substring(0, 500)}</p>
      <p>Source: {source}</p>
      <a href={url} target="_blank">
        {url}
      </a>
      <p>
        ----------------------------------------------------------------------------------------------
      </p>
    </Fragment>
  );
};

SearchResultItem.propTypes = {};

export default SearchResultItem;
