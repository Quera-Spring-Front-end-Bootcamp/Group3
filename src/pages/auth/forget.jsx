import AXIOS from "../../Utils/axios";
import Button from "../../components/Button";
import Card from "../../components/Card/Card";
import Input from "../../components/Input";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Forget = () => {
  const [isEmailSend,setIsEmailSend] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const enteredEmail = data.email;
    try {
      await AXIOS.post("/auth/forget-password", {
        email: enteredEmail,
      });
      toast.success("عملیات با موفقیت انجام شد :)");

      setIsEmailSend(true)
    } catch (e) {
      toast.error("عملیات با مشکل رو به رو شد :(");
    }
  }

  const emailSend = <div className="flex flex-row items-center justify-center w-screen h-screen">
      <Card title={"فراموشی رمز عبور"}>
        <p className="text-[14px] mt-7">
          لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.
        </p>
      </Card>
    </div>

  return (
    <>
      {!isEmailSend && <div className="flex flex-row items-center justify-center w-screen h-screen">
      <Card
        title={"فراموشی رمز عبور"}
        className="w-[463px] shadow-[0_12px_50px_-15px_rgba(0,0,0,0.18)] p-6 rounded-[20px]"
      >
        <form className="w-full mt-7" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="ایمیل خود را وارد کنید"
            id="email"
            error={errors.email}
            register={register("email", {
              required: "این فیلد الزامی می باشد!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل معتبر نمی باشد.",
              },
            })}
          />
          <Button
            title={"دریافت ایمیل بازیابی رمز عبور"}
            classNames={"w-full mt-5"}
            type={"submit"}
          />
        </form>
      </Card>
      </div>}
       {isEmailSend && emailSend}     
    </>
  )
};
export default Forget;


