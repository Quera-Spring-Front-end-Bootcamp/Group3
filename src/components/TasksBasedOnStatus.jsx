import { useState } from "react";
import { Transition } from "@headlessui/react";
import icons from "../assets/Icons";

const TasksBasedOnStatus = ({ statusName, statusColor, tasks }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCollapse = () => {
    setIsOpen((perv) => !perv);
  };

  const handleNavigateTaskInfoPage = () => {};
  const avatarUrls = tasks.map((task) =>
    task.members.map((member) => member.avatarUrl)
  )[0];
  const limitAvatar = avatarUrls
    ? { urls: avatarUrls.slice(0, 3), count: avatarUrls.length }
    : [];

  const rows = tasks.map((task) => (
    <tr className="bg-white  " key={task.taskID}>
      <td className=" p-3 mx-5 my-4 text-xs text-start w-1/2">
        <div className="flex gap-1">
          <div
            style={{ backgroundColor: statusColor.bg }}
            className="w-4 h-4 rounded mr-3.5 ml-1"
          ></div>
          {task.taskTitle}
        </div>
      </td>
      <td className="p-3 mx-5 my-4">
        <div className="flex flex-row-reverse -space-x-3 justify-center">
          {limitAvatar.count > 3 && (
            <a
              onClick={handleNavigateTaskInfoPage}
              className="flex items-center justify-center w-[35px] h-[34px] text-xs font-medium cursor-pointer text-black bg-gray-100  rounded-full hover:bg-gray-200"
            >
              {limitAvatar.count}+
            </a>
          )}
          {limitAvatar.urls.map((url) => (
            <img
              className="w-[35px] h-[34px] rounded-full"
              key={url}
              src={url}
            />
          ))}
        </div>
      </td>
      <td className="p-3 mx-5 my-4 text-xs text-center ">{task.deadlines}</td>
      <td className="p-3 mx-5 my-4 text-xs text-center">
        <span className=" inline-flex justify-center align-middle w-3.5 ">
          {icons[`FlagIcon_${task.priority}`]}
        </span>
      </td>
      <td className="p-3 mx-5 my-4 text-xs text-center ">
        <a
          onClick={handleNavigateTaskInfoPage}
          className=" inline-flex justify-center align-middle w-4 cursor-pointer"
        >
          {icons.descriptionIcon}
        </a>
      </td>
    </tr>
  ));

  return (
    <>
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
                    {icons.CollapsIcon_W5}
                  </button>
                ) : (
                  <span className="w-5"></span>
                )}
                <span
                  style={{
                    backgroundColor: statusColor.bg,
                    color: statusColor.text,
                  }}
                  className="font-medium px-2 py-1 rounded select-none"
                >
                  {statusName}
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