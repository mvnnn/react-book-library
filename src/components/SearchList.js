import React from "react";
import PropTypes from "prop-types";
import Cssmodules from "react-css-modules";

import BookList from "./BookList";
import SearchBox from "./SearchBox";
import styles from "./searchList.scss";

const SearchListComponent = ({
  books,
  onAddBook,
  onChangeText,
  goToMainPage
}) => {
  return (
    <div className="search-list-component">
      <div>
        <SearchBox onChangeText={onChangeText} goToMainPage={goToMainPage} />
      </div>
      <div>
        <BookList books={books} onChangeSelect={onAddBook} />
      </div>
    </div>
  );
};

SearchListComponent.displayName = "SearchListComponent";
SearchListComponent.propTypes = {};
SearchListComponent.defaultProps = {};

export default Cssmodules(SearchListComponent, styles);
