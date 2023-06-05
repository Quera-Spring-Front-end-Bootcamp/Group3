function Button({ title, handleClick, classNames, startIcon, ...props }) {
  return (
    <button
      onClick={handleClick}
      className={` rounded-md	bg-primary p-2.5 font-bold text-white  text-sm/[22px] flex flex-row items-center justify-center gap-1 ${classNames} `}
      {...props}
    >
      {startIcon}
      {title}
    </button>
  );
}

export default Button;