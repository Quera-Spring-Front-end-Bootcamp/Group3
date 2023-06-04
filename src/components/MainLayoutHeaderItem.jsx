import { NavLink } from "react-router-dom";

function MainLayoutHeaderItem({ title, icon, link }) {
  return (
    <>
      <nav>
        <ul className="flex flex-col  gap-6 whitespace-nowrap ">
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#208D8E" : "",
                fontWeight: isActive ? 700 : 500,
              })}
              to={`/main/${link}`}
              className="flex items-center gap-[11px] rounded-[4px] py-1 px-2"
            >
              <i>{icon}</i>
              <span>{title}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MainLayoutHeaderItem;
