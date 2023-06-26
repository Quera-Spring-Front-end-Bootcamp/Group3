import { PermissionTitle } from "./PermissionTitle";
import { CopyLink } from "./CopyLink";
import { ProjectInvitationForm } from "./ProjectInvitationForm";
import profile from "../../assets/images/profile.png";
import Card from "../Card/Card";
import { SharedUser } from "./SharedUser";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ShareCard = ({
  openShareModal,
  setOpenShareModal,
  title
}) => {
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
    setOpenShareModal(false);
  };

  return (
    <>
      <Transition appear show={openShareModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel>
                  <Card
                    closeIcon={true}
                    title={title}
                    titleClassName="w-full text-center font-semibold"
                    handleClose={handleClose}
                    className={
                      openShareModal
                        ? "w-[470px] rounded-xl  p-5 bg-white flex flex-col"
                        : "hidden"
                    }
                  >
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
                          <PermissionTitle isOwner={user.isOwner} title={title} />
                        </div>
                      ))}
                    </div>
                  </Card>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ShareCard;