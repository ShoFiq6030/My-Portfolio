"use client";
import React from "react";

export default function SubmitButton({ handleSubmit }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      type="submit"
      className="bg-yellow-300 text-black rounded p-2 hover:bg-yellow-600 transition-colors duration-300"
    >
      Submit
    </button>
  );
}
