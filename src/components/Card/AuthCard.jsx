const AuthCard = (props) => {
  return (
    <div
      className={`flex flex-col items-center shadow-[0_12px_50px_-15px_rgba(0,0,0,0.18)] bg-white p-6 rounded-[20px] ${props.className}`}
    >
      <p className="font-semibold text-[32px]/[50px] text-right">
        {props.title}
      </p>
      {props.children}
    </div>
  );
};

export default AuthCard;
