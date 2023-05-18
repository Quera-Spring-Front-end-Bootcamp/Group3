import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Forget from "./pages/auth/forget";
import ResetPassword from "./pages/auth/resetpassword";
import NotFound from "./pages/notFound";
import { AuthLayout } from "./Layout/AuthLayout";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget" element={<Forget />} />
          <Route path="resetpassword" element={<ResetPassword />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster/>
    </>
  );
};

export default App;
