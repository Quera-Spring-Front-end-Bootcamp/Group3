import { useState } from "react";
import ColumnMoreItem from "../ColumnMore/ColumnMoreItem";
import Card from "../Card/Card";
import DotsMenuIcon from "../../assets/Icons/DotsMenuIcon";
import PlusIcon from "../../assets/Icons/PlusIcon";
import EditSqureIcon from "../../assets/Icons/EditSqureIcon";
import ArchiveIcon from "../../assets/Icons/ArchiveIcon";
import TrashIcon from "../../assets/Icons/TrashIcon";
import ProjectCard from "../ProjectCard/ProjectCard";
import AddRectangleIcon from "../../assets/Icons/AddRectangleIcon";

const BoardTitle = ({ boards }) => {
  const card = [
    {
      id: "1",
      title: "Open",
      color: "#F98F2E",
      badgeValue: "1",
      tasks: [
        {
          projectTitle: "پروژه اول",
          taskTitle: "این یک تیتر برای این تسک است.",
          date: "۵ مهر - فردا",
          time: "۲ / ۱۲",
          id: 1,
          tags: [
            {
              id: 1,
              tagTitle: "درس",
              tagColor: "#BFFDE3",
            },
            { id: 2, tagTitle: "پروژه", tagColor: "#EEDFF7" },
          ],
          userName: "NA",
        },
        {
          projectTitle: "پروژه اول",
          taskTitle: "این یک تیتر برای این تسک است.",
          date: "۵ مهر - فردا",
          time: "۲ / ۱۲",
          id: 2,
          tags: [
            {
              id: 1,
              tagTitle: "درس",
              tagColor: "#BFFDE3",
            },
            { id: 2, tagTitle: "پروژه", tagColor: "#EEDFF7" },
          ],
          userName: "NA",
        },
      ],
    },
    { id: "2", title: "In progress", color: "#2E7FF9", badgeValue: "16" },
    { id: "3", title: "Pending", color: "#DEC908", badgeValue: "13 " },
    { id: "4", title: "To Do", color: "#F98F2E", badgeValue: "10" },
  ];
  const [hoverTooltip, setHoverTooltip] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectId, setSelectId] = useState(null);

  const handleMouseEnter = () => {
    setHoverTooltip(true);
  };
  const handleMouseLeaveDots = () => {
    setShowMore(false);
  };
  const handleMouseLeave = () => {
    setHoverTooltip(false);
  };
  const clickAddHandler = (id) => {
    setSelectId(id);
    setShowMore(!showMore);
  };
  const addNewTaskClickHandler = (id) => {
    console.log(`id ${id}`);
  };
  const addNewBoardTitleClickHandler = () => {
    console.log("addNewBoardTitleClickHandler");
  };
  const removeCulomnHandler = (id) => {
    console.log(`Remove ${id}`);
  };
  const EditBoardTitleHandler = (id) => {
    console.log(`Edit ${id}`);
  };

  return (
    <div className="flex gap-5 m-5 whitespace-nowrap">
      {card.map((item) => {
        <div key={item.id}>
          <div
            key={item.id}
            className={`group transition-all  min-w-[250px]  px-4 py-2 flex  items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.18)] rounded border-t group-hover:opacity-100`}
            style={{ borderTopColor: item.color }}
          >
            <div className="flex gap-1 items-center">
              <span className=" text-[#1E1E1E] text-base font-medium">
                {item.title}
              </span>
              <div className="text-[10px] leading-none	 p-1   grid items-center bg-[#F4F4F4] text-[#1E1E1E] font-medium rounded-full">
                <span>{item.badgeValue}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100 ">
              <div
                className="cursor-pointer relative"
                onClick={() => clickAddHandler(item.id)}
                onMouseLeave={handleMouseLeaveDots}
              >
                <DotsMenuIcon />
                {item.id === selectId && showMore && (
                  <Card className="absolute  rounded-[8px] shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] top-full  gap-[16px] p-[12px] ">
                    <ColumnMoreItem
                      title="ویرایش نام ستون"
                      icon={<EditSqureIcon />}
                      onClick={() => EditBoardTitleHandler(item.id)}
                    />
                    <ColumnMoreItem title="افزودن تسک" icon={<PlusIcon />} />
                    <ColumnMoreItem
                      title="آرشیو تمام تسک‌ها"
                      icon={<ArchiveIcon />}
                    />
                    <ColumnMoreItem
                      title="حذف ستون"
                      className="text-[#9F0000] gap-[10px]"
                      icon={<TrashIcon color="#9F0000" />}
                      onClick={() => removeCulomnHandler(item.id)}
                    />
                  </Card>
                )}
              </div>
              <div
                className="cursor-pointer group relative"
                onMouseEnter={handleMouseEnter}
                onClick={() => addNewTaskClickHandler(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                {hoverTooltip && (
                  <span className="absolute flex   left-1/2  -top-2 -translate-x-1/2 -translate-y-full  w-max px-2 py-1 bg-[#3A4046] rounded-lg text-center text-white text-xs after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-[#3A4046]">
                    افزودن تسک
                  </span>
                )}

                {<PlusIcon />}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] my-[12px]">
            {item.tasks &&
              item.tasks.map((task) => (
                <ProjectCard
                  key={task.id}
                  projectTitle={task.projectTitle}
                  taskTitle={task.taskTitle}
                  date={task.date}
                  time={task.time}
                  tags={task.tags}
                  userName={task.username}
                />
              ))}
            <div className="flex flex-row gap-[4px] justify-start items-center">
              <AddRectangleIcon />
              <div className="font-[500] text-[12px]/[18px] text-[#3D3D3D]">
                ساختن تسک جدید
              </div>
            </div>
          </div>
        </div>;
      })}
      <div className="pl-5">
        <div
          className="min-w-[250px]  cursor-pointer  px-4 py-2 flex  items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.18)] rounded border-t "
          onClick={addNewBoardTitleClickHandler}
        >
          <div className="flex gap-1 items-center">
            <span>{<PlusIcon />}</span>
            <span className=" text-[#1E1E1E] text-base font-medium">
              ساختن برد جدید
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardTitle;
