"use client";
import React from "react";

export default function SubmitButton({ handleSubmit, loading }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      type="submit"
      disabled={loading}
      className={`${
        loading
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-yellow-300 hover:bg-yellow-600"
      } text-black rounded p-2 transition-colors duration-300`}
    >
      {loading ? "Submitting..." : "Submit"}
    </button>
  );
}
