import { useState } from "react";
import { Transition } from "@headlessui/react";
import TasksBasedOnStatus from "./TasksBasedOnStatus";
import ArrowDownCircleIcon from "../../assets/Icons/ArrowDownCircleIcon";
import { useSelector } from "react-redux";

const TasksList = ({ projectName, searchValue }) => {
  const boards = useSelector((state) => state.board);
  const [isOpen, setIsOpen] = useState(true);
  const handleCollapse = () => {
    setIsOpen((perv) => !perv);
  };

  return (
    <>
      <div className="flex align-baseline items-center gap-1 mb-5">
        <button
          onClick={handleCollapse}
          className={
            isOpen
              ? "transition transform-none  delay-150 duration-700"
              : "transition transform-none  delay-150 duration-700  focus:-rotate-180"
          }
        >
          {<ArrowDownCircleIcon />}
        </button>
        <h1 className="text-[#1E1E1E] text-xl font-semibold">{projectName}</h1>
      </div>
      {/* TODO: fix transition */}
      <Transition
        className="mr-5"
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {boards.map((item) => (
          <div key={item._id}>
            <TasksBasedOnStatus
              boardName={item.name}
              boardColor={item.color}
              boardTasks={item.tasks}
              searchValue={searchValue}
            />
          </div>
        ))}
      </Transition>
    </>
  );
};

export default TasksList;
