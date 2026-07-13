import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

const Login = ({ switchToSignup }) => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await loginUser(formData);

      const { user } = response;

      setUser(user);

      if (user.role === "ADMIN") {
        navigate("/admin/dashboard");
      } else if (user.role === "FACULTY") {
        navigate("/faculty/dashboard");
      } else if (user.role === "STUDENT") {
        navigate("/student/dashboard");
      } else {
        setError("Invalid user role.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center">
        Welcome Back
      </h2>

      <p className="text-center text-gray-500 mt-2">
        Login to your College Cube account
      </p>

      {error && (
        <p className="mt-4 text-center text-red-500">
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5 mt-6"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-center mt-6 text-gray-600">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={switchToSignup}
          className="text-green-600 font-semibold hover:underline"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;