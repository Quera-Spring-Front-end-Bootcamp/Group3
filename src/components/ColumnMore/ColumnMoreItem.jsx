function ColumnMoreItem({ icon, title, onClick, className, ...props }) {
  return (
    <div
      className={`flex cursor-pointer ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="flex flex-row items-center w-5 justify-center">
        {icon}
      </span>
      <span className=" font-normal">{title}</span>
    </div>
  );
}

ColumnMoreItem.defaultProps = {
  title: "عنوان",
  icon: "محل ایکون",
  className: "gap-[10px] text-[#1e1e1e]",
};

export default ColumnMoreItem;