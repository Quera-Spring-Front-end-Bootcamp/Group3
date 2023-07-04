import Header from "../components/AuthLayout/Header";

import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  const shapeStyle = [
    "before:w-[120%] min-h-screen h-full before:h-[80%] before:content-[''] before:absolute before:bottom-[-30%] before:right-[-20%] before:rotate-[-10deg] before:z-[-1] before:bg-gradient-to-r from-primary to-secondary",
  ];
  return (
    <div className="w-full h-full">
      <Header />
      <div className={`overflow-hidden  relative  ` + shapeStyle}>
        <Outlet />
      </div>
    </div>
  );
};
