import { useState } from "react";
import Dropdown from "./DropDown";
import CloseIcon from "../../assets/Icons/CloseIcon";
import TrashIcon from "../../assets/Icons/TrashIcon";
import { useSelector } from "react-redux";

const Filter = ({ isOpenFilter, setIsOpenFilter }) => {
  const [filters, setFilters] = useState([]);
  const boards = useSelector((state) => state.board);
  const dropdownOptionsWhere = [
    { id: 1, value: "تاریخ" },
    { id: 2, value: "تگ" },
    { id: 3, value: "اعضا" },
    { id: 4, value: "اولویت" },
  ];
  // const dropdownOptionsTag = [
  //   { id: 1, value: "درس", background: " #EBC8C8" },
  //   { id: 2, value: "کار", background: "#C3B7F2" },
  //   { id: 3, value: "پروژه", background: "#7FFAFA" },
  // ];
  const dropdownOptionsTag = boards.flatMap((board) =>
    board.tasks.flatMap((task) =>
      task.taskAssigns.map((assign) => ({
        id: assign._id,
        value: assign.firstname,
      }))
    )
  );

  const dropdownOptionsIsOrNot = [
    { id: 1, value: "است" },
    { id: 2, value: "نیست" },
  ];

  const addFilter = () => {
    const newFilter = {
      id: filters.length + 1,
      option: "",
    };
    setFilters([...filters, newFilter]);
  };
  const setFilterOption = (index, option) => {
    const newFilters = [...filters];
    newFilters[index].option = option;
    setFilters(newFilters);
  };
  const handleClose = () => {
    setIsOpenFilter(false);
  };
  const handleRemoveFilter = (id) => {
    setFilters((prevFilters) =>
      prevFilters.filter((filter) => filter.id !== id)
    );
  };

  return (
    isOpenFilter && (
      <div className="flex flex-col gap-[14px] pt-[15px] py-8 px-[21px] w-[718px] min-h-[206px] h-fullrounded-lg bg-white shadow-[0_8px_12px_0_rgba(0,0,0,0.2)] rounded-lg bg-white shadow-[0_8px_12px_0_rgba(0,0,0,0.2)]">
        <div className="flex justify-between mb-[3px]">
          <span className="text-2xl text-[#000000] font-semibold">فیلتر</span>
          <i className="cursor-pointer" onClick={handleClose}>
            {<CloseIcon />}
          </i>
        </div>
        {filters.map((filter, index) => (
          <div key={filter.id} className="flex justify-between  ">
            <div className="flex  items-center  gap-[10px] ">
              <span className="text-[#000000] text-sm">تسک هایی که</span>
              <Dropdown
                classNameCard={"w-[182px] "}
                key={dropdownOptionsWhere.id}
                options={dropdownOptionsWhere}
                setOption={(option) => setFilterOption(index, option)}
              />

              {filter.option && (
                <>
                  <span className="text-[#000000] text-sm">آن ها</span>
                  <Dropdown
                    key={dropdownOptionsTag.id}
                    classNameCard={"w-[146px] "}
                    options={dropdownOptionsTag}
                    setOption={(option) => setFilterOption(index, option)}
                  />
                  <Dropdown
                    key={dropdownOptionsIsOrNot.id}
                    classNameCard={"w-[107px] "}
                    options={dropdownOptionsIsOrNot}
                    setOption={(option) => setFilterOption(index, option)}
                    isOrNot={true}
                  />
                </>
              )}
            </div>
            <button onClick={() => handleRemoveFilter(filter.id)}>
              {<TrashIcon />}
            </button>
          </div>
        ))}
        <button
          className=" w-fit  text-xs text-primary font-semibold cursor-pointer"
          onClick={addFilter}
        >
          افزودن فیلتر جدید
        </button>
      </div>
    )
  );
};

export default Filter;
