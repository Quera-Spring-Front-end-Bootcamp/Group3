export const BoardTitle = ({ badgeValue }) => {
  const card = [
    { id: "1", title: "Open", color: "#F98F2E" },
    { id: "2", title: "In progress", color: "#2E7FF9" },
    { id: "3", title: "Pending", color: "#DEC908" },
    { id: "4", title: "To Do", color: "#F98F2E" },
  ];
  return (
    <div className="flex gap-5 mt-5">
      {card.map((item) => (
        <div
          key={item.id}
          className={`max-w-[250px] w-full px-4 py-2 flex gap-1 items-center  shadow-[0_2px_8px_rgba(0,0,0,0.18)] rounded border-t `}
          style={{ borderTopColor: item.color }}
        >
          <span className="text-[#1E1E1E] text-base font-medium">
            {item.title}
          </span>
          <span className="text-[10px] p-1  grid items-center bg-[#F4F4F4] text-[#1E1E1E] font-medium rounded-full">
            {badgeValue}
          </span>
        </div>
      ))}
    </div>
  );
};
BoardTitle.defaultProps = {
  badgeValue: 0,
};
