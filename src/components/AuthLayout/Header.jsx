import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  function handleClick() {
    if (location.pathname === "/auth/login") {
      navigate("/auth/register");
    } else {
      navigate("/auth/login");
    }
  }
  return (
    <head className="flex flex-row items-center justify-between p-10">
      <div className="flex flex-row items-center justify-end gap-[7px]">
        <button
          onClick={handleClick}
          className="cursor-pointer [border:none] p-2.5 bg-secondary rounded-md w-[95px] h-10 flex flex-row box-border items-center justify-center"
        >
          {location.pathname === "/auth/login" ? (
            <b className="relative text-sm font-dana text-white text-right">
              ثبت نام
            </b>
          ) : (
            <b className="relative text-sm font-dana text-white text-right">
              ورود
            </b>
          )}
        </button>

        {location.pathname === "/auth/login" ? (
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
