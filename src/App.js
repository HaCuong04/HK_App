import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
