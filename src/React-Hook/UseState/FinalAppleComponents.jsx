import React from "react";
import { AiFillApple } from "react-icons/ai";
import { AiOutlineApple } from "react-icons/ai";
const FinalAppleComponents = ({ isLiked, handleClick }) => {
  return (
    <div>
      {isLiked ? (
        <AiFillApple color="black" onClick={handleClick} />
      ) : (
        <AiOutlineApple color="black" onClick={handleClick} />
      )}
    </div>
  );
};

export default FinalAppleComponents;
