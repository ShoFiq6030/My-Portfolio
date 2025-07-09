import SignUpForm from "@/components/admin/signuppage/SignUpForm";

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white p-4 bg-gray-900 bg-opacity-50">
      <h1 className="text-2xl">Sign Up</h1>
      <SignUpForm />
    </div>
  );
}
