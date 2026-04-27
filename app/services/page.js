export default function Services() {
  return (
    <section className="services-hero">
      <div className="services-wrapper">
        <h1 className="services-heading">
          Layanan <span>DataKita</span>
        </h1>

        <p className="services-lead">
          DataKita menyediakan solusi pendataan warga berbasis digital
          yang dirancang khusus untuk RT, RW, dan Desa agar pengelolaan data
          menjadi lebih cepat, aman, dan modern.
        </p>

        <div className="services-cards">
          <div className="services-card">
            <h3>Manajemen Data Warga</h3>
            <p>
              Input, edit, dan kelola data warga dengan sistem yang rapi
              dan mudah digunakan oleh siapa saja.
            </p>
          </div>

          <div className="services-card">
            <h3>Penyimpanan Cloud Aman</h3>
            <p>
              Semua data tersimpan otomatis di cloud sehingga tidak ada
              risiko kehilangan data.
            </p>
          </div>

          <div className="services-card">
            <h3>Laporan Otomatis</h3>
            <p>
              Rekap dan laporan data warga dapat dibuat secara otomatis
              tanpa perhitungan manual.
            </p>
          </div>

          <div className="services-card">
            <h3>Keamanan Data Maksimal</h3>
            <p>
              Sistem keamanan melindungi data warga agar tetap aman
              dan tidak mudah diakses pihak luar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}