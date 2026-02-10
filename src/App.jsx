import Login from "./pages/login.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Problems from "./pages/problems.jsx";
import Projects from "./pages/projects.jsx";
import Tasks from "./pages/tasks.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./components/MainLayout.jsx";
import ProtectedRoute from "./configs/ProtectedRoute.jsx";
import Courses from "./pages/courses.jsx";
import Certificates from "./pages/certifications.jsx";

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
            <ProtectedRoute>
               <MainLayout>
                <Problems />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Projects />
              </MainLayout>
            </ProtectedRoute>
          }
        />
          <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Tasks />
              </MainLayout>
            </ProtectedRoute>
          }
        />
         <Route
          path="/courses"
          element={
             <ProtectedRoute>
              <MainLayout>
                <Courses />
              </MainLayout>
           </ProtectedRoute>
          }
        />
         <Route
          path="/certificates"
          element={
            
              <MainLayout>
                <Certificates />
              </MainLayout>
       
          }
        />
      </Routes>
    </>
  );
}

export default App;
