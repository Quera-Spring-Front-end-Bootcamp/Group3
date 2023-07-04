import { useState } from "react";
import Card from "../Card/Card";
import ColumnMoreItem from "../ColumnMore/ColumnMoreItem";
import { Transition } from "@headlessui/react";
import EditSqureIcon from "../../assets/Icons/EditSqureIcon";
import PlusIcon from "../../assets/Icons/PlusIcon";
import ArchiveIcon from "../../assets/Icons/ArchiveIcon";
import TrashIcon from "../../assets/Icons/TrashIcon";
import DotsMenuIcon from "../../assets/Icons/DotsMenuIcon";
import CheckmarkCircleIcon from "../../assets/Icons/CheckmarkCircleIcon";
import FlagIcon from "../../assets/Icons/FlagIcon";
import JustifyRightIcon from "../../assets/Icons/JustifyRightIcon";
import moment from "moment-jalaali";
import InfoTask from "../InfoTask/InfoTask";

const columnMoreItems = [
  { id: 1, title: "ویرایش نام ستون", icon: <EditSqureIcon /> },
  { id: 2, title: "افزودن تسک", icon: <PlusIcon /> },
  { id: 3, title: "آرشیو تمام تسک ها", icon: <ArchiveIcon /> },
  { id: 4, title: "حذف ستون", icon: <TrashIcon /> },
];

const dataFormatter = (data) => {
  const monthFormatter = new Intl.DateTimeFormat("fa-IR", {
    dateStyle: "medium",
  });

  const returned = (
    <div>
      {monthFormatter.format(moment.parseZone(data)).split(" ")[0]}{" "}
      {monthFormatter.format(moment.parseZone(data)).split(" ")[1]}
    </div>
  );

  return returned;
};

const ProjectCard = ({
  projectTitle,
  taskTitle,
  date,
  time,
  tags = [],
  userName,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [infoTaskOpen, setInfoTaskOpen] = useState(false);

  const columnMore = () => {
    setShowMore(!showMore);
  };
  const handleHover = () => {
    setShowMore(false);
  };

  const handelShowInfoTask = () => {
    setInfoTaskOpen(true)
  };
  return (
    <>  
      {infoTaskOpen && <InfoTask infoTaskOpen= {infoTaskOpen} setInfoTaskOpen = {setInfoTaskOpen} /> } 
      <div
      onMouseLeave={handleHover}
      className="group transition-all w-[250px] box-border border-[#EFF0F0] flex-col items-end p-[10px] gap-[18px] h-[133px] bg-[#FFFFFF] shadow-md rounded hover:h-[189px]"
    >
      <div className="flex flex-col  gap-[9px] w-[238px] h-[42px]">
        <div className="justify-between items-center flex ml-[10px] w-[230px] h-[42px]">
          <h1 className="not-italic font-medium text-[10px] leading-[15px] text-right text-[#534D60]">
            {projectTitle}
          </h1>
          <div className="opacity-0 transition-all group-hover:opacity-100">
            {userName.length >= 1 && (
              <div className="flex flex-row justify-center items-center pt-[6.10196px] px-[5.42396px] pb-[4.74597px] w-[23.85px] h-[22.85px] bg-[#EAF562] rounded-[67.7996px]">
                <span className="not-italic font-medium text-[8.13595px] leading-[12px] text-right text-[#000000]">
                  {userName[0].username.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-row  items-center gap-[4px] w-[230px] h-[18px]" onClick={handelShowInfoTask}>
          <h2 className="not-italic font-medium text-[12px] leading-[18px] text-right text-[#0E0E0E]">
            {taskTitle} 
          </h2>
          <i>{<JustifyRightIcon color="#BDC0C6" width="14" height="14" />}</i>
        </div>
      </div>

      <div className="flex flex-row items-start gap-[8px]  h-[16px] mt-[18.5px]">
        <div className="flex flex-row justify-end items-center gap-[2px]  h-[16px]">
          <i>{<FlagIcon color="#FB0606" />}</i>
          <span className="not-italic font-medium text-[10px] leading-[15px] text-right">
            {dataFormatter(date)}
          </span>
        </div>

        <div className="flex flex-row justify-end items-center gap-[2px]  h-[16px]">
          <i>{<CheckmarkCircleIcon color="#BDC0C6" />}</i>
          <span className="not-italic font-medium text-[10px] leading-[15px] text-right text-[#BDC0C6]">
            {time}
          </span>
        </div>
      </div>

      <div className="flex flex-row items-start gap-[12px] mt-[20.5px] ">
        {tags &&
          tags.map((tag) => (
            <div
              key={tag.id}
              style={{ backgroundColor: tag.tagColor }}
              className={`flex flex-row justify-center items-center py-[2px] px-[4px] w-[28px] h-[19px] rounded-tl-md rounded-bl-md`}
            >
              <span className="not-italic font-medium text-[10px] leading-[15px] text-right text-[#323232]">
                {tag.tagTitle}
              </span>
            </div>
          ))}
      </div>

      <hr className="border-[#EFF0F0] invisible mt-[20px] group-hover:visible" />
      <div className="flex invisible flex-row justify-between items-center gap-[8px] mt-[16px] group-hover:visible">
        <i>{<CheckmarkCircleIcon />}</i>
        <i className="cursor-pointer" onClick={columnMore}>
          {<DotsMenuIcon />}
        </i>
      </div>
      <Transition
        show={showMore}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="mr-[3px]"
      >
        <Card
          className={`absolute rounded-[8px] mr-60 mt-[-45px]   gap-[16px] p-[12px] shadow-[0_4px_16px_0_rgba(0, 0, 0, 0.16)]`}
          title=""
        >
          <div
            className="flex w-[160px] flex-col mt-[-14px] items-start gap-[12px] p-2 rounded-md"
            onMouseEnter={() => setShowMore(true)}
          >
            {columnMoreItems.map((item) => (
              <ColumnMoreItem
                key={item.id}
                className="flex-row justify-end gap-[8px] not-italic font-normal text-[14px] leading-[21px] text-right text-[#1E1E1E]"
                title={item.title}
                icon={item.icon}
              />
            ))}
          </div>
        </Card>
      </Transition>
    </div>
    </>

  );
};

export default ProjectCard;
