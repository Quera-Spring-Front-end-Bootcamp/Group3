import { useEffect, useState } from "react";

import MainLayoutSubHeader from "./MainLayoutSubHeader";
import FilterIcon from "../assets/Icons/FilterIcon";
import BoardTitle from "./BoardTitle/BoardTitle";
import AXIOS from "../Utils/axios";
function ColumnViewComponent() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    AXIOS.get("/board/6480beeeb684d21e2741325e").then((response) => {
      const responsedBoards = response.data.data;
      setBoards(responsedBoards);
    });
  }, []);

  return (
    <div>
      <MainLayoutSubHeader>
        <button className="flex gap-1 items-center">
          <span>{<FilterIcon />}</span>
          <span className="text-black font-medium text-xs">فیلترها</span>
        </button>
        <span className="bg-[#E9F9FF] text-black font-medium text-xs mr-5 h-[26px] p-1 flex items-center">
          دسته‌بندی‌شده با: وضعیت
        </span>
      </MainLayoutSubHeader>
      <BoardTitle />
    </div>
  );
}

export default ColumnViewComponent;
