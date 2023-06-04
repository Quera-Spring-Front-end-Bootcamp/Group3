import { Sidebar } from "../components/ProfileLayout/Sidebar";
import { Outlet } from "react-router-dom";

export const ProfileLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="mt-44 mr-14">
        <Outlet />
      </div>
    </div>
  );
};
