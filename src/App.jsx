import { Routes, Route } from "react-router-dom";
import AuthRouter from "./routes/AuthRouter";
import Home from "./pages/home";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
