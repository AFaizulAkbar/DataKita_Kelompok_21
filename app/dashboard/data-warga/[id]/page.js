"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";

export default function DetailWarga() {
  const { id } = useParams();
  const [warga, setWarga] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase
        .from("warga")
        .select("*")
        .eq("id", id)
        .single();

      setWarga(data);
    };

    getData();
  }, [id]);

  const getImageUrl = (path) => {
    if (!path) return "/no-image.png";
    const { data } = supabase.storage
      .from("foto-warga")
      .getPublicUrl(path);

    return data.publicUrl;
  };

  if (!warga) return <p>Loading...</p>;

  return (
    <div className="detail-wrapper">
      <div className="detail-card">

        <div className="detail-header">
          <img
            src={getImageUrl(warga.foto)}
            alt="foto"
            className="detail-img"
          />
          <h2>{warga.nama}</h2>
        </div>

        <div className="detail-body">
          <div className="item">
            <span>NIK</span>
            <p>{warga.nik}</p>
          </div>

          <div className="item">
            <span>Alamat</span>
            <p>{warga.alamat}</p>
          </div>

          <div className="item">
            <span>No HP</span>
            <p>{warga.no_hp}</p>
          </div>
        </div>

        <div className="detail-footer">
          <button
            className="btn-back"
            onClick={() => window.location.href = "/dashboard/data-warga"}
          >
            Kembali
          </button>
        </div>

      </div>
    </div>
  );
}