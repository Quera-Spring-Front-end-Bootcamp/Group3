import { useState } from "react";
import { Link } from "../../assets/icons";

export const CopyLink = ({ className }) => {
  const [isCopied, setIsCopied] = useState(false);
  const privateLink = location.href ;
  
  const handleCopy = () => {
    navigator.clipboard.writeText(privateLink);
    setIsCopied(true);
  };

  return (
    <div className={`flex justify-between ${className}`}>
      <div className="flex ">
        <Link />
        لینک خصوصی
      </div>
      <button
        onClick={handleCopy}
        className="text-xs flex gap-[10px] py-1 px-2 border border-[#e9ebf0] rounded-md cursor-pointer"
      >
        {isCopied ? "لینک کپی شد!" : "کپی لینک"}
      </button>
    </div>
  );
};
