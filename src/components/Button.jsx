// import React from "react";

function Button(props) {
  return (
    <button className="rounded-md	bg-secondary p-2.5 font-bold text-white  text-right text-sm/[22px]">
      {props.title}
    </button>
  );
}

export default Button;
