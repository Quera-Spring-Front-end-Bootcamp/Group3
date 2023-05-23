import React, { useState } from "react";
import moment from "moment-jalaali";
import "moment/locale/fa";

import Icons from "../assets/Icons";

// can't pass the clickHandler as prop. it should change inside the component
function Calendar() {
  const [currentDate, setCurrentDate] = useState(moment());

  const formatter = new Intl.DateTimeFormat("fa-IR", {
    dateStyle: "medium",
  });

  const startOfMonth = currentDate.clone().startOf("jMonth").startOf("week");
  const endOfMonth = currentDate.clone().endOf("jMonth").endOf("week");
  const calendarDays = [];
  const currentDateClone = moment(startOfMonth);

  while (currentDateClone.isSameOrBefore(endOfMonth)) {
    calendarDays.push(currentDateClone.clone());
    currentDateClone.add(1, "Day");
  }

  //define a function to work with the clicked date e is a Date object.
  const clickHandler = (e) => {
    console.log(e);
  };

  const goToPreviousMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, "jMonth"));
  };

  const goToNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, "jMonth"));
  };

  const goToToday = () => {
    setCurrentDate(moment().startOf("jMonth"));
  };

  return (
    <div className="p-[16px] border-t-[0.5px] border-solid border-[#AAAAAA] h-full">
      <div className="flex flex-row gap-[40px] border-b-[0.5px] border-solid border-[#AAAAAA] pb-[17px] mb-[25px]">
        <div className="flex flex-row ">
          {Icons.searchIcon}
          <input
            type="text"
            placeholder="جستجو بین تسک ها"
            className="text-[12px]/[18.4px] placeholder-[#959595]"
          />
        </div>
        <div className="w-[1px] h-[24px] bg-[#999999]"></div>
        <div className="flex flex-row items-center gap-[8px] max-w-min">
          <button
            onClick={goToToday}
            className="w-[24px] h-[18px] text-[#3D3D3D] font-[500] text-[12px]/[18px]"
          >
            امروز
          </button>
          <div className="flex">
            <button
              onClick={goToPreviousMonth}
              className="bg-black  w-[24px] h-[24px]"
            >
              {Icons.prevArrowIcon}
            </button>

            <button
              onClick={goToNextMonth}
              className="bg-black w-[24px] h-[24px]"
            >
              {Icons.nextArrowIcon}
            </button>
          </div>
          <div className="font-[500] text-[12px]/[18px] text-black whitespace-nowrap">
            {formatter.format(currentDate).split(" ")[1]}{" "}
            {formatter.format(currentDate).split(" ")[2]}
          </div>
        </div>
      </div>
      <div className="relative W-full h-full">
        <div className="z-10 absolute w-full grid grid-cols-7 pt-[12.5px]">
          <div className="font-medium font-[16px]/[25px] font-[500] pr-[11px]">
            شنبه
          </div>
          <div className="font-medium font-[16px]/[25px] font-[500] pr-[11px]">
            یکشنبه
          </div>
          <div className="font-medium font-[16px]/[25px] font-[500] pr-[11px]">
            دوشنبه
          </div>
          <div className="font-medium font-[16px]/[25px] font-[500] pr-[11px]">
            سه شنبه
          </div>
          <div className="font-medium font-[16px]/[25px] font-[500] pr-[11px]">
            چهارشنبه
          </div>
          <div className="font-medium font-[16px]/[25px] font-[500] pr-[11px]">
            پنج شنبه
          </div>
          <div className="font-medium font-[16px]/[25px] font-[500] pr-[11px]">
            جمعه
          </div>
        </div>
        <div className="min-h-full grid grid-cols-7 grid-row-5 border-solid border-[#AAAAAA] border-l-[0.5px] border-t-[0.5px]">
          {calendarDays.map((day) => (
            <button
              className={`border-solid border-[#AAAAAA] border-[0.5px] flex justify-end items-end p-[11px] font-[500] font-[16px]/[24.53px] border-l-0 border-t-0 hover:bg-primary ${
                day.isSame(moment(), "day") && "bg-primary"
              }`}
              onClick={() => clickHandler(day.toDate())}
              key={day.format("jYYYY-jMM-jDD")}
            >
              {day.format("jD")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
