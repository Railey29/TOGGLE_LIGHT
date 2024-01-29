import React, { useCallback, useState } from "react";

function CallBackComponents() {
  const [count, setCount] = useState(0);
  const handleIncriment = useCallback(() => {
    setCount((preCount) => preCount + 1);
  }, []);
  return (
    <>
      <div>
        <p>Count:{count}</p>
        <button onClick={handleIncriment}>Incriment</button>
      </div>
    </>
  );
}

export default CallBackComponents;
