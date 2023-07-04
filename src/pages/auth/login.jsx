import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Card from "../../components/Card/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import toast from "react-hot-toast";
import AXIOS from "../../Utils/axios";
import store from "../../redux/store";
import {
  setAccessToken,
  setRefreshToken,
  setUser,
} from "../../redux/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handelRedirectForgetPage = () => {
    navigate("/auth/forget");
  };

  const handelRedirectRegisterPage = () => {
    navigate("/auth/register");
  };

  async function onSubmit(data) {
    try {
      const resp = await AXIOS.post("/auth/login", {
        emailOrUsername: data.email,
        password: data.password,
      });
      store.dispatch(setAccessToken(resp.data.data.accessToken));
      store.dispatch(setRefreshToken(resp.data.data.refreshToken));
      store.dispatch(setUser(resp.data.data.toBeSendUserData));
      toast.success("شما با موفقیت وارد شدید :)");
      navigate("/main");
    } catch (e) {
      toast.error("ورود شما با مشکل رو به رو شد :(");
    }
  }

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
              })}
            />
          </div>
          <a
            className="text-xs text-primary cursor-pointer"
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
              className="mr-2 text-primary cursor-pointer"
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
