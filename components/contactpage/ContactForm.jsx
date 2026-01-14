"use client";
import { sendMgsApi } from "@/utils/api";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  async function onSubmit() {
    setLoading(true);
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required.");
      setLoading(false);
      return;
    }
    try {
      const data = await sendMgsApi(formData);
      console.log(data);
      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
      setLoading(false);
      return;
    }
    setLoading(false);
  }

  return (
    <form className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-1.5 sm:space-y-2">
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-slate-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-slate-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="space-y-1.5 sm:space-y-2">
        <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          rows={4}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-slate-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 resize-none text-sm sm:text-base"
          placeholder="Tell me about your project..."
        />
      </div>

      <div className="flex justify-end">
        <SubmitButton handleSubmit={onSubmit} loading={loading} />
      </div>
    </form>
  );
}
