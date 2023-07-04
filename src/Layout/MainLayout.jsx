import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import Logo from "../components/AuthLayout/Logo";
import Button from "../components/Button";
import { Disclosure, Menu } from "@headlessui/react";
import { NewTask } from "../components/NewTask/NewTask";
import { ColumMoreCard } from "../components/ColumnMore/ColumnMoreCard";
import CreateWorkspace from "../components/CreateWorkspace";
import { copyLink } from "../Utils/copyLink";
import SearchIcon from "../assets/Icons/SearchIcon";
import SqurePlusIcon from "../assets/Icons/SqurePlusIcon";
import LogoutIcon from "../assets/Icons/LogoutIcon";
import PaletteIcon from "../assets/Icons/PaletteIcon";
import LinkIcon from "../assets/Icons/LinkIcon";
import TrashIcon from "../assets/Icons/TrashIcon";
import DotsMenuIcon from "../assets/Icons/DotsMenuIcon";
import EditSqureIcon from "../assets/Icons/EditSqureIcon";
import PlusIcon from "../assets/Icons/PlusIcon";
import ShareCard from "../components/ShareCard/ShareCard";
import AXIOS from "../Utils/axios";
import { useSelector } from "react-redux";
import store from "../redux/store";
import { setWorkspaces } from "../redux/slices/workspaceSlice";

function MainLayout() {
  const auth = useSelector((state) => state.auth);
  const { user } = auth;
  const avatarName = user?.firstname
    ? user.firstname.charAt(0) + user.lastname.charAt(0)
    : user?.username?.charAt(0);
  const fullName = user?.firstname
    ? `${user.firstname} ${user.lastname}`
    : user?.username;
  const workspaces = useSelector((state) => state.workspace);
  const { projectId } = useParams();

  const dataColumnMoreItemsWorkSpace = [
    {
      id: 1,
      title: "ساخت پروژه جدید",
      icon: <PlusIcon width="24" height="24" />,
      onClick: () => {
        // Logic for adding a project
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
        setOpenNewTaskModal(true);
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
      onClick: () => {
        // Logic for deleting the project
      },
    },
  ];
  const [openShareProjectModal, setOpenShareProjectModal] = useState(false);
  const [openShareWorkSpaceModal, setOpenShareWorkSpaceModal] = useState(false);
  const [openNewTaskModal, setOpenNewTaskModal] = useState(false);
  const [openNewWorkspaceModal, setOpenNewWorkspaceModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const finalWorkspaces = searchValue
    ? workspaces.filter((workspace) => workspace.name.includes(searchValue))
    : [...workspaces];

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

  function navigateToProject(id) {
    naviaget(`/main/${id}/listView`);
  }

  function handleBackground(id) {
    if (projectId === id) {
      return "bg-secondary20";
    }
  }

  async function fetchData() {
    try {
      const response = (await AXIOS.get("/workspace/get-all")).data.data;
      store.dispatch(setWorkspaces(response));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-row bg-[#FAFBFC]">
      <aside className="!w-72 h-screen p-5 flex flex-col border-l-[1px]">
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
            onChange={(e) => setSearchValue(e.target.value)}
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
          {finalWorkspaces.map((WorkSpace) => (
            <Disclosure as="div" key={WorkSpace._id}>
              {() => (
                <>
                  <div className="flex group">
                    <Disclosure.Button className="flex flex-row items-center justify-between flex-1 group">
                      <div className="flex flex-row items-center">
                        <div className={`w-5 h-5 rounded-[4px] bg-[#DE88FD]`} />
                        <button className="mr-2 text-base font-medium">
                          {WorkSpace.name}
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
                          handleOpenModal={handleOpenWorkSpace}
                          data={dataColumnMoreItemsWorkSpace}
                        />
                      </Menu.Items>
                    </Menu>
                  </div>

                  <Disclosure.Panel className="pr-4 pt-4 pb-2 text-sm text-gray-500">
                    <ul className="flex flex-col gap-3 font-medium text-base text-[#1E1E1E]">
                      {WorkSpace.projects.map((Project) => (
                        <div
                          key={Project._id}
                          className={`flex flex-row justify-between w-full group rounded-md p-[2px] ${handleBackground(
                            Project._id
                          )}`}
                        >
                          <li
                            className="flex-1"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigateToProject(Project._id)}
                          >
                            {Project.name}
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
                                handleOpenModal={handleOpenShareProject}
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
            {avatarName}
          </div>
          <span className="mr-2 font-medium text-base">{fullName}</span>
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
