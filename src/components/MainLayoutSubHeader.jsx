import SearchIcon from "../assets/Icons/SearchIcon";
import VerticalDivider from "./VerticalDivider";

const MainLayoutSubHeader = ({ children }) => {
  return (
    <div className="flex justify-start items-center h-14 border-b mb-9">
      <div className="flex gap-1 items-center ">
        {<SearchIcon />}
        <input
          type="text"
          placeholder="جستجو بین تسک ها"
          className="text-[12px]/[18.4px] placeholder-[#959595] bg-transparent w-52"
        />
      </div>
      <VerticalDivider className="ml-8" />
      {children}
    </div>
  );
};
export default MainLayoutSubHeader;
