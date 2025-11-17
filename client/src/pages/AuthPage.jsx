import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

export default function AuthPage() {
  const [mode, setMode] = useState("login"); // login | register

  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="bg-zinc-800 p-10 rounded-xl shadow-lg w-[420px]">

        <div className="flex justify-center gap-5 mb-8">
          <button
            className={`px-4 py-2 rounded ${mode === "login" ? "bg-teal-500" : "bg-zinc-700"}`}
            onClick={() => setMode("login")}
          >
            Login
          </button>

          <button
            className={`px-4 py-2 rounded ${mode === "register" ? "bg-teal-500" : "bg-zinc-700"}`}
            onClick={() => setMode("register")}
          >
            Register
          </button>
        </div>

        {mode === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </section>
  );
}
