import { useState } from "react";
import ColumnMoreItem from "../ColumnMore/ColumnMoreItem";
import Card from "../Card/Card";
import DotsMenuIcon from "../../assets/Icons/DotsMenuIcon";
import PlusIcon from "../../assets/Icons/PlusIcon";
import EditSqureIcon from "../../assets/Icons/EditSqureIcon";
import ArchiveIcon from "../../assets/Icons/ArchiveIcon";
import TrashIcon from "../../assets/Icons/TrashIcon";
import ProjectCard from "../ProjectCard/ProjectCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AXIOS from "../../Utils/axios";
import { useParams } from "react-router-dom";
import { NewTask } from "../NewTask/NewTask";

async function changePosition(taskId, index) {
  try {
    await AXIOS.put(`/task/${taskId}/position/${index + 1}`);
  } catch (e) {
    console.log(e);
  }
}

async function changeBoardOrder(boardId, index) {
  try {
    await AXIOS.put(`/board/${boardId}/position/${index + 1}`);
  } catch (e) {
    console.log(e);
  }
}

async function changeBoard(taskId, boardId, index) {
  try {
    await AXIOS.put(`/task/${taskId}/board/${boardId}`);
    await AXIOS.put(`/task/${taskId}/position/${index + 1}`);
  } catch (e) {
    console.log(e);
  }
}

function getRandomHexCode() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const BoardTitle = (boards) => {
  const [newBoardName, setNewBoardName] = useState("");
  const { projectId } = useParams();

  async function createNewBoard(boardName) {
    try {
      await AXIOS.post(`/board`, {
        name: boardName,
        projectId: projectId,
        color: getRandomHexCode(),
      });
    } catch (e) {
      console.log(e);
    }
  }

  const boardsData = boards.boards;
  boardsData.sort((a, b) => a.position - b.position);

  const [data, setData] = useState(boardsData);
  const [openNewTaskModal, setOpenNewTaskModal] = useState(false);

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
  const addNewTaskClickHandler = () => {
    setOpenNewTaskModal(true);
  };
  const removeCulomnHandler = (id) => {
    console.log(`Remove ${id}`);
  };
  const EditBoardTitleHandler = (id) => {
    console.log(`Edit ${id}`);
  };

  const onDragEnd = (result) => {
    const { draggableId, destination, source, type } = result;

    if (type === "tasks") {
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
        (column) => column._id === source.droppableId
      );
      const destinationColumn = data.find(
        (column) => column._id === destination.droppableId
      );

      if (!destinationColumn.tasks) {
        destinationColumn.tasks = [];
      }

      const draggedTask = sourceColumn.tasks.splice(source.index, 1)[0];
      destinationColumn.tasks.splice(destination.index, 0, draggedTask);

      if (sourceColumn === destinationColumn) {
        changePosition(draggableId, destination.index);
        console.log("same column");
      }

      if (sourceColumn !== destinationColumn) {
        changeBoard(draggableId, destination.droppableId, destination.index);
        console.log("diffrent column");
      }

      setData([...data]);
    }

    if (type === "column") {
      console.log("column changing");
      const updatedData = Array.from(data);

      const draggedColumn = updatedData[source.index];
      updatedData.splice(source.index, 1);
      updatedData.splice(destination.index, 0, draggedColumn);
      changeBoardOrder(draggableId, destination.index);
      setData(updatedData);
    }
  };

  return (
    <div className="flex gap-5 m-5 whitespace-nowrap mt-36 overflow-auto h-[calc(100vh_-_180px)]">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="allCols" direction="horizontal" type="column">
          {(provided) => {
            return (
              <container
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex flex-row gap-[20px]"
              >
                {data.map((item, index) => (
                  <Draggable
                    draggableId={item._id}
                    key={item._id}
                    index={index}
                  >
                    {(provided) => (
                      <container
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                      >
                        <Droppable
                          droppableId={item._id}
                          key={item._id}
                          type="tasks"
                        >
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
                                      {item.name}
                                    </span>
                                    <div className="text-[10px] leading-none	 p-1   grid items-center bg-[#F4F4F4] text-[#1E1E1E] font-medium rounded-full">
                                      <span>{item.tasks.length}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100 ">
                                    <div
                                      className="cursor-pointer relative"
                                      onClick={() => clickAddHandler(item._id)}
                                      onMouseLeave={handleMouseLeaveDots}
                                    >
                                      <DotsMenuIcon />
                                      {item._id === selectId && showMore && (
                                        <Card className="absolute  rounded-[8px] shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] top-full  gap-[16px] p-[12px] ">
                                          <ColumnMoreItem
                                            title="ویرایش نام ستون"
                                            icon={<EditSqureIcon />}
                                            onClick={() =>
                                              EditBoardTitleHandler(item._id)
                                            }
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
                                            onClick={() =>
                                              removeCulomnHandler(item._id)
                                            }
                                          />
                                        </Card>
                                      )}
                                    </div>
                                    <div
                                      className="cursor-pointer group relative"
                                      onMouseEnter={handleMouseEnter}
                                      onClick={() =>
                                        addNewTaskClickHandler(item._id)
                                      }
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
                                          key={task._id}
                                          draggableId={task._id}
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
                                                  projectTitle={task.name}
                                                  taskTitle={task.name}
                                                  date={task.deadline}
                                                  time="12"
                                                  tags={task.tags}
                                                  userName={task.taskAssigns}
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
                      </container>
                    )}
                  </Draggable>
                ))}
              </container>
            );
          }}
        </Droppable>
        <div className="pl-5">
          <div className="min-w-[250px]  cursor-pointer  px-4 py-2 flex  items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.18)] rounded border-t ">
            <div className="flex gap-1 items-center">
              <span>{<PlusIcon />}</span>
              <input
                type="text"
                className=" text-[#1E1E1E] text-base font-medium bg-transparent"
                placeholder={"ساختن برد جدید"}
                value={newBoardName}
                onChange={(e) => setNewBoardName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    createNewBoard(newBoardName);
                    setNewBoardName("");
                  }
                }}
                onBlur={() => {
                  setNewBoardName("");
                }}
              ></input>
            </div>
          </div>
        </div>
      </DragDropContext>
      {openNewTaskModal && (
        <NewTask
          openNewTaskModal={openNewTaskModal}
          setOpenNewTaskModal={setOpenNewTaskModal}
        />
      )}
    </div>
  );
};

export default BoardTitle;
