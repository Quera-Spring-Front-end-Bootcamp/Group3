import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Forgot from "../pages/auth/forgot";
import ResetPassword from "../pages/auth/resetpassword";
import NotFound from "../pages/notFound";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot" element={<Forgot />} />
      <Route path="resetpassword" element={<ResetPassword />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
export default AuthRouter;
