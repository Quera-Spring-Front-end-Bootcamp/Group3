import { useState } from "react";
import icons from "../../assets/Icons";
import { SelectFilter } from "./SelectFilter";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [selectId, setSelectId] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const optionsWhere = [
    { id: 1, value: "تاریخ" },
    { id: 2, value: "تگ" },
    { id: 3, value: "اعضا" },
    { id: 4, value: "اولویت" },
  ];
  const optionsTag = [
    { id: 1, value: "درس" },
    { id: 2, value: "کار" },
    { id: 3, value: "پروژه" },
  ];
  const optionsIsOrNot = [
    { id: 1, value: "است" },
    { id: 2, value: "نیست" },
  ];

  const handleClose = () => {
    setIsOpen(false);
  };

  const clickAddHandler = (id) => {
    setSelectId(id);
    setShowMore(!showMore);
  };

  const handleSearchChange = (event) => {
    setSearchItem(event.target.value);
  };

  const filterOptions = (options) => {
    if (searchItem.trim() === "") {
      return options;
    }
    return options.filter((option) =>
      option.value.includes(searchItem.trim().toLocaleLowerCase())
    );
  };

  return (
    isOpen && (
      <div className="flex flex-col gap-[14px] pt-[15px] py-8 px-[21px] w-[718px] min-h-[206px] h-full rounded-lg bg-white shadow-[0_8px_12px_0_rgba(0,0,0,0.2)]">
        <div className="flex justify-between mb-[3px]">
          <span className="text-2xl text-[#000000] font-semibold ">فیلتر</span>
          <i onClick={handleClose}>{icons.CloseIcon}</i>
        </div>
        <div className="w-full flex items-center gap-[10px]">
          <span className="text-[#000000] text-sm ">تسک هایی که</span>
          <SelectFilter
            clickAddHandler={() => clickAddHandler(1)}
            showMore={showMore && selectId === 1}
            option={filterOptions(optionsWhere)}
            classNameCard={"w-[182px] "}
            searchValue={searchItem}
            onSearchChange={handleSearchChange}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            setIsOpen={setIsOpen}
          />
          <span className="text-[#000000] text-sm ">آن ها</span>
          <SelectFilter
            clickAddHandler={() => clickAddHandler(2)}
            showMore={showMore && selectId === 2}
            option={filterOptions(optionsTag)}
            classNameCard={"w-[146px] "}
            searchValue={searchItem}
            onSearchChange={handleSearchChange}
          />
          <SelectFilter
            clickAddHandler={() => clickAddHandler(3)}
            showMore={showMore && selectId === 3}
            option={filterOptions(optionsIsOrNot)}
            classNameCard={"w-[107px] "}
            isOrNot={true}
          />
        </div>
      </div>
    )
  );
};

export default Filter;
