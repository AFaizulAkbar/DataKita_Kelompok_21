"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import toast from "react-hot-toast";

import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {

  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!nama || !username || !email || !password) {
      toast.error("Semua field wajib diisi");
      return;
    }

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

    if (error) {
      console.log(error);

      toast.error("Register gagal");
      return;
    }

    toast.success("Register berhasil");

    setTimeout(() => {
      window.location.href = "/login";
    }, 1500);
  };

  return (
    <>

      <Header />

      <div className="auth-page">

        <div className="auth-card">

          {/* KIRI */}
          <div className="auth-left">

            <img
              src="/assets/image/Logo DK.png"
              alt="Register"
            />

          </div>

          {/* KANAN */}
          <div className="auth-right">

            <h1>Buat Akun</h1>

            <p>
              Daftarkan akun baru untuk DataKita
            </p>

            <form onSubmit={handleRegister}>

              <input
                type="text"
                placeholder="Nama Lengkap"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />

              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

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

              <button
                type="submit"
                className="login-btn"
              >
                Register
              </button>

            </form>

            <div className="register-link">

              Sudah punya akun?

              <Link href="/login">
                {" "}Login
              </Link>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </>
  );
}