function BookShow({ book, onDelete }) {
  const handleDelete = () => {
    onDelete(book.id);
  };

  return (
    <div>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Placeholder image"
                ></img>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <label className="title is-3 control">{book.title}</label>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="media-right">
              <button
                className="button is-danger delete"
                onClick={handleDelete}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookShow;
