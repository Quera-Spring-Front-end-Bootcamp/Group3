import { DropDown } from "./DropDown";
import { CopyLink } from "./CopyLink";
import { useState } from "react";
import { Admin } from "./Admin";
import { FormInvite } from "./FormInvite";
import profile from "../../assets/profile.png";
import Card from "../Card/Card";
import icons from "../../assets/Icons";

const Share = () => {
  const info = [
    {
      id: 1,
      name: "Reza  Samadi",
      email: "test@test.com",
      image: profile,
      isOwner: true,
    },
    {
      id: 2,
      name: "Vahid Razavi",
      email: "test@test.com",
      isOwner: false,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(true);
  };

  return (
    <Card
      className={
        !isOpen
          ? "max-w-[470px] w-full rounded-xl  p-5 bg-white flex flex-col"
          : "hidden"
      }
    >
      <div className="flex items-center pb-[45px]">
        <div className="cursor-pointer" onClick={handleClose}>
          {icons.CloseIcon}
        </div>
        <div className="w-full text-center font-semibold">
          به اشتراک‌گذاری پروژه‌
        </div>
      </div>
      <FormInvite />
      <CopyLink className="mb-[29px]" />
      <span className="text-sm text-[#7d828c] block mb-5">
        اشتراک‌ گذاشته شده با
      </span>
      <div className="flex  flex-col gap-5">
        {info.map((user) => (
          <div className="flex justify-between " key={user.id}>
            <Admin
              name={user.name}
              email={user.email}
              image={user.image}
              isOwner={user.isOwner}
            />
            <DropDown isOwner={user.isOwner} />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Share;
