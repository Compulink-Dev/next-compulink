// /app/(auth)/register/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      setSuccess("Account created! Redirecting to login...");
      setTimeout(() => router.push("/login"), 1500);
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-red-400">
        <h1 className="text-xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-80">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-2 rounded-md bg-gray-200 text-black"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-2 rounded-md bg-gray-200 text-black"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="p-2 rounded-md bg-gray-200 text-black"
          />
          <button
            type="submit"
            className="bg-red-600 text-white font-bold px-6 py-2"
          >
            Register
          </button>
          {error && <div className="text-sm text-red-500">{error}</div>}
          {success && <div className="text-sm text-red-500">{success}</div>}
        </form>
      </div>
    </div>
  );
}
