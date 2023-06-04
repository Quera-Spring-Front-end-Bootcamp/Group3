import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../AuthLayout/Logo";
import icons from "../../assets/Icons";

export const Sidebar = () => {
  const navigate = useNavigate();
  const navAside = [
    {
      id: 1,
      icon: icons.ProfileEditIcon,
      title: " اطلاعات فردی",
      slug: "personalInfo",
    },
    {
      id: 2,
      icon: icons.ProfileCheckmarkIcon,
      title: "اطلاعات حساب  ",
      slug: "accountInfo",
    },
    { id: 3, icon: icons.SettingIcon, title: "تنظیمات", slug: "setting" },
  ];

  const navigateHandler = () => {
    navigate("/main/listView");
  };
  return (
    <aside className=" w-[340px]  border-[#aaaaaa] border-l h-full min-h-screen py-10 pr-[50px] pl-[60px] ">
      <Link to="/" className="flex mb-[79px]">
        <Logo />
      </Link>
      <button
        className="flex items-center gap-2 text-white rounded-lg py-1 px-2 bg-[#208D8E] mb-11"
        onClick={navigateHandler}
      >
        {icons.ArrowIcon}
        بازگشت
      </button>
      <nav>
        <ul className="flex flex-col  gap-6 whitespace-nowrap ">
          {navAside.map((link) => (
            <li key={link.id}>
              <NavLink
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#C5FFFF" : "",
                  fontWeight: isActive ? 600 : 500,
                })}
                to={`/profile/${link.slug}`}
                className="flex items-center gap-[11px] rounded-[4px] py-1 px-2"
              >
                <i>{link.icon}</i>
                <p className="text-[#1e1e1e] text-5  leading-[1.8]">
                  {link.title}
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
