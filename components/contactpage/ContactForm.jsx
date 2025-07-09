"use client";
import { sendMgsApi } from "@/utils/api";
import SubmitButton from "./SubmitButton";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { toast } from "react-toastify";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
        // revalidatePath("/contact");
        // router.push("/");
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
    <form className="contact-form">
      <label className="block mb-4 ">
        Name:
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="border border-gray-300 rounded p-2 bg-gray-300 text-black ml-4"
        />
      </label>
      <label className="block mb-4 ">
        Email:
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="border border-gray-300 rounded p-2 bg-gray-300 text-black ml-4"
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          className="border border-gray-300 rounded p-2 h-32 w-full bg-gray-300 text-black"
        />
      </label>
      <div className="flex justify-end mt-4">
        <SubmitButton handleSubmit={onSubmit} loading={loading} />
      </div>
    </form>
  );
}
