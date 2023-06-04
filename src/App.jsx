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
import ListView from "./pages/main/ListView";
import ColumnView from "./pages/main/ColumnView";
import CalendarView from "./pages/main/CalendarView";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget" element={<Forget />} />
          <Route path="resetpassword" element={<ResetPassword />} />
        </Route>
        <Route path="profile" element={<ProfileLayout />}>
          <Route path="personalInfo" element={<PersonalInfo />} />
          <Route path="accountInfo" element={<AccountInfo />} />
          <Route path="setting" element={<Setting />} />
          <Route path="personalInfo" element={<PersonalInfo />} />
          <Route path="accountInfo" element={<AccountInfo />} />
          <Route path="setting" element={<Setting />} />
        </Route>

        <Route path="main" element={<MainLayout />}>
          <Route path="listView" element={<ListView />}></Route>
          <Route path="columnView" element={<ColumnView />}></Route>
          <Route path="calendarView" element={<CalendarView />}></Route>
        </Route>

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
    </>
  );
};

export default App;
