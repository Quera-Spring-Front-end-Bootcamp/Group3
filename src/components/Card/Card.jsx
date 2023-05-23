import icons from "../../assets/Icons";

const Card = ({ title, children, className, closeIcon, backIcon }) => {
  return (
    <div className={`flex flex-col  bg-white ${className}`}>
      <div className="flex flex-row items-center justify-between w-full">
        <div className="w-5 flex flex-row justify-center cursor-pointer ">
          {closeIcon && icons.CloseIcon}
        </div>
        {title && (
          <p className="font-semibold text-[32px]/[50px] text-right">{title}</p>
        )}
        <div className="w-5 flex flex-row justify-center">
          {backIcon && icons.BackIcon}
        </div>
      </div>

      {children}
    </div>
  );
};

Card.defaultProps = {
  className:
    "shadow-[0_12px_50px_-15px_rgba(0,0,0,0.18)] p-6 rounded-[20px] items-center",
};

export default Card;
