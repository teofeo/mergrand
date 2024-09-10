// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResponseInterceptor } from "./components/ResponseInterceptor";
import LoginPage from "./pages/LoginPage";
import ProtectedPage from "./pages/ProtectedPage";
import LogoutPage from "./pages/LogoutPage";

const App: React.FC = () => {
  return (
    <Router>
      <ResponseInterceptor />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/protected" element={<ProtectedPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
