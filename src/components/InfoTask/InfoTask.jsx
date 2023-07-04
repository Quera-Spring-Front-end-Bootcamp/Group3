import { useEffect } from "react";
import CloseIcon from "../../assets/Icons/CloseIcon";
import { useState, Fragment } from "react";
import ArrowLeftIcon from "../../assets/Icons/ArrowLeftIcon";
import CheckIcon from "../../assets/Icons/CheckIcon";
import AddUserDashedCircleIcon from "../../assets/Icons/AddUserDashedCircleIcon";
import EyeIcon from "../../assets/Icons/EyeIcon";
import { Transition, Dialog } from "@headlessui/react";

import FlagDashedCircleIcon from "../../assets/Icons/FlagDashedCircleIcon";
import ShareIcon from "../../assets/Icons/ShareIcon";
import DotsMenuIcon from "../../assets/Icons/DotsMenuIcon";
import TagDashedCircleIcon from "../../assets/Icons/TagDashedCircleIcon";
import SqurePlusIcon from "../../assets/Icons/SqurePlusIcon";
import PlayIcon from "../../assets/Icons/PlayIcon";
import CommentIcon from "../../assets/Icons/CommentIcon";
import EmailIcon from "../../assets/Icons/EmailIcon";
import LinkIcon from "../../assets/Icons/LinkIcon";
import SmileIcon from "../../assets/Icons/SmileIcon";
import NoteIcon from "../../assets/Icons/NoteIcon";
import moment from "moment-jalaali";

import Button from "../Button";

const statusTaskDetails = [
  {
    member: "شما",
    action: "create",
    start: "",
    startTagColor: "",
    goal: "",
    goalTagColor: "",
    time: "۱ ساعت پیش",
  },
  {
    member: "شما",
    action: "move",
    start: "In Progress",
    startTagColor: (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.5" width="12" height="12" fill="#EC612E" />
      </svg>
    ),
    goal: "Done",
    goalTagColor: (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.5" width="12" height="12" fill="#0EBB34" />
      </svg>
    ),
    time: "۱ ساعت پیش",
  },
  {
    member: "شما",
    action: "move",
    start: "Done",
    startTagColor: (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.5" width="12" height="12" fill="#0EBB34" />
      </svg>
    ),
    goal: "Pendding",
    goalTagColor: (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.5" width="12" height="12" fill="#F7CE46" />
      </svg>
    ),
    time: "۱ ساعت پیش",
  },
];

const comments = [
  {
    name: "شما",
    time: "۱۲ تیر",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    img: "https://www.w3schools.com/howto/img_avatar.png",
  },
];

const monthNamesEn = {
  Farvardin: "فروردین",
  Ordibehesht: "اردیبهشت",
  Khordaad: "خرداد",
  Tir: "تیر",
  Mordaad: "مرداد",
  Shahrivar: "شهریور",
  Mehr: "مهر",
  Aban: "آبان",
  Azar: "آذر",
  Dey: "دی",
  Bahman: "بهمن",
  Esfand: "اسفند",
};

