import TodoItems from "./Components/TodoItems";
import UserInput from "./Components/UserInput";
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState([]);
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

  return (
    <div className="App">
      <TodoItems data={data} onDelete={onDelete} />
      <UserInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        onDescChange={(e) => setDesc(e.target.value)}
        descValue={desc}
        onAdd={addData}
      />
    </div>
  );
}

export default App;
