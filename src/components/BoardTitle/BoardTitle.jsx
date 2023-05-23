import { useState } from "react";
import icons from "../../assets/Icons";

export const BoardTitle = ({ badgeValue, clickAddHandler }) => {
  const card = [
    { id: "1", title: "Open", color: "#F98F2E" },
    { id: "2", title: "In progress", color: "#2E7FF9" },
    { id: "3", title: "Pending", color: "#DEC908" },
    { id: "4", title: "To Do", color: "#F98F2E" },
  ];
  const [hoverTooltip, setHoverTooltip] = useState(false);
  const handleMouseEnter=()=>{
    setHoverTooltip(true)
  }
  const handleMouseLeave=()=>{
    setHoverTooltip(false )

  }
  return (
    <div className="flex gap-5 mt-5">
      {card.map((item) => (
        <div
          key={item.id}
          className={`group transition-all  max-w-[250px] w-full px-4 py-2 flex  items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.18)] rounded border-t group-hover:opacity-100`}
          style={{ borderTopColor: item.color }}
        >
          <div className="flex gap-1 items-center">
            <span className=" text-[#1E1E1E] text-base font-medium">
              {item.title}
            </span>
            <span className="text-[10px] p-1  grid items-center bg-[#F4F4F4] text-[#1E1E1E] font-medium rounded-full">
              {badgeValue}
            </span>
          </div>
          <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100 ">
            <div className="cursor-pointer">{icons.DotsMenu}</div>
            <div
              className="cursor-pointer group relative"
              onClick={clickAddHandler}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {hoverTooltip && (
                <span className="absolute flex   left-1/2  -top-2 -translate-x-1/2 -translate-y-full  w-max px-2 py-1 bg-[#3A4046] rounded-lg text-center text-white text-xs after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-[#3A4046]">
                  افزودن تسک
                </span>
              )}
              {icons.Add}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
BoardTitle.defaultProps = {
  badgeValue: 0,
};
