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

  const DUMMY_TASK = [
    {
      id: 1,
      name: "test1",
      startDate: moment("2023/05/28"),
      endDate: null,
    },
    {
      id: 2,
      name: "test2",
      startDate: moment("2023/05/28"),
      endDate: null,
    },
    {
      id: 3,
      name: "test3",
      startDate: moment("2023/05/28"),
      endDate: null,
    },
    {
      id: 4,
      name: "test4",
      startDate: moment("2023/05/28"),
      endDate: null,
    },
    {
      id: 5,
      name: "test5",
      startDate: moment("2023/05/28"),
      endDate: null,
    },
    {
      id: 6,
      name: "test6",
      startDate: moment("2023/06/4"),
      endDate: null,
    },
    {
      id: 7,
      name: "test7",
      startDate: moment("2023/06/11"),
      endDate: null,
    },
    {
      id: 6,
      name: "test6",
      startDate: moment("2023/06/4"),
      endDate: null,
    },
    {
      id: 9,
      name: "test7",
      startDate: moment("2023/06/11"),
      endDate: null,
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
    setOpenModal(true);
    console.log(DUMMY_TASK);
  };

  const taskClickHandler = (e) => {
    const filteredTasks = DUMMY_TASK.filter((task) => task.id === e);
    console.log(filteredTasks);
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
                className={`relative border-solid border-[#AAAAAA] border-[0.5px] flex flex-col justify-start items-start p-[11px] font-[500] font-[16px]/[24.53px] border-l-0 border-t-0 ${
                  day.isSame(moment(), "day") && "bg-primary"
                }`}
                key={day.format("jYYYY-jMM-jDD")}
                onMouseEnter={() => setHoveredDate(day)}
                onMouseLeave={() => setHoveredDate(false)}
              >
                {day.isSame(hoveredDate, "day") && (
                  <Button
                    onClick={() => clickHandler(day.toDate())}
                    classNames={
                      "absolute bottom-[17px] right-[12px] w-[24px] h-[24px] z-30"
                    }
                    title={<div>{Icons.addIcon}</div>}
                  />
                )}
                <div className="flex flex-col items-start justify-start w-full gap-[2px]">
                  {DUMMY_TASK.filter((task) =>
                    day.isSame(task.startDate, "day")
                  ).map((task, index) =>
                    index <= 1 ? (
                      <button
                        key={task.id}
                        onClick={() => taskClickHandler(task.id)}
                        className="text-[8px] text-white text-right bg-secondary transition-colors duration-100 w-full rounded-[2px] hover:bg-primary p-[2px]"
                      >
                        {task.name}
                      </button>
                    ) : null
                  )}
                </div>
                <div className="absolute left-[12px] bottom-[12px] z-20">
                  {day.format("jD")}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;