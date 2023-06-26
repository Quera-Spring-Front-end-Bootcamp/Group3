import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Card from "../../components/Card/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import toast from "react-hot-toast";
import { userLogin } from "../../redux/slices/auth/authActions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate("/profile/personalinfo");
    }
  }, [navigate, user]);

  const handelRedirectForgetPage = () => {
    navigate("/auth/forget");
  };

  const handelRedirectRegisterPage = () => {
    navigate("/auth/register");
  };

  const onSubmit = (data) => {
    try {
      dispatch(
        userLogin({
          emailOrUsername: data.email,
          password: data.password,
        })
      );
      toast.success("شما با موفقیت وارد شدید :)");
      navigate("/main");
    } catch (error) {
      toast.error("ورود شما با مشکل رو به رو شد :(");
    }
  };

  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen">
      <Card title="به کوئرا تسک منیجر خوش برگشتی :)">
        <form className="w-full mt-7" onSubmit={handleSubmit(onSubmit)}>
          <div>
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
                // pattern: {
                //     value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g,
                //     message:
                //       "پسورد باید حداقل یک عدد و یک حرف بزرگ و کوچک و حداقل 8 کاراکتر یا بیشتر داشته باشد.",
                //   },
              })}
            />
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
      </Card>
    </div>
  );
};
export default Login;
