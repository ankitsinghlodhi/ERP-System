import { useState } from "react";
import { signupAdmin } from "../../services/authService";

const Signup = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    collegeName: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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
      await signupAdmin(formData);

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        password: "",
        collegeName: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Signup failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div>
        <h2 className="text-3xl font-bold text-center">
          🎉 Registration Successful
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Your college has been registered successfully.
        </p>

        <p className="text-center text-gray-500 mt-2">
          Please login to continue.
        </p>

        <button
          onClick={switchToLogin}
          className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Login Now
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center">
        College Admin Signup
      </h2>

      <p className="text-center text-gray-500 mt-2">
        Register your college to access ERP
      </p>

      {error && (
        <p className="text-center text-red-500 mt-4">
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-4 mt-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Admin Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border rounded-lg"
        />

        <input
          type="text"
          name="collegeName"
          placeholder="College Name"
          value={formData.collegeName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border rounded-lg"
        />

        <button
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      <p className="text-center mt-6 text-gray-600">
        Already have an account?{" "}
        <button
          type="button"
          onClick={switchToLogin}
          className="text-blue-600 font-semibold hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;