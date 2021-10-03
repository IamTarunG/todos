import React from "react";

export default function TableInput(props) {
  return (
    <div className="container my-3">
      <input
        type="text"
        className="form-control"
        id="personName"
        placeholder="Enter the title"
        onChange={props.onTitleChange}
        value={props.title}
      />
      <input
        type="text"
        className="form-control my-3"
        id="job"
        placeholder="Enter the description"
        onChange={props.onJobChange}
        value={props.job}
      />
      <button className="btn-sm btn-primary" onClick={props.onDetailsAdd}>
        Add
      </button>
    </div>
  );
}
