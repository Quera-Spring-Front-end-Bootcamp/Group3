import { useForm } from "react-hook-form";
import Card from "../../components/Card/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import toast from "react-hot-toast";

import { useState } from "react";


const imageMimeType = /image\/(png|jpg|jpeg)/i;

export const PersonalInfo = () => {
  const [userData, setUserData] = useState({
    image: "",
    name: "Nader",
    family: "Mohamadi",
    mobile: "09121234567",
  });
  const [fileDataURL, setFileDataURL] = useState(null);
  const [isAssighnImage, setIsAssighnImage] = useState(!!userData.image);
  const {
  register,
  formState: { errors },
  handleSubmit,
  } = useForm({defaultValues: userData});
  
 

  const onSubmit = (data) => {
    const f = data.image[0];
    if(f){
      if (!f.type.match(imageMimeType)) {
        toast.error("نوع فرمت فایل معتبر نیست");
        return;
      }
      setFileDataURL(URL.createObjectURL(f));
      setIsAssighnImage(true);
    }
    setUserData(data)
    
    console.log("data", data);
    toast.success("ثبت تغییرات با موفقیت انجام شد :)");

  }

  return (
    <div className="">
      <Card className={"w-[354px] h-[550px] absolute top-[166px] left-[688x] "}>
        <p className="font-bold text-[31px] text-right">اطلاعات فردی</p>
        <form className="w-full mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex  gap-4 mb-8">
            <div className="relative inline-flex items-center justify-center w-[100px] h-[98px] overflow-hidden bg-[#EAF562] rounded-full ">
              {isAssighnImage ? (
                <img src={fileDataURL} alt="Profile Image" />
              ) : (
                <span className="font-medium mt-3 text-[34px] text-black ">
                  {userData.name.charAt(0) + userData.family.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-center mt-4 gap-6">
              <div>
                <input
                  type="file"
                  id="actual-btn"
                  hidden
                  {...register("image")}
                  accept=".png, .jpg, .jpeg"
                />
                <label
                  className="text-[#208D8E] text-xl font-medium border cursor-pointer border-[#208D8E] rounded-lg p-[10px] w-[207px] h-[51px] mt-1"
                  htmlFor="actual-btn"
                >
                  ویرایش تصویر پروفایل
                </label>
              </div>
              <p className="font-normal text-xs text-[#8A8989] text-start ">
                این تصویر برای عموم قابل نمایش است.
              </p>
            </div>
          </div>
          <div className="my-5">
            <Input
              label="نام"
              id="name"
              error={errors.name}
              register={register("name", {
                required: "این فیلد الزامی می باشد!",
              })}
            />
          </div>
          <div>
            <Input
              label="نام خانوادگی"
              id="family"
              error={errors.family}
              register={register("family", {
                required: "این فیلد الزامی می باشد!",
              })}
            />
          </div>
          <div className="my-5">
            <Input
              label="شماره موبایل"
              id="mobile"
              error={errors.mobile}
              register={register("mobile", {
                required: "این فیلد الزامی می باشد!",
                pattern: {
                  value: /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/,
                  message: "شماره موبایل معتبر نمی باشد.",
                },
              })}
            />
          </div>
          <Button
            title={"ثبت تغییرات"}
            type={"submit"}
            classNames={"w-full text-center mt-12 h-9"}
          />
        </form>
      </Card>
    </div>
  );
};

