import { useState } from "react";
import FilterIcon from "../../assets/Icons/FilterIcon";
import MainLayoutSubHeader from "../MainLayoutSubHeader";
import TasksList from "./TasksList";

const ProjectList = ({ projectName }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="bg-[#FAFBFC] w-[1100px] ">
      <MainLayoutSubHeader
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      >
        <button className="flex gap-1 items-center">
          <span>{<FilterIcon />}</span>
          <span className="text-black font-medium text-xs">فیلترها</span>
        </button>
        <span className="bg-[#E9F9FF] text-black font-medium text-xs mr-5 h-[26px] flex items-center rounded-md p-[7px]">
          دسته‌بندی‌شده با: وضعیت
        </span>
      </MainLayoutSubHeader>
      <div className="mt-36 overflow-auto h-[calc(100vh_-_180px)]">
        <TasksList projectName={projectName} searchValue={searchValue} />
      </div>
    </div>
  );
};

export default ProjectList;
