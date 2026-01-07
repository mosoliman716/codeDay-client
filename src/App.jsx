import Login from "./pages/login.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Problems from "./pages/problems.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./components/MainLayout.jsx";
import ProtectedRoute from "./configs/ProtectedRoute.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
          }
        />
        <Route
          path="/problems"
          element={
              <MainLayout>
                <Problems />
              </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
