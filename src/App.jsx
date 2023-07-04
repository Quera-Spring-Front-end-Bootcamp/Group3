import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Forget from "./pages/auth/forget";
import ResetPassword from "./pages/auth/resetpassword";
import NotFound from "./pages/notFound";
import { AuthLayout } from "./Layout/AuthLayout";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home";
import MainLayout from "./Layout/MainLayout";
import { ProfileLayout } from "./Layout/ProfileLayout";
import { PersonalInfo } from "./pages/Profile/PersonalInfo";
import { AccountInfo } from "./pages/Profile/AccountInfo";
import { Setting } from "./pages/Profile/Setting";
import { dataColors, useStickyState } from "./theme/theme";
import IconSample from "./pages/IconSample";
import Tasks from "./pages/main/Tasks";

const App = () => {
  const [color, setColor] = useStickyState(dataColors[0], "theme-color");
  const mode = "light";
  return (
    <div className={[color && ` theme-${color}`, ` theme-${mode}`].join("")}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget" element={<Forget />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        <Route path="profile" element={<ProfileLayout />}>
          <Route path="personalInfo" element={<PersonalInfo />} />
          <Route path="accountInfo" element={<AccountInfo />} />
          <Route
            path="setting"
            element={<Setting setColor={setColor} color={color} />}
          />
          <Route path="personalInfo" element={<PersonalInfo />} />
          <Route path="accountInfo" element={<AccountInfo />} />
          <Route path="setting" element={<Setting />} />
        </Route>

        <Route path="main" element={<MainLayout />}>
          <Route path=":projectId/:view" element={<Tasks />}></Route>
        </Route>

        <Route path="iconSample" element={<IconSample />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster
        toastOptions={{
          style: {
            direction: "rtl",
            padding: "16px",
            fontFamily: "dana",
          },
        }}
      />
    </div>
  );
};

export default App;
