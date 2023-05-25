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
        handleClose={handleClose}
        closeIconLeft={icons.CloseIcon}
        closeIcon={icons.CloseIcon}
      >
        <div>
          {filters.map((filter, index) => (
            <div key={index}>
              <span>تسک هایی که</span>
              <div className="w-[82px]">
                <select
                  className="border border-red-400 w-full "
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
              </div>
              <span>آن ها</span>
              <select
                value={filter.option2}
                onChange={(e) => handleOptionChange(index, 1, e.target.value)}
              >
                <option value="" disabled>
                  انتخاب کنید
                </option>
                {optionsTag.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
              <select
                value={filter.option3}
                onChange={(e) => handleOptionChange(index, 2, e.target.value)}
              >
                <option value="" disabled>
                  انتخاب کنید
                </option>
                {optionsIsOrNot.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
              <button onClick={() => handleRemoveFilter(index)}>حذف</button>
            </div>
          ))}
          <button onClick={handleAddFilter}>افزودن فیلتر جدید</button>
        </div>
      </Card>
    )
  );
};

export default Filter;
