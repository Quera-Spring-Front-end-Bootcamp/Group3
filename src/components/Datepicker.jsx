{
  /*
State : everything is ok. just clean up code.
TODO:
Add selected dates design
implement logic of selections

*/
}

import { useState } from "react";

import moment from "moment-jalaali";
import "moment/locale/fa";
import toast from "react-hot-toast";

import Card from "./Card/Card";
import Button from "./Button";
import icons from "../assets/Icons";
function Datepicker() {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedStartDate, setSelectedStartDate] = useState(currentDate);
  const [selectedEndDate, setSelectedEndDate] = useState(currentDate);
  const [daySelector, setDaySelector] = useState("start");

  //Render day cells logic
  const startOfMonth = currentDate.clone().startOf("jMonth").startOf("week");
  const endOfMonth = currentDate.clone().endOf("jMonth");
  const calendarDays = [];
  const currentDateClone = moment(startOfMonth);

  while (currentDateClone.isSameOrBefore(endOfMonth)) {
    calendarDays.push(currentDateClone.clone());
    currentDateClone.add(1, "Day");
  }

  //side bar functions
  const sidebarDays = {
    today: moment().clone(),
    tomorrow: moment().clone().add(1, "day"),
    endOfWeek: moment().clone().endOf("week"),
    nextWeek: moment().clone().add(7, "day"),
    nextEndOfWeek: moment().clone().add(7, "day").endOf("week"),
    nextTwoWeek: moment().clone().add(14, "day"),
    nextFourWeek: moment().clone().add(28, "day"),
  };

  //date monitor
  const monthFormatter = new Intl.DateTimeFormat("fa-IR", {
    dateStyle: "medium",
  });

  //buttons functionality
  const clickHandler = (e) => {
    if (daySelector === "start") {
      setSelectedStartDate(e);
    }
    if (daySelector === "end" && e.isSameOrAfter(selectedStartDate)) {
      setSelectedEndDate(e);
    }
    if (daySelector === "end" && e.isBefore(selectedStartDate)) {
      toast("زمان پایان نمیتواند قبل از زمان شروع باشد");
    }
    console.log(calendarDays, selectedEndDate, selectedStartDate);
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
    <div className="flex p-[50px] items-center justify-center">
      <Card
        className={
          "shadow-[0_12px_32px_0_rgba(0,0,0,0.25)] rounded-[20px] w-[936px] h-[632px]"
        }
      >
        <div className="flex flex-row justify-start items-center gap-[10px] w-full px-[20px] pt-[51px] pb-[33px] border-b-[1px] border-[#E4E4E4]">
          {/* start date section */}
          <button
            onClick={() => setDaySelector("start")}
            className="flex flex-row justify-start items-center gap-[8px] w-[438px]"
          >
            {daySelector === "start"
              ? icons.CalendarIconActive
              : icons.CalendarIcon}
            زمان شروع
            {selectedStartDate && (
              <div className="text-primary">
                {" "}
                {monthFormatter.format(selectedStartDate).split(" ")[0]}{" "}
                {monthFormatter.format(selectedStartDate).split(" ")[1]}
              </div>
            )}
          </button>
          {/* divider line */}
          <div className="w-[1px] h-[33px] bg-[#E8EAED]"></div>
          {/* end date section */}
          <button
            onClick={() => setDaySelector("end")}
            className={`flex flex-row justify-start items-center gap-[8px] w-[438px`}
          >
            {daySelector === "end"
              ? icons.CalendarIconActive
              : icons.CalendarIcon}
            زمان پایان
            <div className="text-primary">
              {selectedEndDate && (
                <div>
                  {" "}
                  {monthFormatter.format(selectedEndDate).split(" ")[0]}{" "}
                  {monthFormatter.format(selectedEndDate).split(" ")[1]}
                </div>
              )}
            </div>
          </button>
        </div>
        {/* main part div */}
        <div className="flex flex-row ">
          {/* side bar */}
          <div className="bg-[#F7F8F9] flex flex-col items-end p-[24px] gap-[24px] w-[293px] h-[510px]">
            <button
              onClick={() => clickHandler(sidebarDays.today)}
              className="flex flex-row justify-between items-center w-full"
            >
              <div className="font-normal text-[20px]/[31px] text-right text-[#2A2D33]">
                امروز
              </div>
              <div className="font-normal text-[16px]/[25px] text-right text-[#CCCFD5]">
                {sidebarDays.today.locale("fa").format("dddd")}
              </div>
            </button>

            <div className="flex flex-row justify-between items-center w-full">
              <div className="font-normal text-[20px]/[31px] text-right text-[#2A2D33]">
                کمی بعد
              </div>
              <div className="font-normal text-[16px]/[25px] text-right text-[#CCCFD5]">
                17:39
              </div>
            </div>
            <button
              onClick={() => clickHandler(sidebarDays.tomorrow)}
              className="flex flex-row justify-between items-center w-full"
            >
              <div className="font-normal text-[24px]/[37px] text-right text-[#2A2D33]">
                فردا
              </div>
              <div className="font-normal text-[16px]/[25px] text-right text-[#CCCFD5]">
                {sidebarDays.tomorrow.locale("fa").format("dddd")}
              </div>
            </button>
            <button
              onClick={() => clickHandler(sidebarDays.endOfWeek)}
              className="flex flex-row justify-between items-center w-full"
            >
              <div className="font-normal text-[20px]/[31px] text-right text-[#2A2D33]">
                این آخر هفته
              </div>
              <div className="font-normal text-[16px]/[25px] text-right text-[#CCCFD5]">
                {sidebarDays.endOfWeek.locale("fa").format("dddd")}
              </div>
            </button>
            <button
              onClick={() => clickHandler(sidebarDays.nextWeek)}
              className="flex flex-row justify-between items-center w-full"
            >
              <div className="font-normal text-[20px]/[31px] text-right text-[#2A2D33]">
                هفته ی آینده
              </div>
              <div className="font-normal text-[16px]/[25px] text-right text-[#CCCFD5]">
                {sidebarDays.nextWeek.locale("fa").format("dddd")}
              </div>
            </button>
            <button
              onClick={() => clickHandler(sidebarDays.nextEndOfWeek)}
              className="flex flex-row justify-between items-center w-full"
            >
              <div className="font-normal text-[20px]/[31px] text-right text-[#2A2D33]">
                آخرهفته ی آینده
              </div>
              <div className="font-normal text-[16px]/[25px] text-right text-[#CCCFD5]">
                {sidebarDays.nextEndOfWeek.locale("fa").format("dddd")}
              </div>
            </button>
            <button
              onClick={() => clickHandler(sidebarDays.nextTwoWeek)}
              className="flex flex-row justify-between items-center w-full"
            >
              <div className="font-normal text-[20px]/[31px] text-right text-[#2A2D33]">
                دو هفته دیگر
              </div>
              <div className="font-normal text-[16px]/[25px] text-right text-[#CCCFD5]">
                {monthFormatter.format(sidebarDays.nextTwoWeek).split(" ")[0]}{" "}
                {monthFormatter.format(sidebarDays.nextTwoWeek).split(" ")[1]}
              </div>
            </button>
            <button
              onClick={() => clickHandler(sidebarDays.nextFourWeek)}
              className="flex flex-row justify-between items-center w-full"
            >
              <div className="font-normal text-[20px]/[31px] text-right text-[#2A2D33]">
                4 هفته دیگر
              </div>
              <div className="font-normal text-[16px]/[25px] text-right text-[#CCCFD5]">
                {monthFormatter.format(sidebarDays.nextFourWeek).split(" ")[0]}{" "}
                {monthFormatter.format(sidebarDays.nextFourWeek).split(" ")[1]}
              </div>
            </button>
          </div>
          {/* calendar */}
          <div className="relative w-[643px] h-[510px] pr-[24px] pt-[28px] pb-[32px] pl-[32px] flex flex-col items-start justify-start">
            {/* navigation */}
            <div className="flex flex-row gap-[20px] justify-end items-center">
              {/* date */}
              <div className="font-[500] text-[#2B2E33] text-[20px]/[30.66px]">
                {monthFormatter.format(currentDate).split(" ")[1]}{" "}
                {monthFormatter.format(currentDate).split(" ")[2]}
              </div>
              {/* month navigator */}
              <div>
                <button onClick={goToPreviousMonth}>
                  {icons.prevArrowIcon}
                </button>
                <button onClick={goToNextMonth}>{icons.nextArrowIcon}</button>
              </div>
              {/* today button */}
              <button
                onClick={goToToday}
                className="text-[20px]/[30.66px] text-right font-[500] text-[#3D3D3D]"
              >
                امروز
              </button>
            </div>
            {/* cells */}
            <div className="flex flex-col pt-[33px]">
              {/* days name */}
              <div className="grid grid-cols-7 w-full gap-[29.17px]">
                <div className="font-[500] text-[16px]/[25px] text-[#CCCFD5] text-center">
                  شنبه
                </div>
                <div className="font-[500] text-[16px]/[25px] text-[#CCCFD5] text-center">
                  یکشنبه
                </div>
                <div className="font-[500] text-[16px]/[25px] text-[#CCCFD5] text-center">
                  دوشنبه
                </div>
                <div className="font-[500] text-[16px]/[25px] text-[#CCCFD5] text-center">
                  سه شنبه
                </div>
                <div className="font-[500] text-[16px]/[25px] text-[#CCCFD5] text-center">
                  چهارشنبه
                </div>
                <div className="font-[500] text-[16px]/[25px] text-[#CCCFD5] text-center">
                  پنج شنبه
                </div>
                <div className="font-[500] text-[16px]/[25px] text-[#CCCFD5] text-center">
                  جمعه
                </div>
              </div>
              {/* days number */}
              <div className="grid grid-cols-7 w-full gap-y-4 pt-[16px]">
                {calendarDays.map((day) => (
                  <button
                    className={`flex items-center justify-center px-[5px] py-[10px] font-[500] font-[20px]/[31px] hover:bg-primary text-center ${
                      day.isSame(moment(), "day") &&
                      "bg-primary text-white rounded-[4px]"
                    } ${
                      day.isSame(selectedStartDate, "day") &&
                      "bg-[#4BECE2] rounded-[4px]"
                    } ${
                      day.isSame(selectedEndDate, "day") &&
                      "bg-[#4BECE2] rounded-[4px]"
                    }
                    
                    ${
                      day.isSameOrAfter(selectedStartDate, "day") &&
                      day.isSameOrBefore(selectedEndDate, "day") &&
                      !day.isSame(moment(), "day") &&
                      "bg-[#E3FDFB]"
                    }
                    
                    `}
                    onClick={() => clickHandler(day)}
                    key={day.format("jYYYY-jMM-jDD")}
                  >
                    {day.format("jD")}
                  </button>
                ))}
              </div>
            </div>
            {/* close button */}
            <Button
              title={"بستن"}
              classNames={
                " absolute w-[125px] bottom-[32px] left-[32px] rounded-[4px]"
              }
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Datepicker;
