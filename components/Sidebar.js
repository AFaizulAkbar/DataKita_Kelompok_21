"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();

  // 🔥 logout
  const handleLogout = () => {

    // hapus cookie login
    document.cookie =
      "login=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    // pindah ke login
    window.location.href = "/login";
  };

  return (
    <div className="sidebar">

      <h2>DataKita</h2>

      {/* Dashboard */}
      <Link
        href="/dashboard"
        className={path === "/dashboard" ? "active" : ""}
      >
        Dashboard
      </Link>

      {/* Data Warga */}
      <Link
        href="/dashboard/data-warga"
        className={path.includes("data-warga") ? "active" : ""}
      >
        Data Warga
      </Link>

      {/* Tambah Warga */}
      <Link
        href="/dashboard/tambah-warga"
        className={path.includes("tambah-warga") ? "active" : ""}
      >
        Tambah Warga
      </Link>

      {/* Logout */}
      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>
  );
}