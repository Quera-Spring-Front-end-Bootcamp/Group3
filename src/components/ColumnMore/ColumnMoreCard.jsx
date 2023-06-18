import ShareIcon from "../../assets/Icons/ShareIcon";
import Button from "../Button";
import Card from "../Card/Card";
import ColumnMoreItem from "./ColumnMoreItem";

export const ColumMoreCard = ({ data, handleOpenModal }) => {
  return (
    <Card className="w-[184px] rounded-[8px] shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] top-full  gap-[12px] p-[12px] text-sm z-10">
      {data.map((item) => (
        <ColumnMoreItem
          key={item.id}
          title={item.title}
          icon={item.icon}
          style={item.title === "حذف" ? { color: item.bg } : null}
          onClick={item.onClick}
        />
      ))}
      <Button
        handleClick={handleOpenModal}
        title="اشتراک‌گذاری"
        startIcon={<ShareIcon color="white" />}
        className="rounded-md	bg-primary py-2 font-bold text-white  text-xs flex flex-row items-center px-3 gap-2 mt-1"
      />
    </Card>
  );
};
