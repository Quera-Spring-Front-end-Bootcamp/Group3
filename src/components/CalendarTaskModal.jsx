//todo: connect datepicker to date selector of modal.

import { useState, useCallback } from "react";
import moment from "moment-jalaali";
import Card from "./Card/Card";
import Button from "./Button";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Popover, Transition } from "@headlessui/react";

import Datepicker from "./Datepicker";
import PrioritySelection from "./PrioritySelection";
import CloseIcon from "../assets/Icons/CloseIcon";
import FlagIcon from "../assets/Icons/FlagIcon";
import FlagDashedCircleIcon from "../assets/Icons/FlagDashedCircleIcon";
import AXIOS from "../Utils/axios.js";
import { useForm } from "react-hook-form";
import { setBoards } from "../redux/slices/boardSlice";
import store from "../redux/store";

function CalendarTaskModal({ initialDate, setOpenModal, defaultBoard }) {
  const { projectId } = useParams();

  const [date, setDate] = useState(initialDate);
  const [endDate, setEndDate] = useState(false);
  const [flag, setFlag] = useState(false);
  let taskId = null;
  const { register, handleSubmit } = useForm();
  const flagItems = [
    { id: "urgent", icon: <FlagDashedCircleIcon color="#FB0606" /> },
    { id: "high", icon: <FlagDashedCircleIcon color="#FFE605" /> },
    { id: "medium", icon: <FlagDashedCircleIcon color="#09DBCE" /> },
    { id: "low", icon: <FlagDashedCircleIcon color="#B2ACAC" /> },
  ];

  const [inputText, setInputText] = useState("");
  const [datepickerModalOpen, setDatepickerModalOpen] = useState(false);

  const formatter = new Intl.DateTimeFormat("fa-IR", {
    dateStyle: "medium",
  });

  const matchingItem = flagItems.find((item) => item.id === flag[0]);

  const DateButtonClickHandler = () => {
    console.log("Date Button Clicked!");
    setDatepickerModalOpen(true);
  };
  const FlagButtonClickHandler = () => {
    console.log("Flag Button Clicked!");
  };

  const handleGetProjectData = useCallback(
    async function handleGetProjectData() {
      try {
        const response = (await AXIOS.get(`/board/${projectId}`)).data.data;
        store.dispatch(setBoards(response));
      } catch (e) {
        console.log(e);
      }
    },
    [projectId]
  );

  async function AddButtonClickHandler(data) {
    try {
      await AXIOS.post("/task", {
        name: `${data.calendarEventName}`,
        description: "",
        boardId: defaultBoard.toLocaleString(),
      })
        .then((response) => {
          taskId = response.data.data._id;
        })
        .then(async () => {
          try {
            await AXIOS.put(`/task/${taskId}`, {
              name: inputText,
              description: "",
              deadline: `${moment(date).add(1, "day").toLocaleString()}`,
            }).then(() => {
              handleGetProjectData();
              setOpenModal(false);
            });
          } catch (e) {
            console.log(e);
          }
        });
    } catch (e) {
      toast.error("تسک شما ثبت نشد");
    }
    console.log(
      `text: ${inputText}, startDate: ${date.toLocaleString()}, endDate: ${endDate}, priority: ${
        flag ? flag[0] : "none"
      }`
    );
  }
  const CloseButtonClickHandler = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <div className="z-80">
        {datepickerModalOpen && (
          <Datepicker
            setDatePickerOpen={setDatepickerModalOpen}
            setDate={setDate}
            setEndDate={setEndDate}
            className={
              "absolute z-[50] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            }
          />
        )}
      </div>
      <div
        className="absolute z-[40] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        // onClick={CloseButtonClickHandler}
      >
        <form onSubmit={handleSubmit(AddButtonClickHandler)}>
          <Card
            className={
              "absolute shadow-[0_8px_16px_0px_rgba(0,0,0,0.2)] p-6 rounded-[8px] items-start w-[463px] gap-[30px] z-[50] "
            }
          >
            <div className="flex flex-row gap-[12px] justify-start items-center w-full">
              <button onClick={CloseButtonClickHandler}>{<CloseIcon />}</button>
              <input
                name="calendarEventName"
                id="calendarEventName"
                type="text"
                value={inputText}
                placeholder="نام تسک را وارد کنید"
                className="placeholder-[#C8C8C8] text-[20px]/[31px] text-right font-[500]"
                {...register("calendarEventName", {
                  required: "این فیلد الزامی می باشد",
                })}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row items-center gap-[12px] justify-end">
                <Popover className="relative">
                  <Popover.Button onClick={FlagButtonClickHandler}>
                    <div
                    // style={{
                    //   borderColor: flag
                    //     ? flag[1].props.children[0].props.stroke
                    //     : "white",
                    // }}
                    // className="rounded-[100%] border-dashed border-[1.4px] p-[11px]"
                    >
                      {flag ? (
                        matchingItem.icon
                      ) : (
                        <FlagIcon color="#C1C1C1" width="30" height="30" />
                      )}
                    </div>
                  </Popover.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Popover.Panel className=" absolute z-20">
                      <PrioritySelection setFlag={setFlag} />
                    </Popover.Panel>
                  </Transition>
                </Popover>
                <button
                  onClick={DateButtonClickHandler}
                  className="flex flex-row items-center justify-center gap-[15px] text-[20px]/[31px]  font-[500] "
                >
                  <div className="text-primary">
                    {formatter.format(date).split(" ")[0]}
                    {formatter.format(date).split(" ")[1]}
                  </div>
                  {endDate && (
                    <div className="text-[#FC0733]">
                      {formatter.format(endDate).split(" ")[0]}
                      {formatter.format(endDate).split(" ")[1]}
                    </div>
                  )}
                </button>
              </div>
              <Button
                handleClick={handleSubmit}
                title={"ساختن تسک"}
                classNames={"w-[125px]"}
              />
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
}

export default CalendarTaskModal;
