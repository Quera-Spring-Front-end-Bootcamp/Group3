import { useState } from "react";
import { Transition } from "@headlessui/react";
import TaskAccordion from "./TaskAccordion";
import icons from "../assets/Icons";

const ProjectList = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  const data = {
    project: {
      title: "پروژه اول",
    },
    statusList: [
      {
        statusName: "Pending",
        statusColor: { bg: "#F92E8F", text: "#FFFFFF" },
      },
      {
        statusName: "In progress",
        statusColor: { bg: "#F98F2E", text: "#1E1E1E" },
      },
      { statusName: "Done", statusColor: { bg: "#43BB0B", text: "#FFFFFF" } },
    ],
    tasks: [
      {
        status: "Pending",
        taskID: "1",
        taskTitle: "این یک تیتر برای این تسک است.",
        members: [
          { name: "Ali", avatarUrl: "https://i.pravatar.cc/297" },
          { name: "Hasan", avatarUrl: "https://i.pravatar.cc/298" },
          { name: "Reza", avatarUrl: "https://i.pravatar.cc/299" },
          { name: "Reza", avatarUrl: "https://i.pravatar.cc/294" },
          { name: "Reza", avatarUrl: "https://i.pravatar.cc/295" },
          { name: "Reza", avatarUrl: "https://i.pravatar.cc/296" },
        ],
        deadlines: "۶ آبان",
        priority: "immediate",
              },
      {
        status: "Pending",
        taskID: "2",
        taskTitle: "این یک تیتر برای این تسک است.",
        members: [
          { name: "Ali", avatarUrl: "https://i.pravatar.cc/300" },
          { name: "Hasan", avatarUrl: "https://i.pravatar.cc/301" },
          { name: "Reza", avatarUrl: "https://i.pravatar.cc/302" },
        ],
        deadlines: "۶ آبان",
        priority: "high",
      },
      {
        status: "Done",
        taskID: "3",
        taskTitle: "این یک تیتر برای این تسک است.",
        members: [
          { name: "Ali", avatarUrl: "https://i.pravatar.cc/303" },
          { name: "Hasan", avatarUrl: "https://i.pravatar.cc/304" },
          { name: "Reza", avatarUrl: "https://i.pravatar.cc/305" },
        ],
        deadlines: "۶ آبان",
        priority: "immediate",
      },
      {
        status: "Done",
        taskID: "4",
        taskTitle: "این یک تیتر برای این تسک است.",
        members: [
          { name: "Ali", avatarUrl: "https://i.pravatar.cc/306" },
          { name: "Hasan", avatarUrl: "https://i.pravatar.cc/307" },
          { name: "Reza", avatarUrl: "https://i.pravatar.cc/308" },
        ],
        deadlines: "۶ آبان",
        priority: "immediate",
      },
    ],
  };
    const handleCollapse = () => {
      setIsOpen((perv) => !perv);
    };

  return (
    <div className="bg-[#FAFBFC]  w-[1100px] p-12">
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
              <TaskAccordion
                statusName={item.statusName}
                statusColor={item.statusColor}
                tasks={data.tasks.filter(
                  (task) => task.status === item.statusName
                )}
              />
            </div>
          ))}
        </Transition>
      
    </div>
  );
}

export default ProjectList