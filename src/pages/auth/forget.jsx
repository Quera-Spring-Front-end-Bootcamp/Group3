import Button from "../../components/Button";
import AuthCard from "../../components/Card/AuthCard";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Forget = () => {
  const { register, handleSubmit } = useForm();
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
            type={"email"}
            label={"ایمیل خود را وارد کنید"}
            id={"email"}
            register={register("email", { required: true })}
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
