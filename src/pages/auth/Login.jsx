import rectangle from "../../assets/rectangle.svg";

const Login = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-right text-13xl text-black font-dana">
      <img
        className="absolute top-[450px] left-[0px] w-[1440px] h-[574px]"
        alt=""
        src={rectangle}
      />
      <div className="absolute top-[269px] left-[calc(50%_-_258px)] rounded-xl bg-white shadow-[0px_12px_50px_rgba(0,_0,_0,_0.18)] overflow-hidden flex flex-col p-6 items-center justify-start gap-[29px]">
        <div className="relative font-semibold">{`(: به کوئرا تسک منیجر خوش برگشتی `}</div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[32px] text-sm">
          <div className="self-stretch flex flex-col items-end justify-start gap-[20px]">
            <div className="self-stretch flex flex-col items-end justify-start gap-[8px]">
              <div className="relative">{`ایمیل `}</div>
              <div className="self-stretch relative rounded-md bg-white box-border h-10 overflow-hidden shrink-0 border-[1px] border-solid border-darkgray-100" />
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[8px]">
              <div className="relative">رمز عبور</div>
              <div className="self-stretch relative rounded-md bg-white box-border h-10 overflow-hidden shrink-0 border-[1px] border-solid border-darkgray-100" />
              <div className="relative text-xs text-darkcyan">
                رمز عبور را فراموش کرده‌ای؟
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[20px] text-white">
            <div className="self-stretch rounded-md bg-darkcyan h-10 flex flex-row p-2.5 box-border items-center justify-center">
              <b className="relative">ورود</b>
            </div>
            <div className="flex flex-row items-center justify-end gap-[7px] text-base text-darkcyan">
              <b className="relative">ثبت‌نام</b>
              <div className="relative text-black">ثبت‌نام نکرده‌ای؟</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[80px] left-[80px] w-[1280px] flex flex-row items-center justify-between text-sm text-white">
        <div className="flex flex-row items-center justify-end gap-[7px]">
          <div className="rounded-md bg-darkcyan w-[95px] h-10 flex flex-row p-2.5 box-border items-center justify-center">
            <b className="relative">ثبت‌نام</b>
          </div>
          <div className="relative text-base text-black">ثبت‌نام نکرده‌ای؟</div>
        </div>
        <div className="relative text-13xl font-extrabold bg-gradient-to-r from-gleft to-gright text-transparent bg-clip-text font-dana">
          کوئرا تسک منیجر
        </div>
      </div>
    </div>
  );
};

export default Login;
