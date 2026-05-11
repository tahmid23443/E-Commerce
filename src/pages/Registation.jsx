import React, { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { Link, useNavigate } from 'react-router-dom'

const Registation = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // ✅ Basic validation
    if (!formData.fullName || !formData.email || !formData.password) {
      setError("সব field পূরণ করুন।");
      return;
    }

    if (formData.password.length < 6) {
      setError("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।");
      return;
    }

    setIsLoading(true);

    try {
      // ✅ dummyjson এ real register API নেই
      // আপনার backend হলে এখানে আপনার API call বসাবেন
      // const res = await fetch("YOUR_API/register", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // Demo: ১ সেকেন্ড delay দিয়ে success দেখাচ্ছি
      await new Promise((r) => setTimeout(r, 1000));

      setSuccess("রেজিস্ট্রেশন সফল! লগিন পেজে নিয়ে যাচ্ছি...");
      setTimeout(() => navigate("/login"), 1500);

    } catch (err) {
      setError("রেজিস্ট্রেশন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex justify-center">
            Registration
          </h2>

          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            <Input
              type="text"
              label="Full Name"
              placeholder="Enter your Full Name"
              onChange={handleChange("fullName")}
            />

            <Input
              type="email"
              label="Email"
              placeholder="Enter your Email"
              onChange={handleChange("email")}
            />

            <Input
              type="password"
              label="Password"
              placeholder="Enter your Password"
              onChange={handleChange("password")}
            />

            {/* ✅ Error message */}
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            {/* ✅ Success message */}
            {success && (
              <p className="text-green-500 text-sm">{success}</p>
            )}

            <div className="flex items-center justify-between flex-wrap">
              <p className="text-gray-900 mt-2">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "রেজিস্ট্রেশন হচ্ছে..." : "Create Account"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registation;
