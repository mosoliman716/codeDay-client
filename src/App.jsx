import Login from "./pages/login.jsx";
import Dashboard from "./pages/dashboard.jsx";
import { Routes, Route } from "react-router-dom";
import './App.css'
import { MainLayout } from "./components/MainLayout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
      </Routes>
    </>
  )
}

export default App;
