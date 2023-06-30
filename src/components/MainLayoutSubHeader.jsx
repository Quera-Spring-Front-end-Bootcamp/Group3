import SearchIcon from "../assets/Icons/SearchIcon";
import VerticalDivider from "./VerticalDivider";

const MainLayoutSubHeader = ({ children, searchValue, setSearchValue }) => {
  return (
    <div className="flex justify-start items-center h-14 border-y mb-9 fixed top-20 right-[305px] left-3">
      <div className="flex gap-1 items-center ">
        {<SearchIcon />}
        <input
          type="text"
          placeholder="جستجو بین تسک ها"
          className="text-[12px]/[18.4px] placeholder-[#959595] bg-transparent w-52"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <VerticalDivider className="ml-8" />
      {children}
    </div>
  );
};
export default MainLayoutSubHeader;
