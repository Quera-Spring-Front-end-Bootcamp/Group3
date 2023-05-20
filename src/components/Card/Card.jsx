const Card = ({ title, children, className }) => {
  return (
    <div className={`flex flex-col items-center bg-white ${className}`}>
      <p className="font-semibold text-[32px]/[50px] text-right">{title}</p>
      {children}
    </div>
  );
};

Card.defaultProps = {
  title: "عنوان",
  className: "shadow-[0_12px_50px_-15px_rgba(0,0,0,0.18)] p-6 rounded-[20px]",
};

export default Card;
