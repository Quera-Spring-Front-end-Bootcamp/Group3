import Logo from "../components/AuthLayout/Logo";
import Icons from "../assets/Icons";

function MainLayout() {
  return (
    <div className="flex flex-row bg-[#FAFBFC]">
      <aside className="w-80 h-screen p-9 flex flex-col border-l-[1px]">
        <Logo />

        <div className="mt-5 font-semibold">
          <h4>ورک اسپیس‌ها</h4>
        </div>

        <div className="relative mt-3">
          <div className="absolute top-2 right-2">{Icons.SearchIcon}</div>
          <input
            type="text"
            placeholder="جستجو کنید"
            className="w-full h-10 text-sm placeholder-[#AAAAAA] bg-[#F6F7F9] rounded pl-4 pr-9"
          />
        </div>

        <button className="flex flex-row items-center justify-center bg-[#D3D3D3] rounded-md mt-3 h-8 text-xs font-semibold">
          {Icons.AddSqureIcon}
          <span className="pr-1">ساختن اسپیس جدید</span>
        </button>

        <div className="bg-slate-600 h-96 mt-3"></div>

        <div className="flex flex-row items-center mt-3">
          <div className="flex flex-row items-center justify-center w-8 h-8 bg-[#EAF562] rounded-full">
            NM
          </div>
          <span className="mr-2 font-medium text-base">نیلوفر موجودی</span>
        </div>

        <div className="flex flex-row items-center mt-3">
          <div className="">{Icons.LogoutIcon}</div>
          <span className="mr-2 font-normal text-base text-[#818181]">
            خروج
          </span>
        </div>
      </aside>
      <div
        className="flex flex-col w-[calc(100vw_-_256px)] p-4
      "
      >
        <header className="flex flex-row items-center h-20">
          <div>پروژه اول</div>
          <div className="w-[1px] h-[24px] bg-[#999999]"></div>
          <div>پروژه اول</div>
        </header>
        <hr />
        <main>body</main>
      </div>
    </div>
  );
}

export default MainLayout;
