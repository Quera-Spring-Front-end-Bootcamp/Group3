import Card from "../Card/Card";
import Button from "../Button";
import { Transition, Dialog } from "@headlessui/react";

import Datepicker from "../Datepicker";
import { v4 as uuidv4 } from "uuid";
import ColumnMoreItem from "../ColumnMore/ColumnMoreItem";

import { useRef, useState, Fragment } from "react";
import FlagIcon from "../../assets/Icons/FlagIcon";
import CloseIcon from "../../assets/Icons/CloseIcon";
import RectangleIcon from "../../assets/Icons/RectangleIcon";
import AddUserDashedCircleIcon from "../../assets/Icons/AddUserDashedCircleIcon";
import LinkIcon from "../../assets/Icons/LinkIcon";
import FlagDashedCircleIcon from "../../assets/Icons/FlagDashedCircleIcon";
import CalendarDashedCircleIcon from "../../assets/Icons/CalendarDashedCircleIcon";
import TagDashedCircleIcon from "../../assets/Icons/TagDashedCircleIcon";
import EyeIcon from "../../assets/Icons/EyeIcon";
import SearchIcon from "../../assets/Icons/SearchIcon";
import DotsMenuIcon from "../../assets/Icons/DotsMenuIcon";
import PaletteIcon from "../../assets/Icons/PaletteIcon";
import EditSqureIcon from "../../assets/Icons/EditSqureIcon";

let priorityItems = [
  {
    id: "1",
    title: "فوری",
    icon: <FlagIcon color="#FB0606" width="20" height="21" />,
    color: "#FB0606",
  },
  {
    id: "2",
    title: "بالا",
    icon: <FlagIcon color="#FFE605" width="20" height="21" />,
    color: "#FFE605",
  },
  {
    id: "3",
    title: "متوسط",
    icon: <FlagIcon color="#09DBCE" width="20" height="21" />,
    color: "#09DBCE",
  },
  {
    id: "4",
    title: "پایین",
    icon: <FlagIcon color="#B2ACAC" width="20" height="21" />,
    color: "#B2ACAC",
  },
  { id: "5", title: "حذف اولویت", icon: <CloseIcon color="#E45454" /> },
];

let tagsItem = [
  {
    id: uuidv4(),
    title: "درس",
    color: "#EBC8C8",
    editFlag: false,
    colorFlag: false,
  },
  {
    id: uuidv4(),
    title: "کار",
    color: "#C3B7F2",
    editFlag: false,
    colorFlag: false,
  },
  {
    id: uuidv4(),
    title: "پروژه",
    color: "#7FFAFA",
    editFlag: false,
    colorFlag: false,
  },
];

