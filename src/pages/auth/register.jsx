import { useForm } from "react-hook-form";
import Card from "../../components/Card/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AXIOS from "../../Utils/axios";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      await AXIOS.post("/auth/register", {
        username: data.firstName,
        email: data.email,
        password: data.password,
      });
      toast.success("ثبت نام شما با موفقیت انجام شد :)");
      navigate("/auth/login");
    } catch (e) {
      toast.error("ثبت نام شما با مشکل رو به رو شد :(");
    }
  }

  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen">
      <Card title="ثبت‌نام در کوئرا تسک منیجر">
        <form className="w-full mt-7" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              label="نام کامل"
              id="firstName"
              error={errors.firstName}
              register={register("firstName", {
                required: "این فیلد الزامی می باشد!",
              })}
            />
          </div>
          <div className="mt-4">
            <Input
              label="ایمیل"
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
          </div>
          <div className="mt-4">
            <Input
              type="password"
              label="رمز عبور "
              id="password"
              error={errors.password}
              register={register("password", {
                required: "این فیلد الزامی می باشد!",
              })}
            />
          </div>
          <div className="mt-4">
            <Input
              type="checkbox"
              label="قوانین و مقررات را می‌پذیرم."
              id="rules"
              error={errors.rules}
              register={register("rules", {
                required: "این فیلد الزامی می باشد!",
              })}
            />
          </div>
          <Button
            title={"ثبت‌نام"}
            type={"submit"}
            classNames={"w-full text-center mt-5"}
          />
        </form>
      </Card>
    </div>
  );
};
export default Register;
