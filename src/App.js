import { useState } from "react";
import BookCreate from "./components/BookCreate";

let bookID = 0;

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updateBooks = [...books, { id: bookID++, title: title }];

    setBooks(updateBooks);
    console.log(books);
  };

  return (
    <div className="container is-fluid">
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