export const NewTask = ({ openNewTaskModal, setOpenNewTaskModal }) => {
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [flagOpen, setFlagOpen] = useState(false);
  const [tagOpen, setTagOpen] = useState(false);
  const [tagInputText, setTagInputText] = useState("");
  const [tagItems, setTagItems] = useState(tagsItem);
  const [tag, setTag] = useState([]);
  const tagHover = useRef(null);
  const [editWindowPosition, setEditWindowPosition] = useState({ x: 0, y: 0 });
  const [editing, setEditing] = useState({ flag: false, id: null });
  const [prioritis, setPrioritis] = useState(priorityItems);
  const [flagColor, setFlagColor] = useState("#B2ACAC");
  const [search, setSearch] = useState(false);

  function handleDatePickerOpen() {
    setDatePickerOpen(!datePickerOpen);
    setFlagOpen(false);
    setTagOpen(false);
  }

  function handleSubmitInputChange(event) {
    const text = event.target.value;
    setSearch(false);
    if (event.key === "Enter") {
      if (editing.flag) {
        const filteredItems = tagItems.map((item) => {
          if (item.id === editing.id) {
            return { ...item, title: text };
          }
          return item;
        });
        tagsItem = filteredItems;
        setTagItems(filteredItems);
        setEditing({ flag: false, id: null });
      } else {
        const newItem = {
          id: uuidv4(),
          title: text,
          color: "#93fa7f",
          editFlag: false,
        };
        tag.push(newItem);
        setTag([...tag]);
        setTagInputText("");
      }
    }
  }

  function handleTagInputChange(event) {
    const text = event.target.value;
    setTagInputText(text);

    if (text === "") {
      setTagItems(tagsItem);
      setSearch(false);
    } else {
      const filteredItems = tagItems.filter((item) => {
        return item.title.includes(text);
      });

      if (filteredItems.length > 0) {
        setTagItems(filteredItems);
        setSearch(false);
      } else {
        setTagItems([]);
        setSearch(true);
      }
    }
  }

  function handleTagEditHover(id) {
    const filteredItems = tag.map((item) => {
      if (item.id === id) {
        return { ...item, editFlag: true };
      }
      return item;
    });
    setTag(filteredItems);
  }

  function handleTagEditHoverLeave(id) {
    const filteredItems = tag.map((item) => {
      if (item.id === id) {
        return { ...item, editFlag: false };
      }
      return item;
    });
    setTag(filteredItems);
  }

  function handleClickCloseTag(item) {
    setSearch(false);
    const filteredItems = tag.filter((tagItem) => {
      return item.id !== tagItem.id;
    });
    setTag(filteredItems);
    tagItems.push(item);
    setTagItems(tagItems);
  }

  function handleTagOpen() {
    setTagOpen(!tagOpen);
    setDatePickerOpen(false);
    setFlagOpen(false);
  }

  function handleClose() {
    setOpenNewTaskModal(false);
  }

  function handleFlagOpen() {
    setFlagOpen(!flagOpen);
    setDatePickerOpen(false);
    setTagOpen(false);
  }
  function handleEtcOpen(id, event) {
    setEditWindowPosition({ x: event.clientX, y: event.clientY });
    const filteredItems = tagItems.map((item) => {
      if (item.id === id) {
        return { ...item, etcFlag: !item.etcFlag };
      } else {
        return { ...item, etcFlag: false };
      }
    });

    setTagItems(filteredItems);
  }

  function deleteTag(id) {
    const filteredItems = tagItems.filter((item) => {
      return item.id !== id;
    });

    tagsItem = filteredItems;
    setTagItems(filteredItems);
  }

  function editTag(item) {
    setTagInputText(item.title);
    setEditing({ flag: true, id: item.id });
  }

  function tagChangeColor(id) {
    const filteredItems = tagItems.map((item) => {
      if (item.id === id) {
        return { ...item, colorFlag: !item.colorFlag };
      } else {
        return { ...item, colorFlag: false };
      }
    });
    tagsItem = filteredItems;
    setTagItems(filteredItems);
  }

  function changeColor(id, color) {
    const filteredItems = tagItems.map((item) => {
      if (item.id === id) {
        return { ...item, color: color };
      } else {
        return item;
      }
    });
    tagsItem = filteredItems;
    setTagItems(filteredItems);
  }

  function changePriority(id, color) {
    const filteredItems = priorityItems.map((item) => {
      if (item.id === id) {
        return { ...item, color: color };
      } else {
        return item;
      }
    });
    if (id == 5) setFlagOpen(false);
    priorityItems = filteredItems;
    setPrioritis(filteredItems);
    setFlagColor(color);
  }

  return (
    <>
      <Transition appear show={openNewTaskModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
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
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel>
                  <Card className="flex p-0 flex-col items-end py-[36px] px-[44px] gap-[40px] w-[1166px] h-[576px] shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] rounded-[20px] pt-[36px]">
                    <Dialog.Title>
                      <div className="top-bar flex flex-row justify-between items-center gap-[904px] w-[1078px] h-[37px] ">
                        <div className="title-task flex flex-row items-center gap-[13px] w-[142px] h-[37px]">
                          <i>{<RectangleIcon />}</i>
                          <span className="not-italic font-medium text-[24px] leading-[37px] text-right text-[#000000]">
                            عنوان تسک
                          </span>
                        </div>
                        <i className="cursor-pointer" onClick={handleClose}>
                          {<CloseIcon color="#BDBDBD" width="32" height="33" />}
                        </i>
                      </div>
                    </Dialog.Title>
                    <div className="Frame-185 flex flex-row justify-start items-center gap-[8px] w-[1078px] h-[34px] ">
                      <span className=" not-italic font-medium text-[16px] leading-[25px] text-right text-[#000000]">
                        در
                      </span>
                      <div className="box-border flex flex-row justify-start items-center pt-[5px] px-[8px] pb-[4px] gap-[10px]  h-[33px] border border-[#E9EBF0] rounded-[6px]">
                        <input
                          className="not-italic w-[158px] font-normal text-[16px] leading-[24px] text-right text-[#1E1E1E]"
                          placeholder="عنوان تسک"
                        />
                      </div>
                      <span>برای</span>
                      <i>{<AddUserDashedCircleIcon color="#C1C1C1" />}</i>
                    </div>
                    <textarea
                      placeholder="توضیحاتی برای این تسک بنویسید"
                      className="py-[19px] px-[21px] resize-none border-box w-[1078px] h-[191px] border border-[#E2E2E2] rounded-[12px]"
                    />
                    <div className="cursor-pointer flex flex-row justify-start items-center gap-[15px] w-[1078px] h-[32px]">
                      <span className="not-italic font-normal tex-[16px] leading-[24px] text-right">
                        افزودن پیوست
                      </span>
                      <label
                        htmlFor="upload-button"
                        className="flex cursor-pointer flex-row justify-start items-center px-[4px] py-[8px] w-[110px] h-[32px] border border-[#208D8E] rounded-[4px]"
                      >
                        <i>
                          <LinkIcon color="#208D8E" width="24" height="24" />
                        </i>
                        <span>آپلود فایل</span>
                        <input
                          id="upload-button"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                    <div className="flex flex-row justify-between  items-center gap-[670px] w-[1078px] h-[50px]">
                      <div className="flex flex-row justify-start items-center gap-[24px] w-[272px] h-[50px]">
                        <div
                          className="cursor-pointer"
                          onClick={handleFlagOpen}
                        >
                          <i>{<FlagDashedCircleIcon color={flagColor} />}</i>
                        </div>

                        <Transition
                          show={flagOpen}
                          enter="transition-opacity duration-500"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition-opacity duration-500"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                          className=" absolute"
                        >
                          <Card
                            className={`absolute mt-[-220px]  w-[166px] justify-start rounded-[8px]  gap-[16px] p-[12px] shadow-xl`}
                          >
                            <div className="flex w-[142px] flex-col mt-[-14px] items-start gap-[12px]">
                              {prioritis.map((item) => (
                                <ColumnMoreItem
                                  onClick={() =>
                                    changePriority(item.id, item.color)
                                  }
                                  key={item.id}
                                  className="flex-row justify-end gap-[8px] not-italic font-normal text-[14px] leading-[21px] text-right text-[#1E1E1E]"
                                  title={item.title}
                                  icon={item.icon}
                                />
                              ))}
                            </div>
                          </Card>
                        </Transition>
                        <div
                          className="cursor-pointer"
                          onClick={handleDatePickerOpen}
                        >
                          <i>{<CalendarDashedCircleIcon />}</i>
                        </div>
                        <div className="cursor-pointer" onClick={handleTagOpen}>
                          <i>{<TagDashedCircleIcon />}</i>
                        </div>
                        <Transition
                          show={tagOpen}
                          enter="transition-opacity duration-500"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition-opacity duration-500"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                          className=" absolute mr-[150px]"
                        >
                          <Card className="absolute  mt-[-270px] w-[177px] h-[213px] shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] rounded-[8px] p-[12px]">
                            <div className="flex flex-col items-start gap-[4px] w-[153px] h-[60px]">
                              <div className="flex flex-row w-[153px] overflow-auto gap-2">
                                {tag.map((item) => (
                                  <div
                                    key={item.id}
                                    ref={tagHover}
                                    id={item.id}
                                    onMouseEnter={() =>
                                      handleTagEditHover(item.id)
                                    }
                                    onMouseLeave={() =>
                                      handleTagEditHoverLeave(item.id)
                                    }
                                    className="flex cursor-pointer flex-row justify-start items-center py-[5px] px-[8px] gap-[8px] w-[54px] h-[24px] bg-[#FFAE34] rounded-[6px]"
                                  >
                                    {!item.editFlag ? (
                                      <span className=" not-italic font-normal text-[10px] leading-[15px] text-right text-[#1E1E1E]">
                                        {item.title}
                                      </span>
                                    ) : (
                                      <div className=" w-[54px] flex flex-row justify-between items-center">
                                        <i
                                          onClick={() =>
                                            handleClickCloseTag(item)
                                          }
                                        >
                                          {<CloseIcon width="11" height="11" />}
                                        </i>
                                        <i>{<DotsMenuIcon />}</i>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>

                              <div className="flex flex-row justify-start items-center py-[4px] px-[8px] gap-[8px] w-[153px] h-[32px] bg-[#E9E9E9] rounded-[4px]">
                                <i>{<SearchIcon color="#BDBDBD" />}</i>
                                <input
                                  className="w-[103px] h-[18px] not-italic font-normal text-[12px] leading-[18px] text-[#534D60] bg-[#E9E9E9]"
                                  type="text"
                                  onChange={handleTagInputChange}
                                  onKeyDown={handleSubmitInputChange}
                                  name=""
                                  id=""
                                  value={tagInputText}
                                  placeholder="جستجو یا ساختن تگ"
                                />
                              </div>
                            </div>
                            <div>
                              {search ? (
                                <p className="flex flex-row justify-center">
                                  نتیجه ای یافت نشد
                                </p>
                              ) : null}
                              {tagItems.map((item) => (
                                <div
                                  className="flex flex-col justify-center items-start w-[153px]  mt-[12px]"
                                  key={item.id}
                                >
                                  <div className="flex cursor-pointer flex-row justify-between items-center gap-[12px] w-[153px] h-[31px]">
                                    <div
                                      style={{
                                        backgroundColor: `${item.color}`,
                                      }}
                                      className="flex flex-row justify-start items-center px-[5px] py-[8px] gap-[8px] rounded-[6px]"
                                    >
                                      <span className="not-italic font-normal text-[14px] leading-[21px] text-right text-[#1E1E1E]">
                                        {item.title}
                                      </span>
                                    </div>

                                    <i
                                      onClick={(e) => handleEtcOpen(item.id, e)}
                                    >
                                      {<DotsMenuIcon color="#BDBDBD" />}
                                    </i>
                                  </div>
                                  <div
                                    style={{
                                      display: `${
                                        item.etcFlag ? "block" : "none"
                                      }`,
                                      top: `${
                                        editWindowPosition.y -
                                        window.innerHeight / 2
                                      }px`,
                                    }}
                                    className={`flex flex-col items-start p-[8px]    w-[80px]  shadow-xl rounded-[8px] absolute mr-[-120px]  bg-white  right-[300px]`}
                                  >
                                    <div className="flex flex-col items-start justify-between  h-[69px]">
                                      <div
                                        onClick={() => deleteTag(item.id)}
                                        className="flex cursor-pointer flex-row justify-start items-center gap-[4px]"
                                      >
                                        <i>
                                          {<CloseIcon width="14" height="14" />}
                                        </i>{" "}
                                        <span className=" not-italic font-normal text-[10px] leading-[15px] text-right">
                                          حذف
                                        </span>
                                      </div>
                                      <div
                                        onClick={() => editTag(item)}
                                        className="flex cursor-pointer flex-row justify-start items-center gap-[4px]"
                                      >
                                        {
                                          <EditSqureIcon
                                            width="11"
                                            height="11"
                                          />
                                        }{" "}
                                        <span className="not-italic font-normal text-[10px] leading-[15px] text-right">
                                          ویرایش تگ
                                        </span>
                                      </div>
                                      <div
                                        onClick={() => tagChangeColor(item.id)}
                                        className="flex cursor-pointer flex-row justify-start items-center gap-[4px] "
                                      >
                                        {<PaletteIcon />}{" "}
                                        <span className="not-italic font-normal text-[10px] leading-[15px] text-right">
                                          ویرایش رنگ
                                        </span>{" "}
                                      </div>
                                      <div
                                        className="flex bg-white flex-col justify-center items-start p-[8px] absolute   w-[123px] gap-[11px] rounded-[8px] right-[85px] top-[53px] shadow-xl"
                                        style={{
                                          display: `${
                                            item.colorFlag ? "flex" : "none"
                                          }`,
                                        }}
                                      >
                                        <div className="flex flex-row justify-start items-center gap-[8px] w-[107px] h-[15px] ">
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#E46161")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#E46161]"
                                          ></div>
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#80DC69")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#80DC69]"
                                          ></div>
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#76BC86")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#76BC86]"
                                          ></div>
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#78C6B0")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#78C6B0]"
                                          ></div>
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#84C6A1")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#84C6A1]"
                                          ></div>
                                        </div>
                                        <div className="flex flex-row justify-start items-center gap-[8px] w-[107px] h-[15px]">
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#F3C567")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#F3C567]"
                                          ></div>
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#F1A25C")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#F1A25C]"
                                          ></div>
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#E57A57")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#E57A57]"
                                          ></div>
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#EC8182")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#EC8182]"
                                          ></div>
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#B9995E")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#B9995E]"
                                          ></div>
                                        </div>
                                        <div className="flex flex-row justify-start items-center gap-[8px] w-[107px] h-[15px]">
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#E46161")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#E28A60]"
                                          ></div>
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#E28A60")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#6897C2]"
                                          ></div>
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#74AADD")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#74AADD]"
                                          ></div>
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#3C45E7")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#3C45E7]"
                                          ></div>
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#6DAFCE")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#6DAFCE]"
                                          ></div>
                                        </div>
                                        <div className="flex flex-row justify-start items-center gap-[8px] w-[107px] h-[15px]">
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#9286EA")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#9286EA]"
                                          ></div>
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#C074D1")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#C074D1]"
                                          ></div>
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#486774")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#486774]"
                                          ></div>
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#5F6C7C")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#5F6C7C]"
                                          ></div>
                                          <div
                                            onClick={() =>
                                              changeColor(item.id, "#46494D")
                                            }
                                            className="rounded-[2px] cursor-pointer w-[15px] h-[15px] bg-[#46494D]"
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </Card>
                        </Transition>
                        <div className="relative">
                          <div className="flex absolute  flex-col items-center pt-[3.0303px] py-[6.06061px] pb-[6.06061px] gap-[15.15px]  w-[25.76px] h-[25.76px] top-[-10px]  bg-[#4AB7D8] rounded-[151.515px]">
                            <span className="">۲</span>
                          </div>
                          <i>{<EyeIcon />}</i>
                        </div>
                      </div>

                      <Button title="ساختن تسک"></Button>
                    </div>
                    <Transition
                      show={datePickerOpen}
                      className="z-40 ml-[100%] absolute"
                    >
                      <Datepicker
                        setDatePickerOpen={handleDatePickerOpen}
                        className="absolute mt-[-130px] mr-[63px] z-10"
                      />
                    </Transition>
                  </Card>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
