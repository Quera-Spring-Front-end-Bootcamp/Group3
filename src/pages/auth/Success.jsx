import rectangle from "../../assets/rectangle.svg";
const Success = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-right text-13xl text-black font-dana">
      <img
        className="absolute top-[450px] left-[0px] w-[1440px] h-[574px]"
        alt=""
        src={rectangle}
      />
      <div className="absolute top-[393px] left-[489px] rounded-xl bg-white shadow-[0px_12px_50px_rgba(0,_0,_0,_0.18)] w-[463px] overflow-hidden flex flex-col p-6 box-border items-center justify-start gap-[29px]">
        <div className="relative font-semibold">فراموشی رمز عبور</div>
        <div className="self-stretch flex flex-col items-end justify-start text-sm">
          <div className="self-stretch flex flex-col items-end justify-start">
            <div className="relative">
              لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی
              کنید.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[80px] left-[80px] w-[1280px] flex flex-row items-center justify-between text-sm text-white">
        <div className="flex flex-row items-center justify-end gap-[7px]">
          <div className="rounded-md bg-darkcyan w-[95px] h-10 flex flex-row p-2.5 box-border items-center justify-center">
            <b className="relative">ورود</b>
          </div>
          <div className="relative text-base text-black">
            قبلا ثبت‌نام کرده‌ای؟
          </div>
        </div>
        <div className="relative text-13xl font-extrabold bg-gradient-to-r from-gleft to-gright text-transparent bg-clip-text font-dana">
          کوئرا تسک منیجر
        </div>
      </div>
    </div>
  );
};

export default Success;
