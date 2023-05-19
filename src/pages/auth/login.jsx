import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthCard from "../../components/Card/AuthCard";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handelRedirectForgetPage = () => {
    navigate('/auth/forget')
  }

  const handelRedirectRegisterPage = () => {
    navigate('/auth/register')
  }
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <AuthCard
      title="به کوئرا تسک منیجر خوش برگشتی :)"
      className="w-[520px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <form className="w-full mt-7" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            type={"email"}
            label={"ایمیل"}
            name={"email"}
            register={register}
            objectValidator={{
              required: "این فیلد الزامی می باشد!",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "ایمیل معتبر نمی باشد.",
              },
            }}
          />
          {errors.email && (
            <p className="text-red-500 mt-1 text-xs">{errors.email.message}</p>
          )}
        </div>
        <div className="mt-4">
          <Input
            type="password"
            label="رمز عبور "
            name={"password"}
            register={register}
            objectValidator={{
              required: "این فیلد الزامی می باشد!",
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g,
                message:
                  "رمز عبور معتبر نمی باشد.",
              }
            }}
          />
          {errors.password && (
            <p className="text-red-500 mt-1 text-xs">
              {errors.password.message}
            </p>
          )}
        </div>
        <a
          className="text-xs text-[#208D8E] cursor-pointer"
          onClick={handelRedirectForgetPage}
        >
          رمز عبور را فراموش کرده‌ای؟
        </a>
        <Button
          title={"ورود"}
          type={"submit"}
          classNames={"w-full text-center mt-5"}
        />
        <div className="font-normal text-base text-center mt-4">
          ثبت‌نام نکرده‌ای؟
          <a
            className="mr-2 text-[#208D8E] cursor-pointer"
            onClick={handelRedirectRegisterPage}
          >
            ثبت‌نام
          </a>
        </div>
      </form>
    </AuthCard>
  );
};
export default Login;
