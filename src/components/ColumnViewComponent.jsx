import { useState } from "react";
import MainLayoutSubHeader from "./MainLayoutSubHeader";
import FilterIcon from "../assets/Icons/FilterIcon";
import BoardTitle from "./BoardTitle/BoardTitle";
import Filter from "./Filter/Filter";

function ColumnViewComponent({data,isOpenFilter,setIsOpenFilter,handleOpenFilter}) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="relative">
      <MainLayoutSubHeader
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      >
        <button className="flex gap-1 items-center" onClick={handleOpenFilter}>
          <span>{<FilterIcon />}</span>
          <span className="text-black font-medium text-xs">فیلترها</span>
        </button>
        <span className="bg-[#E9F9FF] text-black font-medium text-xs mr-5 h-[26px] p-1 flex items-center">
          دسته‌بندی‌شده با: وضعیت
        </span>
        <div className="absolute top-full right-0 z-50">
          <Filter
            isOpenFilter={isOpenFilter}
            setIsOpenFilter={setIsOpenFilter}
            data={data}
          />
        </div>
      </MainLayoutSubHeader>
      <BoardTitle searchValue={searchValue} />
    </div>
  );
}

export default ColumnViewComponent;
