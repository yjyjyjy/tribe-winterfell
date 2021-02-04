import React, { Fragment } from "react";
import PropTypes from "prop-types";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import SearchResultItem from "./SearchResultItem";

const Search = ({ searchResult }) => {
  return (
    <Fragment>
      <SearchForm />
      {!!searchResult &&
        searchResult.length > 0 &&
        searchResult.map((resultItem) => (
          <SearchResultItem key={resultItem.url} resultItem={resultItem} />
        ))}
    </Fragment>
  );
};

Search.propTypes = {};

const mapStateToProps = (state) => ({
  searchResult: state.search.searchResult,
});

export default connect(mapStateToProps)(Search);
