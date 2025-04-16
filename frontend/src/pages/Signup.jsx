
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("parent"); 
  const [mobilePhone, setMobilePhone] = useState(""); 
  const [childName, setChildName] = useState("");
  const [childGrade, setChildGrade] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const requestData = { name, email, password, role, mobilePhone };

    if (role === "parent") {
      requestData.childName = childName;
      requestData.childGrade = childGrade;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Account created successfully! Please login.");
        navigate("/Login");
      } else {
        setError(data.error || "Signup failed.");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
    <div  className="flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center p-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Create an Account</h2>
            <p className="text-lg">Join us and start your journey today.</p>
            <div className="mt-6">
              <svg className="w-24 h-24 mx-auto opacity-80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
        </div>

      <div className="md:w-1/2 p-10 flex items-center justify-center bg-white">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-letf">Sign Up</h2>

        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        <form onSubmit={handleSignup} className="flex flex-col">
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3" required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3" required />
          <input type="text" placeholder="Mobile Phone" value={mobilePhone} onChange={(e) => setMobilePhone(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3"required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3"required />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-3" required />

          <select value={role} onChange={(e) => setRole(e.target.value)} className="p-2 border rounded-md mb-3">
            <option value="parent">Parent</option>
            <option value="teacher">Teacher</option>
          </select>

          {role === "parent" && (
            <>
              <input type="text" placeholder="Child's Name" value={childName} onChange={(e) => setChildName(e.target.value)} className="p-2 border rounded-md mb-3" required />
              <input type="text" placeholder="Child's Grade" value={childGrade} onChange={(e) => setChildGrade(e.target.value)} className="p-2 border rounded-md mb-3" required />
            </>
          )}

          <button type="submit" className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Sign Up</button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/Login" className="text-blue-600 hover:underline">Login here</Link>
        </p>
      </div>
    </div>
      </div>
    </div>
    </>
  );
};

export default Signup;
