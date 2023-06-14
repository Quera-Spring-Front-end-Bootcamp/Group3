import { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card/Card";
import { toast } from "react-hot-toast";
import { dataColors } from "../../theme/theme";
import CheckIcon from "../../assets/Icons/CheckIcon";

export const Setting = ({ color, setColor }) => {
  const [enabled, setEnabled] = useState(false);
  const [selectedColor, setSelectedColor] = useState(color);
  return (
    <Card className="w-[354px] h-[550px] gird gap-[35px]  absolute top-[90px] left-[688x]">
      <p className="font-bold text-[31px] text-right ">تنظیمات</p>
      <div className="grid gap-[50px]">
        <div>
          <span className="text-sm/[21px] flex pb-2 text-black">انتخاب تم</span>
          <div className="flex gap-[13px] items-center">
            {dataColors.map((c, index) => {
              const isSelected = c === selectedColor;
              return (
                <div
                  key={index}
                  className={
                    (isSelected ? " w-10 h-10 " : " w-4 h-4") +
                    " flex  items-center justify-center cursor-pointer rounded-full transition-all duration-300 ease-in-out text-textPrimary bg-primary"
                  }
                  style={{ backgroundColor: `#${c}` }}
                  onClick={() => setSelectedColor(c)}
                >
                  {isSelected && <CheckIcon color="white" />}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-[14px]">
          <label className="inline-flex relative items-center  cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              readOnly
            />
            <div
              onClick={() => {
                setEnabled(!enabled);
              }}
              className={
                (!enabled
                  ? " after:rounded-tl-full after:rounded-bl-full   after:left-[2px] after:bg-[#8A8989]"
                  : "after:rounded-tr-full after:rounded-br-full   after:left-[-2px] after:bg-primary") +
                ` w-[55px] h-6 bg-white rounded-full border border-black
              peer 
               peer-checked:after:translate-x-full
                after:content-['']
                 after:absolute 
                 after:top-0.5
                
                  after:bg-[#8A8989]
                   after:w-[27px]
                   after:h-5 
                     after:transition-all `
              }
            ></div>
          </label>
          <span
            onClick={() => {
              setEnabled(!enabled);
            }}
            className="cursor-pointer text-sm/[21px]  text-black"
          >
            حالت شب
          </span>
        </div>
        <Button
          color="secondary"
          title={"ثبت تغییرات"}
          type={"submit"}
          classNames={"w-full text-center  h-9 "}
          handleClick={() => {
            setColor(selectedColor);
            toast.success("تغییرات با موفقیت انجام  شد :)");
          }}
        />
      </div>
    </Card>
  );
};
