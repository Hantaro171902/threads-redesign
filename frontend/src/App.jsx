// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/auth/home/HomePage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import LoginPage from "./pages/auth/login/LoginPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex max-w-6xl mx-auto">
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </div>
  );
}

export default App;
