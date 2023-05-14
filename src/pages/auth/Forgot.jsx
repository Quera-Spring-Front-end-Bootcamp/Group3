import rectangle from "../../assets/rectangle.svg";

const Forgot = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-right text-base text-black font-dana">
      <img
        className="absolute top-[450px] left-[0px] w-[1440px] h-[574px]"
        alt=""
        src={rectangle}
      />
      <form className="absolute top-[380px] left-[489px] rounded-xl bg-white shadow-[0px_12px_50px_rgba(0,_0,_0,_0.18)] w-[463px] overflow-hidden flex flex-col p-6 box-border items-center justify-start gap-[29px]">
        <div className="relative text-13xl font-dana text-black text-right font-semibold">
          فراموشی رمز عبور
        </div>
        <div className="self-stretch flex flex-col items-end justify-start">
          <div className="self-stretch flex flex-col items-end justify-start gap-[20px]">
            <div className="self-stretch flex flex-col items-end justify-start gap-[8px]">
              <div className="relative text-sm font-dana text-black text-right">
                ایمیل خود را وارد کنید
              </div>
              <input
                className="bg-white self-stretch relative rounded-md box-border h-10 overflow-hidden shrink-0 border-[1px] border-solid border-darkgray-100"
                type="text"
              />
            </div>
            <button className="cursor-pointer [border:none] p-2.5 bg-darkcyan self-stretch rounded-md h-12 flex flex-row box-border items-center justify-center">
              <b className="relative text-sm font-dana text-white text-right">
                دریافت ایمیل بازیابی رمز عبور
              </b>
            </button>
          </div>
        </div>
      </form>
      <div className="absolute top-[80px] left-[80px] w-[1280px] flex flex-row items-center justify-between">
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

export default Forgot;
