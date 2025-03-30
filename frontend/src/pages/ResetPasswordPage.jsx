import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/authApi";

const ResetPasswordPage = () => {
    const { token } = useParams(); // Get token from URL
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/reset-password/${token}`, { password });
            setMessage(res.data.message);
            setTimeout(() => navigate("/login"), 3000); // Redirect after success
        } catch (err) {
            setMessage("Error resetting password");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">Reset Password</h2>
                <p className="text-gray-600 text-center mb-6">
                    Enter a new password for your account.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Update Password
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

export default ResetPasswordPage;
