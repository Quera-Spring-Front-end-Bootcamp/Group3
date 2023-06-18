import { useId, useState } from "react";
import ColumnMoreItem from "../ColumnMore/ColumnMoreItem";
import Card from "../Card/Card";
import DotsMenuIcon from "../../assets/Icons/DotsMenuIcon";
import PlusIcon from "../../assets/Icons/PlusIcon";
import EditSqureIcon from "../../assets/Icons/EditSqureIcon";
import ArchiveIcon from "../../assets/Icons/ArchiveIcon";
import TrashIcon from "../../assets/Icons/TrashIcon";
import ProjectCard from "../ProjectCard/ProjectCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const BoardTitle = () => {
  const card = [
    {
      id: useId(),
      title: "Open",
      color: "#F98F2E",
      badgeValue: "1",
      tasks: [
        {
          projectTitle: "پروژه اول",
          taskTitle: "این یک تیتر برای این تسک است.",
          date: "۵ مهر - فردا",
          time: "۲ / ۱۲",
          id: useId(),
          tags: [
            {
              id: useId(),
              tagTitle: "درس",
              tagColor: "#BFFDE3",
            },
            { id: useId(), tagTitle: "پروژه", tagColor: "#EEDFF7" },
          ],
          userName: "NA",
        },
        {
          projectTitle: "پروژه اول",
          taskTitle: "این یک تیتر برای این تسک است.",
          date: "6 مهر - فردا",
          time: "۲ / ۱۲",
          id: useId(),
          tags: [
            {
              id: useId(),
              tagTitle: "درس",
              tagColor: "#BFFDE3",
            },
            { id: useId(), tagTitle: "پروژه", tagColor: "#EEDFF7" },
          ],
          userName: "NA",
        },
      ],
    },
    {
      id: useId(),
      title: "In progress",
      color: "#2E7FF9",
      badgeValue: "16",
      tasks: [
        {
          projectTitle: "پروژه اول",
          taskTitle: "این یک تیتر برای این تسک است.",
          date: "۵ ابان - فردا",
          time: "۲ / ۱۲",
          id: useId(),
          tags: [
            {
              id: useId(),
              tagTitle: "درس",
              tagColor: "#BFFDE3",
            },
            { id: useId(), tagTitle: "پروژه", tagColor: "#EEDFF7" },
          ],
          userName: "NA",
        },
        {
          projectTitle: "پروژه اول",
          taskTitle: "این یک تیتر برای این تسک است.",
          date: "16 آبان  - فردا",
          time: "۲ / ۱۲",
          id: useId(),
          tags: [
            {
              id: useId(),
              tagTitle: "درس",
              tagColor: "#BFFDE3",
            },
            { id: useId(), tagTitle: "پروژه", tagColor: "#EEDFF7" },
          ],
          userName: "NA",
        },
      ],
    },
    { id: useId(), title: "Pending", color: "#DEC908", badgeValue: "13 " },
    { id: useId(), title: "To Do", color: "#F98F2E", badgeValue: "10" },
  ];

  const [data, setData] = useState(card);

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

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return; // Card was dropped in the same position, no need to update data
    }

    const sourceColumn = data.find(
      (column) => column.id === source.droppableId
    );
    const destinationColumn = data.find(
      (column) => column.id === destination.droppableId
    );

    if (!destinationColumn.tasks) {
      destinationColumn.tasks = [];
    }

    const draggedTask = sourceColumn.tasks.splice(source.index, 1)[0];
    destinationColumn.tasks.splice(destination.index, 0, draggedTask);

    setData([...data]);
  };

  return (
    <div className="flex gap-5 m-5 whitespace-nowrap mt-36 overflow-auto h-[calc(100vh_-_180px)]">
      <DragDropContext onDragEnd={onDragEnd}>
        {data.map((item) => (
          <Droppable droppableId={item.id} key={item.id}>
            {(provided) => {
              return (
                <div
                  key={item.id}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
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
                            <ColumnMoreItem
                              title="افزودن تسک"
                              icon={<PlusIcon />}
                            />
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
                      item.tasks.map((task, index) => {
                        return (
                          <Draggable
                            key={task.id}
                            draggableId={task.id}
                            index={index}
                          >
                            {(provided) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <ProjectCard
                                    projectTitle={task.projectTitle}
                                    taskTitle={task.taskTitle}
                                    date={task.date}
                                    time={task.time}
                                    tags={task.tags}
                                    userName={task.username}
                                  />
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                  </div>
                </div>
              );
            }}
          </Droppable>
        ))}

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
      </DragDropContext>
    </div>
  );
};

export default BoardTitle;
