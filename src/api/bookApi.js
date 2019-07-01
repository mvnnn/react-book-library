const ActiveBooks = [
  {
    book_title: "Going Home",
    writer: "A. American",
    img_path: "../../src/public/images/going-home.png",
    reading_type: "Current Reading",
    book_id: 1
  },
  {
    book_title: "Indian Diet",
    writer: "Shilpa Shetty",
    img_path: "../../src/public/images/indian-diet.png",
    reading_type: "Current Reading",
    book_id: 2
  },
  {
    book_title: "Surviving Home",
    writer: "A. American",
    img_path: "../../src/public/images/surviving-home.png",
    reading_type: "Want To Read",
    book_id: 3
  },
  {
    book_title: "Thunder Rain",
    writer: "Carles Martin",
    img_path: "../../src/public/images/thunder-rain.png",
    reading_type: "Read",
    book_id: 4
  }
];

const Books = [
  {
    book_title: "Perfect Fit",
    writer: "James Haskell",
    img_path: "../../src/public/images/perfect-fit.png",
    reading_type: "None",
    book_id: 5
  },
  {
    book_title: "Born To Write",
    writer: "Chris Cotter",
    img_path: "../../src/public/images/born-to-write.png",
    reading_type: "None",
    book_id: 6
  },
  {
    book_title: "Fitness On The Go",
    writer: "Deepika Padukone",
    img_path: "../../src/public/images/fitness-on-the-go.png",
    reading_type: "None",
    book_id: 7
  },
  {
    book_title: "Worlds Fittest Book",
    writer: "Ross Edgley",
    img_path: "../../src/public/images/worlds-fittest-book.png",
    reading_type: "None",
    book_id: 8
  }
];

class BookApi {
  static getActiveBooks() {
    return new Promise((resolve, reject) => {
      return resolve(ActiveBooks);
    });
  }

  static getBooks() {
    return new Promise((resolve, reject) => {
      return resolve(Books);
    });
  }
}

export default BookApi;
