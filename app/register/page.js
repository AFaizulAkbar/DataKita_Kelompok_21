"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

// ICON
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {

  // STATE
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // SHOW PASSWORD
  const [showPassword, setShowPassword] = useState(false);

  // REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();

    // VALIDASI
    if (!nama || !username || !email || !password) {
      alert("Semua field wajib diisi");
      return;
    }

    // SIMPAN KE DATABASE
    const { error } = await supabase
      .from("login")
      .insert([
        {
          nama: nama,
          username: username,
          email: email,
          password: password,
        },
      ]);

    // ERROR
    if (error) {
      console.log(error);
      alert("Register gagal");
      return;
    }

    // BERHASIL
    alert("Register berhasil");

    // PINDAH LOGIN
    window.location.href = "/login";
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* KIRI */}
        <div className="auth-left">

          <img
            src="/assets/image/Indonesia.png"
            alt="Register"
          />

        </div>

        {/* KANAN */}
        <div className="auth-right">

          <h1>Buat Akun ✨</h1>

          <p>
            Daftarkan akun baru untuk DataKita
          </p>

          <form onSubmit={handleRegister}>

            {/* NAMA */}
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />

            {/* USERNAME */}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* PASSWORD */}
            <div className="password-box">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
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

            {/* BUTTON */}
            <button
              type="submit"
              className="login-btn"
            >
              Register
            </button>

          </form>

          {/* LINK LOGIN */}
          <div className="register-link">

            Sudah punya akun?

            <Link href="/login">
              {" "}Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}