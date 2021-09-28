import React from "react";

export default function TodoItems(props) {
  return (
    <div className="my-3 mx-5 row">
      {props.data.map((ele) => {
        return (
          <div
            className="card my-3 mx-3 col-md-4"
            key={ele.id}
            style={{ width: "18rem" }}
          >
            <div className="card-body col-sm" id="cardBody">
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
