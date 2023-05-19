import Button from "../../components/Button";
import AuthCard from "../../components/Card/AuthCard";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Forget = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const enteredEmail = data.email;
    //check if email is registered
    if (enteredEmail) {
      navigate("/auth/resetpassword");
    }
  };

  const onError = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen">
      <AuthCard title={"فراموشی رمز عبور"} className="w-[463px]">
        <form
          className="w-full mt-7"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
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
      </AuthCard>
    </div>
  );
};
export default Forget;
