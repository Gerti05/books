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

  const editBookByID = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBook = (id) => {
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updateBooks);
  };

  return (
    <div className="container is-fluid">
      <BookList books={books} onDelete={deleteBook} onEdit={editBookByID} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
