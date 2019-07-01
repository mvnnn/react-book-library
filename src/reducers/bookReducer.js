import * as types from "../actions/actionTypes";

const initialState = {
  active_books: [],
  books: [],
  book_updating: false,
  book_adding: false
};

function searchById(books, book_id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].book_id === book_id) {
      return i;
    }
  }
  return null;
}

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ACTIVE_BOOKS_SUCCESS:
      return Object.assign({}, state, {
        active_books: action.books,
        book_updating: false
      });

    case types.LOAD_BOOKS_SUCCESS:
      return Object.assign({}, state, {
        books: action.books
      });

    case types.UPDATE_READING_TYPE:
      return Object.assign({}, state, {
        book_updating: true
      });

    case types.UPDATE_READING_TYPE_SUCCESS:
      const BookObjectIndex = searchById(state.active_books, action.book_id);

      state.active_books[BookObjectIndex].reading_type = action.reading_type;

      return Object.assign({}, state, {
        active_books: state.active_books,
        book_updating: false
      });

    case types.ADD_BOOK:
      return Object.assign({}, state, {
        book_adding: true
      });

    case types.ADD_BOOK_SUCCESS:
      const BookIndex = searchById(state.books, action.book_id);

      let new_book = state.books[BookIndex];

      new_book.reading_type = action.reading_type;

      state.active_books.push(new_book);

      state.books.splice(BookIndex, 1);

      return Object.assign({}, state, {
        active_books: state.active_books,
        books: state.books,
        book_adding: false
      });

    default:
      return state;
  }
}
