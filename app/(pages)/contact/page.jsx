import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import ContactForm from "@/components/contactpage/ContactForm";
import React from "react";

export default function contactPage() {
  return (
    <div className="container m-auto text-white ">
      <NavBar />
      <div className="flex flex-col items-center justify-center h-[82vh] p-4 bg-gray-900 bg-opacity-50">
        <h1 className="text-3xl mb-8 ">Contact Me</h1>
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}
