// TODO: add animation for style changes.

import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Card from "./Card/Card";

import Icons from "../assets/Icons";
import frame from "../assets/images/frame.png";
import toast from "react-hot-toast";

/* define a onClose function in parent component that will close this modal.
for example:
const [showModal, setShowModal] = useState(true);
onClose={() => {
            setShowModal(false);
          }}
*/
function CreateWorkspace({ onClose }) {
  const [colorCode, setColorCode] = useState("#7D828C");
  const [name, setName] = useState("");
  const [step, setStep] = useState(1);

  const closeHandler = () => {
    onClose();
  };

  const backHandler = () => {
    setStep((prevState) => prevState - 1);
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
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {step === 1 && (
        <Card
          className="p-6 rounded-[8px] w-[500px]"
          title={"ساختن ورک اسپیس جدید"}
          closeIcon={true}
          backIcon={false}
          titleClassName={"text-center font-bold text-[24px]/[37px]"}
          handleClose={closeHandler}
        >
          <div className="flex w-full flex-row justify-start items-start gap-[20px] mt-[40px]">
            <div className="flex flex-col w-full items-start gap-[20px]">
              <div className="px-[19px] w-full">
                <Input
                  type={"text"}
                  label={"نام ورک اسپیس"}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                />
              </div>
            </div>
          </div>
          <div className="px-[19px] w-full">
            <Button
              title={"ادامه"}
              classNames={"w-full mt-[60px]"}
              handleClick={() => {
                setStep(2);
              }}
            />
          </div>
        </Card>
      )}
      {step === 2 && (
        <Card
          className="p-6 rounded-[8px] w-[500px]"
          title={"انتخاب رنگ ورک اسپیس"}
          closeIcon={true}
          backIcon={true}
          titleClassName={"text-center font-bold text-[24px]/[37px]"}
          handleClose={closeHandler}
          handleBack={backHandler}
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
                  {Icons.noneIcon}
                </button>
                {colors.map((color, index) => {
                  return (
                    <button
                      key={index}
                      className={`block relative rounded-sm w-[15px] ${
                        color == colorCode && "w-[24px] h-[24px]"
                      } h-[15px] transition-all duration-300 ease-in-out`}
                      style={{ backgroundColor: color }}
                      onClick={() => setColorCode(color)}
                    >
                      {color == colorCode && Icons.checkIcon}
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
              handleClick={() => {
                setStep(3);
              }}
            />
          </div>
        </Card>
      )}
      {step === 3 && (
        <Card
          className="p-6 rounded-[8px] w-[500px]"
          title={"مرور اطلاعات"}
          closeIcon={true}
          backIcon={true}
          titleClassName={"text-center font-bold text-[24px]/[37px]"}
          handleClose={closeHandler}
          handleBack={backHandler}
        >
          <div className="flex w-full flex-col justify-start items-start gap-[12px] border-[0.5px] border-[#AAAAAA] rounded-[8px] mt-[40px] px-[12px] py-[16px]">
            <div className="flex flex-row w-full items-center justify-between h-[35px]">
              <div className="font-normal font-[600] text-[14px]/[22px]">
                نام ورک اسپیس
              </div>
              <div className="font-normal font-[600] text-[14px]/[22px]">
                {name}
              </div>
            </div>
            <div className="flex flex-row w-full items-center justify-between h-[35px]">
              <div className="font-normal font-[600] text-[14px]/[22px]">
                رنگ ورک اسپیس
              </div>
              <div
                className="block relative rounded-sm w-[15px] h-[15px]"
                style={{ backgroundColor: colorCode }}
              ></div>
            </div>
            <div className="flex flex-row w-full items-center justify-between h-[35px]">
              <div className="font-normal font-[600] text-[14px]/[22px]">
                اعضا
              </div>
              <div className="w-[35px] h-[35px]">
                <img
                  className="rounded-full"
                  src={frame} /* TODO: we should pass profile picture to src  */
                />
              </div>
            </div>
          </div>
          <div className="px-[19px] w-full">
            <Button
              title={"ساختن ورک اسپیس"}
              classNames={"w-full mt-[60px]"}
              handleClick={
                //TODO: Connect to API and send this info to server.
                () => {
                  {
                    !name && toast("یک نام انتخاب کنید");
                  }
                  {
                    name && console.log(name, colorCode);
                  }
                }
              }
            />
          </div>
        </Card>
      )}
    </div>
  );
}

export default CreateWorkspace;
