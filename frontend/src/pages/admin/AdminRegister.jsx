import { useState } from "react";
import { registerAdmin } from "../../api/adminAuthApi";
import { useNavigate } from "react-router-dom";

const AdminRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerAdmin({ name, email, password });
            navigate("/AdminLogin"); 
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-ble-100">
            <h2 className="text-2xl font-bold mb-4">Admin Register</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-96">
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="p-2 border rounded-md mb-3"/>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="p-2 border rounded-md mb-3" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="p-2 border rounded-md mb-3"/>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded font-semibold">Register</button>
            </form>
        </div>
    );
};

export default AdminRegister;
