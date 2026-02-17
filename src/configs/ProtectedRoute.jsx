import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext.jsx";

function ProtectedRoute({ children }){
    const { user } = useContext(AuthContext);
    if (!user || !localStorage.getItem("user")) {
        return <Navigate to="/" replace />;
    }
    return children;
}

export default ProtectedRoute;