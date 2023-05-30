import { useForm } from "react-hook-form";
import Card from "../../components/Card/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const imageMimeType = /image\/(png|jpg|jpeg)/i;

export const PersonalInfo = () => {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
 
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const f = data.image[0];
    if (!f.type.match(imageMimeType)) {
      toast.error("نوع فرمت فایل معتبر نیست")
      return;
    }
    setFile(f);
    console.log("data", data);
    toast.success("ثبت تغییرات با موفقیت انجام شد :)");
    // navigate("/");
  }

  return (
    <div className="">
      <Card className={"w-[354px] h-[550px] absolute top-[170px] left-[688x] "}>
        <p className="font-bold text-[31px] text-right">اطلاعات فردی</p>
        <form className="w-full mt-7" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex  gap-4 mb-8">
            <div className="relative inline-flex items-center justify-center w-[100px] h-[99px] overflow-hidden bg-[#EAF562] rounded-full ">
              {fileDataURL ? (
                <img src={fileDataURL} alt="Profile Image" />
              ) : (
                <span className="font-medium text-[34px] text-black ">NM</span>
              )}
            </div>
            <div className="flex flex-col justify-end gap-6">
              <div>
                <input
                  type="file"
                  id="actual-btn"
                  hidden
                  {...register("image")}
                  accept=".png, .jpg, .jpeg"
                />
                <label
                  className="text-primary text-xl font-medium border border-primary rounded-lg p-[10px] w-[207px] h-[51px] mt-1"
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
                  value: /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,
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

