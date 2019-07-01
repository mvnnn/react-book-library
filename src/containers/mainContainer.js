import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions/bookActions";
import Main from "../components/Main";

export class mainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active_books: []
    };
    this.onChangeReadingType = this.onChangeReadingType.bind(this);
    this.goToSearchBookPage = this.goToSearchBookPage.bind(this);
  }

  goToSearchBookPage() {
    this.props.history.push("/search");
  }

  onChangeReadingType(book_id, type) {
    this.props.actions.updateReadingType(book_id, type);
  }

  render() {
    const { active_books } = this.props;

    return (
      <div>
        <Main
          active_books={active_books}
          onChangeReadingType={this.onChangeReadingType}
          goToSearchBookPage={this.goToSearchBookPage}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    active_books: state.bookReducer.active_books,
    book_updating: state.bookReducer.book_updating
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mainContainer);
