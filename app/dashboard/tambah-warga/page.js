"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { z } from "zod";

const schema = z.object({
  nama: z.string().min(3, "Nama minimal 3 huruf"),
  nik: z.string().min(16, "NIK harus 16 digit").max(16, "NIK harus 16 digit"),
  alamat: z.string().min(5, "Alamat terlalu pendek"),
  no_hp: z.string().min(10, "No HP tidak valid"),
});

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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);
    setMessage("");

    const result = schema.safeParse(form);

    if (!result.success) {

      const err = result.error.flatten().fieldErrors;

      setErrors(err);

      setLoading(false);

      return;
    }

    setErrors({});

    let fotoUrl = "";

    if (foto) {

      const fileName = Date.now() + "_" + foto.name;

      const { data, error: uploadError } = await supabase.storage
        .from("foto-warga")
        .upload(fileName, foto);

      if (uploadError) {

        setLoading(false);

        setMessage("❌ Upload gagal");

        return;
      }

      fotoUrl = data.path;
    }

    const { error } = await supabase
      .from("warga")
      .insert([
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

      setMessage("❌ Gagal tambah data");

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

        <h1 className="title">
          Tambah Data Warga
        </h1>

        {message && (
          <p className="feedback">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="form">

          <input
            type="text"
            name="nama"
            placeholder="Nama Lengkap"
            value={form.nama}
            onChange={handleChange}
          />

          {errors.nama && (
            <p className="error-text">
              {errors.nama[0]}
            </p>
          )}

          <input
            type="text"
            name="nik"
            placeholder="NIK"
            value={form.nik}
            onChange={handleChange}
          />

          {errors.nik && (
            <p className="error-text">
              {errors.nik[0]}
            </p>
          )}

          <input
            type="text"
            name="alamat"
            placeholder="Alamat"
            value={form.alamat}
            onChange={handleChange}
          />

          {errors.alamat && (
            <p className="error-text">
              {errors.alamat[0]}
            </p>
          )}

          <input
            type="text"
            name="no_hp"
            placeholder="No HP"
            value={form.no_hp}
            onChange={handleChange}
          />

          {errors.no_hp && (
            <p className="error-text">
              {errors.no_hp[0]}
            </p>
          )}

          <input
            type="file"
            onChange={(e) => setFoto(e.target.files[0])}
          />

          <button
            type="submit"
            disabled={loading}
            className="btn"
          >
            {loading ? "Loading..." : "Simpan"}
          </button>

        </form>
      </div>
    </div>
  );
}