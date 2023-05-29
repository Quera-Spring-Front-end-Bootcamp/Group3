// import icons from "../../assets/Icons";

// export const SelectFilter = ({
//   onClick,
//   showMore,
//   option,
//   className,
//   classNameCard,
//   searchValue,
//   onSearchChange,
//   isOrNot,
//   selectedOption,
// }) => {
//   return (
//     <div className="relative">
//       <div
//         className={`cursor-pointer flex  items-center justify-between  text-sm text-[#1e1e1e1] border border-[E9EBF0] rounded-md py-1 px-2 ${classNameCard}`}
//         onClick={onClick}
//       >

//         {selectedOption || "انتخاب کنید"}
//         <i>{icons.ArrowDownIcon}</i>
//       </div>
//       {showMore && (
//         <div
//           className={`absolute top-[calc(_100%+_0.5rem)] gap-[11px]  z-10 bg-white right-0 flex flex-col w-full h-auto rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ${className}`}
//         >
//           {!isOrNot && (
//             <form>
//               <div className="relative">
//                 <label
//                   htmlFor="search"
//                   className="absolute inset-y-0 right-2 flex items-center "
//                 >
//                   <i>{icons.SearchIcon}</i>
//                 </label>
//                 <input
//                   id="search"
//                   className="w-full py-2.5 px-8 border-b border-[#E8EAED] text-[10px] text-[#959595]  rounded-tr-lg  rounded-tl-lg"
//                   type="text"
//                   placeholder="جستجو بین فیلتر‌ها"
//                   value={searchValue}
//                   onChange={onSearchChange}
//                   required
//                 />
//               </div>
//             </form>
//           )}
//           <div className="pb-2 px-2 flex flex-col  gap-[14px] ">
//             {option.map((option) => (
//               <div
//                 key={option.id}
//                 value={option.value}
//                 onClick={() => console.log("first")}
//               >
//                 <span
//                   className="px-2 py-1.5 rounded-md cursor-pointer text-xs text-[#2B2E33] font-medium"
//                   style={{ backgroundColor: option.background }}
//                 >
//                   {option.value}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
import { useEffect, useState } from "react";
import icons from "../../assets/Icons";

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

  return (
    <div className="relative">
      <button
        className={`cursor-pointer flex  items-center justify-between  text-sm text-[#1e1e1e1] border border-[E9EBF0] rounded-md py-1 px-2 ${classNameCard}`}
        onClick={() => setOpen(!open)}
      >
        {selectedValue || "انتخاب کنید"}
        <i>{icons.ArrowDownIcon}</i>
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
                  <i>{icons.SearchIcon}</i>
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
