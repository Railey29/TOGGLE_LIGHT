import React, { useEffect, useRef, useState } from "react";

function UseEffectComponents() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  useEffect(() => {
    //alert("Count Updated!");
    //inputRef.current.focus();
  }, [count]); // if walang laman yung yung depedency or [] is once lang nya tatawagin

  //Fetching data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      });
  }, []);
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={() => setCount(count + 1)}>Incriment</button>
      <br />
      <hr />
      {todos && todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      ) : (
        <p>....Loading</p>
      )}
    </>
  );
}

export default UseEffectComponents;
