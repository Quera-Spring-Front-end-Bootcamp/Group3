import { Routes, Route } from "react-router-dom";
import AuthRouter from "./routes/AuthRouter";
import Home from "./pages/home";
import NotFound from "./pages/notFound";

const App = () => {
  return (
<<<<<<< HEAD
    <>
      return <div className=" text-xl text-secondary"> متن تست است</div>;
    </>
=======
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
>>>>>>> main
  );
};

export default App;
