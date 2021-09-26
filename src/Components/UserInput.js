import React from "react";

export default function UserInput(props) {
  return (
    <div className="container my-3">
      <input
        type="text"
        className="form-control"
        id="title"
        placeholder="Enter the title"
        value={props.value}
        onChange={props.onChange}
      />
      <input
        type="text"
        className="form-control my-3"
        id="title"
        placeholder="Enter the description"
        onChange={props.onDescChange}
        value={props.descValue}
      />
      <button className="btn-sm btn-primary" onClick={props.onAdd}>
        Add
      </button>
    </div>
  );
}
