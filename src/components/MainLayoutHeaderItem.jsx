import React from "react";
import { NavLink, useParams } from "react-router-dom";

function MainLayoutHeaderItem({ title, icon, link }) {
  const { projectId } = useParams();
  return (
    <NavLink
      style={({ isActive }) => ({
        color: isActive ? "text-primary" : "",
        fontWeight: isActive ? 700 : 500,
      })}
      to={`/main/${projectId}/${link}`}
      className="flex items-center gap-[11px] rounded-[4px] py-1 px-2"
    >
      {({ isActive }) => (
        <>
          {React.cloneElement(icon, {
            color: isActive ? "#3e3e3e" : "#000000",
          })}
          <span className={isActive ? "text-primary" : ""}>{title}</span>
        </>
      )}
    </NavLink>
  );
}

export default MainLayoutHeaderItem;
