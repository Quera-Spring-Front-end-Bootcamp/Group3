import { useEffect, useState } from "react";
import ArrowDownIcon from "../../assets/Icons/ArrowDownIcon";
import SearchIcon from "../../assets/Icons/SearchIcon";

const Dropdown = ({
  options,
  setOption,
  className,
  classNameCard,
  isOrNot,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.value.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, options]);

  const handleSelectOption = (option) => {
    setSelectedValue(option.value);
    setOption(option.value);
    setOpen(false);
  };

  const getTagStyle = () => {
    let backgroundColor = "";
    let padding = "";
    let borderRadius = "";

    if (selectedValue === "درس") {
      backgroundColor = "#EBC8C8";
      padding = "2px 8px";
      borderRadius = "8px";
    } else if (selectedValue === "کار") {
      backgroundColor = "#C3B7F2";
      padding = "2px 8px";
      borderRadius = "8px";
    } else if (selectedValue === "پروژه") {
      backgroundColor = "#7FFAFA";
      padding = "2px 8px";
      borderRadius = "8px";
    } else {
      backgroundColor = "";
    }

    return { backgroundColor, padding, borderRadius };
  };

  const { backgroundColor, padding, borderRadius } = getTagStyle();
  return (
    <div className="relative">
      <button
        className={`cursor-pointer flex  items-center justify-between  text-sm text-[#1e1e1e1] border border-[E9EBF0] rounded-md py-1 px-2 ${classNameCard}`}
        onClick={() => setOpen(!open)}
      >
        <span style={{ padding, backgroundColor, borderRadius }} className="whitespace-nowrap">
          {selectedValue || "انتخاب کنید"}
        </span>
        <i>{<ArrowDownIcon />}</i>
      </button>

      {open && (
        <div
          className={`absolute top-[calc(_100%+_0.5rem)] gap-[11px]  z-10 bg-white right-0 flex flex-col w-full h-auto rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ${className}`}
        >
          {!isOrNot && (
            <form action="">
              <div className="relative">
                <label
                  htmlFor="search"
                  className="absolute inset-y-0 right-2 flex items-center "
                >
                  <i>{<SearchIcon color="#323232" />}</i>
                </label>
                <input
                  className="w-full py-2.5 px-8 border-b border-[#E8EAED] text-[10px] text-[#959595]  rounded-tr-lg  rounded-tl-lg"
                  placeholder="جستجو بین فیلتر‌ها"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
          )}
          <div className="pb-2 px-2 flex flex-col  gap-[14px] ">
            {filteredOptions.map((option) => (
              <div
                className=" px-2 py-1.5 rounded-md cursor-pointer text-xs text-[#2B2E33] font-medium w-fit"
                key={option.value}
                onClick={() => handleSelectOption(option)}
                style={{ backgroundColor: option.background }}
              >
                {option.value}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
