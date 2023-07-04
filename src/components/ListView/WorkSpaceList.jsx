import FilterIcon from "../../assets/Icons/FilterIcon";
import MainLayoutSubHeader from "../MainLayoutSubHeader";
import TasksList from "./TasksList";

const WorkSpaceList = () => {
  const data = [
    {
      id: "1",
      project: {
        id: "1",
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
        {
          statusName: "Done",
          statusColor: { bg: "#43BB0B", text: "#FFFFFF" },
        },
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
          priority: "#FFE605",
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
          priority: "#FFE605",
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
          priority: "#FFE605",
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
          priority: "#FFE605",
        },
      ],
    },
    {
      id: "2",
      project: {
        id: "2",
        title: "پروژه دوم",
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
        {
          statusName: "Done",
          statusColor: { bg: "#43BB0B", text: "#FFFFFF" },
        },
      ],
      tasks: [
        {
          status: "Pending",
          taskID: "1",
          taskTitle: "این یک تیتر برای این تسک است.",
          members: [
            { name: "Ali", avatarUrl: "https://i.pravatar.cc/297" },
            { name: "Hasan", avatarUrl: "https://i.pravatar.cc/298" },
          ],
          deadlines: "۶ آبان",
          priority: "#B2ACAC",
        },
        {
          status: "In progress",
          taskID: "2",
          taskTitle: "این یک تیتر برای این تسک است.",
          members: [
            { name: "Ali", avatarUrl: "https://i.pravatar.cc/300" },
            { name: "Hasan", avatarUrl: "https://i.pravatar.cc/301" },
            { name: "Reza", avatarUrl: "https://i.pravatar.cc/302" },
            { name: "Reza", avatarUrl: "https://i.pravatar.cc/299" },
            { name: "Reza", avatarUrl: "https://i.pravatar.cc/294" },
            { name: "Reza", avatarUrl: "https://i.pravatar.cc/295" },
            { name: "Reza", avatarUrl: "https://i.pravatar.cc/296" },
          ],
          deadlines: "۶ آبان",
          priority: "#FB0606",
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
          priority: "#FFE605",
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
          priority: "#FFE605",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#FAFBFC] w-[1100px] ">
      <MainLayoutSubHeader>
        <button className="flex gap-1 items-center">
          <span>{<FilterIcon />}</span>
          <span className="text-black font-medium text-xs">فیلترها</span>
        </button>
        <span className="bg-secondary20 text-black font-medium text-xs mr-5 h-[26px] flex items-center rounded-md p-[7px]">
          دسته‌بندی‌شده با: وضعیت
        </span>
      </MainLayoutSubHeader>
      <div className="mt-36 overflow-auto h-[calc(100vh_-_180px)]">
        {data.map((item) => (
          <TasksList key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default WorkSpaceList;
