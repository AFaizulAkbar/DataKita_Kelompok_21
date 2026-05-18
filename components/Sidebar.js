"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {

  const path = usePathname();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {

    document.cookie =
      "login=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    window.location.href = "/login";
  };

  return (
    <>

      {/* BUTTON MENU */}
      <div
        className="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "show" : ""}`}>

        {/* LOGO */}
        <div className="sidebar-top">

          <img
            src="/assets/image/Logo DK.png"
            alt="Logo"
          />

          <h2>DataKita</h2>

        </div>

        {/* MENU */}
        <Link
          href="/dashboard"
          className={path === "/dashboard" ? "active" : ""}
          onClick={() => setOpen(false)}
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/data-warga"
          className={path.includes("data-warga") ? "active" : ""}
          onClick={() => setOpen(false)}
        >
          Data Warga
        </Link>

        <Link
          href="/dashboard/tambah-warga"
          className={path.includes("tambah-warga") ? "active" : ""}
          onClick={() => setOpen(false)}
        >
          Tambah Warga
        </Link>

        <Link
          href="/dashboard/laporan"
          className={path.includes("laporan") ? "active" : ""}
          onClick={() => setOpen(false)}
        >
          Laporan
        </Link>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </>
  );
}