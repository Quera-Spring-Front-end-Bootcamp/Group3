import { useForm } from "react-hook-form";
import Card from "../../components/Card/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import toast from "react-hot-toast";




export const AccountInfo = () => {

  const user = { userName: "Mt123456", email: "a@b.com", password: "123" };



  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({defaultValues: user});


  const onSubmit = (data) => {
    console.log(data);
    toast.success("ثبت تغییرات با موفقیت انجام شد :)");
 
  };

  const HandleAuth = () => {
    console.log("Auth");
  }
  return (
    <div className="">
      <Card className={"w-[354px] h-[550px] absolute top-[160px] left-[688x] "}>
        <p className="font-bold text-[31px] text-right">اطلاعات حساب</p>
        <form className="w-full mt-7" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-5">
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
          <div className="relative">
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
            <button
              onClick={HandleAuth}
              className="w-24 rounded-md	bg-primary p-2.5 font-bold text-white text-center text-sm/[22px] absolute top-7 left-0">
              احراز هویت
            </button>
          </div>
          <div className="my-5">
            <Input
              type="userName"
              label="نام کاربری"
              id="userName"
              error={errors.userName}
              register={register("userName", {
                required: "این فیلد الزامی می باشد!",
                pattern: {
                  value: /^[A-Za-z][A-Za-z0-9]{7,15}$/g,
                  message:
                    "حروف انگلیسی و اعداد و حداقل 8 و حداکثر 16 کاراکتر و شروع فقط حروف انگلیسی مجاز هست",
                },
              })}
            />
          </div>
          <Button
            title={"ثبت تغییرات"}
            type={"submit"}
            classNames={"w-full text-center mt-12 h-9"}
          />
        </form>
      </Card>
    </div>
  );
};