const InfoTask = ({ infoTaskOpen, setInfoTaskOpen, taskSelected }) => {
  const [commentHandler, setCommentHandler] = useState(false);
  const [statusTask, setStatusTask] = useState("open");
  const [TaskDetails, setTaskDetails] = useState(statusTaskDetails);
  const [comment, setComment] = useState(comments);
  const [textAreaInput, setTextAreaInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const formatter = new Intl.DateTimeFormat("fa-IR", { day: 'numeric', month: 'long' });

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds + 1);
        if (seconds === 59) {
          setSeconds(0);
          setMinutes(minutes + 1);
        }
        if (minutes === 59) {
          setMinutes(0);
          setHours(hours + 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  });

  function startTimer() {
    setIsRunning(true);
  }

  function stopTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  const buttonRender = () => {
    if (statusTask === "open") {
      return (
        <>
          <button className="w-[111px] h-[30px] bg-[#F84747] text-[#ffffff]">
            Open
          </button>
          <div className="w-[25px] flex flex-col justify-center h-[30px] bg-[#F84747] rounded-sm mr-[-22px]">
            <i className=" cursor-pointer" onClick={handleStatus}>
              <ArrowLeftIcon color="#ffffff" />
            </i>
          </div>
        </>
      );
    } else if (statusTask === "Pendding") {
      return (
        <>
          <button className="w-[111px] h-[30px] bg-[#ffb41e] text-[#ffffff]">
            Pendding
          </button>
          <div className="w-[25px] flex flex-col justify-center h-[30px] bg-[#ffb41e] rounded-sm mr-[-22px]">
            <i className=" cursor-pointer" onClick={handleStatus}>
              <ArrowLeftIcon color="#ffffff" />
            </i>
          </div>
        </>
      );
    } else if (statusTask === "In Progress") {
      return (
        <>
          <button className="w-[111px] h-[30px] bg-[#ff5f20] text-[#ffffff]">
            In Progress
          </button>
          <div className="w-[25px] flex flex-col justify-center h-[30px] bg-[#ff5f20] rounded-sm mr-[-22px]">
            <i className=" cursor-pointer" onClick={handleStatus}>
              <ArrowLeftIcon color="#ffffff" />
            </i>
          </div>
        </>
      );
    } else if (statusTask === "Done") {
      return (
        <>
          <button className="w-[111px] h-[30px] bg-[#6fd317] text-[#ffffff]">
            Done
          </button>
          <div className="w-[25px] flex flex-col justify-center h-[30px] bg-[#6fd317] rounded-sm mr-[-22px]">
            <i className=" cursor-pointer" onClick={handleStatus}>
              <ArrowLeftIcon color="#ffffff" />
            </i>
          </div>
        </>
      );
    }
  };
  function closeHandler() {
    setInfoTaskOpen(false);
  }

  function handlerComment() {
    setCommentHandler(true);
  }

  function handleStatus() {
    if (statusTask === "open") {
      setStatusTask("Pendding");
      setTaskDetails([
        ...TaskDetails,
        {
          member: "شما",
          action: "move",
          start: "open",
          startTagColor: (
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="12" height="12" fill="#F84747" />
            </svg>
          ),
          goal: "Pendding",
          goalTagColor: (
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="12" height="12" fill="#ffb41e" />
            </svg>
          ),
          time: "۱ ساعت پیش",
        },
      ]);
    } else if (statusTask === "Pendding") {
      setStatusTask("In Progress");
      setTaskDetails([
        ...TaskDetails,
        {
          member: "شما",
          action: "move",
          start: "Pendding",
          startTagColor: (
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="12" height="12" fill="#ffb41e" />
            </svg>
          ),
          goal: "In Progress",
          goalTagColor: (
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="12" height="12" fill="#ff5f20" />
            </svg>
          ),
          time: "۱ ساعت پیش",
        },
      ]);
    } else if (statusTask === "In Progress") {
      setStatusTask("Done");
      setTaskDetails([
        ...TaskDetails,
        {
          member: "شما",
          action: "move",
          start: "In Progress",
          startTagColor: (
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="12" height="12" fill="#ff5f20" />
            </svg>
          ),
          goal: "Done",
          goalTagColor: (
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="12" height="12" fill="#6fd317" />
            </svg>
          ),
          time: "۱ ساعت پیش",
        },
      ]);
    } else if (statusTask === "Done") {
      setStatusTask("open");
      setTaskDetails([
        ...TaskDetails,
        {
          member: "شما",
          action: "move",
          start: "Done",
          startTagColor: (
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="12" height="12" fill="#6fd317" />
            </svg>
          ),
          goal: "Open",
          goalTagColor: (
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="12" height="12" fill="#F84747" />
            </svg>
          ),
          time: "۱ ساعت پیش",
        },
      ]);
    }
  }

  function textAreaChangeHandler(event) {
    setTextAreaInput(event.target.value);
    // console.log(moment().format("jD"));
    // console.log(event.target.value)
  }

  function textAreaSubmitHandler() {
    setComment([
      ...comment,
      {
        name: "شما",
        time:
          moment().format("jD") + " " + monthNamesEn[moment().format("jMMMM")],
        text: textAreaInput,
        img: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ]);
    setTextAreaInput("");
  }

  return (
    <Transition appear show={infoTaskOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeHandler}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-[1352px] h-[596px] bg-white rounded-[20px]">
                <i
                  onClick={closeHandler}
                  className=" float-left ml-9 mt-4 pb-4"
                >
                  <CloseIcon color="#BDBDBD" width="24" height="25" />
                </i>
                <div className="flex float-left flex-row  justify-start items-start  w-[1316px] h-[506px] ">
                  <div className="flex flex-col items-start gap-[24px]  w-[657px] h-[400px]">
                    <div className="flex flex-row justify-between items-center px-[20px] gap-[113px] w-[657px] h-[57px] ">
                      <div className="flex flex-row bg-white justify-start items-center gap-[24px] w-[355px] h-[34px]">
                        {buttonRender()}

                        <i className="border">
                          <CheckIcon color="#a5a5a5" />
                        </i>
                        <div className="flex flex-row items-start w-[61px] h-[34px]">
                          <div className="flex bg-black flex-row justify-center items-center pt-[9px] px-[8px] pb-[7px] w-[35px] h-[34px] rounded-[100px] z-10"></div>
                          <div className="flex flex-row justify-center items-center p-[4.25px] gap-[10.62px] w-[34px] h-[34px] rounded-[106.25px] absolute mr-7">
                            <i>
                              <AddUserDashedCircleIcon color="#C1C1C1" />
                            </i>
                          </div>
                        </div>

                        <i>
                          <FlagDashedCircleIcon
                            color="#FB0606"
                            width="34"
                            height="34"
                          />
                        </i>
                      </div>

                      <div className="flex flex-row items-center gap-[20px]  h-[25px] bg-white">
                        <div className="flex flex-row items-center  gap-[8px]   h-[25px]">
                          <i>
                            <ShareIcon color="#BDBDBD" />
                          </i>
                          <span className=" not-italic font-normal text-[16px] leading-[25px] text-right text-[#1E1E1E]">
                            {" "}
                            اشتراک گذاری
                          </span>
                          <i>
                            <DotsMenuIcon color="#BDBDBD" />
                          </i>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start px-[20px] gap-[24px] w-[657px] h-[310px] ">
                      <i>
                        <TagDashedCircleIcon color="#C1C1C1" />
                      </i>

                      <div className="flex  flex-col items-start gap-[12px] w-[617px] ">
                        <h1 className=" not-italic font-medium text-[24px] leading-[37px] text-right text-[#1E1E1E]">
                          عنوان تسک
                        </h1>
                        <div
                          className="flex flex-row justify-start  gap-[10px] w-[617px]  rounded-[12px]"
                          style={{
                            border: "1px solid #C1C1C1",
                          }}
                        >
                          <textarea
                            className="flex p-4 resize-none flex-row justify-start  gap-[10px] w-[617px] h-[96px]  rounded-[12px] "
                            placeholder=""
                            name=""
                            id=""
                            defaultValue={taskSelected?.name}
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-[17px]  h-[68px]">
                        <div className="flex cursor-pointer flex-row justify-start items-center gap-[4px]  h-[24px]">
                          <i>
                            <SqurePlusIcon color="#208D8E" />
                          </i>
                          <span className=" not-italic font-medium text-[12px] leading-[18px] text-right text-[#208D8E]">
                            اضافه کردن چک لیست
                          </span>
                        </div>
                        <div className="flex cursor-pointer flex-row justify-start items-center gap-[4px]  h-[24px]">
                          <i>
                            <SqurePlusIcon color="#208D8E" />
                          </i>
                          <span className=" not-italic font-medium text-[12px] leading-[18px] text-right text-[#208D8E]">
                            اضافه کردن پیوست
                          </span>
                        </div>

                        <div></div>
                      </div>
                    </div>
                  </div>

                  {/* section 2 */}

                  <div className="flex flex-col  justify-between  items-start gap-[24px] w-[659px] h-[539px]">
                    <div className="flex  flex-col items-start gap-[24px] w-[659px] h-[222px]">
                      <div className="flex bg-white flex-row justify-between items-center pr-[20px] pl-[36px] gap-[214px] w-[659px] h-[57px]">
                        <div className="flex flex-row items-center gap-[28px] w-[381px] h-[57px] bg-white">
                          <div className="flex flex-col items-start gap-[5px] h-[48px]">
                            <span className=" not-italic font-normal text-[12px] leading-[18px] text-right text-[#BBBBBB]">
                              ساخته‌شده در
                            </span>
                            <span className=" not-italic font-normal text-[16px] leading-[25px] text-right text-[#1E1E1E]">
                              ۱ اردیبهشت ۱۴۰۲
                            </span>
                          </div>

                          <div className="flex flex-col items-start gap-[5px]  h-[48px]">
                            <span className=" not-italic font-normal text-[12px] leading-[18px] text-right text-[#BBBBBB]">
                              زمان
                            </span>
                            <div className="flex flex-row justify-start items-center gap-[4px] w-[120px] h-[25px]">
                              {!isRunning ? (
                                <i onClick={startTimer}>
                                  <PlayIcon />
                                </i>
                              ) : (
                                <>
                                  <i className="flex" onClick={stopTimer}>
                                    <PlayIcon color="#db1a1a" />
                                  </i>
                                  <i className="flex" onClick={resetTimer}>
                                    <PlayIcon color="#edad0d" />
                                  </i>
                                </>
                              )}

                              <span className=" not-italic font-normal text-[16px] leading-[25px] text-right">
                                <span>{hours}</span>
                                <span>:</span>
                                <span>{minutes}</span>
                                <span>:</span>
                                <span>{seconds}</span>
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col items-start gap-[5px] w-[51px] h-[48px]">
                            <span className=" not-italic font-normal text-[12px] leading-[18px] text-right text-[#BBBBBB]">
                              ددلاین
                            </span>
                            <div className="flex flex-row justify-start items-center gap-[4px] h-[25px]">
                              <span className=" not-italic font-normal text-[16px] leading-[25px] text-right text-[#1E1E1E]">
                                {taskSelected.deadline ? formatter.format(new Date(taskSelected.deadline)):'-'}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* frame 139 */}
                        <div className="relative">
                          <div className="flex absolute  flex-col items-center pt-[3.0303px] py-[6.06061px] pb-[6.06061px] gap-[15.15px]  w-[19.76px] h-[19.76px] top-[-10px]  bg-[#4AB7D8] rounded-[151.515px]">
                            <span className=" text-[12px]">۲</span>
                          </div>
                          <i>{<EyeIcon width="32" height="32" />}</i>
                        </div>
                      </div>
                      <div className=" flex overflow-auto flex-col items-start pr-[20px] pl-[36px] gap-[21px]  w-[659px] h-[117px]">
                        {TaskDetails.map((item, index) => (
                          <div
                            className="flex flex-row justify-between items-center gap-[21px] w-[603px] h-[25px]"
                            key={index}
                          >
                            <div className="flex flex-row items-start gap-[4px]  h-[25px]">
                              <span className=" not-italic font-medium text-[16px] leading-[18px] text-right text-[#208D8E]">
                                {item.member}
                              </span>
                              <span className=" not-italic font-normal text-[16px] leading-[24px] text-right text-[#000000]">
                                {item.action === "create" ? (
                                  "این تسک را ساختید"
                                ) : item.action === "move" ? (
                                  <span className="flex gap-1 leading-[18px]">
                                    {" "}
                                    این تسک را از {item.start}{" "}
                                    <i> {item.startTagColor}</i> به{" "}
                                    <span className="flex gap-1">
                                      {item.goal}
                                      <i>{item.goalTagColor}</i> منتقل کردید
                                    </span>{" "}
                                  </span>
                                ) : (
                                  "این تسک را حذف کردید"
                                )}
                              </span>
                            </div>
                            <span className="not-italic font-normal text-[12px] leading-[18px] text-right text-[#ACAEB0]">
                              ۱ ساعت پیش
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="h-[130px] mt-[-30px] flex-col overflow-auto">
                      {comment.map((item, index) => (
                        <div
                          className=" flex  flex-row justify-start items-start py-[20px] gap-[12px] w-[659px] h-[125px]   rounded-[12px]"
                          key={index}
                        >
                          <div
                            style={{
                              backgroundImage: `url(${item.img})`,
                              backgroundRepeat: "none",
                              backgroundSize: "cover",
                            }}
                            className="flex  flex-row justify-start items-start pt-[9px] px-[8px] pb-[7px] w-[35px] h-[34px] rounded-[100px] "
                          ></div>
                          <div
                            style={{
                              border: "1px solid #F4F4F4",
                            }}
                            className=" flex  flex-col items-start p-[16px] gap-[8px] w-[572px] h-[104px] rounded-[12px]"
                          >
                            <div className="flex flex-row justify-between items-center gap-[365px]  h-[25px]">
                              <div className="flex flex-row justify-start items-center gap-[4px]  h-[25px]">
                                <span className=" not-italic font-normal text-[16px] text-right text-[#208D8E]">
                                  {item.name}
                                </span>
                                <span className=" not-italic font-normal text-[12px] leading-[18px] text-right text-[#AAAAAA]">
                                  {" "}
                                  کامنت گذاشتید
                                </span>
                              </div>

                              <span className=" not-italic font-normal text-[12px] leading-[18px] text-right text-[#AAAAAA]">
                                {item.time}
                              </span>
                            </div>
                            <p className=" not-italic font-normal text-[12px] leading-[18px] text-right text-[#000000]">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <div className="flex flex-row ">
                        <textarea
                          placeholder="کامنت"
                          onChange={textAreaChangeHandler}
                          onClick={handlerComment}
                          value={textAreaInput}
                          style={{
                            border: "1px solid #F4F4F4",
                            height: `${!commentHandler ? "67px" : "206px"}`,
                          }}
                          className="w-[659px] p-4  resize-none rounded-bl-[20px]  focus:outline-none focus:rounded-[20px]   focus:shadow-lg transition-all"
                        ></textarea>
                        <i className=" absolute mr-[620px] mt-5">
                          <CommentIcon color="#AEAEAE" />
                        </i>
                      </div>
                    </div>
                    <Transition
                      show={commentHandler}
                      enter="ease-out duration-200"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                      className="absolute mr-[570px] mt-[500px]"
                    >
                      <Button
                        onClick={textAreaSubmitHandler}
                        classNames="w-[78px] absolute   h-[31px] bg-[#208D8E]"
                        style={{
                          fontSize: "12px",
                        }}
                        title="ثبت کامنت"
                      />
                    </Transition>
                    <Transition
                      show={commentHandler}
                      enter="ease-out duration-200"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-out"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                      className="absolute mr-[1%]  mt-[500px]"
                    >
                      <div className="flex flex-row justify-start items-center gap-[20px] w-[156px] h-[24px]">
                        <i className=" cursor-pointer">
                          <EmailIcon color="#C9CBDA" />
                        </i>
                        <i className=" cursor-pointer">
                          <LinkIcon color="#C9CBDA" width="24" height="24" />
                        </i>
                        <i className=" cursor-pointer">
                          <NoteIcon color="#C9CBDA" />
                        </i>

                        <i className=" cursor-pointer">
                          <SmileIcon color="#C9CBDA" />
                        </i>
                      </div>
                    </Transition>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default InfoTask;
