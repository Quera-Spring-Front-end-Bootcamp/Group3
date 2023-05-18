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

  // const changeHandler = (event) => {
  //   setEmail(event.target.value);
  // };

  return (
    <AuthCard
      title={"فراموشی رمز عبور"}
      className={
        "w-[463px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      }
    >
      <form className="w-full mt-7" onSubmit={handleSubmit(onSubmit, onError)}>
        <Input
          type={"email"}
          name={"email"}
          label={"ایمیل خود را وارد کنید"}
          id={"email"}
          register={register}
        />
        <Button
          title={"دریافت ایمیل بازیابی رمز عبور"}
          classNames={"w-full text-center mt-5"}
          type={"submit"}
        />
      </form>
    </AuthCard>
  );
};
export default Forget;
