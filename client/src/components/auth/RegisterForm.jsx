import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function RegisterForm() {
  const { register } = useAuth();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      setMsg("Registration successful!");
    } catch (err) {
      setMsg(err.response?.data?.message || "Failed to register");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      <input
        type="text"
        placeholder="Name"
        className="p-3 rounded bg-zinc-700 text-white"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

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
        Register
      </button>

      {msg && <p className="text-center text-sm text-red-400">{msg}</p>}
    </form>
  );
}
