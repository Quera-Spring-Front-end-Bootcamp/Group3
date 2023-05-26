import { useState } from "react";
import { Transition } from "@headlessui/react";
import TasksBasedOnStatus from "./TasksBasedOnStatus";
import icons from "../assets/Icons";

const TasksList = ({data}) => {
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
          {icons.CollapsIcon_W6}
        </button>
        <h1 className="text-[#1E1E1E] text-xl font-semibold">
          {data.project.title}
        </h1>
      </div>

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
        {data.statusList.map((item) => (
          <div key={item.statusName}>
            <TasksBasedOnStatus
              statusName={item.statusName}
              statusColor={item.statusColor}
              tasks={data.tasks.filter(
                (task) => task.status === item.statusName
              )}
            />
          </div>
        ))}
      </Transition>
    </>
  );
};

export default TasksList;