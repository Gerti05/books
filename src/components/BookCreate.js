import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form className="box mt-4" onSubmit={handleSubmit}>
      <label className="label has-text-centered">Add Book</label>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input is-rounded"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            value={title}
          ></input>
        </div>
        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default BookCreate;
