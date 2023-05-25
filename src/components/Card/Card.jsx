import icons from "../../assets/Icons";

const Card = ({
  title,
  children,
  className,
  closeIcon,
  closeIconLeft,
  backIcon,
  handleClose,
  handleBack,
  titleClassName,
}) => {
  return (
    <div className={`flex flex-col  bg-white ${className}`}>
      {(title || closeIcon || closeIconLeft || backIcon) && (
        <div className="flex flex-row items-center justify-between w-full">
          {closeIcon && (
            <button
              className="w-5 flex flex-row justify-center"
              onClick={handleClose}
            >
              {icons.CloseIcon}
            </button>
          )}
          {title && <p className={`${titleClassName}`}>{title}</p>}
          {(backIcon || closeIconLeft) && (
            <button
              className="w-5 flex flex-row justify-center"
              onClick={handleBack || handleClose}
            >
              {backIcon && icons.BackIcon}
              {closeIconLeft && icons.CloseIcon}
            </button>
          )}
        </div>
      )}

      {children}
    </div>
  );
};

Card.defaultProps = {
  className:
    "shadow-[0_12px_50px_-15px_rgba(0,0,0,0.18)] p-6 rounded-[20px] items-center",
  titleClassName: "font-semibold text-[32px]/[50px] text-right",
};

export default Card;
