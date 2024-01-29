import React from "react";
import { useRef } from "react";
function UseRefComponents() {
  const inputRef = useRef();
  // Sa OnClick is (inputRef.currrent.html Tags)
  return (
    <>
      <input name="fname" placeholder="enter name" ref={inputRef} />
      <button
        className="btn btn-danger"
        onClick={() => {
          const value = inputRef.current.value;
          console.log(value);
        }}
      >
        Get Value
      </button>
    </>
  );
}

export default UseRefComponents;
