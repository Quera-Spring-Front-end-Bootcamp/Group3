import { useState } from "react";
import { PermissionList } from "./PermissionList";
import ArrowDownIcon from "../../assets/Icons/ArrowDownIcon";

export const PermissionTitle = ({ isOwner }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {isOwner ? (
        <div className="flex py-1 px-2 border border-[#e9ebf0] rounded-md ">
          <span className="text-xs font-normal text-[#1e1e1e]">
            دسترسی کامل
          </span>
        </div>
      ) : (
        <>
          <div
            className="flex items-center  gap-[10px] py-1 px-2 border border-[#e9ebf0] rounded-md cursor-pointer focus:outline-none"
            onClick={handleToggleDropdown}
          >
            <span className="text-xs font-normal text-[#1e1e1e]">
              {selectedOption || "دسترسی کامل"}
            </span>
            {<ArrowDownIcon width="18" height="19" />}
          </div>
          <PermissionList
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setSelectedOption={setSelectedOption}
          />
        </>
      )}
    </div>
  );
};
