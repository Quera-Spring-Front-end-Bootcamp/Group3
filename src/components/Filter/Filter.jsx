import { useState } from "react";
import Card from "../Card/Card";
import icons from "../../assets/Icons";

const Filter = () => {
  const [filters, setFilters] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
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
  const handleAddFilter = () => {
    setFilters((prevFilters) => [
      ...prevFilters,
      { option1: "", option2: "", option3: "" },
    ]);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRemoveFilter = (index) => {
    setFilters((prevFilters) => prevFilters.filter((_, i) => i !== index));
  };

  const handleOptionChange = (index, optionIndex, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = [...prevFilters];
      updatedFilters[index][`option${optionIndex + 1}`] = value;
      return updatedFilters;
    });
  };

  return (
    isOpen && (
      <Card
        title="فیلتر"
        className="items-start gap-[14px] py-[15px] px-[21px] w-[718px]"
        titleClassName="text-2xl text-[#000000] font-semibold "
        handleClose={handleClose}
        closeIconLeft={icons.CloseIcon}
      >
        <div className="w-full flex flex-col items-start gap-8">
          {filters.map((filter, index) => (
            <div key={index} className="w-full flex items-center">
              <div className="flex items-center gap-[10px]">
                <span className="text-[#000000] text-sm ">تسک هایی که</span>
                <select
                  className=" text-sm text-[#1e1e1e1] w-[182px] border border-[E9EBF0] rounded-md focus:outline-none py-1 px-2"
                  value={filter.option1}
                  onChange={(e) => handleOptionChange(index, 0, e.target.value)}
                >
                  <option value="" disabled>
                    انتخاب کنید
                  </option>
                  {optionsWhere.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
                <span className="text-[#000000] text-sm ">آن ها</span>
                <select
                  value={filter.option2}
                  onChange={(e) => handleOptionChange(index, 1, e.target.value)}
                  className=" text-sm text-[#1e1e1e1] w-[146px] border border-[E9EBF0] rounded-md focus-visible:border-[E9EBF0]"
                >
                  <option value="" disabled>
                    انتخاب کنید
                  </option>
                  {optionsTag.map((option) => (
                    <option
                      key={option.id}
                      value={option.value}
                      className="text-[#1E1E1E] text-xs "
                    >
                      {option.value}
                    </option>
                  ))}
                </select>
                <select
                  className=" text-sm text-[#1e1e1e1] w-[107px] border border-[E9EBF0] rounded-md focus-visible:border-[E9EBF0]"
                  value={filter.option3}
                  onChange={(e) => handleOptionChange(index, 2, e.target.value)}
                >
                  <option value="" disabled>
                    انتخاب کنید
                  </option>
                  {optionsIsOrNot.map((option) => (
                    <option
                      key={option.id}
                      value={option.value}
                      className="text-[#1E1E1E] text-xs "
                    >
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="flex flex-1 justify-end"
                onClick={() => handleRemoveFilter(index)}
              >
                {icons.TrashIcons}
              </button>
            </div>
          ))}
          <button
            onClick={handleAddFilter}
            className="text-[#208D8E] font-semibold text-xs  "
          >
            افزودن فیلتر جدید
          </button>
        </div>
      </Card>
    )
  );
};

export default Filter;
