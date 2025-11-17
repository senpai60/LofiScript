import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      setMsg("Login successful!");
      navigate('/')
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      <input
        type="email"
        placeholder="Email"
        className="p-3 rounded bg-zinc-700 text-white"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="p-3 rounded bg-zinc-700 text-white"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button
        type="submit"
        className="p-3 bg-teal-600 text-white rounded"
      >
        Login
      </button>

      {msg && <p className="text-center text-sm text-red-400">{msg}</p>}
    </form>
  );
}
