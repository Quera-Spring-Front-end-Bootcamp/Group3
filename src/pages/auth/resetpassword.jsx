import AuthCard from "../../components/Card/AuthCard";

const ResetPassword = () => {
  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen">
      <AuthCard title={"فراموشی رمز عبور"}>
        <p className="text-[14px] mt-7">
          لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.
        </p>
      </AuthCard>
    </div>
  );
};
export default ResetPassword;
