const Input = ({ type, label }) => {
  return (
    <>
      <div className="relative">
        <label
          htmlFor={type}
          className={
            (type === "checkbox"
              ? "absolute right-8 text-base "
              : "text-sm flex pb-2") + " text-black"
          }
        >
          {label}
        </label>
        <input
          type={type}
          id={type}
          name={type}
          className={
            (type === "checkbox" ? " w-5 h-5 " : "w-full  h-10 ") +
            " border border-[#aaaaaa] rounded-md placeholder:text-[#959595] pr-4 "
          }
        />
      </div>
    </>
  );
};

export default Input;
