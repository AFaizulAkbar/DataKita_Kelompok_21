"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TambahWarga() {
  const [form, setForm] = useState({
    nama: "",
    nik: "",
    alamat: "",
    no_hp: "",
  });

  const [foto, setFoto] = useState(null);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("DATA FORM:", form);

    let fotoUrl = "";

    // 🔥 UPLOAD FOTO (jika ada)
    if (foto) {
      const fileName = Date.now() + "_" + foto.name;

      const { data, error: uploadError } = await supabase.storage
        .from("foto-warga") // 👉 nama bucket
        .upload(fileName, foto);

      if (uploadError) {
        console.log("UPLOAD ERROR:", uploadError);
        alert("Upload gagal: " + uploadError.message);
        return;
      }

      fotoUrl = data.path;
    }

    // 🔥 INSERT DATA
    const { error } = await supabase.from("warga").insert([
      {
        nama: form.nama,
        nik: form.nik,
        alamat: form.alamat,
        no_hp: form.no_hp,
        foto: fotoUrl,
      },
    ]);

    if (error) {
      console.log("INSERT ERROR:", error);
      alert("Gagal tambah: " + error.message);
    } else {
      alert("Berhasil tambah");
      setForm({
        nama: "",
        nik: "",
        alamat: "",
        no_hp: "",
      });
      setFoto(null);
    }
  };

  return (
    <div className="form-container">
      <h1>Tambah Data Warga</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nama"
          placeholder="Nama"
          value={form.nama}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="nik"
          placeholder="NIK"
          value={form.nik}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="alamat"
          placeholder="Alamat"
          value={form.alamat}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="no_hp"
          placeholder="No HP"
          value={form.no_hp}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          onChange={(e) => setFoto(e.target.files[0])}
        />

        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}