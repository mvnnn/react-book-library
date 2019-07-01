import React from "react";
import PropTypes from "prop-types";
import Cssmodules from "react-css-modules";

import styles from "./dropdown.scss";
import { DropdownButton, MenuItem } from "react-bootstrap";

const Options = [
  "Move to...",
  "Current Reading",
  "Want To Read",
  "Read",
  "None"
];

const DropdownComponent = ({ book_id, active_option, onSelectType }) => {
  return (
    <div className="dropdown-component">
      <DropdownButton
        bsStyle="success"
        key={book_id}
        id={`dropdown-basic-${book_id}`}
      >
        {Options.map((option, i) => (
          <MenuItem
            eventKey={i}
            onSelect={() => onSelectType(book_id, option)}
            disabled={option === "Move to..."}
            active={option === active_option}
          >
            {option}
          </MenuItem>
        ))}
      </DropdownButton>
    </div>
  );
};

DropdownComponent.displayName = "DropdownComponentbar";
DropdownComponent.propTypes = {};
DropdownComponent.defaultProps = {};

export default Cssmodules(DropdownComponent, styles);
