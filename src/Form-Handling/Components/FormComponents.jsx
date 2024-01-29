import React, { useEffect, useState, useRef } from "react";

function FormComponents() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [error, setError] = useState("");
  const inputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task !== "") {
      setTaskList([...taskList, task]);
      setTask(""); //clear
    } else {
      setError("Please fill the Form");
      inputRef.current.focus();
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="border p-4">
        <h1 className="text-center mb-4">Task App</h1>
        <form className="form-group" onSubmit={handleSubmit}>
          <div>
            <input
              ref={inputRef}
              type="text"
              className="form-control"
              placeholder="Enter a Task..."
              value={task}
              onChange={(event) => setTask(event.target.value)}
            />
            {error ? <p className="text-danger mt-2">{error}</p> : null}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
          </div>
        </form>
        <ul className="list-group mt-3">
          {taskList.map((tasked, index) => (
            <li key={index} className="list-group-item">
              {tasked}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FormComponents;
