import { useState, useEffect } from "react";
import moment from "moment-jalaali";
import "moment/locale/fa";

import Button from "./Button";
import CalendarTaskModal from "./CalendarTaskModal";
import ArrowLeftIcon from "../assets/Icons/ArrowLeftIcon";
import ArrowRightIcon from "../assets/Icons/ArrowRightIcon";
import SqurePlusIcon from "../assets/Icons/SqurePlusIcon";
import MainLayoutSubHeader from "./MainLayoutSubHeader";
import { useCallback } from "react";
import { useSelector } from "react-redux";

// can't pass the clickHandler as prop. it should change inside the component
function Calendar() {
  const boards = useSelector((state) => state.board);

  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(Date());
  const [openModal, setOpenModal] = useState(false);
  const [hoveredDate, setHoveredDate] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [defaultBoard, setDefaultBoard] = useState("");
  const formatter = new Intl.DateTimeFormat("fa-IR", {
    dateStyle: "medium",
  });
  const [allTasks, setAllTasks] = useState([]);

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
  const clickHandler = useCallback(
    (e) => {
      setSelectedDate(e);
      setOpenModal(true);
      console.log(defaultBoard);
    },
    [defaultBoard]
  );

  const taskClickHandler = (e) => {
    const filteredTasks = allTasks.filter((task) => task.id === e);
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

  useEffect(() => {
    const tasks = [];
    if (boards) {
      boards.forEach((item) => tasks.push(...item.tasks));
      setAllTasks(tasks);
      if (boards[0]) {
        setDefaultBoard(boards[0]._id);
      }
    }
  }, [setAllTasks, clickHandler, boards]);

  return (
    <div>
      {openModal && (
        <CalendarTaskModal
          initialDate={selectedDate}
          setOpenModal={setOpenModal}
          defaultBoard={defaultBoard}
        />
      )}
      <div className="relative flex flex-col pb-[59px] border-solid border-[#AAAAAA] mt-36 overflow-auto h-[calc(100vh_-_180px)]">
        <MainLayoutSubHeader
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        >
          <div className="flex flex-row items-center gap-[8px] max-w-min">
            <button
              onClick={goToToday}
              className="w-[24px] h-[18px] text-[#3D3D3D] font-[500] text-[12px]/[18px]"
            >
              امروز
            </button>
            <div className="flex">
              <button onClick={goToPreviousMonth} className="w-[24px] h-[24px]">
                {<ArrowRightIcon color="#7D828C" />}
              </button>

              <button onClick={goToNextMonth} className="w-[24px] h-[24px]">
                {<ArrowLeftIcon color="#7D828C" />}
              </button>
            </div>
            <div className="font-[500] text-[12px]/[18px] text-black whitespace-nowrap">
              {formatter.format(currentDate).split(" ")[1]}
              {formatter.format(currentDate).split(" ")[2]}
            </div>
          </div>
        </MainLayoutSubHeader>
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
                className={`relative border-solid border-[#AAAAAA] border-[0.5px] min-h-[110px] flex flex-col justify-start items-start p-[11px] font-[500] font-[16px]/[24.53px] border-l-0 border-t-0 ${
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
                    title={
                      <div>
                        {<SqurePlusIcon color="white" width="18" height="18" />}
                      </div>
                    }
                  />
                )}
                <div className="flex flex-col items-start justify-start w-full gap-[2px]">
                  {allTasks
                    .filter((task) => {
                      if (searchValue) {
                        // Filter when searchValue is not empty
                        return (
                          task.deadline &&
                          day.isSame(
                            moment(task.deadline).subtract(1, "day"),
                            "day"
                          ) &&
                          task.name
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                        );
                      } else {
                        // Default filter when searchValue is empty
                        return (
                          task.deadline &&
                          day.isSame(
                            moment(task.deadline).subtract(1, "day"),
                            "day"
                          )
                        );
                      }
                    })
                    .map((task, index) =>
                      index <= 4 ? (
                        <button
                          key={task._id}
                          onClick={() => taskClickHandler(task.id)}
                          className="text-[8px] text-white text-right bg-secondary transition-colors duration-100 w-full rounded-[2px] hover:bg-primary p-[2px]"
                        >
                          {task.name}
                        </button>
                      ) : null
                    )}
                </div>
                <div className="absolute left-[12px] bottom-[12px]">
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
