"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DataWarga() {
  const [dataWarga, setDataWarga] = useState([]);


  const getData = async () => {
    const { data, error } = await supabase.from("warga").select("*");

    if (!error) setDataWarga(data);
  };

  useEffect(() => {
    getData();
  }, []);


  const getImageUrl = (path) => {
    if (!path) return "";
    const { data } = supabase.storage
      .from("foto-warga")
      .getPublicUrl(path);

    return data.publicUrl;
  };


  const handleDelete = async (id, foto) => {
    if (!confirm("Yakin hapus data?")) return;

    if (foto) {
      await supabase.storage.from("foto-warga").remove([foto]);
    }

    const { error } = await supabase.from("warga").delete().eq("id", id);

    if (!error) {
      alert("Berhasil hapus");
      getData();
    } else {
      alert("Gagal hapus");
    }
  };

  return (
    <div className="data-container">
      <h1>Data Warga</h1>

      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nama</th>
            <th>NIK</th>
            <th>Alamat</th>
            <th>No HP</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {dataWarga.map((warga) => (
            <tr key={warga.id}>
              <td>
                {warga.foto ? (
                  <img
                    src={getImageUrl(warga.foto)}
                    className="foto"
                  />
                ) : (
                  "Tidak ada"
                )}
              </td>

              <td>{warga.nama}</td>
              <td>{warga.nik}</td>
              <td>{warga.alamat}</td>
              <td>{warga.no_hp}</td>

              <td>
                <button
                  className="btn-detail"
                  onClick={() =>
                    (window.location.href = `/dashboard/data-warga/${warga.id}`)
                  }
                >
                  Detail
                </button>

                <button
                  className="btn-delete"
                  onClick={() => handleDelete(warga.id, warga.foto)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}