import React from "react";
import PropTypes from "prop-types";
import Cssmodules from "react-css-modules";

import styles from "./booklist.scss";
import Dropdown from "./Dropdown";
import { Grid, Row, Col } from "react-bootstrap";

const BookListComponent = ({ books, onChangeSelect }) => {
  return (
    <div className="booklist-component">
      <Grid>
        <Row className="show-grid">
          {books.map(book => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className="book">
                <img src={book.img_path} alt={book.book_title} />
                <div>
                  <div>
                    <h4>{book.book_title}</h4>
                  </div>
                  <div>
                    <span className="writer-text">{book.writer}</span>
                  </div>
                </div>
                <div className="dropdown-button">
                  <Dropdown
                    book_id={book.book_id}
                    active_option={book.reading_type}
                    onSelectType={onChangeSelect}
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
};

BookListComponent.displayName = "BookListComponentbar";
BookListComponent.propTypes = {};
BookListComponent.defaultProps = {};

export default Cssmodules(BookListComponent, styles);
