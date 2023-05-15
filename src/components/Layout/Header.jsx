import React from "react";

const Header = (props) => {
  return (
    <head className="absolute top-[80px] left-[80px] w-[1280px] flex flex-row items-center justify-between text-sm ">
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
      <div className="relative text-13xl font-extrabold bg-gradient-to-r from-gleft to-gright text-transparent bg-clip-text font-dana">
        کوئرا تسک منیجر
      </div>
    </head>
  );
};

export default Header;
