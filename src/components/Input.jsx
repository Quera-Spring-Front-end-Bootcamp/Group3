const Input = ({ type, label, value, onChange, register, error, ...props }) => {
  return (
    <div className="relative">
      <label
        className={
          (type === "checkbox"
            ? "absolute right-8 text-base "
            : "text-sm/[21px] flex pb-2") + " text-black"
        }
      >
        {label}
      </label>
      {type === "checkbox" ? (
        <input
          type={type}
          checked={value}
          onChange={onChange}
          {...register}
          {...props}
          className="w-5 h-5 border border-[#aaaaaa] rounded-md placeholder:text-[#959595] pr-4 "
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          {...register}
          {...props}
          className="w-full h-10 border border-[#aaaaaa] rounded-md placeholder:text-[#959595] pr-4 "
        />
      )}
      {error && <p className="text-red-500 mt-1 text-xs">{error.message}</p>}
    </div>
  );
};

export default Input;
