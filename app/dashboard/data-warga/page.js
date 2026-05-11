"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import {
  useSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";

export default function DataWarga() {

  const [dataWarga, setDataWarga] = useState([]);

  const searchParams = useSearchParams();

  const pathname = usePathname();

  const { replace } = useRouter();

  const search = searchParams.get("search") || "";

  const getData = async () => {

    let query = supabase
      .from("warga")
      .select("*");

    if (search) {

      query = query.ilike("nama", `%${search}%`);
    }

    const { data, error } = await query;

    if (!error) {
      setDataWarga(data);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  const getImageUrl = (path) => {

    if (!path) return "";

    const { data } = supabase.storage
      .from("foto-warga")
      .getPublicUrl(path);

    return data.publicUrl;
  };

  const handleSearch = (e) => {

    const params = new URLSearchParams(searchParams);

    const value = e.target.value;

    if (value) {

      params.set("search", value);

    } else {

      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleDelete = async (id, foto) => {

    if (!confirm("Yakin hapus data?")) return;

    if (foto) {

      await supabase.storage
        .from("foto-warga")
        .remove([foto]);
    }

    const { error } = await supabase
      .from("warga")
      .delete()
      .eq("id", id);

    if (!error) {

      alert("Berhasil hapus");

      getData();

    } else {

      alert("Gagal hapus");
    }
  };

  return (
    <div className="data-container">

      <div className="top-table">

        <h1>Data Warga</h1>

        <input
          type="text"
          placeholder="Cari warga..."
          defaultValue={search}
          onChange={handleSearch}
          className="search-bar"
        />

      </div>

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
                  className="btn-edit"
                  onClick={() =>
                    (window.location.href = `/dashboard/edit-warga/${warga.id}`)
                  }
                >
                  Edit
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