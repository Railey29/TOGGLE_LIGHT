import React, { useState } from "react";
import FinalAppleComponents from "./FinalAppleComponents";

function AppleComponent() {
  const [isLiked, setIsLinked] = useState(false);

  return (
    <>
      <FinalAppleComponents
        isLiked={isLiked}
        handleClick={() => setIsLinked(!isLiked)}
      />
    </>
  );
}

export default AppleComponent;
