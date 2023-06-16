import { useForm } from "react-hook-form";
import Card from "../../components/Card/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import toast from "react-hot-toast";
import { useNavigate,useLocation } from "react-router-dom";
import AXIOS from "../../Utils/axios";

//  لینک ایمیل شده جهت تست به فرمت زیر تغییر یابد و توکن جدید جایگزین گردد
// http://localhost:5173/auth/resetpassword?token=f8de51190f96a72d80749bbebf6cefdb617bc9bf

const ResetPassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const query = new URLSearchParams(useLocation().search)
  const navigate = useNavigate();

  async function onSubmit(data) {

    if (data.password === data.confirmPassword) {
      try {
        await AXIOS.post("/auth/reset-password", {
          token: query.get("token"),
          password: data.password,
        });
        toast.success("عملیات با موفقیت انجام شد.");
        navigate("/main/listView");
    } catch (e) {
        toast.error("عملیات با خطا مواجه شد.");
      }

    }else {
      toast.error("داده های وارده یکسان نیستند")
    }

  }

  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen">
      <Card title="عملیات بازنشانی رمز">
        <form className="w-full mt-7" onSubmit={handleSubmit(onSubmit)}>

          <div className="mt-4">
            <Input
              type="password"
              label="رمز عبور جدید"
              id="password"
              error={errors.password}
              register={register("password", {
                required: "این فیلد الزامی می باشد!",
                // pattern: {
                //   value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g,
                //   message:
                //     "پسورد باید حداقل یک عدد و یک حرف بزرگ و کوچک و حداقل 8 کاراکتر یا بیشتر داشته باشد.",
                // },
              })}
            />
          </div>
          <div className="mt-4">
            <Input
              type="Password"
              label="تایید رمز عبور"
              id="confirmPassword"
              error={errors.password}
              register={register("confirmPassword", {
                required: "این فیلد الزامی می باشد!",
                // pattern: {
                //   value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g,
                //   message:
                //     "پسورد باید حداقل یک عدد و یک حرف بزرگ و کوچک و حداقل 8 کاراکتر یا بیشتر داشته باشد.",
                // },
              })}
            />
          </div>
          <Button
            title={"ثبت"}
            type={"submit"}
            classNames={"w-full text-center mt-5 "}
          />
        </form>
      </Card>
    </div>
  );
};
export default ResetPassword;
