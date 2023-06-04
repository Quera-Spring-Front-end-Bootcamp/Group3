import Logo from "../components/AuthLayout/Logo";
import Icons from "../assets/Icons";
import Button from "../components/Button";
import VerticalDivider from "../components/VerticalDivider";
import MainLayoutHeaderItem from "../components/MainLayoutHeaderItem";
import { Outlet } from "react-router";
import { useState } from "react";
import ShareProjectCard from "../components/ShareProject/ShareProjectCard";
import { Disclosure } from "@headlessui/react";

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
  const [openModal, setOpenModal] = useState(false);
  function handleOpenShareProject() {
    setOpenModal(true);
  }
  return (
    <div className="flex flex-row bg-[#FAFBFC]">
      <aside className="w-80 h-screen p-9 flex flex-col border-l-[1px]">
        <Logo />

        <div className="mt-5 font-semibold">
          <h4>ورک اسپیس‌ها</h4>
        </div>

        <div className="relative mt-3">
          <div className="absolute top-2 right-2">{Icons.SearchIcon}</div>
          <input
            type="text"
            placeholder="جستجو کنید"
            className="w-full h-10 text-sm placeholder-[#AAAAAA] bg-[#F6F7F9] rounded pl-4 pr-9"
          />
        </div>

        <button className="flex flex-row items-center justify-center bg-[#D3D3D3] rounded-md mt-3 h-8 text-xs font-semibold">
          {Icons.AddSqureIcon}
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
                    <button className="hidden group-hover:inline">...</button>
                  </div>

                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <ul className="flex flex-col gap-3 font-medium text-base text-[#1E1E1E]">
                      {WorkSpace.WorkSpaceProjects.map((Project) => (
                        <div
                          key={Project.ProjectId}
                          className="flex flex-row justify-between group"
                        >
                          <li>{Project.ProjectTilte}</li>
                          <button className="hidden group-hover:inline">
                            ...
                          </button>
                        </div>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>

        <div className="flex flex-row items-center mt-3">
          <div className="flex flex-row items-center justify-center w-8 h-8 bg-[#EAF562] rounded-full">
            NM
          </div>
          <span className="mr-2 font-medium text-base">نیلوفر موجودی</span>
        </div>

        <div className="flex flex-row items-center mt-3">
          <div className="">{Icons.LogoutIcon}</div>
          <span className="mr-2 font-normal text-base text-[#818181]">
            خروج
          </span>
        </div>
      </aside>
      <div
        className="flex flex-col w-[calc(100vw_-_256px)] p-4
      "
      >
        <header className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center h-20 gap-3">
            <div className="font-semibold text-xl">پروژه اول</div>
            <VerticalDivider />
            <MainLayoutHeaderItem
              icon={Icons.ListViewIcon}
              title="نمایش لیستی"
              link="listView"
            />
            <VerticalDivider />
            <MainLayoutHeaderItem
              icon={Icons.ColumnViewIcon}
              title="نمایش ستونی"
              link="columnView"
            />
            <VerticalDivider />
            <MainLayoutHeaderItem
              icon={Icons.CalendarMainIcon}
              title="تقویم"
              link="calendarView"
            />
            <VerticalDivider />
          </div>
          <button
            className="flex flex-row items-center"
            onClick={() => handleOpenShareProject()}
          >
            <div>{Icons.ShareIcon}</div>
            <span className="mr-2 font-normal text-base">اشتراک گذاری</span>
          </button>
          {openModal && (
            <ShareProjectCard
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          )}
        </header>
        <hr />
        <main>
          <Outlet />
          <Button
            startIcon={Icons.WhiteSqurePlus}
            title="تسک جدید"
            classNames="fixed left-8 bottom-8"
          />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
