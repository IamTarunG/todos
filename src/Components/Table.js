import React from "react";

export default function Table(props) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.personInfo.map((ele) => {
            return (
              <tr key={ele.id}>
                <th scope="row">{ele.id}</th>
                <td>{ele.personName}</td>
                <td>{ele.jobName}</td>
                <td>
                  <button
                    className="btn-sm btn-danger"
                    onClick={() => props.onPersonDelete(ele.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
