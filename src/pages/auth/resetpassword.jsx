import Card from "../../components/Card/Card";

const ResetPassword = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-[120px] w-full">
      <Card title={"فراموشی رمز عبور"}>
        <p className="text-[14px] mt-7">
          لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.
        </p>
      </Card>
    </div>
  );
};
export default ResetPassword;
