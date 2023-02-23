import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

let bookID = 0;

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updateBooks = [...books, { id: ++bookID, title: title }];

    setBooks(updateBooks);
  };

  const deleteBook = (id) => {
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updateBooks);
  };

  return (
    <div className="container is-fluid">
      <BookList books={books} onDelete={deleteBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
