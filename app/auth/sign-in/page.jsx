import AuthForm from "../../../components/forms/auth-form";

export default function Page() {
  return (
    <div className="flex flex-col p-5 text-sm">
      <h3 className="font-bold text-2xl">Welcome back</h3>
      <p className="text-gray-400 ">Please enter sign in, to continue</p>
      <AuthForm />
    </div>
  );
}
