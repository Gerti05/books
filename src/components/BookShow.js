function BookShow({ book, onDelete }) {
  const handleDelete = () => {
    onDelete(book.id);
  };

  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Placeholder"
                ></img>
              </figure>
            </div>
            <div className="media-right">
              <button
                className="button is-danger delete"
                onClick={handleDelete}
              ></button>
            </div>
          </div>
          <label className="title is-3">{book.title}</label>
        </div>
      </div>
    </div>
  );
}

export default BookShow;
