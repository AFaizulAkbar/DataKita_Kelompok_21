"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

import {
  useParams,
  useRouter,
} from "next/navigation";

export default function EditWarga() {

  const { id } = useParams();

  const router = useRouter();

  const [form, setForm] = useState({
    nama: "",
    nik: "",
    alamat: "",
    no_hp: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    getDetail();

  }, []);


  const getDetail = async () => {

    const { data } = await supabase
      .from("warga")
      .select("*")
      .eq("id", id)
      .single();

    if (data) {

      setForm({
        nama: data.nama,
        nik: data.nik,
        alamat: data.alamat,
        no_hp: data.no_hp,
      });
    }
  };


  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("warga")
      .update({
        nama: form.nama,
        nik: form.nik,
        alamat: form.alamat,
        no_hp: form.no_hp,
      })
      .eq("id", id);

    setLoading(false);

    if (!error) {

      alert("Data berhasil diupdate");

      router.push("/dashboard/data-warga");

    } else {

      alert("Gagal update data");
    }
  };

  return (
    <div className="form-wrapper">

      <div className="form-card">

        <h1 className="title">
          Edit Data Warga
        </h1>

        <form
          onSubmit={handleSubmit}
          className="form"
        >

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

          <button
            type="submit"
            className="btn"
            disabled={loading}
          >
            {loading ? "Loading..." : "Update Data"}
          </button>
        </form>
      </div>
    </div>
  );
}