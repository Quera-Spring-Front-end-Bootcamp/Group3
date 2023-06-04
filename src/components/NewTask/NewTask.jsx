import Card from "../Card/Card";
import icons from "../Icons";
import Button from "../Button";
import { Transition, Dialog } from "@headlessui/react";
import Datepicker from "../Datepicker";
import { v4 as uuidv4 } from "uuid";
import ColumnMoreItem from "../ColumnMore/ColumnMoreItem";

import { useRef, useState, Fragment } from "react";

const priorityItems = [
  { id: "1", title: "فوری", icon: icons.redFlag },
  { id: "2", title: "بالا", icon: icons.yellowFlag },
  { id: "3", title: "متوسط", icon: icons.greenFlag },
  { id: "4", title: "پایین", icon: icons.grayFlag },
  { id: "5", title: "حذف اولویت", icon: icons.deletePriority },
];

const tagsItem = [
  { id: uuidv4(), title: "درس", color: "#EBC8C8", editFlag: false },
  { id: uuidv4(), title: "کار", color: "#C3B7F2", editFlag: false },
  { id: uuidv4(), title: "پروژه", color: "#7FFAFA", editFlag: false },
];

export const NewTask = ({ openNewTaskModal, setOpenNewTaskModal }) => {
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [flagOpen, setFlagOpen] = useState(false);
  const [tagOpen, setTagOpen] = useState(false);
  const [tagInputText, setTagInputText] = useState("");
  const [tagItems, setTagItems] = useState(tagsItem);
  const [tag, setTag] = useState([]);
  const tagHover = useRef(null);

  function handleDatePickerOpen() {
    setDatePickerOpen(!datePickerOpen);
    setFlagOpen(false);
    setTagOpen(false);
  }

  function handleSubmitInputChange(event) {
    const text = event.target.value;
    if (event.key === "Enter") {
      const newItem = {
        id: uuidv4(),
        title: text,
        color: "#93fa7f",
        editFlag: false,
      };
      // console.log(newItem)
      tag.push(newItem);
      // console.log(tag)
      setTag([...tag]);
      setTagInputText(""); // تخلیه input
    }
  }

  function handleTagInputChange(event) {
    const text = event.target.value;
    setTagInputText(text);

    if (text === "") {
      setTagItems(tagsItem); // بازگشت به فیلتر اولیه
    } else {
      const filteredItems = tagItems.filter((item) => {
        return item.title.includes(text);
      });

      if (filteredItems.length > 0) {
        setTagItems(filteredItems);
      }
    }
  }

  function handleTagEditHover(id) {
    // setEditTag({flag : !editTag , id : event.target.id});

    const filteredItems = tag.map((item) => {
      if (item.id === id) {
        return { ...item, editFlag: true };
      }
      return item;
    });
    setTag(filteredItems);

    // console.log(tag);
    // setKeyTag([event.target.id]);
    // console.log(event.target.id);
  }

  function handleTagEditHoverLeave(id) {
    // console.log("leave");
    // setEditTag({flag : !editTag , id : event.target.id});
    const filteredItems = tag.map((item) => {
      if (item.id === id) {
        return { ...item, editFlag: false };
      }
      return item;
    });
    setTag(filteredItems);
    // console.log(tag);
    // setKeyTag([event.target.id]);
    // console.log(event.target.id);
  }

  function handleClickCloseTag(item) {
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
                  <Card className="flex p-0 flex-col items-end py-[36px] px-[44px] gap-[40px] w-[1166px] h-[576px] shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] rounded-[20px] pt-[36px] ">
                    <Dialog.Title>
                      <div className="top-bar flex flex-row justify-between items-center gap-[904px] w-[1078px] h-[37px] ">
                        <div className="title-task flex flex-row items-center gap-[13px] w-[142px] h-[37px]">
                          <i>{icons.RectangleIcon}</i>
                          <span className="not-italic font-medium text-[24px] leading-[37px] text-right text-[#000000]">
                            عنوان تسک
                          </span>
                        </div>
                        <i className="cursor-pointer" onClick={handleClose}>
                          {icons.CLoseTaskIcon}
                        </i>
                      </div>
                    </Dialog.Title>
                    {/* Frame 185 */}
                    <div className="Frame-185 flex flex-row justify-start items-center gap-[8px] w-[1078px] h-[34px] ">
                      <span className=" not-italic font-medium text-[16px] leading-[25px] text-right text-[#000000]">
                        در
                      </span>
                      <div className="box-border flex flex-row justify-start items-center pt-[5px] px-[8px] pb-[4px] gap-[10px]  h-[33px] border border-[#E9EBF0] rounded-[6px]">
                        {/* <span className='not-italic font-normal text-[16px] leading-[24px] text-right text-[#1E1E1E]'>
                       
                    </span> */}
                        <input
                          className="not-italic w-[158px] font-normal text-[16px] leading-[24px] text-right text-[#1E1E1E]"
                          placeholder="عنوان تسک"
                        />
                      </div>
                      <span>برای</span>
                      <i>{icons.membersTaskIcon}</i>
                    </div>
                    {/* Frame 186 */}
                    <textarea
                      placeholder="توضیحاتی برای این تسک بنویسید"
                      className="py-[19px] px-[21px] resize-none border-box w-[1078px] h-[191px] border border-[#E2E2E2] rounded-[12px]"
                    />

                    {/* Frame 188 */}
                    <div className="cursor-pointer flex flex-row justify-start items-center gap-[15px] w-[1078px] h-[32px]">
                      <span className="not-italic font-normal tex-[16px] leading-[24px] text-right">
                        افزودن پیوست{" "}
                      </span>
                      <div className="flex flex-row justify-start items-center px-[4px] py-[8px] w-[110px] h-[32px] border border-[#208D8E] rounded-[4px]">
                        <i>{icons.uploadTaskIcon}</i>
                        <span>آپلود فایل</span>
                      </div>
                    </div>
                    {/* Frame 191 */}

                    <div className="flex flex-row justify-between  items-center gap-[670px] w-[1078px] h-[50px]">
                      <div className="flex flex-row justify-start items-center gap-[24px] w-[272px] h-[50px]">
                        <div
                          className="cursor-pointer"
                          onClick={handleFlagOpen}
                        >
                          <i>{icons.priorityTaskIcon}</i>
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
                              {priorityItems.map((item) => (
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
                        <div
                          className="cursor-pointer"
                          onClick={handleDatePickerOpen}
                        >
                          <i>{icons.CalendarTaskIcon}</i>
                        </div>
                        <div className="cursor-pointer" onClick={handleTagOpen}>
                          <i>{icons.tagTaskIcon}</i>
                        </div>
                        <Transition
                          show={tagOpen}
                          enter="transition-opacity duration-500"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition-opacity duration-500"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                          className="mr-[150px] absolute"
                        >
                          <Card className="absolute mt-[-270px] w-[177px] h-[213px] shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] rounded-[8px] p-[12px]">
                            <div className="flex flex-col items-start gap-[4px] w-[153px] h-[60px]">
                              <div className="flex flex-row w-[153px] overflow-scroll gap-2">
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
                                          {icons.CloseTagIcon}
                                        </i>
                                        <i>{icons.etcTagIcon}</i>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>

                              <div className="flex flex-row justify-start items-center py-[4px] px-[8px] gap-[8px] w-[153px] h-[32px] bg-[#E9E9E9] rounded-[4px]">
                                <i>{icons.searchIcon}</i>
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
                            <div className="overflow-scroll">
                              {tagItems.map((item) => (
                                <div
                                  className="flex flex-col justify-center items-start w-[153px]  mt-[12px]"
                                  key={item.id}
                                >
                                  <div className="flex flex-row justify-between items-center gap-[12px] w-[153px] h-[31px]">
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
                                    <i>{icons.etcIcon}</i>
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
                          <i>{icons.eyeTaskIcon}</i>
                        </div>
                      </div>

                      <Button title="ساختن تسک"></Button>
                    </div>
                    <Transition show={datePickerOpen} className="z-40">
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
