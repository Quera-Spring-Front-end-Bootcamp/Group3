import rectangle from "../assets/rectangle.svg";
import Header from "../components/AuthLayout/Header";

import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <>
      <img
        className="absolute bottom-0 w-[100%] -z-10"
        alt=""
        src={rectangle}
      />
      <Header />
      <Outlet />
    </>
  );
};
