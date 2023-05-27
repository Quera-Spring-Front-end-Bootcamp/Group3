import icons from "../../assets/Icons";

export const SelectFilter = ({
  clickAddHandler,
  showMore,
  option,
  className,
  classNameCard,
  searchValue,
  onSearchChange,
  isOrNot,
  selectedOption,
}) => {
  return (
    <div className="relative">
      <div
        className={`cursor-pointer flex justify-between items-center text-sm text-[#1e1e1e1] border border-[E9EBF0] rounded-md py-1 px-2 ${classNameCard}`}
        onClick={clickAddHandler}
      >
        {selectedOption || "انتخاب کنید"}
        <i>{icons.ArrowDownIcon}</i>
      </div>
      {showMore && (
        <div
          className={`absolute top-[calc(100% + 0.5rem)] bg-white right-0 flex flex-col w-full h-auto gap-[14px] p-2 rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ${className}`}
        >
          {!isOrNot && (
            <input
              type="text"
              className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-gray-200"
              placeholder="جستجو..."
              value={searchValue}
              onChange={onSearchChange}
            />
          )}
          {option.map((option) => (
            <div key={option.id} value={option.value}>
              <span className="px-2 py-1.5 rounded-md cursor-pointer">{option.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
