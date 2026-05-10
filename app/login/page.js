"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

// ICON
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {

  // STATE
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // SHOW PASSWORD
  const [showPassword, setShowPassword] = useState(false);

  // LOGIN
  const handleLogin = async () => {

    const { data, error } = await supabase
      .from("login")
      .select("*")
      .eq("username", username)
      .eq("password", password)
      .single();

    // kalau salah
    if (error || !data) {
      alert("Username atau password salah");
      return;
    }

    // buat cookie login
    document.cookie = "login=true; path=/";

    alert("Login berhasil");

    // pindah dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* KIRI */}
        <div className="auth-left">

          <img
            src="/assets/image/Indonesia.png"
            alt="Login"
          />

        </div>

        {/* KANAN */}
        <div className="auth-right">

          <h1>Welcome Back 👋</h1>

          <p>
            Login untuk mengakses dashboard DataKita
          </p>

          {/* USERNAME */}
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* PASSWORD */}
          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >

              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}

            </button>

          </div>

          {/* BUTTON LOGIN */}
          <button onClick={handleLogin}>
            Login
          </button>

          {/* LINK REGISTER */}
          <div className="register-link">

            Belum punya akun?

            <Link href="/register">
              {" "}Register
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}