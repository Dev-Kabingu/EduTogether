import { useState } from "react";
import axios from "../api/authApi";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const res = await axios.post("/api/auth/forgot-password", { email });  // ✅ Corrected route
          setMessage(res.data.message);
      } catch (err) {
          setMessage("Error sending reset email");
          console.error("Forgot Password Error:", err);
      }
  };
  
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">Forgot Password</h2>
                <p className="text-gray-600 text-center mb-6">
                    Enter your email below to receive a password reset link.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Reset Password
                    </button>
                </form>
                {message && (
                    <p className="text-center mt-4 text-sm text-gray-700 bg-gray-200 p-2 rounded-lg">
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
