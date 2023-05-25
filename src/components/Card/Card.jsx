import icons from "../../assets/Icons";

const Card = ({
  title,
  children,
  className,
  closeIcon,
  backIcon,
  handleClose,
  handleBack,
  titleClassName,
}) => {
  return (
    <div className={`flex flex-col  bg-white ${className}`}>
      <div className="flex flex-row items-center justify-between w-full">
        <button
          className="w-5 flex flex-row justify-center"
          onClick={handleClose}
        >
          {closeIcon && icons.CloseIcon}
        </button>
        {title && <p className={`${titleClassName}`}>{title}</p>}
        <button
          className="w-5 flex flex-row justify-center"
          onClick={handleBack}
        >
          {backIcon && icons.BackIcon}
        </button>
      </div>

      {children}
    </div>
  );
};

Card.defaultProps = {
  className: "shadow-[0_12px_50px_-15px_rgba(0,0,0,0.18)] p-6 rounded-[20px]",
  titleClassName: "font-semibold text-[32px]/[50px] text-right",
};

export default Card;
