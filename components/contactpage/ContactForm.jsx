import SubmitButton from "./SubmitButton";
import { revalidatePath } from "next/cache";

export default function ContactForm() {
  async function sendMessage(formData) {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    console.log(name, email, message);
    revalidatePath("/contact");
  }

  return (
    <form action={sendMessage} className="contact-form">
      <label className="block mb-4 ">
        Name:
        <input
          name="name"
          type="text"
          required
          className="border border-gray-300 rounded p-2 bg-gray-300 text-black ml-4"
        />
      </label>
      <label className="block mb-4 ">
        Email:
        <input
          name="email"
          type="email"
          required
          className="border border-gray-300 rounded p-2 bg-gray-300 text-black ml-4"
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          required
          className="border border-gray-300 rounded p-2 h-32 w-full bg-gray-300 text-black"
        />
      </label>
      <div className="flex justify-end mt-4">
        <SubmitButton />
      </div>
    </form>
  );
}
