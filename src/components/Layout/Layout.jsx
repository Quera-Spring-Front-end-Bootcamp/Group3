import React from "react";
import rectangle from "../../assets/rectangle.svg";
import Header from "./Header.jsx";

/* pass the page mode as props.
it accepts four mode :
[login, register, forget, resetpassword].
place card as children in this component
don't set size or any position for card, it has been set already */

const Layout = (props) => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-right text-13xl text-black font-dana">
      <img
        className="absolute top-[450px] left-[0px] w-[1440px] h-[574px]"
        alt=""
        src={rectangle}
      />
      <Header page={props.page} />
      {props.page === "login" && (
        <div className="absolute top-[269px] left-[calc(50%_-_258px)]">
          {props.children}
        </div>
      )}
      {props.page === "register" && (
        <div className="absolute top-[269px] left-[calc(50%_-_201.5px)]">
          {props.children}
        </div>
      )}
      {props.page === "Forget" && (
        <div className="absolute top-[380px] left-[489px]">
          {props.children}
        </div>
      )}
      {props.page === "resetpassword" && (
        <div className="absolute top-[393px] left-[489px]">
          {props.children}
        </div>
      )}
    </div>
  );
};

export default Layout;
