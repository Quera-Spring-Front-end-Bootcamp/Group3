import { useForm } from "react-hook-form";
import Card from "../../components/Card/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import toast from "react-hot-toast";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

export const PersonalInfo = () => {
  const auth = useSelector((state) => state.auth);
  const {user} = auth
  const avatarName = user?.firstname ? user.firstname.charAt(0) + user.lastname.charAt(0):user?.username?.charAt(0)
  const [userData, setUserData] = useState({
    image: "",
    name: "",
    family: "",
    mobile: "",
  });

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const [image, setImage] = useState(null);
  const {
    register,
    setValue,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: userData });

  useEffect(() => {
    register("image");
    if (auth) {
      setValue("name", auth.user?.firstname || "");
      setValue("family", auth.user?.lastname || "");
      setValue("mobile", auth.user?.phone || "");
    }
  }, [auth]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.match(imageMimeType)) {
        setError("image", "نوع فرمت فایل معتبر نیست.");
        toast.error("نوع فرمت فایل معتبر نیست");
        return;
      }
    }
    setValue("image", file);
    setImage(file);
    getBase64(file).then((base64) => {
      localStorage["avatarUser"] = base64;
      console.debug("image stored",base64);
    });
  };

  const onSubmit = (data) => {
    setUserData(data);
    console.log("data", data);
    toast.success("ثبت تغییرات با موفقیت انجام شد :)");
  };

  return (
    <div className="">
      <Card className={"w-[354px] h-[550px] absolute top-[80px] left-[688x] "}>
        <p className="font-bold text-[31px] text-right">اطلاعات فردی</p>
        <form className="w-full mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex  gap-4 mb-8">
            <div className="relative inline-flex items-center justify-center w-[100px] h-[98px] overflow-hidden bg-[#EAF562] rounded-full ">
              {image ? (
                <img src={URL.createObjectURL(image)} alt="Profile Image" />
              ) : (
                <span className="font-medium mt-3 text-[34px] text-black ">
                  {avatarName}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-center mt-4 gap-6">
              <div>
                <input
                  type="file"
                  id="actual-btn"
                  name="image"
                  onChange={handleImageChange}
                  hidden
                  accept=".png, .jpg, .jpeg"
                />
                <label
                  className="text-primary text-xl font-medium border cursor-pointer border-primary rounded-lg p-[10px] w-[207px] h-[51px] mt-1"
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
