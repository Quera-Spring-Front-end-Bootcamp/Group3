// import React from "react";

function Button({ title, handleClick, ...props }) {
  return (
    <button
      onClick={handleClick}
      className="rounded-md	bg-secondary p-2.5 font-bold text-white text-right text-sm/[22px]"
      {...props}
    >
      {title}
    </button>
  );
}

export default Button;
