//todo: connect datepicker to date selector of modal.

import { useState } from "react";

import Card from "./Card/Card";
import Icons from "../assets/Icons";
import Button from "./Button";

import toast from "react-hot-toast";
import { Popover, Transition } from "@headlessui/react";

import Datepicker from "./Datepicker";
import PrioritySelection from "./PrioritySelection";

function CalendarTaskModal({ initialDate, setOpenModal }) {
  const [date, setDate] = useState(initialDate);
  const [endDate, setEndDate] = useState(false);
  const [flag, setFlag] = useState(false);

  const flagItems = [
    { id: "urgent", icon: Icons.FlagRedBig },
    { id: "high", icon: Icons.FlagYellowBig },
    { id: "medium", icon: Icons.FlagGreenBig },
    { id: "low", icon: Icons.FlagGrayBig },
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
  const AddButtonClickHandler = () => {
    if (inputText) {
      console.log(
        `text: ${inputText}, startDate: ${date}, endDate: ${endDate}, priority: ${
          flag ? flag[0] : "none"
        }`
      );
    }
    if (!inputText) {
      toast("نام تسک نمیتواند خالی باشد");
    }
  };
  const CloseButtonClickHandler = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <div className="z-80">
        {datepickerModalOpen && (
          <Datepicker
            setDatepickerModalOpen={setDatepickerModalOpen}
            setDate={setDate}
            setEndDate={setEndDate}
          />
        )}
      </div>
      <div
        className="absolute h-full w-full z-40"
        // onClick={CloseButtonClickHandler}
      >
        <Card
          className={
            "absolute shadow-[0_8px_16px_0px_rgba(0,0,0,0.2)] p-6 rounded-[8px] items-start w-[463px] gap-[30px] z-50 top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
          }
        >
          <div className="flex flex-row gap-[12px] justify-start items-center w-full">
            <button onClick={CloseButtonClickHandler}>{Icons.CloseIcon}</button>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="نام تسک را وارد کنید"
              className="placeholder-[#C8C8C8] text-[20px]/[31px] text-right font-[500]"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row items-center gap-[12px] justify-end">
              <Popover className="relative">
                <Popover.Button onClick={FlagButtonClickHandler}>
                  <div
                    style={{
                      borderColor: flag
                        ? flag[1].props.children[0].props.stroke
                        : "white",
                    }}
                    className="rounded-[100%] border-dashed border-[1.4px] p-[11px]"
                  >
                    {flag ? matchingItem.icon : Icons.FlagIcon}
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
              onClick={AddButtonClickHandler}
              title={"ساختن تسک"}
              classNames={"w-[125px]"}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CalendarTaskModal;
