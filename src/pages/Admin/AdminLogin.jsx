import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../Services/api";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await API.post("/admin/login", { email, password });

      if (response.data.success) {
        localStorage.setItem("adminToken", response.data.token);
        navigate("/admin/dashboard");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Server connection error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Riyadvi Admin
        </h1>
        <p className="text-center text-gray-600 mt-2 mb-8">
          Login to your dashboard
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}