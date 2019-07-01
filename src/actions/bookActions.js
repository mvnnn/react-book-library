import * as types from "./actionTypes";
import BookApi from "../api/bookApi";

export function loadActiveBooksSuccess(books) {
  return { type: types.LOAD_ACTIVE_BOOKS_SUCCESS, books };
}

export function loadBooksSuccess(books) {
  return { type: types.LOAD_BOOKS_SUCCESS, books };
}

export function addNewBook(data) {
  return { type: types.ADD_BOOK, data };
}

export function addBookSuccess(book_id, reading_type) {
  return { type: types.ADD_BOOK_SUCCESS, book_id, reading_type };
}

export function updateReading(data) {
  return { type: types.UPDATE_READING_TYPE, data };
}

export function updateReadingTypeSuccess(book_id, reading_type) {
  return { type: types.UPDATE_READING_TYPE_SUCCESS, book_id, reading_type };
}

export function loadActiveBooks() {
  return function(dispatch) {
    return BookApi.getActiveBooks()
      .then(books => {
        dispatch(loadActiveBooksSuccess(books));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadBooks() {
  return function(dispatch) {
    return BookApi.getBooks()
      .then(books => {
        dispatch(loadBooksSuccess(books));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function addBook(book_id, reading_type) {
  return function(dispatch) {
    dispatch(addNewBook());
    dispatch(addBookSuccess(book_id, reading_type));
  };
}

export function updateReadingType(book_id, reading_type) {
  return function(dispatch) {
    dispatch(updateReading());
    dispatch(updateReadingTypeSuccess(book_id, reading_type));
  };
}
