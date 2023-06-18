import Logo from "../components/AuthLayout/Logo";
import Button from "../components/Button";
import { Outlet, useNavigate } from "react-router";
import { useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { NewTask } from "../components/NewTask/NewTask";
import { ColumMoreCard } from "../components/ColumnMore/ColumnMoreCard";
import SearchIcon from "../assets/Icons/SearchIcon";
import SqurePlusIcon from "../assets/Icons/SqurePlusIcon";
import LogoutIcon from "../assets/Icons/LogoutIcon";
import PaletteIcon from "../assets/Icons/PaletteIcon";
import LinkIcon from "../assets/Icons/LinkIcon";
import TrashIcon from "../assets/Icons/TrashIcon";
import EditSqureIcon from "../assets/Icons/EditSqureIcon";
import PlusIcon from "../assets/Icons/PlusIcon";
import DotsMenuIcon from "../assets/Icons/DotsMenuIcon";

const data = [
  {
    WorkSpaceId: "1",
    WorkSpaceTitle: "درس مدیریت پروژه",
    WorkSpaceColor: "bg-[#71FDA9]",
    WorkSpaceProjects: [
      {
        ProjectId: "1",
        ProjectTilte: "ارائه",
      },
    ],
  },
  {
    WorkSpaceId: "2",
    WorkSpaceTitle: "کارهای شخصی",
    WorkSpaceColor: "bg-[#DE88FD]",
    WorkSpaceProjects: [
      {
        ProjectId: "1",
        ProjectTilte: "پروژه اول",
      },
      {
        ProjectId: "2",
        ProjectTilte: "پروژه دوم",
      },
    ],
  },
];

const dataColumnMoreItemsWorkSpace = [
  {
    id: 1,
    title: "ساخت پروژه جدید",
    icon: <PlusIcon width="24" height="24" />,
  },
  { id: 2, title: "   ویراش نام ورک اسپیس", icon: <EditSqureIcon /> },
  { id: 3, title: "ویراش رنگ", icon: <PaletteIcon width="20" height="21" /> },
  { id: 4, title: "کپی لینک", icon: <LinkIcon /> },
  { id: 5, title: "حذف", icon: <TrashIcon color="#9F0000" />, bg: "#9F0000" },
];

const dataColumnMoreItemsProject = [
  { id: 1, title: "ساخت تسک جدید", icon: <PlusIcon width="24" height="24" /> },
  { id: 2, title: "ویراش نام پروژه  ", icon: <EditSqureIcon /> },
  { id: 3, title: "کپی لینک", icon: <LinkIcon /> },
  { id: 4, title: "حذف", icon: <TrashIcon color="#9F0000" />, bg: "#9F0000" },
];

function MainLayout() {
  const [openNewTaskModal, setOpenNewTaskModal] = useState(false);

  const naviaget = useNavigate();

  function handleOpenNewTask() {
    setOpenNewTaskModal(true);
  }

  function handleNavigateToProfile() {
    naviaget("/profile/personalInfo");
  }

  function handleNavigateToLogin() {
    naviaget("/auth/login");
  }

  return (
    <div className="flex flex-row bg-[#FAFBFC]">
      <aside className="!w-72 h-screen p-5 flex flex-col border-l-[1px]">
        <Logo />

        <div className="mt-5 font-semibold">
          <h4>ورک اسپیس‌ها</h4>
        </div>

        <div className="relative mt-3">
          <div className="absolute top-2 right-2 left-2">{<SearchIcon />}</div>
          <input
            type="text"
            placeholder="جستجو کنید"
            className="w-full h-10 text-sm placeholder-[#AAAAAA] bg-[#F6F7F9] rounded pl-4 pr-9"
          />
        </div>

        <button className="flex flex-row items-center justify-center bg-[#D3D3D3] rounded-md mt-3 h-8 text-xs font-semibold">
          {<SqurePlusIcon />}
          <span className="pr-1">ساختن اسپیس جدید</span>
        </button>

        <div className="h-96 flex flex-col gap-5 mt-5">
          {data.map((WorkSpace) => (
            <Disclosure as="div" key={WorkSpace.WorkSpaceId}>
              {() => (
                <>
                  <div className="flex group">
                    <Disclosure.Button className="flex flex-row items-cente justify-between flex-1 group">
                      <div className="flex flex-row items-center">
                        <div
                          className={`w-5 h-5 rounded-[4px] ${WorkSpace.WorkSpaceColor}`}
                        />
                        <button className="mr-2 text-base font-medium">
                          {WorkSpace.WorkSpaceTitle}
                        </button>
                      </div>
                    </Disclosure.Button>
                    <Menu>
                      <Menu.Button className="h-[20px]">
                        <button className="hidden group-hover:inline">
                          <DotsMenuIcon />
                        </button>
                      </Menu.Button>
                      <Menu.Items className="absolute mt-9 mr-[50px]">
                        <ColumMoreCard data={dataColumnMoreItemsWorkSpace} />
                      </Menu.Items>
                    </Menu>
                  </div>

                  <Disclosure.Panel className="pr-4 pt-4 pb-2 text-sm text-gray-500">
                    <ul className="flex flex-col gap-3 font-medium text-base text-[#1E1E1E]">
                      {WorkSpace.WorkSpaceProjects.map((Project) => (
                        <div
                          key={Project.ProjectId}
                          className="flex flex-row justify-between w-full group"
                        >
                          <li className="flex-1" style={{ cursor: "pointer" }}>
                            {Project.ProjectTilte}
                          </li>
                          <Menu>
                            <Menu.Button className="h-[20px]">
                              <button className="hidden group-hover:inline">
                                <DotsMenuIcon />
                              </button>
                            </Menu.Button>
                            <Menu.Items className="absolute mt-9 mr-[33px]">
                              <ColumMoreCard
                                data={dataColumnMoreItemsProject}
                              />
                            </Menu.Items>
                          </Menu>
                        </div>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>

        <button
          className="flex flex-row items-center mt-3"
          onClick={() => handleNavigateToProfile()}
        >
          <div className="flex flex-row items-center justify-center w-8 h-8 bg-[#EAF562] rounded-full">
            NM
          </div>
          <span className="mr-2 font-medium text-base">نیلوفر موجودی</span>
        </button>

        <button
          className="flex flex-row items-center mt-3"
          onClick={handleNavigateToLogin}
        >
          <div className="">{<LogoutIcon color="#818181" />}</div>
          <span className="mr-2 font-normal text-base text-[#818181]">
            خروج
          </span>
        </button>
      </aside>
      <div className="flex flex-col w-[calc(100vw_-_19rem)] p-4 h-screen overflow-auto">
        <main className="h-full">
          <Outlet />
          <Button
            startIcon={<SqurePlusIcon color="white" />}
            title="تسک جدید"
            classNames="fixed left-8 bottom-8"
            handleClick={() => handleOpenNewTask()}
          />
          {openNewTaskModal && (
            <NewTask
              openNewTaskModal={openNewTaskModal}
              setOpenNewTaskModal={setOpenNewTaskModal}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
