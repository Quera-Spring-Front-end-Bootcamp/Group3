import Card from "./Card/Card";
import icons from "../assets/Icons";

function PrioritySelection({ setFlag }) {
  const flagItems = [
    { id: "urgent", name: "فوری", icon: icons.FlagRed },
    { id: "high", name: "بالا", icon: icons.FlagYellow },
    { id: "medium", name: "متوسط", icon: icons.FlagGreen },
    { id: "low", name: "پایین", icon: icons.FlagGray },
  ];

  return (
    <Card
      className={
        "shadow-[0_4px_16px_0px_rgba(0,0,0,0.16)] p-[12px] rounded-[8px] items-center w-[166px]"
      }
    >
      <div className="flex flex-col items-start gap-[12px] w-[142px]">
        {flagItems.map((flag) => (
          <button
            className="flex flex-row items-center justify-end gap-[8px]"
            key={flag.name}
            onClick={() => setFlag([flag.id, flag.icon])}
          >
            <div className="w-[20px] h-[20px]">{flag.icon}</div>
            <div className="font-[400] text-[14px]/[21px] text-right text-[#1E1E1E]">
              {flag.name}
            </div>
          </button>
        ))}
        <button
          onClick={() => setFlag(false)}
          className="flex flex-row items-center pt-[4px] justify-end gap-[8px]"
        >
          <div className="w-[20px] h-[20px]">{icons.DeactiveIcon}</div>
          <div className="font-[400] text-[14px]/[21px] text-right text-[#534D60]">
            حذف اولویت
          </div>
        </button>
      </div>
    </Card>
  );
}

export default PrioritySelection;
