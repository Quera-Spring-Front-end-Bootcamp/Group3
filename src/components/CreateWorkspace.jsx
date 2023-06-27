// TODO: add animation for style changes.

import { Fragment, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Card from "./Card/Card";
import frame from "../assets/images/frame.png";
import toast from "react-hot-toast";
import CheckIcon from "../assets/Icons/CheckIcon";
import CircleHalfIcon from "../assets/Icons/CircleHalfIcon";
import { Transition, Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import AXIOS from "../Utils/axios";
/* define a onClose function in parent component that will close this modal.
for example:
const [showModal, setShowModal] = useState(true);
onClose={() => {
            setShowModal(false);
          }}
*/
function CreateWorkspace({ openNewWorkspaceModal, setOpenNewWorkspaceModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [colorCode, setColorCode] = useState("#7D828C");
  const [name] = useState("");
  const [step, setStep] = useState(1);
  const watchName = watch("workspaceName");

  const closeHandler = () => {
    setOpenNewWorkspaceModal(false);
  };

  const backHandler = () => {
    setStep((prevState) => prevState - 1);
  };

  async function onSubmit(data) {
    try {
      await AXIOS.post("/workspace/create", {
        name: `${data.workspaceName}`,
        color: colorCode,
      });
      closeHandler();
      toast.success("ورک اسپیس جدید با موفقیت ساخته شد");
    } catch (e) {
      toast.error("ساخت ورک اسپیس جدید با مشکل مواجه شد");
      console.log(e);
    }
  }

  const handleColorSelection = (color) => {
    setColorCode(color);
  };

  const colors = [
    "#84C6A1",
    "#78C6B0",
    "#76BC86",
    "#80DC69",
    "#E46161",
    "#E17E80",
    "#EC8182",
    "#F3C567",
    "#B9995E",
    "#E57A57",
    "#F1A25C",
    "#E28A60",
    "#6897C2",
    "#74AADD",
    "#3C45E7",
    "#6DAFCE",
    "#6CB2F7",
    "#9286EA",
    "#C074D1",
    "#486774",
    "#5F6C7C",
    "#46494D",
    "#7FA1D1",
  ];

  return (
    <>
      <Transition appear show={openNewWorkspaceModal} as={Fragment}>
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
                  {step === 1 && (
                    <Card
                      className="p-6 rounded-[8px] w-[500px]"
                      title={"ساختن ورک اسپیس جدید"}
                      closeIcon={true}
                      backIcon={false}
                      titleClassName={
                        "text-center font-bold text-[24px]/[37px]"
                      }
                      handleClose={closeHandler}
                    >
                      <form
                        onSubmit={handleSubmit(() => {
                          setStep(2);
                        })}
                      >
                        <div className="flex w-full flex-row justify-start items-start gap-[20px] mt-[40px]">
                          <div className="flex flex-col w-full items-start gap-[20px]">
                            <div className="px-[19px] w-full">
                              <Input
                                type={"text"}
                                id="workspaceName"
                                name="workspaceName" // Provide a unique name for the field
                                label="نام ورک اسپیس" // Add a label prop if needed
                                register={register("workspaceName", {
                                  required: "این فیلد الزامی می باشد",
                                })}
                                error={errors.workspaceName}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="px-[19px] w-full">
                          <Button
                            title={"ادامه"}
                            classNames={"w-full mt-[60px]"}
                            handleClick={handleSubmit(() => setStep(2))}
                          />
                        </div>
                      </form>
                    </Card>
                  )}
                  {step === 2 && (
                    <Card
                      className="p-6 rounded-[8px] w-[500px]"
                      title={"انتخاب رنگ ورک اسپیس"}
                      closeIcon={true}
                      backIcon={true}
                      titleClassName={
                        "text-center font-bold text-[24px]/[37px]"
                      }
                      handleClose={closeHandler}
                      handleBack={backHandler}
                    >
                      <form
                        onSubmit={handleSubmit(() => {
                          setStep(3);
                        })}
                      >
                        <div className="flex w-full flex-row justify-start items-start gap-[20px] mt-[40px]">
                          <div
                            className="w-[70px] h-[70px] rounded-[8px] text-center flex items-center justify-center"
                            style={{ backgroundColor: colorCode }}
                          >
                            {name
                              .split(" ")
                              .slice(0, 2)
                              .map((word) => word.charAt(0))
                              .join(" ")}
                          </div>
                          <div className="flex flex-col items-start gap-[20px]">
                            <div className="text-right font-[500] text-[14px]/[21.22px]">
                              رنگ ورک اسپیس
                            </div>
                            <div className="grid grid-cols-12 gap-[10px] items-center justify-items-center max-w-[299px] transition-all duration-300 ease-in-out">
                              <button
                                className="block relative rounded-sm w-[15px] h-[15px] items-center justify-center"
                                onClick={() => setColorCode("#7D828C")}
                              >
                                {<CircleHalfIcon />}
                              </button>
                              {colors.map((color, index) => {
                                return (
                                  <button
                                    key={index}
                                    className={`block relative rounded-sm w-[15px] ${
                                      color == colorCode && "w-[24px] h-[24px]"
                                    } h-[15px] transition-all duration-300 ease-in-out`}
                                    style={{ backgroundColor: color }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleColorSelection(color);
                                    }}
                                  >
                                    {color == colorCode && <CheckIcon />}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="px-[19px] w-full">
                          <Button
                            title={"ادامه"}
                            classNames={"w-full mt-[60px]"}
                            handleClick={handleSubmit(() => setStep(3))}
                          />
                        </div>
                      </form>
                    </Card>
                  )}
                  {step === 3 && (
                    <Card
                      className="p-6 rounded-[8px] w-[500px]"
                      title={"مرور اطلاعات"}
                      closeIcon={true}
                      backIcon={true}
                      titleClassName={
                        "text-center font-bold text-[24px]/[37px]"
                      }
                      handleClose={closeHandler}
                      handleBack={backHandler}
                    >
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex w-full flex-col justify-start items-start gap-[12px] border-[0.5px] border-[#AAAAAA] rounded-[8px] mt-[40px] px-[12px] py-[16px]">
                          <div className="flex flex-row w-full items-center justify-between h-[35px]">
                            <div className="font-[600] text-[14px]/[22px]">
                              نام ورک اسپیس
                            </div>
                            <div className="font-[600] text-[14px]/[22px]">
                              {watchName}
                            </div>
                          </div>
                          <div className="flex flex-row w-full items-center justify-between h-[35px]">
                            <div className="font-[600] text-[14px]/[22px]">
                              رنگ ورک اسپیس
                            </div>
                            <div
                              className="block relative rounded-sm w-[15px] h-[15px]"
                              style={{ backgroundColor: colorCode }}
                            ></div>
                          </div>
                          <div className="flex flex-row w-full items-center justify-between h-[35px]">
                            <div className="font-[600] text-[14px]/[22px]">
                              اعضا
                            </div>
                            <div className="w-[35px] h-[35px]">
                              <img
                                className="rounded-full"
                                src={
                                  frame
                                } /* TODO: we should pass profile picture to src  */
                              />
                            </div>
                          </div>
                        </div>
                        <div className="px-[19px] w-full">
                          <Button
                            title={"ساختن ورک اسپیس"}
                            classNames={"w-full mt-[60px]"}
                            handleClick={handleSubmit(onSubmit)}
                          />
                        </div>
                      </form>
                    </Card>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CreateWorkspace;
