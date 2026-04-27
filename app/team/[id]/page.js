import Image from 'next/image'
import Link from 'next/link'

export default async function TeamDetail({ params }) { 
  const { id } = await params

  const teamData = {
    "1": {
      name: 'A Faizul Akbar',
      role: 'Founder DataKita',
      bio: 'Pengembang utama sistem pendataan warga digital DataKita yang berfokus pada efisiensi dan digitalisasi data.',
      image: '/assets/image/faizul.jpeg',
    },
    "2": {
      name: 'Aji Kurnia Akbar',
      role: 'Frontend Developer',
      bio: 'Mendesain tampilan antarmuka aplikasi agar mudah digunakan, modern, dan responsive di semua perangkat.',
      image: '/assets/image/aji.jpeg',
    },
    "3": {
      name: 'Ariel Pramudya Risky Hidayattullah',
      role: 'Backend DataKita',
      bio: 'Mengolah data agar dapat diproses dengan cepat, aman, dan ditampilkan oleh sistem frontend.',
      image: '/assets/image/ariel.png',
    },
  }

  const member = teamData[id]

  if (!member) {
    return (
      <section className="section white">
        <h2>Team tidak ditemukan</h2>
        <Link href="/team" className="btn">Kembali ke Team</Link>
      </section>
    )
  }

  return (
    <section className="team-detail-hero">
      <div className="team-detail-card">

        {/* FOTO */}
        <Image
          src={member.image}
          alt={member.name}
          width={170}
          height={170}
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '25px',
            border: '5px solid #1d4ed8',
            boxShadow: '0 10px 25px rgba(0,0,0,.15)'
          }}
        />

        {/* NAMA */}
        <h1
          className="team-detail-name"
          style={{
            lineHeight: '1.3',
            marginBottom: '6px'
          }}
        >
          {member.name}
        </h1>

        {/* ROLE BADGE */}
        <span
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: '20px',
            background: '#1d4ed8',
            color: '#fff',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '18px'
          }}
        >
          {member.role}
        </span>

        <div className="team-detail-line"></div>

        {/* BIO */}
        <p
          className="team-detail-bio"
          style={{
            maxWidth: '520px',
            margin: '20px auto 30px',
          }}
        >
          {member.bio}
        </p>

        <Link href="/team" className="btn">
          Kembali ke Team
        </Link>

      </div>
    </section>
  )
}