import { PermissionTitle } from "./PermissionTitle";
import { CopyLink } from "./CopyLink";
import { ProjectInvitationForm } from "./ProjectInvitationForm";
import profile from "../../assets/images/profile.png";
import Card from "../Card/Card";
import icons from "../../assets/Icons";
import { SharedUser } from "./SharedUser";

const ShareProjectCard = ({ openModal, setOpenModal }) => {
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
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Card
      className={
        openModal
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
      <ProjectInvitationForm />
      <CopyLink className="mb-[29px]" />
      <span className="text-sm text-[#7d828c] block mb-5">
        اشتراک‌ گذاشته شده با
      </span>
      <div className="flex  flex-col gap-5">
        {info.map((user) => (
          <div className="flex justify-between " key={user.id}>
            <SharedUser
              name={user.name}
              email={user.email}
              image={user.image}
              isOwner={user.isOwner}
            />
            <PermissionTitle isOwner={user.isOwner} />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ShareProjectCard;
