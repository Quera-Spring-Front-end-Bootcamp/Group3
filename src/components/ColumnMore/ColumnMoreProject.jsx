import icons from "../../assets/Icons";
import Button from "../Button";
import { ColumnMore } from "../ColumnMoreItem/ColumnMore";
import Card from "../Card/Card";
import { copyLink } from "../../Utils/copyLink";

export const ColumnMoreProject = () => {
  const privateLink = location.href;

  const removeColumnHandler = () => {
    console.log(`Remove `);
  };
  const handleClickShare = () => {
    console.log("open share workspace");
  };
  const handleCopy = () => {
    copyLink(privateLink);
  };
  const handleNameEdit = () => {
    console.log("Name Edit ");
  };
  const handleNewTask = () => {
    console.log("New Task ");
  };
  return (
    <Card className="w-[184px] rounded-[8px] shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] top-full  gap-[12px] p-[12px] ">
      <ColumnMore
        icon={icons.AddIcon}
        title="ساخت پروژه جدید"
        onClick={handleNewTask}
      />
      <ColumnMore
        icon={icons.EditIcon}
        title="ویراش نام ورک اسپیس"
        onClick={handleNameEdit}
      />
      <ColumnMore icon={icons.LinkIcon} title="کپی لینک" onClick={handleCopy} />
      <ColumnMore
        icon={icons.TrashIcon}
        title="حذف ستون"
        className="text-[#9F0000] gap-[10px]"
        onClick={() => removeColumnHandler()}
      />
      <Button
        title="اشتراک‌گذاری"
        startIcon={icons.ShareIcon}
        className="rounded-md	bg-primary py-2 font-bold text-white  text-xs flex flex-row items-center px-3 gap-2"
        handleClick={handleClickShare}
      />
    </Card>
  );
};
