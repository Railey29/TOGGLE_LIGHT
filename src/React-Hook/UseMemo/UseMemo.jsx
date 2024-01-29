import React, { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const doubleNumber = useMemo(() => {
    alert("computing...");
    return count * 2;
  }, [count]);
  return (
    <>
      <p>DoubleNumber: {doubleNumber}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Double Incriment
      </button>
    </>
  );
}

export default UseMemo;
