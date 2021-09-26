import React from "react";

export default function TodoItems(props) {
  return (
    <div className="container my-3">
      {props.data.map((ele) => {
        return (
          <div
            className="card container my-3"
            key={ele.id}
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">{ele.title}</h5>
              <p className="card-text">{ele.description}</p>
              <button
                className="btn-sm btn-danger"
                onClick={() => props.onDelete(ele.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
