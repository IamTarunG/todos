import React, { useState } from "react";
import Table from "./Table";
import TableInput from "./TableInput";

export default function TableData() {
  const [title, setTitle] = useState("");
  const [job, setJob] = useState("");
  const [personInfo, setPersonInfo] = useState([]);
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onJobChange = (e) => {
    setJob(e.target.value);
  };
  function onDetailsAdd() {
    const newPersonInfo = {
      id: new Date().getTime(),
      personName: title,
      jobName: job,
    };
    setPersonInfo([...personInfo, newPersonInfo]);
    setTitle("");
    setJob("");
  }
  function onPersonDelete(id) {
    const deletedPerson = personInfo.filter((ele) => {
      return ele.id !== id;
    });
    setPersonInfo(deletedPerson);
  }
  return (
    <div>
      <TableInput
        title={title}
        onTitleChange={onTitleChange}
        job={job}
        onJobChange={onJobChange}
        onDetailsAdd={onDetailsAdd}
      />
      <Table personInfo={personInfo} onPersonDelete={onPersonDelete} />
    </div>
  );
}
