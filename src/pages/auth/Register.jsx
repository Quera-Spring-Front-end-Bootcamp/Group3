import rectangle from "../../assets/rectangle.svg";
const Register = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-right text-13xl text-black font-dana">
      <img
        className="absolute top-[450px] left-[0px] w-[1440px] h-[574px]"
        alt=""
        src={rectangle}
      />
      <div className="absolute top-[269px] left-[calc(50%_-_201.5px)] rounded-xl bg-white shadow-[0px_12px_50px_rgba(0,_0,_0,_0.18)] overflow-hidden flex flex-col p-6 items-center justify-start gap-[29px]">
        <div className="relative font-semibold">ثبت‌نام در کوئرا تسک منیجر</div>
        <form
          className="self-stretch flex flex-col items-end justify-start"
          method="post"
        >
          <div className="self-stretch flex flex-col items-end justify-start gap-[20px]">
            <div className="self-stretch flex flex-col items-end justify-start gap-[8px]">
              <div className="relative text-sm font-dana text-black text-right">
                نام کامل
              </div>
              <input
                className="bg-white self-stretch relative rounded-md box-border h-10 overflow-hidden shrink-0 border-[1px] border-solid border-darkgray-100"
                type="text"
              />
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[8px]">
              <div className="relative text-sm font-dana text-black text-right">
                ایمیل
              </div>
              <input
                className="bg-white self-stretch relative rounded-md box-border h-10 overflow-hidden shrink-0 border-[1px] border-solid border-darkgray-100"
                type="text"
              />
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[8px]">
              <div className="relative text-sm font-dana text-black text-right">
                رمز عبور
              </div>
              <input
                className="bg-white self-stretch relative rounded-md box-border h-10 overflow-hidden shrink-0 border-[1px] border-solid border-darkgray-100"
                type="text"
              />
            </div>
            <div className="flex flex-row items-center justify-end gap-[8px]">
              <div className="relative text-base font-dana text-black text-right">
                قوانین و مقررات را می‌پذیرم.
              </div>
              <input
                className="cursor-pointer relative rounded box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-darkgray-200"
                type="checkbox"
              />
            </div>
            <button className="cursor-pointer [border:none] p-2.5 bg-darkcyan self-stretch rounded-md h-12 flex flex-row box-border items-center justify-center">
              <b className="relative text-sm font-dana text-white text-right">
                ثبت‌نام
              </b>
            </button>
          </div>
        </form>
      </div>
      <div className="absolute top-[80px] left-[80px] w-[1280px] flex flex-row items-center justify-between text-right text-base text-black font-dana">
        <div className="flex flex-row items-center justify-end gap-[7px]">
          <button className="cursor-pointer [border:none] p-2.5 bg-darkcyan rounded-md w-[95px] h-10 flex flex-row box-border items-center justify-center">
            <b className="relative text-sm font-dana text-white text-right">
              ورود
            </b>
          </button>
          <div className="relative">قبلا ثبت‌نام کرده‌ای؟</div>
        </div>
        <div className="relative text-13xl font-extrabold bg-gradient-to-r from-gleft to-gright text-transparent bg-clip-text font-dana">
          کوئرا تسک منیجر
        </div>
      </div>
    </div>
  );
};

export default Register;
