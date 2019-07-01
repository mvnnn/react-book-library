import React from "react";
import PropTypes from "prop-types";
import Cssmodules from "react-css-modules";

import styles from "./addButton.scss";
import { Button, Glyphicon } from "react-bootstrap";

const AddButtonComponent = ({ goToSearchBookPage }) => {
  return (
    <div className="add-button-component">
      <Button onClick={goToSearchBookPage}>
        <Glyphicon glyph="plus" />
      </Button>
    </div>
  );
};

AddButtonComponent.displayName = "AddButtonComponentbar";
AddButtonComponent.propTypes = {};
AddButtonComponent.defaultProps = {};

export default Cssmodules(AddButtonComponent, styles);
