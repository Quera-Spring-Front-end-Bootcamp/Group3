import { useState } from "react";
import icons from "../../assets/Icons";
import { PermissionList } from "./PermissionList";

export const PermissionTitle = ({ isOwner }) => {
  const [isOpenProject, setIsOpenProject] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionProject, setSelectedOptionProject] = useState("");

  const handleToggleDropdownList = () => {
    setIsOpenProject(false);
    setIsOpenList(!isOpenList);
  };
  const handleToggleDropdownProject = () => {
    console.log("project");
    setIsOpenList(false);
    setIsOpenProject(!isOpenProject);
  };
  return (
    <div className="relative">
      {isOwner ? (
        <div className="flex py-1 px-2 border border-[#e9ebf0] rounded-md ">
          <span className="text-xs font-normal text-[#A6A7A7]">
            دسترسی کامل
          </span>
        </div>
      ) : (
        <div className="flex gap-[10px]">
          <div
            className="flex items-center  gap-[10px] py-1 px-2 border border-[#e9ebf0] rounded-md cursor-pointer focus:outline-none"
            onClick={handleToggleDropdownList}
          >
            <span className="text-xs font-normal text-[#1e1e1e]">
              {selectedOption || "دسترسی کامل"}
            </span>
            {icons.ArrowDownIcon}
          </div>
          <div
            className="flex items-center gap-[10px]  py-1 px-2 border border-[#e9ebf0] rounded-md cursor-pointer focus:outline-none"
            onClick={handleToggleDropdownProject}
          >
            <span className="text-xs font-normal text-[#1e1e1e]">
              {selectedOptionProject || " پروژه اول"}
            </span>
            {icons.ArrowDownIcon}
          </div>

          <PermissionList
            isOpenProject={isOpenProject}
            isOpenList={isOpenList}
            setIsOpenProject={setIsOpenProject}
            setSelectedOption={setSelectedOption}
            setSelectedOptionProject={setSelectedOptionProject}
            setIsOpenList={setIsOpenList}
          />
        </div>
      )}
    </div>
  );
};
