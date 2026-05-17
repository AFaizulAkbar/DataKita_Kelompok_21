"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LaporanPage() {

  const [warga, setWarga] = useState([]);

  useEffect(() => {
    getDataWarga();
  }, []);

  const getDataWarga = async () => {

    const { data, error } = await supabase
      .from("warga")
      .select("*");

    if (error) {
      console.log(error);
      return;
    }

    setWarga(data);
  };

  // DOWNLOAD PDF
  const downloadPDF = () => {
    window.print();
  };

  return (
    <div className="laporan-container">

      <div className="laporan-top">

        <div>
          <h1>Laporan Warga</h1>
          <p>Data seluruh warga</p>
        </div>

        <button
          className="pdf-btn"
          onClick={downloadPDF}
        >
          Download PDF
        </button>

      </div>

      <div className="table-wrapper">

        <table className="laporan-table">

          <thead>
            <tr>
              <th>No</th>
              <th>Foto</th>
              <th>NIK</th>
              <th>Nama</th>
              <th>No HP</th>
              <th>Alamat</th>
            </tr>
          </thead>

          <tbody>

            {warga.map((item, index) => (
              <tr key={item.id}>

                <td>{index + 1}</td>

                <td>
                  <img
                    src={item.foto}
                    alt={item.nama}
                    className="foto-warga"
                  />
                </td>

                <td>{item.nik}</td>
                <td>{item.nama}</td>
                <td>{item.no_hp}</td>
                <td>{item.alamat}</td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}