import icons from "../../assets/Icons";
import { toast } from "react-hot-toast";

export const CopyLink = ({ className }) => {
  const privateLink = location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(privateLink);
    toast.success("لینک  با موفقیت کپی شد");
  };

  return (
    <div className={`flex justify-between ${className}`}>
      <div className="flex gap-2.5">
        {icons.LinkIcon}
        لینک خصوصی
      </div>
      <button
        onClick={handleCopy}
        className="text-xs flex gap-[10px] py-1 px-2 border border-[#e9ebf0] rounded-md cursor-pointer"
      >
        کپی لینک
      </button>
    </div>
  );
};
