import { toast } from "react-hot-toast";

export const copyLink = (privateLink) => {
    navigator.clipboard.writeText(privateLink);
    toast.success("لینک  با موفقیت کپی شد");
  };
