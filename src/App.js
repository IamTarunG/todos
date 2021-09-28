import TodoItems from "./Components/TodoItems";
import UserInput from "./Components/UserInput";
import React, { useState, useEffect } from "react";

function App() {
  function getData() {
    const todolists = localStorage.getItem("todolists");
    if (todolists !== null) {
      return JSON.parse(todolists);
    } else {
      return [];
    }
  }
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState(getData());
  const newData = {
    id: new Date().getTime().toString(),
    title: text,
    description: desc,
  };
  function addData() {
    console.log("Clicked Add");

    setData([...data, newData]);

    setText("");
    setDesc("");
  }
  function onDelete(id) {
    console.log("Clicked delete");
    const updatedData = data.filter((ele) => {
      return ele.id !== id;
    });
    setData(updatedData);
  }
  useEffect(() => {
    localStorage.setItem("todolists", JSON.stringify(data));
  }, [data]);

  return (
    <div className="App">
      <UserInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        onDescChange={(e) => setDesc(e.target.value)}
        descValue={desc}
        onAdd={addData}
      />
      <TodoItems data={data} onDelete={onDelete} />
    </div>
  );
}

export default App;
