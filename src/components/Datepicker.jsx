import { useState } from "react";

import moment from "moment-jalaali";
import "moment/locale/fa";
import toast from "react-hot-toast";

import Card from "./Card/Card";
import Button from "./Button";
import ArrowRightIcon from "../assets/Icons/ArrowRightIcon";
import ArrowLeftIcon from "../assets/Icons/ArrowLeftIcon";
import StartCalendarIcon from "../assets/Icons/StartCalendarIcon";
import EndCalendarIcon from "../assets/Icons/EndCalendarIcon";

function Datepicker({ setDate, setEndDate, className, setDatePickerOpen }) {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedStartDate, setSelectedStartDate] = useState(currentDate);
  const [selectedEndDate, setSelectedEndDate] = useState();
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
  const sidebarFunctions = [
    {
      id: "today",
      name: "امروز",
      momentObject: moment().clone(),
      displayFormat: function () {
        return this.momentObject.locale("fa").format("dddd");
      },
    },
    {
      id: "later",
      name: "کمی بعد",
      momentObject: moment().clone().add(1, "hour"),
      displayFormat: function () {
        return this.momentObject.format("HH:mm");
      },
    },
    {
      id: "tomorrow",
      name: "فردا",
      momentObject: moment().clone().add(1, "day"),
      displayFormat: function () {
        return this.momentObject.locale("fa").format("dddd");
      },
    },
    {
      id: "endOfWeek",
      name: "این آخر هفته",
      momentObject: moment().clone().endOf("week"),
      displayFormat: function () {
        return this.momentObject.locale("fa").format("dddd");
      },
    },
    {
      id: "nextWeek",
      name: "هفته ی آینده",
      momentObject: moment().clone().add(7, "day"),
      displayFormat: function () {
        return (
          <div>
            {monthFormatter.format(this.momentObject).split(" ")[0]}{" "}
            {monthFormatter.format(this.momentObject).split(" ")[1]}
          </div>
        );
      },
    },
    {
      id: "nextEndOfWeek",
      name: "آخر هفته ی آینده",
      momentObject: moment().clone().add(7, "day").endOf("week"),
      displayFormat: function () {
        return (
          <div>
            {monthFormatter.format(this.momentObject).split(" ")[0]}{" "}
            {monthFormatter.format(this.momentObject).split(" ")[1]}
          </div>
        );
      },
    },
    {
      id: "nextTwoWeek",
      name: "دو هفته دیگر",
      momentObject: moment().clone().add(14, "day"),
      displayFormat: function () {
        return (
          <div>
            {monthFormatter.format(this.momentObject).split(" ")[0]}{" "}
            {monthFormatter.format(this.momentObject).split(" ")[1]}
          </div>
        );
      },
    },
    {
      id: "nextFourWeek",
      name: "4 هفته دیگر",
      momentObject: moment().clone().add(28, "day"),
      displayFormat: function () {
        return (
          <div>
            {monthFormatter.format(this.momentObject).split(" ")[0]}{" "}
            {monthFormatter.format(this.momentObject).split(" ")[1]}
          </div>
        );
      },
    },
  ];

  const weekDays = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنج شنبه",
    "جمعه",
  ];

  //date monitor
  const monthFormatter = new Intl.DateTimeFormat("fa-IR", {
    dateStyle: "medium",
  });

  //buttons functionality
  const closeHandler = () => {
    // console.log("close button clicked");
    setDatePickerOpen(false);
    setDate(selectedStartDate);
    setEndDate(selectedEndDate);
  };

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
    <div className={`flex p-[50px] items-center justify-center ${className}`}>
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
            {daySelector === "start" ? (
              <StartCalendarIcon color="#208D8E" />
            ) : (
              <StartCalendarIcon color="#BDBDBD" />
            )}
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
            className={`flex flex-row justify-start items-center gap-[8px] w-[438px]`}
          >
            {daySelector === "end" ? (
              <EndCalendarIcon color="#208D8E" />
            ) : (
              <EndCalendarIcon color="#BDBDBD" />
            )}
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
        <div className="flex flex-row h-full ">
          {/* side bar */}
          <div className="bg-[#F7F8F9] flex flex-col items-end p-[24px] gap-[24px] w-[293px] h-full rounded-br-[20px]">
            {sidebarFunctions.map((sidebarItem) => (
              <button
                onClick={() => clickHandler(sidebarItem.momentObject)}
                className="flex flex-row justify-between items-center w-full"
                key={sidebarItem.id}
              >
                <div className="font-normal text-[20px]/[31px] text-right text-[#2A2D33]">
                  {sidebarItem.name}
                </div>
                <div className="font-normal text-[16px]/[25px] text-right text-[#CCCFD5]">
                  {sidebarItem.displayFormat()}
                </div>
              </button>
            ))}
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
                  {<ArrowRightIcon color="#7D828C" />}
                </button>
                <button onClick={goToNextMonth}>
                  {<ArrowLeftIcon color="#7D828C" />}
                </button>
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
            <div className="h-full flex flex-col pt-[33px] parent-container">
              {/* days name */}
              <div className="grid grid-cols-7 w-full gap-[29.17px]">
                {weekDays.map((weekday) => (
                  <div
                    key={weekday}
                    className="font-[500] text-[16px]/[25px] text-[#CCCFD5] text-center"
                  >
                    {weekday}
                  </div>
                ))}
              </div>
              {/* days number */}
              <div className="grid grid-cols-7 grid-rows-auto gap-y-[13px] w-full h-full pt-[16px] pb-[67px]">
                {calendarDays.map((day) => (
                  <button
                    className={`flex items-center justify-center px-[5px] font-[500] text-[20px]/[31px] hover:bg-primary text-center ${
                      day.isSame(moment(), "day") &&
                      "bg-primary text-white rounded-[4px]"
                    } ${
                      day.isSame(selectedStartDate, "day") &&
                      "bg-[#4BECE2]  rounded-[4px]"
                    } ${
                      day.isSame(selectedEndDate, "day") &&
                      "bg-[#4BECE2] rounded-[4px]"
                    }
                    
                    ${
                      day.isAfter(selectedStartDate, "day") &&
                      day.isBefore(selectedEndDate, "day") &&
                      !day.isSame(moment(), "day") &&
                      "bg-[#E3FDFB]"
                    }
                    
                    `}
                    onClick={() => {
                      clickHandler(day);
                    }}
                    key={day.format("jYYYY-jMM-jDD")}
                  >
                    {day.format("jD")}
                  </button>
                ))}
              </div>
            </div>
            {/* close button */}
            <Button
              handleClick={closeHandler}
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