import Input from "./Input";

const Form = () => {
  return (
    <form action="" className="flex flex-col gap-5 px-6 py-9">
      <h2 className="text-black font-semibold text-2xl text-center mb-2">
        ثبت‌نام در کوئرا تسک منیجر
      </h2>
      <Input type="text" label="نام کامل" />
      <Input type="email" label="ایمیل" />
      <Input type="password" label="رمزعبور" />
      <Input type="checkbox" label="قوانین و مقررات را می‌پذیرم." />
    </form>
  );
};

export default Form;
