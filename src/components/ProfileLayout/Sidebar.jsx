import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../AuthLayout/Logo";
import EditUserIcon from "../../assets/Icons/EditUserIcon";
import CheckUserIcon from "../../assets/Icons/CheckUserIcon";
import SettingsIcon from "../../assets/Icons/SettingsIcon";
import BackRightIcon from "../../assets/Icons/BackRightIcon";

export const Sidebar = () => {
  const navigate = useNavigate();
  const navAside = [
    {
      id: 1,
      icon: <EditUserIcon />,
      title: " اطلاعات فردی",
      slug: "personalInfo",
    },
    {
      id: 2,
      icon: <CheckUserIcon />,
      title: "اطلاعات حساب  ",
      slug: "accountInfo",
    },
    { id: 3, icon: <SettingsIcon />, title: "تنظیمات", slug: "setting" },
  ];

  const navigateHandler = () => {
    navigate("/main");
  };
  return (
    <aside className=" w-[340px]  border-[#aaaaaa] border-l h-full min-h-screen py-10 pr-[50px] pl-[60px] ">
      <Link to="/" className="flex mb-[79px]">
        <Logo />
      </Link>
      <button
        className="flex items-center gap-2  rounded-lg py-1 px-2 text-textPrimary bg-primary mb-11"
        onClick={navigateHandler}
      >
        {<BackRightIcon color="white" />}
        بازگشت
      </button>
      <nav>
        <ul className="flex flex-col  gap-6 whitespace-nowrap ">
          {navAside.map((link) => (
            <li key={link.id}>
              <NavLink
                className={({ isActive }) =>
                  (isActive
                    ? ` font-semibold bg-secondary20  `
                    : " font-medium ") +
                  " flex items-center gap-[11px] rounded-[4px] py-1 px-2"
                }
                to={`/profile/${link.slug}`}
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
