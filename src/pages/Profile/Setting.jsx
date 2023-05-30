import { useState } from "react";
import icons from "../../assets/Icons";
import Button from "../../components/Button";
import Card from "../../components/Card/Card";

export const Setting = () => {
  const [colorCode, setColorCode] = useState("#208D8E");
  const [enabled, setEnabled] = useState(false);

  const colors = [
    "#208D8E",
    "#78C6B0",
    "#76BC86",
    "#80DC69",
    "#E46161",
    "#E17E80",
    "#EC8182",
    "#F3C567",
    "#E57A57",
    "#F1A25C",
  ];

  return (
    <Card className={"w-[354px] h-[550px] gird gap-[35px] "}>
      <p className="font-bold text-[31px] text-right ">تنظیمات</p>
      <div className="grid gap-[50px]">
        <div>
          <span className="text-sm/[21px] flex pb-2 text-black">انتخاب تم</span>
          <div className="flex gap-[13px] items-center">
            {colors.map((color, index) => {
              return (
                <button
                  key={index}
                  className={
                    (color === colorCode ? " w-10 h-10 " : " w-4 h-4") +
                    " flex  items-center justify-center rounded-full transition-all duration-300 ease-in-out"
                  }
                  style={{ backgroundColor: color }}
                  onClick={() => setColorCode(color)}
                >
                  {color == colorCode && icons.WhiteCheckIcon}
                </button>
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
          title={"ثبت تغییرات"}
          type={"submit"}
          classNames={"w-full text-center  h-9"}
        />
      </div>
    </Card>
  );
};
