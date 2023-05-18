const AuthCard = (props) => {
  return (
    <div
      className={`flex flex-col items-center shadow-md bg-white p-6 rounded-[20px] ${props.className}`}
    >
      <h2 className="font-bold">{props.title}</h2>
      {props.children}
    </div>
  );
};

export default AuthCard;
