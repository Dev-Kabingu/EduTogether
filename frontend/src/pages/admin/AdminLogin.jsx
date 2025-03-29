import { useState } from "react";
import { loginAdmin } from "../../api/adminAuthApi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginAdmin({ email, password });
            localStorage.setItem("adminToken", data.token);
            navigate("/AdminDashboard");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
            <h2 className="text-2xl font-bold mb-8">Admin Login</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-96 ">

                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required  className="p-2 border rounded-md mb-3"/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="p-2 border rounded-md mb-3" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded font-semibold">Login</button>
            </form>
            <p className="text-gray-500 mt-4">Don't have an account? <Link to = '/AdminRegister' className="text-blue-500 underline">Sign Up</Link></p>
        </div>
    );
};

export default AdminLogin;
