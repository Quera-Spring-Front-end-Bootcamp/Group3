import Logo from "../components/AuthLayout/Logo";
import Button from "../components/Button";
import VerticalDivider from "../components/VerticalDivider";
import MainLayoutHeaderItem from "../components/MainLayoutHeaderItem";
import { Outlet, useNavigate } from "react-router";
import { useState } from "react";

import ShareCard from "../components/shareCard/ShareCard";
import { Disclosure, Menu } from "@headlessui/react";
import { NewTask } from "../components/NewTask/NewTask";
import { ColumMoreCard } from "../components/ColumnMore/ColumnMoreCard";
import SearchIcon from "../assets/Icons/SearchIcon";
import SqurePlusIcon from "../assets/Icons/SqurePlusIcon";
import LogoutIcon from "../assets/Icons/LogoutIcon";
import ListCheckIcon from "../assets/Icons/ListCheckIcon";
import ArtBoardIcon from "../assets/Icons/ArtBoardIcon";
import CalendarIcon from "../assets/Icons/CalendarIcon";
import ShareIcon from "../assets/Icons/ShareIcon";
import PaletteIcon from "../assets/Icons/PaletteIcon";
import LinkIcon from "../assets/Icons/LinkIcon";
import TrashIcon from "../assets/Icons/TrashIcon";
import EditSqureIcon from "../assets/Icons/EditSqureIcon";
import PlusIcon from "../assets/Icons/PlusIcon";
import DotsMenuIcon from "../assets/Icons/DotsMenuIcon";
import { copyLink } from "../Utils/copyLink";
import CreateWorkspace from "../components/CreateWorkspace";

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

function MainLayout() {
  const dataColumnMoreItemsWorkSpace = [
    {
      id: 1,
      title: "ساخت پروژه جدید",
      icon: <PlusIcon width="24" height="24" />,
      onClick: () => {
        setOpenNewWorkspaceModal(true);
      },
    },
    {
      id: 2,
      title: "ویراش نام ورک اسپیس",
      icon: <EditSqureIcon />,
      onClick: () => {
        // Logic for editing the workspace name
      },
    },
    {
      id: 3,
      title: "ویراش رنگ",
      icon: <PaletteIcon width="20" height="21" />,
      onClick: () => {
        // Logic for editing the workspace color
      },
    },
    {
      id: 4,
      title: "کپی لینک",
      icon: <LinkIcon />,
      onClick: () => {
        copyLink(privateLink);
      },
    },
    {
      id: 5,
      title: "حذف",
      icon: <TrashIcon color="#9F0000" />,
      bg: "#9F0000",
      onClick: () => {
        // Logic for deleting the workspace
      },
    },
  ];

  const dataColumnMoreItemsProject = [
    {
      id: 1,
      title: "ساخت تسک جدید",
      icon: <PlusIcon width="24" height="24" />,
      onClick: () => {
        setOpenNewWorkspaceModal(true);
      },
    },
    {
      id: 2,
      title: "ویراش نام پروژه",
      icon: <EditSqureIcon />,
      onClick: () => {
        // Logic for editing the project name
      },
    },
    {
      id: 3,
      title: "کپی لینک",
      icon: <LinkIcon />,
      onClick: () => {
        copyLink(privateLink);
      },
    },
    {
      id: 4,
      title: "حذف",
      icon: <TrashIcon color="#9F0000" />,
      bg: "#9F0000",
      onClick: ( ) => {
       // Logic for deleting the project
      },
    },
  ];
  const [openShareProjectModal, setOpenShareProjectModal] = useState(false);
  const [openShareWorkSpaceModal, setOpenShareWorkSpaceModal] = useState(false);
  const [openNewTaskModal, setOpenNewTaskModal] = useState(false);
  const [openNewWorkspaceModal, setOpenNewWorkspaceModal] = useState(false);

  const naviaget = useNavigate();
  const privateLink = location.href;

  function handleOpenShareProject() {
    setOpenShareProjectModal(true);
  }
  function handleOpenWorkSpace() {
    setOpenShareWorkSpaceModal(true);
  }

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
      <aside className="!w-72 h-screen p-9 flex flex-col border-l-[1px]">
        <Logo />
        <div className="mt-5 font-semibold">
          <h4>ورک اسپیس‌ها</h4>
        </div>
        <div className="relative mt-3">
          <div className="absolute top-2 right-2">{<SearchIcon />}</div>
          <input
            type="text"
            placeholder="جستجو کنید"
            className="w-full h-10 text-sm placeholder-[#AAAAAA] bg-[#F6F7F9] rounded pl-4 pr-9"
          />
        </div>
        <button
          onClick={() => {
            setOpenNewWorkspaceModal(true);
          }}
          className="flex flex-row items-center justify-center bg-[#D3D3D3] rounded-md mt-3 h-8 text-xs font-semibold"
        >
          {<SqurePlusIcon />}
          <span className="pr-1">ساختن اسپیس جدید</span>
        </button>
        <div className="h-96 flex flex-col gap-5 mt-5">
          {data.map((WorkSpace) => (
            <Disclosure as="div" key={WorkSpace.WorkSpaceId}>
              {() => (
                <>
                  <div className="flex items-center group">
                    <Disclosure.Button className="flex flex-row items-center justify-between flex-1 group">
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
                        <ColumMoreCard
                          handleOpenProject={handleOpenWorkSpace}
                          data={dataColumnMoreItemsWorkSpace}
                        />
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
                          <li className="flex-1">{Project.ProjectTilte}</li>
                          <Menu>
                            <Menu.Button className="h-[20px]">
                              <button className="hidden group-hover:inline">
                                <DotsMenuIcon />
                              </button>
                            </Menu.Button>
                            <Menu.Items className="absolute mt-9 mr-[33px]">
                              <ColumMoreCard
                                data={dataColumnMoreItemsProject}
                                handleOpenProject={handleOpenWorkSpace}
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
      <div className="flex flex-col w-[calc(100vw_-_18rem)] p-4 h-screen">
        <header className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center h-20 gap-3">
            <div className="font-semibold text-xl">پروژه اول</div>
            <VerticalDivider />
            <MainLayoutHeaderItem
              icon={<ListCheckIcon />}
              title="نمایش لیستی"
              link="listView"
            />
            <VerticalDivider />
            <MainLayoutHeaderItem
              icon={<ArtBoardIcon />}
              title="نمایش ستونی"
              link="columnView"
            />
            <VerticalDivider />
            <MainLayoutHeaderItem
              icon={<CalendarIcon />}
              title="تقویم"
              link="calendarView"
            />
            <VerticalDivider />
          </div>
          <button
            className="flex flex-row items-center"
            onClick={() => handleOpenShareProject()}
          >
            <div>{<ShareIcon />}</div>
            <span className="mr-2 font-normal text-base">اشتراک گذاری</span>
          </button>
          {openShareWorkSpaceModal && (
            <ShareCard
              openShareModal={openShareWorkSpaceModal}
              setOpenShareModal={setOpenShareWorkSpaceModal}
              title="اشتراک گذاری ورک اسپس"
            />
          )}
          {openShareProjectModal && (
            <ShareCard
              openShareModal={openShareProjectModal}
              setOpenShareModal={setOpenShareProjectModal}
              title="اشتراک گذاری پروژه"
            />
          )}
        </header>
        <hr />
        <main className="h-full overflow-auto">
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
          {openNewWorkspaceModal && (
            <CreateWorkspace
              openNewWorkspaceModal={openNewWorkspaceModal}
              setOpenNewWorkspaceModal={setOpenNewWorkspaceModal}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
