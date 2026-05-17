"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("login")
      .select("*")
      .eq("username", username)
      .eq("password", password)
      .single();

    if (error || !data) {
      alert("❌ Username atau password salah");
      return;
    }

    document.cookie = "login=true; path=/";

    alert("✅ Login berhasil");

    window.location.href = "/dashboard";
  };

  return (
    <>

      <Header />

      <div className="auth-page">

        <div className="auth-card">

          <div className="auth-left">

            <img
              src="/assets/image/Logo DK.png"
              alt="Login"
            />

          </div>

          <div className="auth-right">

            <h1>Selamat Datang</h1>

            <p>
              Login untuk mengakses DataKita
            </p>

            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />

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

            <button onClick={handleLogin}>
              Login
            </button>

            <div className="register-link">

              Belum punya akun?

              <Link href="/register">
                {" "}Register
              </Link>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}