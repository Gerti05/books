import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <span>{book.title}</span>;

  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  src={`https://picsum.photos/seed/${book.id}/128/128`}
                  alt="Placeholder"
                ></img>
              </figure>
            </div>
            <div className="media-right">
              <button className="button is-info" onClick={handleEdit}>
                E
              </button>
              <button
                className="button is-danger delete"
                onClick={handleDelete}
              ></button>
            </div>
          </div>
          <label className="title is-3">{content}</label>
        </div>
      </div>
    </div>
  );
}

export default BookShow;
