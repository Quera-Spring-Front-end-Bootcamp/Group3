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
      <span>{icon}</span>
      <span className=" font-normal">{title}</span>
    </div>
  );
};

ColumnMore.defaultProps = {
  className: "gap-[10px] text-[#1e1e1e]",
};
