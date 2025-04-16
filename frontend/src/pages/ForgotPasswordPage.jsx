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
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
        <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row h-[auto]">
        <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center p-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Reset your Account password</h2>
            <p className="text-lg">Enter your email and we’ll send you a link to reset your password.</p>
            <div className="mt-6">
              <svg className="w-24 h-24 mx-auto opacity-80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 p-10 flex items-center justify-center bg-white">
            <div className="w-full max-w-md">
                <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-left">Forgot Password</h2>
                <p className="text-gray-600 text-left mb-6">
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
        </div>
    </div>
    </>
    );
};

export default ForgotPasswordPage;
