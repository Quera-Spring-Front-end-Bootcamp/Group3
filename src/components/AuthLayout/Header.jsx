import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Button from "../Button";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [shadow, setShadow] = useState(false);
  function handleClick() {
    if (location.pathname === "/auth/login") {
      navigate("/auth/register");
    } else {
      navigate("/auth/login");
    }
  }
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 30) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div className={!shadow ? "" : "w-full shadow-md sticky top-0 z-10 bg-white"}>
      <header className="container mx-auto flex flex-row items-center justify-between   w-full py-10">
        <Logo />
        <div className="flex flex-row items-center justify-end gap-[7px]">
          {location.pathname === "/auth/login" ? (
            <div className="relative text-black">ثبت‌نام نکرده‌ای؟</div>
          ) : (
            <div className="relative text-black">قبلا ثبت‌نام کرده‌ای؟</div>
          )}
          <Button
            handleClick={handleClick}
            title={`${
              location.pathname === "/auth/login" ? "ثبت نام" : "ورود"
            }`}
            classNames="w-[90px] h-10"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
