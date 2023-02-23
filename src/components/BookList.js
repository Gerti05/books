import BookShow from "./BookShow";

function BookList({ books }) {
  const renderBooks = books.map((book) => {
    return (
      <div>
        <BookShow book={book.title} key={book.id} />
      </div>
    );
  });

  return <div>{renderBooks}</div>;
}

export default BookList;
