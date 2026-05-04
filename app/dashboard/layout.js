"use client";

import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
}