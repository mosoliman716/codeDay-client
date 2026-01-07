import { useState, useContext } from "react";
import { api } from "../configs/api.js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext.jsx";

function Login() {
  const [state, setState] = useState("login");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateInputs = () => {
    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return false;
    }
    if (state === "register" && !formData.name) {
      setError("Name is required for registration.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateInputs()) return;

    setLoading(true);
    try {
      let response;
      if (state === "login") {
        response = await api.post("/users/login", {
          email: formData.email,
          password: formData.password,
        },{ withCredentials: true });

        console.log("Login successful:", response.data);
        login(response.data.user, response.data.token);
        navigate("/main");
      } 
      else if (state === "register") {
        response = await api.post("/users/register", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },{ withCredentials: true });
        
        console.log("Registration successful:", response.data);
        login(response.data.user, response.data.token);
        navigate("/main");
      }
     
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="w-full sm:w-87.5 text-center bg-gray-900 border border-gray-800 rounded-2xl px-8 shadow-lg"
        >
          <h1 className="text-white text-3xl mt-10 font-medium">
            {state === "login" ? "Login" : "Sign up"}
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            Please {state === "login" ? "sign in" : "sign up"} to continue
          </p>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {state !== "login" && (
            <div className="flex items-center mt-6 w-full bg-gray-800 ring-2 ring-gray-700 focus-within:ring-indigo-500 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="flex items-center w-full mt-4 bg-gray-800 ring-2 ring-gray-700 focus-within:ring-indigo-500 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
            <input
              type="email"
              name="email"
              placeholder="Email id"
              className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center mt-4 w-full bg-gray-800 ring-2 ring-gray-700 focus-within:ring-indigo-500 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-800 text-white placeholder-gray-500 border-none outline-none"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-4 text-left">
            <button className="text-sm text-indigo-400 hover:underline">
              Forget password?
            </button>
          </div>

          <button
            type="submit"
            className="mt-2 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition"
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : state === "login"
              ? "Login"
              : "Sign up"}
          </button>

          <p
            onClick={() =>
              setState((prev) => (prev === "login" ? "register" : "login"))
            }
            className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer"
          >
            {state === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
            <span className="text-indigo-400 hover:underline ml-1">
              click here
            </span>
          </p>
        </form>
      </div>
      {/* Background Effects */}
      <div className="fixed inset-0 -z-1 pointer-events-none">
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-245 h-115 bg-linear-to-tr from-gray-900 to-gray-800 rounded-full blur-3xl" />
        <div className="absolute right-12 bottom-10 w-105 h-55 bg-linear-to-bl from-gray-800 to-gray-900 rounded-full blur-2xl" />
      </div>
    </>
  );
}

export default Login;
