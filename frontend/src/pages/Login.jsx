import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role); 

        if (data.user.role === "teacher") {
          navigate("/TeacherDashboard");
        } else if (data.user.role === "parent") {
          navigate("/ParentDashboard");
        } else {
          navigate("/Error"); 
        }
      } else {
        alert(data.error || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
     <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row h-[auto]">
     <div className="md:w-1/2 bg-blue-600 text-white flex items-center justify-center p-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Welcome Back!</h2>
            <p className="text-lg">Sign in to access your Account.</p>
            <div className="mt-6">
              <svg className="w-24 h-24 mx-auto opacity-80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
        </div>

     <div className="md:w-1/2 p-10 flex items-center justify-center bg-white">
      <div className="w-full max-w-md ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col">
        <label className="block text-gray-600 mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 mb-3 focus:outline-none"
            required
          />
           <label className="block text-gray-600 mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 mb-3 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-left">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </p>

        <p className="text-center mt-4 text-left">
          Don't have an account?{" "}
          <Link to="/Signup" className="text-blue-600 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
     </div>
    </div>
    </>
  );
};

export default Login;
