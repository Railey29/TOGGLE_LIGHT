import { useState } from "react";
import CountComponents from "./CountComponents";

const StateComponents = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountComponents
        count={count}
        handleIncriment={() => setCount(count + 1)}
        handleDecriment={() => setCount(count - 1)}
      />
    </>
  );
};

export default StateComponents;
