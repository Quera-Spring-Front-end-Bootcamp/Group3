import { useState } from "react";
import { Transition } from "@headlessui/react";
import ArrowDownCircleIcon from "../../assets/Icons/ArrowDownCircleIcon";
import JustifyRightIcon from "../../assets/Icons/JustifyRightIcon";
import FlagIcon from "../../assets/Icons/FlagIcon";
import InfoTask from "../InfoTask/InfoTask";

const TasksBasedOnStatus = ({ boardName, boardColor, boardTasks, searchValue }) => {
  const [infoTaskOpen, setInfoTaskOpen] = useState(false);
  const [taskSelected, setTaskSelected] = useState('')
  const [isOpen, setIsOpen] = useState(true);
  const tasks = searchValue ? boardTasks.filter(task => task.name.includes(searchValue)):[...boardTasks]

  const handleCollapse = () => {
    setIsOpen((perv) => !perv);
  };

  const handleShowInfoTask = (id) => {
    setInfoTaskOpen(true)
    setTaskSelected(boardTasks.filter(task => task._id === id)[0]);
  }; 
  

  const members = [
    { url: "https://i.pravatar.cc/297" },
    { url: "https://i.pravatar.cc/298" },
    { url: "https://i.pravatar.cc/299" },
  ]
  const formatter = new Intl.DateTimeFormat("fa-IR", { day: 'numeric', month: 'long' });

  const rows = tasks.map((task) => (
    <tr className="bg-white  " key={task._id}>
      <td className=" p-3 mx-5 my-4 text-xs text-start w-1/2">
        <div className="flex gap-1">
          <div
            style={{ backgroundColor: boardColor }}
            className="w-4 h-4 rounded mr-3.5 ml-1"
          ></div>
          {task.name}
        </div>
      </td>
      <td className="p-3 mx-5 my-4">
        <div className="flex flex-row-reverse -space-x-3 justify-center">
          {task.taskAssigns.length > 3 && (
            <a
              onClick={() => handleShowInfoTask(task._id)}
              className="flex items-center justify-center w-[35px] h-[34px] text-xs font-medium cursor-pointer text-black bg-gray-100  rounded-full hover:bg-gray-200"
            >
              {task.taskAssigns.length}+
            </a>
          )}
          {(task.taskAssigns.length < 3 ) ? members.slice(0, task.taskAssigns.length).map((member) => (
            <img
              className="w-[35px] h-[34px] rounded-full"
              key={member.url}
              src={member.url}
            />
          )):members.map((member) => (
            <img
              className="w-[35px] h-[34px] rounded-full"
              key={member.url}
              src={member.url}
            />
          ))}
        </div>
      </td>
      <td className="p-3 mx-5 my-4 text-xs text-center ">
        {task.deadline ? formatter.format(new Date(task.deadline)):'-'}
      </td>
      <td className="p-3 mx-5 my-4 text-xs text-center">
        <span className=" inline-flex justify-center align-middle w-3.5 ">
          {<FlagIcon color="#FB0606" />}
        </span>
      </td>
      <td className="p-3 mx-5 my-4 text-xs text-center ">
        <a
          onClick={() => handleShowInfoTask(task._id)}
          className=" inline-flex justify-center align-middle w-4 cursor-pointer"
        >
          {<JustifyRightIcon />}
        </a>
      </td>
    </tr>
  ));

  return (
    <>
      {infoTaskOpen && <InfoTask infoTaskOpen= {infoTaskOpen} setInfoTaskOpen = {setInfoTaskOpen} taskSelected = {taskSelected} /> } 
      <table className="table-fixed  w-[1034px] border-separate border-spacing-y-4">
        <thead>
          <tr className="">
            <th className="w-1/2 text-right">
              <div className="flex align-baseline items-center gap-1">
                {tasks.length ? (
                  <button
                    onClick={handleCollapse}
                    className={
                      isOpen
                        ? "transition transform-none   duration-500"
                        : "transition transform-none   duration-500  focus:-rotate-180"
                    }
                  >
                    {<ArrowDownCircleIcon width="20" height="21" />}
                  </button>
                ) : (
                  <span className="w-5"></span>
                )}
                <span
                  style={{
                    backgroundColor: boardColor, 
                    color: '#ffffff',
                  }}
                  className="font-medium px-2 py-1 rounded select-none"
                >
                  {boardName}
                </span>
                <span className="font-normal text-xs select-none">
                  {tasks.length}
                </span>
                <span className="font-normal text-xs select-none">تسک</span>
              </div>
            </th>
            {isOpen && <th className="font-medium ">اعضا</th>}
            {isOpen && <th className="font-medium ">ددلاین</th>}
            {isOpen && <th className="font-medium ">اولویت</th>}
            {isOpen && <th className="font-medium ">توضیحات</th>}
          </tr>
        </thead>
        <Transition
          show={isOpen}
          as="tbody"
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {rows}
        </Transition>
      </table>
    </>
  );
};

export default TasksBasedOnStatus;
