import { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { toast } from "react-hot-toast";
import CheckIcon from "../../assets/Icons/CheckIcon";
import Card from "../Card/Card";
import Input from "../Input";
import Button from "../Button";
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
const CreateNewBoardTitle = ({
  setOpenNewBoardModal,
  openNewBoardModal,
  handleAdd,
}) => {
  const [colorBoarder, setColorBoarder] = useState(colors[0]);
  const [name, setName] = useState("");

  const handleClose = () => {
    setOpenNewBoardModal(false);
  };

  return (
    <>
      <Transition appear show={openNewBoardModal} as={Fragment}>
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
                  <Card
                    className="p-6  w-[500px] gap-4 rounded-lg bg-white shadow-[0_8px_12px_0_rgba(0,0,0,0.2)]"
                    title="ساختن برد جدید"
                    closeIcon={true}
                    backIcon={false}
                    titleClassName={"text-center font-bold text-[24px]/[37px]"}
                    handleClose={handleClose}
                  >
                    <Input
                      type={"text"}
                      label={"نام برد "}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                    />
                    <div className="flex flex-col gap-1">
                      <span className="text-sm/[21px] flex pb-2">
                        انتخاب رنگ
                      </span>
                      <div className="flex gap-2 items-center">
                        {colors.map((color) => {
                          return (
                            <button
                              key={color}
                              className={`flex rounded-sm w-[15px] h-[15px] transition-all duration-300 ease-in-out  ${
                                color == colorBoarder && "w-[24px] h-[24px]"
                              }`}
                              style={{ backgroundColor: color }}
                              onClick={() =>
                                setColorBoarder(!color ? color[1] : color)
                              }
                            >
                              {color == colorBoarder && (
                                <CheckIcon color="white" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <Button
                      title={"ساختن برد "}
                      classNames={"w-full "}
                      handleClick={
                        () => {
                          {
                            !name && toast.error("یک نام انتخاب کنید");
                          }
                          {
                            name && console.log(name, colorBoarder);
                          }
                         
                        }
                      }
                    />
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

export default CreateNewBoardTitle;
