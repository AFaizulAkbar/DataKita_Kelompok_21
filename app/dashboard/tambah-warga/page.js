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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    let fotoUrl = "";

   
    if (foto) {
      const fileName = Date.now() + "_" + foto.name;

      const { data, error: uploadError } = await supabase.storage
        .from("foto-warga")
        .upload(fileName, foto);

      if (uploadError) {
        setLoading(false);
        setMessage("❌ Upload gagal: " + uploadError.message);
        return;
      }

      fotoUrl = data.path;
    }

 
    const { error } = await supabase.from("warga").insert([
      {
        nama: form.nama,
        nik: form.nik,
        alamat: form.alamat,
        no_hp: form.no_hp,
        foto: fotoUrl,
      },
    ]);

    setLoading(false);

    if (error) {
      setMessage("❌ Gagal tambah: " + error.message);
    } else {
      setMessage("✅ Data berhasil ditambahkan");

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
    <div className="form-wrapper">
      <div className="form-card">
        <h1 className="title">Tambah Data Warga</h1>

    
        {message && <p className="feedback">{message}</p>}

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="nama"
            placeholder="Nama Lengkap"
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

          <button type="submit" disabled={loading} className="btn">
            {loading ? <span className="loader"></span> : "Simpan"}
          </button>
        </form>
      </div>
    </div>
  );
}