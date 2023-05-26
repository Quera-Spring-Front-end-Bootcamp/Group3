import Logo from "../components/AuthLayout/Logo";

function MainLayout() {
  return (
    <div className="flex flex-row">
      <div className="bg-slate-500 w-64 h-screen">
        <Logo />
      </div>
      <div
        className="bg-slate-800 flex flex-col w-[calc(100vw_-_256px)]
      "
      >
        <div className="h-20">header</div>
        <div>body</div>
      </div>
    </div>
  );
}

export default MainLayout;
