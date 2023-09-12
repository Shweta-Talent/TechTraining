import React, { useState } from "react";
import "./App.css";
function App() {
  const [List, setList] = useState([""]);
  const [inputValue, setInputValue] = useState("");
  const [editvalue, seteditvalue] = useState();
  const [toggleitem, settoggleitem] = useState(-1);
  const [taskDone, setTaskDone] = useState(Array(List.length).fill(false));

  function setInput(e: any) {
    setInputValue(e.target.value);
  }

  function toggleTaskDone(index: number) {
    const newTaskDone = [...taskDone];
    newTaskDone[index] = !newTaskDone[index];
    setTaskDone(newTaskDone);
  }
  
  function handleClick() {
    if (inputValue.length > 0) {
      setList([...List, inputValue]);
      setInputValue(""); //sync
      // setList((List)=>{const updatelist=[...list,inputvalue]
      // setInputValue('')  //async
    } else {
      alert("please enter task ");
    }
  }

  function removeElement(index: number) {
    const newlist = [...List];
    newlist.splice(index, 1);
    setList(newlist);
  }

  function deleteAll() {
    setList([]);
  }

  function editElement(indextobeedited: any) {
    settoggleitem(indextobeedited);
  }

  function editElemetvalue(e: any) {
    seteditvalue(e.target.value);
  }

  function saveediteditem() {
    let newList = [...List];
    if (typeof editvalue === "string") newList.splice(toggleitem, 1, editvalue);

    setList(newList);
  }
  return (
    <>
      <div className="container">
        <h1> To do list</h1>
        <input
          type="text"
          value={inputValue}
          onChange={setInput}
          placeholder="add your tasks"
        />

        <button className="task-list" onClick={handleClick}>
          Add tasks
        </button>

        <h1>
          {List.map((task, index) => (
            <div className="task" key={index}>
              <h3>{task}</h3>
              <button
                className="edit-button"
                onClick={() => removeElement(index)}>
                Remove Task
              </button>
              <button onClick={() => editElement(index)}>Edit task</button>
              {toggleitem === index ? (
                <>
                  {" "}
                  <input
                    type="text"
                    value={editvalue}
                    onChange={editElemetvalue}></input>
                  <button onClick={saveediteditem}> save edited item</button>
                </>
              ) : (
                <></>
              )}
              {List.map((task, index) => (
  <div  key={index}>
    <input
      type="checkbox"
      checked={taskDone[index]}
      onChange={() => toggleTaskDone(index)}
    />
    {/* { < className={taskDone[index] ? "done" : ""}>{List}</> } */}
   
  </div>
))}

            </div>
          ))}
        </h1>
        {List.length > 0 && (
          <button className="remove-button" onClick={deleteAll}>
            Remove all
          </button>
        )}
      </div>
    </>
  );
}

export default App;
