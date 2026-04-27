import Link from 'next/link'

export default function TeamPage() {
  const team = [
    {
      id: 1,
      name: 'A Faizul Akbar',
      role: 'Founder DataKita',
      desc: 'Pengembang utama sistem pendataan warga digital DataKita.',
    },
    {
      id: 2,
      name: 'Aji Kurnia Akbar',
      role: 'Frontend Developer',
      desc: 'Mendesain tampilan antarmuka agar mudah digunakan dan modern.',
    },
    {
      id: 3,
      name: 'Ariel Pramudya Risky Hidayattullah',
      role: 'Backend Developer',
      desc: 'Mengolah data dan menghubungkan sistem agar berjalan stabil.',
    },
  ]

  return (
    <section className="team-hero">
      <div className="team-wrapper">

        <h1 className="team-heading">
          Team <span>DataKita</span>
        </h1>

        <p className="team-lead">
          Kami adalah tim kecil yang membangun sistem pendataan warga digital
          agar lebih cepat, rapi, dan modern untuk RT, RW, dan Desa.
        </p>

        <div className="team-cards">
          {team.map((member) => (
            <Link
              href={`/team/${member.id}`}
              key={member.id}
              className="team-card"
            >
              <h3>{member.name}</h3>

              <p className="team-role">
                {member.role}
              </p>

              <p>{member.desc}</p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}