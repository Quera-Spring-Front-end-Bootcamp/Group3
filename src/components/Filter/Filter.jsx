import { useState } from "react";
import Dropdown from "./Dropdown";
import icons from "../../assets/Icons";

const Filter = () => {
  const [filters, setFilters] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const dropdownOptionsWhere = [
    { id: 1, value: "تاریخ" },
    { id: 2, value: "تگ" },
    { id: 3, value: "اعضا" },
    { id: 4, value: "اولویت" },
  ];
  const dropdownOptionsTag = [
    { id: 1, value: "درس", background: " #EBC8C8" },
    { id: 2, value: "کار", background: "#C3B7F2" },
    { id: 3, value: "پروژه", background: "#7FFAFA" },
  ];
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
    setIsOpen(false);
  };
  const handleRemoveFilter = (id) => {
    setFilters((prevFilters) =>
      prevFilters.filter((filter) => filter.id !== id)
    );
  };
  return (
    isOpen && (
      <div className="flex flex-col gap-[14px] pt-[15px] py-8 px-[21px] w-[718px] min-h-[206px] h-full rounded-lg bg-white shadow-[0_8px_12px_0_rgba(0,0,0,0.2)]">
        <div className="flex justify-between mb-[3px]">
          <span className="text-2xl text-[#000000] font-semibold">فیلتر</span>
          <i className="cursor-pointer" onClick={handleClose}>
            {icons.CloseIcon}
          </i>
        </div>

        {filters.map((filter, index) => (
          <div key={filter.id} className="flex justify-between">
            <div className="flex  items-center  gap-[10px]">
              <span className="text-[#000000] text-sm">تسک هایی که</span>
              <Dropdown
                classNameCard={"w-[182px] "}
                key={dropdownOptionsWhere.id}
                options={dropdownOptionsWhere}
                setOption={(option) => setFilterOption(index, option)}
              />

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
            </div>
            <button onClick={() => handleRemoveFilter(filter.id)}>
              {icons.BlackTrashIcon}
            </button>
          </div>
        ))}
        <button
          className=" w-fit mt-8 text-xs text-[#208D8E] font-semibold cursor-pointer"
          onClick={addFilter}
        >
          افزودن فیلتر جدید
        </button>
      </div>
    )
  );
};

// import { useState } from "react";import icons from "../../assets/Icons";
// import { SelectFilter } from "./SelectFilter";

// const Filter = () => {

//   const data = {
//     optionsWhere: [
//       { id: 1, value: "تاریخ" },
//       { id: 2, value: "تگ" },
//       { id: 3, value: "اعضا" },
//       { id: 4, value: "اولویت" },
//     ],
//     optionsTag: [
//       { id: 1, value: "تاریخ" },
//       { id: 2, value: "تگ" },
//       { id: 3, value: "اعضا" },
//       { id: 4, value: "اولویت" },
//     ],
//     optionsIsOrNot: [
//       { id: 1, value: "است" },
//       { id: 2, value: "نیست" },
//     ],
//   };

//   return (
//     isOpen && (
//       <div className="flex flex-col gap-[14px] pt-[15px] py-8 px-[21px] w-[718px] min-h-[206px] h-full rounded-lg bg-white shadow-[0_8px_12px_0_rgba(0,0,0,0.2)]">
//         <div className="flex justify-between mb-[3px]">
//           <span className="text-2xl text-[#000000] font-semibold">فیلتر</span>
//           <i onClick={handleClose}>{icons.CloseIcon}</i>
//         </div>
//         {filters.map((filter) => (
//           <div key={filter.id} className="flex justify-between">
//             <div className="flex  items-center  gap-[10px]">
//               <span className="text-[#000000] text-sm">تسک هایی که</span>
//               <SelectFilter
//                 classNameCard={"w-[182px] "}
//                 searchValue={searchItem}
//                 onSearchChange={handleSearchChange}
//                 option={data.optionsWhere}
//                 onClick={(optionValue) =>
//                   handleFilterOptionChange(console.log(filter.id, "where", optionValue))
//                 }
//               />
//               <span className="text-[#000000] text-sm">آن ها</span>
//               <SelectFilter
//                 classNameCard={"w-[146px] "}
//                 searchValue={searchItem}
//                 onSearchChange={handleSearchChange}
//                 option={data.optionsTag}
//                 onClick={(optionValue) =>
//                   handleFilterOptionChange(console.log(filter.id, "tag", optionValue))
//                 }
//               />
//               <SelectFilter
//                 classNameCard={"w-[107px] "}
//                 isOrNot={true}
//                 option={data.isOrNot}
//                 onClick={(optionValue) =>
//                   handleFilterOptionChange(console.log(filter.id, "isOrNot", optionValue))
//                 }
//               />
//             </div>
//             <button onClick={() => handleRemoveFilter(filter.id)}>
//               {icons.BlackTrashIcon}
//             </button>
//           </div>
//         ))}
//         <span
//           onClick={handleAddNewFilters}
//           className="text-xs text-[#208D8E] font-semibold cursor-pointer"
//         >
//           افزودن فیلتر جدید
//         </span>
//       </div>
//     )
//   );
// };

export default Filter;
