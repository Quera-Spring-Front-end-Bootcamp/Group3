import { useForm } from "react-hook-form";
import AuthCard from "../../components/Card/AuthCard";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen">
      <AuthCard title="ثبت‌نام در کوئرا تسک منیجر">
        <form className="w-full mt-7" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              label="نام کامل"
              id="fname"
              error={errors.fname}
              register={register("fname", {
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
      </AuthCard>
    </div>
  );
};
export default Register;
