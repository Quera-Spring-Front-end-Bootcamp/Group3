import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthCard from "../../components/Card/AuthCard";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Register = () => {
    const navigate = useNavigate();
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();


    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <AuthCard
        title="ثبت‌نام در کوئرا تسک منیجر"
        className="w-[402px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
        <form className="w-full mt-7" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              type={"fname"}
              label={"نام کامل"}
              name={"fname"}
              register={register}
              objectValidator={{ required: "این فیلد الزامی می باشد!" }}
            />
            {errors.fname && (
              <p className="text-red-500 mt-1 text-xs">
                {errors.fname.message}
              </p>
            )}
          </div>
          <div className="mt-4">
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
                }
              }}
            />
            {errors.email && (
              <p className="text-red-500 mt-1 text-xs">
                {errors.email.message}
              </p>
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
                    "پسورد باید حداقل یک عدد و یک حرف بزرگ و کوچک و حداقل 8 کاراکتر یا بیشتر داشته باشد.",
                }
              }}
            />
            {errors.password && (
              <p className="text-red-500 mt-1 text-xs">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="mt-4">
            <Input
              type="checkbox"
              label="قوانین و مقررات را می‌پذیرم."
              name={"rules"}
              register={register}
              objectValidator={{ required: "این فیلد الزامی می باشد!" }}
            />
            {errors.rules && (
              <p className="text-red-500 mt-1 text-xs">
                {errors.rules.message}
              </p>
            )}
          </div>
          <Button
            title={"ثبت‌نام"}
            type={"submit"}
            classNames={"w-full text-center mt-5"}
          />
        </form>
      </AuthCard>
    );
};
export default Register;
