function BookShow({ book, onDelete }) {
  const handleDelete = () => {
    onDelete(book.id);
  };

  return (
    <div>
      {book.title} {book.id}
      <span onClick={handleDelete}>x</span>
    </div>
  );
}

export default BookShow;
