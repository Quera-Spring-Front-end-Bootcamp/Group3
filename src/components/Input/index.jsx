
const Input = ({ type, label, value, onChange,...props }) => {
  return (
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
      {type === "checkbox" ? (
        <input
          type={type}
          checked={value}
          onChange={onChange}
          {...props}
          className="w-5 h-5 border border-[#aaaaaa] rounded-md placeholder:text-[#959595] pr-4 "
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          {...props}
          className="w-full  h-10 border border-[#aaaaaa] rounded-md placeholder:text-[#959595] pr-4 "
        />
      )}
    </div>
  );
};

export default Input;
