export const ColumnMore = ({
  icon,
  title,
  handleClick,
  className,
  ...props
}) => {
  return (
    <div
      className={`flex cursor-pointer ${className}`}
      onClick={handleClick}
      {...props}
    >
      <span className="flex flex-row items-center w-5 justify-center">
        {icon}
      </span>
      <span className=" font-normal">{title}</span>
    </div>
  );
};

ColumnMore.defaultProps = {
  title: "عنوان",
  icon: "محل ایکون",
  className: "gap-[10px] text-[#1e1e1e]",
};
