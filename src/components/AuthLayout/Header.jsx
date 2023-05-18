import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Button from "../Button";

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
      <Logo />
      <div className="flex flex-row items-center justify-end gap-[7px]">
        {location.pathname === "/auth/login" ? (
          <div className="relative text-black">ثبت‌نام نکرده‌ای؟</div>
        ) : (
          <div className="relative text-black">قبلا ثبت‌نام کرده‌ای؟</div>
        )}
        <Button
          handleClick={handleClick}
          title={`${location.pathname === "/auth/login" ? "ثبت نام" : "ورود"}`}
        />
      </div>
    </head>
  );
};

export default Header;
