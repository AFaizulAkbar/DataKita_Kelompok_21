import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>
            Kelola <span>Data Warga</span><br />
            Lebih Cepat & Modern
          </h1>

          <p>
            Platform pendataan warga berbasis digital yang membantu RT/RW dan desa
            mengelola data secara aman, rapi, dan transparan tanpa pencatatan manual.
          </p>

          {/* 🔥 ubah ke login */}
          <Link href="/login" className="btn">
            Mulai Sekarang
          </Link>
        </div>

        <figure className="hero-img">
          <img
            src="/assets/image/Indonesia.png"
            alt="Ilustrasi pendataan digital"
          />
        </figure>
      </section>

      <section className="section white">
        <div className="section-header">
          <h2>Fitur Unggulan</h2>
        </div>

        <div className="grid">
          <div className="card">
            <h3>Input Data Super Cepat</h3>
            <p>
              Tambah dan perbarui data warga hanya dalam hitungan detik.
            </p>
          </div>

          <div className="card">
            <h3>Penyimpanan Cloud Aman</h3>
            <p>
              Data tersimpan otomatis dan aman dari risiko kehilangan.
            </p>
          </div>

          <div className="card">
            <h3>Laporan Otomatis</h3>
            <p>
              Rekap data siap cetak kapan saja saat dibutuhkan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}