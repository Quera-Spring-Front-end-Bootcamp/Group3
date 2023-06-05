import BackLeftIcon from "../../assets/Icons/BackLeftIcon";
import CloseIcon from "../../assets/Icons/CloseIcon";

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
    <div className={`flex flex-col bg-white ${className}`}>
      {(title || closeIcon || backIcon) && (
        <div className={" flex flex-row items-center  w-full justify-between"}>
          {closeIcon ? (
            <button
              className="w-5 flex flex-row justify-center"
              onClick={handleClose}
            >
              {<CloseIcon />}
            </button>
          ) : (
            <div className="w-5"></div>
          )}
          {title && <p className={`${titleClassName}`}>{title}</p>}
          {backIcon ? (
            <button
              className="w-5 flex flex-row justify-center"
              onClick={handleBack}
            >
              {backIcon && <BackLeftIcon />}
            </button>
          ) : (
            <div className="w-5"></div>
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
  titleClassName: "font-semibold text-[32px]/[50px] text-right  ",
};

export default Card;
