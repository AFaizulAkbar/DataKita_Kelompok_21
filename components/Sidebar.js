"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();

  return (
    <div className="sidebar">
      <h2>DataKita</h2>

      <Link href="/dashboard" className={path === "/dashboard" ? "active" : ""}>
        Dashboard
      </Link>

      <Link href="/dashboard/data-warga" className={path.includes("data-warga") ? "active" : ""}>
        Data Warga
      </Link>

      <Link href="/dashboard/tambah-warga" className={path.includes("tambah-warga") ? "active" : ""}>
        Tambah Warga
      </Link>
    </div>
  );
}