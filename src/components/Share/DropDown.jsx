import { useState } from "react";
import { ArrowDown } from "../../assets/icons";
import { Permission } from "./Permission";

export const DropDown = ({ isOwner }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {isOwner ? (
        <div className="flex gap-[10px] items-center py-1 px-2 border border-[#e9ebf0] rounded-md ">
          <span className="text-xs font-normal text-[#1e1e1e]">
            دسترسی کامل
          </span>
        </div>
      ) : (
        <>
          <div
            className="flex gap-[10px] py-1 px-2 border border-[#e9ebf0] rounded-md cursor-pointer focus:outline-none"
            onClick={handleToggleDropdown}
          >
            <span className="text-xs font-normal text-[#1e1e1e]">
              {selectedOption || "دسترسی کامل"}
            </span>
            <ArrowDown />
          </div>
          <Permission
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setSelectedOption={setSelectedOption}
          />
        </>
      )}
    </div>
  );
};
