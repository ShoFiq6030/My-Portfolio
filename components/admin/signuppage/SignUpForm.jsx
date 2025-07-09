"use client";

import { signupAPI } from "@/utils/api";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prevent multiple submissions
    if (loading) return;
    setLoading(true);
    // Validate form data
    if (!formData.username || !formData.email || !formData.password) {
      toast.error("All fields are required.");
      setLoading(false);
      return;
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email address.");
      setLoading(false);
      return;
    }

    const cleanData = {
      username: formData.username.trim(),
      email: formData.email.trim(),
      password: formData.password, // maybe hashed client-side if needed
    };
    try {
      const response = await signupAPI(cleanData);
      if (response.success) {
        toast.success("Sign up successful!");
        setFormData({ username: "", email: "", password: "" });
      } else {
        toast.error(response.message || "Sign up failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      toast.error("An error occurred during sign up.");
    } finally {
      setLoading(false);
    }
    // console.log(formData);
  };

  return (
    <form>
      <div className="flex flex-col gap-4">
        <label className="text-white">
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="w-full p-2 rounded bg-gray-800 text-white"
            required
          />
        </label>
        <label className="text-white">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-2 rounded bg-gray-800 text-white"
            required
          />
        </label>
        <label className="text-white">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full p-2 rounded bg-gray-800 text-white"
            required
          />
        </label>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={loading}
        className={`mt-4 p-2 rounded bg-yellow-500 text-black ${
          loading ? "cursor-not-allowed opacity-50" : "hover:bg-yellow-600"
        }`}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
}
