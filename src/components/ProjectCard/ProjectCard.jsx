import React, { useState } from "react";
import icons from "../Icons";

const projectItems = [
  {
    projectTitle: "پروژه اول",
    taskTitle: "این یک تیتر برای این تسک است.",
    date: "۵ مهر - فردا",
    time: "۲ / ۱۲",
    tags: [
      {
        tagTitle: "درس",
        tagColor: "#BFFDE3",
      },
      { tagTitle: "پروژه",
       tagColor: "#EEDFF7" 
    },
    ],
    userName: "NA",
  },
];
export const ProjectCard = ({
  projectTitle,
  taskTitle,
  date,
  time,
  tags,
  userName,
}) => {
  return (
    <div className="group transition-all w-[250px] box-border flex-col items-end p-[10px] gap-[18px] h-[133px] bg-[#FFFFFF] shadow-[0_2px_8px_rgba(0, 0, 0, 0.08)] rounded bg-teal-600 hover:h-[189px]">
      <div className="flex flex-col  gap-[9px] w-[238px] h-[42px]">
        <div className="justify-between items-center flex ml-[10px] w-[230px] h-[42px]">
          <h1 className="not-italic font-medium text-[10px] leading-[15px] text-right text-[#534D60]">
            {projectTitle}
          </h1>
          <div className="opacity-0 transition-all group-hover:opacity-100">
            <div className="flex flex-row justify-center items-center pt-[6.10196px] px-[5.42396px] pb-[4.74597px] w-[23.85px] h-[22.85px] bg-[#EAF562] rounded-[67.7996px]">
              <span className="not-italic font-medium text-[8.13595px] leading-[12px] text-right text-[#000000]">
                {userName}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-row  items-center gap-[4px] w-[230px] h-[18px]">
          <h2 className="not-italic font-medium text-[12px] leading-[18px] text-right text-[#0E0E0E]">
            {taskTitle}
          </h2>
          <i>{icons.TaskIcon}</i>
        </div>
      </div>

      <div className="flex flex-row items-start gap-[8px]  h-[16px] mt-[18.5px]">
        <div className="flex flex-row justify-end items-center gap-[2px]  h-[16px]">
          <i>{icons.CalendarIcon}</i>
          <span className="not-italic font-medium text-[10px] leading-[15px] text-right">
            {date}
          </span>
        </div>

        <div className="flex flex-row justify-end items-center gap-[2px]  h-[16px]">
          <i>{icons.TimeIcon}</i>
          <span className="not-italic font-medium text-[10px] leading-[15px] text-right text-[#BDC0C6]">
            {time}
          </span>
        </div>
      </div>

      <div className="flex flex-row items-start gap-[12px] mt-[20.5px] ">
        {tags.map((tag) => (
          <>
            <div
              className={`flex flex-row justify-center items-center py-[2px] px-[4px] w-[28px] h-[19px] bg-[${tag.tagColor}] rounded-tl-md rounded-bl-md`}
            >
              <span className="not-italic font-medium text-[10px] leading-[15px] text-right text-[#323232]">
                {tag.tagTitle}
              </span>
            </div>
          </>
        ))}
      </div>

      <hr className="border-[#EFF0F0] invisible mt-[20px] group-hover:visible" />
      <div className="flex invisible flex-row justify-between items-center gap-[8px] mt-[16px] group-hover:visible">
        <i>{icons.AcceptIcon}</i>
        <i>{icons.MoreIcon}</i>
      </div>
    </div>
  );
};
