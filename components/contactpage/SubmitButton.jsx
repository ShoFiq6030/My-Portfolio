import React from "react";

export default function SubmitButton({ handleSubmit, loading }) {
  return (
    <button
      type="button"
      onClick={handleSubmit}
      disabled={loading}
      className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
        loading
          ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
          : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:scale-105"
      }`}
    >
      {loading ? (
        <>
          <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          <span>Sending...</span>
        </>
      ) : (
        <>
          <span>Send Message</span>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </>
      )}
    </button>
  );
}
