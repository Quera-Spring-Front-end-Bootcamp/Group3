import Card from "../Card/Card";

    export const Permission = ({isOpen,setIsOpen,setSelectedOption}) => {
  const permissionArry = [
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
  const handleSelectOption = (option) => {
    setSelectedOption(option.title);
    setIsOpen(false);
  };

 
  return (
    <>
    {isOpen && (
        <Card
        title={null}
        className="m-4 w-64 flex gap-4 items-start  p-4 rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
      >
        {permissionArry.map((option) => (
          <div key={option.id} className="flex flex-col gap-1"  onClick={() => handleSelectOption(option)}>
            <span className="text-[#1e1e1e] text-xs font-semibold">
              {option.title}
            </span>
            <p className="text-[#3d3d3d] text-[10px] ">{option.description}</p>
          </div>
        ))}
      </Card>
    )}
    </>

  );
};
