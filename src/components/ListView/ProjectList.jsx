
import HeaderProjectList from "./HeaderProjectList";
import TasksList from "./TasksList";

const ProjectList = () => {

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
    return (
      <>
        <div className="bg-[#FAFBFC]  w-[1100px] p-12">
          <HeaderProjectList />
          <TasksList data={data} />
        </div>
      </>
    );
}

export default ProjectList