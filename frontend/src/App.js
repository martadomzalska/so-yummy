import { Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import "./App.css";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import SigninPage from "./components/SigninPage/SigninPage";
import NotFound from "./components/NotFound/NotFound";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
