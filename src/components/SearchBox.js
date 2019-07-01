import React from "react";
import PropTypes from "prop-types";
import Cssmodules from "react-css-modules";

import BookList from "./BookList";
import styles from "./searchBox.scss";
import AddButton from "./AddButton";
import { FormGroup, FormControl, Button, Glyphicon } from "react-bootstrap";

const SearchBoxComponent = ({ onChangeText, goToMainPage }) => {
  return (
    <div className="search-box-component">
      <Button onClick={goToMainPage}>
        <Glyphicon glyph="arrow-left" />
      </Button>
      <form>
        <FormGroup controlId="formBasicText">
          <FormControl
            id="formControlsText"
            type="text"
            placeholder="Search book name"
            onChange={onChangeText}
          />
        </FormGroup>
      </form>
    </div>
  );
};

SearchBoxComponent.displayName = "SearchBoxComponent";
SearchBoxComponent.propTypes = {};
SearchBoxComponent.defaultProps = {};

export default Cssmodules(SearchBoxComponent, styles);
