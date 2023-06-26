import Card from "../Card/Card";

export const PermissionList = ({
  isOpenProject,
  isOpenList,
  setIsOpenProject,
  setSelectedOption,
  setIsOpenList,
  setSelectedOptionProject,
  title,
}) => {
  console.log(title);
  const permissionListData = [
    {
      id: "1",
      title: "دسترسی کامل",
      description:
        " توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه",
    },
    {
      id: "2",
      title: "دسترسی ویرایش",
      description:
        "  توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد.",
    },

    {
      id: "3",
      title: "دسترسی کامنت",
      description:
        "  توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد.",
    },
    {
      id: "4",
      title: "فقط دسترسی مشاهده  ",
      description: " توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد.",
    },
  ];
  const permissionProjectData = [
    { id: 1, title: "پروژه اول" },
    { id: 2, title: "پروژه دوم" },
    { id: 3, title: "همه پروژه ها " },
  ];
  const handleSelectOption = (option) => {
    setSelectedOption(option.title);
    setIsOpenList(false);
    console.log(`id: ${option.id}`);
  };
  const handleSelectOptionProject = (option) => {
    setSelectedOptionProject(option.title);
    setIsOpenProject(false);
    console.log(`id: ${option.id}`);
  };
  console.log(title.includes("پروژه"));
  return (
    <>
      {title.includes("پروژه")
        ? null
        : isOpenProject && (
            <Card className="absolute top-10 left-0 z-20   flex gap-4 items-start  p-4 rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
              {permissionProjectData.map((option) => (
                <div
                  key={option.id}
                  className="flex flex-col gap-1 cursor-pointer"
                  onClick={() => handleSelectOptionProject(option)}
                >
                  <span className="text-[#1e1e1e] text-xs font-semibold">
                    {option.title}
                  </span>
                </div>
              ))}
            </Card>
          )}
      {isOpenList && (
        <Card className="absolute top-10 left-0 z-20  w-64 flex gap-4 items-start  p-4 rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
          {permissionListData.map((option) => (
            <div
              key={option.id}
              className="flex flex-col gap-1 cursor-pointer"
              onClick={() => handleSelectOption(option)}
            >
              <span className="text-[#1e1e1e] text-xs font-semibold">
                {option.title}
              </span>
              <p className="text-[#3d3d3d] text-[10px] ">
                {option.description}
              </p>
            </div>
          ))}
        </Card>
      )}
    </>
  );
};