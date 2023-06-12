export const SharedUser = ({ name, email, image, isOwner }) => {
  const initials = name
    .replace(/\b(\w)\w+/g, "$1")
    .replace(/\s/g, "")
    .replace(/\.$/, "")
    .toUpperCase();
  const colors = ["#F27474", "#EAF562", "#DE88FD", "#71FDA9"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const imgStyle = "w-[34px] h-[34px] rounded-full  ml-[7px]";
  return (
    <div className="flex">
      <div className="flex items-center">
        {image ? (
          <img
            src={image}
            alt="User"
            className={`object-contain ${imgStyle}`}
          />
        ) : (
          <div
            className={`flex justify-center items-center text-center  ${imgStyle}`}
            style={{ backgroundColor: randomColor }}
          >
            {initials}
          </div>
        )}
        <span className="text-[#1e1e1e] text-sm ml-3 block">
          {isOwner ? "من" : `${email}`}
        </span>
        <p>
          {isOwner && (
            <span className="flex bg-[#A5E4F8]  rounded-md px-2 py-1 text-xs text-[#1E1E1E] ">
              workspace owner
            </span>
          )}
        </p>
      </div>
    </div>
  );
};
