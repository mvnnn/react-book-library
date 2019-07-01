import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions/bookActions";
import Main from "../components/Main";
import SearchList from "../components/SearchList";

export class mainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched_text: ""
    };
    this.onAddBook = this.onAddBook.bind(this);
    this.goToMainPage = this.goToMainPage.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadBooks();
  }

  goToMainPage() {
    this.props.history.push("/");
  }

  onAddBook(book_id, type) {
    this.props.actions.addBook(book_id, type);
  }

  onChangeText(e) {
    this.setState({
      searched_text: e.target.value
    });
  }

  render() {
    const { books } = this.props;
    const { searched_text } = this.state;

    return (
      <div>
        <SearchList
          books={books.filter(book => book.book_title.includes(searched_text))}
          onAddBook={this.onAddBook}
          goToMainPage={this.goToMainPage}
          onChangeText={this.onChangeText}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.bookReducer.books,
    book_updating: state.bookReducer.book_updating,
    book_adding: state.bookReducer.book_adding
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mainContainer);
