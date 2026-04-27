export default function About() {
  return (
    <section className="about-hero">
      <div className="about-hero-inner">
        <h1>Tentang <span>DataKita</span></h1>
        <p>
          Solusi pendataan warga berbasis digital untuk RT, RW, dan desa agar
          pengelolaan data menjadi lebih cepat, aman, dan modern.
        </p>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <h3>Visi Kami</h3>
          <p>
            Mendorong transformasi digital dalam sistem administrasi warga di
            seluruh Indonesia.
          </p>
        </div>

        <div className="about-card">
          <h3>Misi Kami</h3>
          <p>
            Menyediakan platform yang mudah digunakan, aman, dan efisien untuk
            pengelolaan data masyarakat.
          </p>
        </div>

        <div className="about-card">
          <h3>Kenapa DataKita?</h3>
          <p>
            Karena pencatatan manual sudah tidak relevan di era digital. DataKita
            hadir sebagai solusi praktis dan modern.
          </p>
        </div>
      </div>

      <div className="about-highlight">
        <img src="/assets/image/Indonesia.png" alt="DataKita" />
        <div>
          <h2>Digitalisasi Pendataan Warga Dimulai Dari Sini</h2>
          <p>
            Dengan DataKita, proses pendataan yang biasanya memakan waktu dan
            rawan kesalahan kini dapat dilakukan dalam hitungan detik dengan
            sistem yang rapi dan terstruktur.
          </p>

          <ul>
            <li> Data tersimpan aman di cloud</li>
            <li> Mudah dicari dan diperbarui</li>
            <li> Siap cetak laporan kapan saja</li>
            <li> Tampilan sederhana & mudah dipahami</li>
          </ul>
        </div>
      </div>
    </section>
  )
}