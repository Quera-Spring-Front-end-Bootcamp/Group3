// import React from "react";

function Button({ title, handleClick, classNames, ...props }) {
  return (
    <button
      onClick={handleClick}
      className={` rounded-md	bg-primary p-2.5 font-bold text-white  text-sm/[22px] ${classNames} `}
      {...props}
    >
      {title}
    </button>
  );
}

export default Button;
