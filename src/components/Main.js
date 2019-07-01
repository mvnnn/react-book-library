import React from "react";
import PropTypes from "prop-types";
import Cssmodules from "react-css-modules";

import BookList from "./BookList";
import styles from "./main.scss";
import AddButton from "./AddButton";

const MainComponent = ({
  active_books,
  onChangeReadingType,
  goToSearchBookPage
}) => {
  return (
    <div className="main-component">
      <div>
        <AddButton goToSearchBookPage={goToSearchBookPage} />
      </div>
      <div>
        <h2>Currently Reading</h2>
        <hr />
        <BookList
          books={active_books.filter(
            book => book.reading_type === "Current Reading"
          )}
          onChangeSelect={onChangeReadingType}
        />
        <h2>Want to Read</h2>
        <hr />
        <BookList
          books={active_books.filter(
            book => book.reading_type === "Want To Read"
          )}
          onChangeSelect={onChangeReadingType}
        />
        <h2>Read</h2>
        <hr />
        <BookList
          books={active_books.filter(book => book.reading_type === "Read")}
          onChangeSelect={onChangeReadingType}
        />
      </div>
    </div>
  );
};

MainComponent.displayName = "MainComponentbar";
MainComponent.propTypes = {};
MainComponent.defaultProps = {};

export default Cssmodules(MainComponent, styles);
