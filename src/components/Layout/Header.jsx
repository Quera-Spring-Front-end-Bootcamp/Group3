import React from "react";
import Logo from "./Logo";

const Header = (props) => {
  return (
    <head className="absolute top-[80px] left-[80px] w-[1280px] flex flex-row items-center justify-between ">
      <div className="flex flex-row items-center justify-end gap-[7px]">
        <button className="cursor-pointer [border:none] p-2.5 bg-secondary rounded-md w-[95px] h-10 flex flex-row box-border items-center justify-center">
          {props.page === "login" ? (
            <b className="relative text-sm font-dana text-white text-right">
              ثبت نام
            </b>
          ) : (
            <b className="relative text-sm font-dana text-white text-right">
              ورود
            </b>
          )}
        </button>

        {props.page === "login" ? (
          <div className="relative text-black">ثبت‌نام نکرده‌ای؟</div>
        ) : (
          <div className="relative text-black">قبلا ثبت‌نام کرده‌ای؟</div>
        )}
      </div>
      <Logo />
    </head>
  );
};

export default Header;
