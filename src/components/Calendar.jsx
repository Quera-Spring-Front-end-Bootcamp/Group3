import { useState } from "react";
import moment from "moment-jalaali";
import "moment/locale/fa";

import Icons from "../assets/Icons";
import Button from "./Button";
import CalendarTaskModal from "./CalendarTaskModal";

// can't pass the clickHandler as prop. it should change inside the component
function Calendar() {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(Date());
  const [openModal, setOpenModal] = useState(false);
  const [hoveredDate, setHoveredDate] = useState(false);

  const formatter = new Intl.DateTimeFormat("fa-IR", {
    dateStyle: "medium",
  });

  const weekDays = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنج شنبه",
    "جمعه",
  ];

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
    setSelectedDate(e);
    console.log(selectedDate);
    setOpenModal(true);
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
    <div>
      {openModal && (
        <CalendarTaskModal
          initialDate={selectedDate}
          setOpenModal={setOpenModal}
        />
      )}
      <div className="relative flex flex-col pr-[16px] pl-[51px] pb-[59px] pt-[18px] border-t-[0.5px] border-solid border-[#AAAAAA] h-screen">
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
              <button onClick={goToPreviousMonth} className="w-[24px] h-[24px]">
                {Icons.prevArrowIcon}
              </button>

              <button onClick={goToNextMonth} className="w-[24px] h-[24px]">
                {Icons.nextArrowIcon}
              </button>
            </div>
            <div className="font-[500] text-[12px]/[18px] text-black whitespace-nowrap">
              {formatter.format(currentDate).split(" ")[1]}
              {formatter.format(currentDate).split(" ")[2]}
            </div>
          </div>
        </div>
        <div className="relative W-full h-full">
          <div className=" pointer-events-none z-10 absolute w-full grid grid-cols-7 pt-[12.5px]">
            {weekDays.map((weekday) => (
              <div
                key={weekday}
                className="font-[16px]/[25px] font-[500] pr-[11px]"
              >
                {weekday}
              </div>
            ))}
          </div>
          <div className="h-full grid grid-cols-7 grid-rows-[auto] border-solid border-[#AAAAAA] border-l-[0.5px] border-t-[0.5px]">
            {calendarDays.map((day) => (
              <button
                className={`relative border-solid border-[#AAAAAA] border-[0.5px] flex justify-end items-end p-[11px] font-[500] font-[16px]/[24.53px] border-l-0 border-t-0 ${
                  day.isSame(moment(), "day") && "bg-primary"
                }`}
                onClick={() => clickHandler(day.toDate())}
                key={day.format("jYYYY-jMM-jDD")}
                onMouseEnter={() => setHoveredDate(day)}
                onMouseLeave={() => setHoveredDate(false)}
              >
                {day.isSame(hoveredDate, "day") && (
                  <Button
                    classNames={
                      "absolute bottom-[17px] right-[12px] w-[24px] h-[24px]"
                    }
                    title={<div>{Icons.addIcon}</div>}
                  />
                )}
                {day.format("jD")}
              </button>
            ))}
          </div>
        </div>
        <Button
          classNames={"absolute bottom-[30px] left-[50px] w-[118px] z-50 "}
          title={
            <div className="flex flex-row items-center justify-center gap-[8px]">
              {Icons.addIcon} تسک جدید
            </div>
          }
          onClick={() => clickHandler(currentDate)}
        />
      </div>
    </div>
  );
}

export default Calendar;
