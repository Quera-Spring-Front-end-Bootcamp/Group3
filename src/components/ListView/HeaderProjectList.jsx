import FilterIcon from "../../assets/Icons/FilterIcon";
import SearchIcon from "../../assets/Icons/SearchIcon";

const HeaderProjectList = () => {
  return (
    <div className="flex justify-start items-center h-16 border-b border-t mb-9">
      <div className="flex gap-1 items-center ">
        {<SearchIcon />}
        <input
          type="text"
          placeholder="جستجو بین تسک ها"
          className="text-[12px]/[18.4px] placeholder-[#959595]"
        />
      </div>
      <span className="w-1 h-[22px] border-l-[1px] border-[#999999] mr-28 ml-10" />
      <button className="flex gap-1 items-center">
        <span>{<FilterIcon />}</span>
        <span className="text-black font-medium text-xs">فیلترها</span>
      </button>
      <span className="bg-[#E9F9FF] text-black font-medium text-xs mr-5 h-[26px] p-1 flex items-center">
        دسته‌بندی‌شده با: وضعیت
      </span>
    </div>
  );
};
export default HeaderProjectList;
