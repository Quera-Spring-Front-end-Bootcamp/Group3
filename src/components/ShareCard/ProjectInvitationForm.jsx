import { useForm } from "react-hook-form";
import Button from "../Button";
import Input from "../Input";
import { toast } from "react-hot-toast";
export const ProjectInvitationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    toast.success("ایمیل شما با موفقیت ثبت شد :)");
    e.target.reset();
  };
  return (
    <form className="mt-[45px] mb-[29px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative w-full h-8">
        <Input
          id="email"
          error={errors.email}
          register={register("email", {
            required: "این فیلد الزامی می باشد!",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل معتبر نمی باشد.",
            },
          })}
          placeholder="دعوت با ایمیل"
          className="bg-[#F0F1F3] w-full h-8 placeholder:text-[#A6A7A7] placeholder:text-sm text-xs text-[#A6A7A7] rounded-lg"
        />
        <Button
          title={"ارسال"}
          type={"submit"}
          classNames={
            " absolute top-1/2 left-0 transform  -translate-y-1/2 flex  px-9 py-0 h-full text-center rounded-l-lg rounded-r-none text-sm"
          }
        />
      </div>
    </form>
  );
};