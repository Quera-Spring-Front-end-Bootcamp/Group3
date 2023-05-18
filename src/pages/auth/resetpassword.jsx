import AuthCard from "../../components/Card/AuthCard";

const ResetPassword = () => {
  return (
    <AuthCard
      title={"فراموشی رمز عبور"}
      className={
        "w-[463px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      }
    >
      <p className="text-[14px] mt-7">
        لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.
      </p>
    </AuthCard>
  );
};
export default ResetPassword;
