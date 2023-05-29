import icons from "../../assets/Icons";
import Button from "../Button";
import Card from "../Card/Card";
import { ColumnMoreItem } from "../ColumnMoreItem/ColumnMoreItem";

export const ColumMoreCard = ({ workSpace }) => {
  const dataColumnMoreItemsWorkSpace = [
    { id: 1, title: "ساخت پروژه جدید", icon: icons.AddIcon },
    { id: 2, title: "   ویراش نام ورک اسپیس", icon: icons.EditIcon },
    { id: 3, title: "ویراش رنگ", icon: icons.PalletIcons },
    { id: 4, title: "کپی لینک", icon: icons.LinkIcon },
    { id: 5, title: "حذف", icon: icons.TrashIcon, bg: "#9F0000" },
  ];

  const dataColumnMoreItemsProject = [
    { id: 1, title: "ساخت تسک جدید", icon: icons.AddIcon },
    { id: 2, title: "ویراش نام پروژه  ", icon: icons.EditIcon },
    { id: 3, title: "کپی لینک", icon: icons.LinkIcon },
    { id: 4, title: "حذف", icon: icons.TrashIcon, bg: "#9F0000" },
  ];
  return (
    <Card className="w-[184px] rounded-[8px] shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] top-full  gap-[12px] p-[12px] text-sm ">
      {workSpace
        ? dataColumnMoreItemsWorkSpace.map((item) => (
            <ColumnMoreItem key={item.id} title={item.title} icon={item.icon} style={item.title ==="حذف" ? {color:item.bg}: null}/>
          ))
        : dataColumnMoreItemsProject.map((item) => (
            <ColumnMoreItem key={item.id} title={item.title} icon={item.icon} style={item.title ==="حذف" ? {color:item.bg}: null}/>
          ))}

      <Button
        title="اشتراک‌گذاری"
        startIcon={icons.ShareIcon}
        className="rounded-md	bg-primary py-2 font-bold text-white  text-xs flex flex-row items-center px-3 gap-2 mt-1"
      />
    </Card>
  );
};
