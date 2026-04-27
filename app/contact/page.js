'use client'
import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const phoneNumber = '6285736412263'

  const handleSubmit = (e) => {
    e.preventDefault()

    const text = `
Assalamu'alaikum Warahmatullahi Wabarakatuh
Halo Tim DataKita

Perkenalkan, saya *${name}*
Email: ${email}

Saya tertarik dengan layanan DataKita dan ingin menyampaikan pesan berikut:

"${message}"

Mohon informasi dan tindak lanjutnya, Terima kasih 
Wassalamu'alaikum Warahmatullahi Wabarakatuh
    `.trim().replace(/\n/g, '%0A')

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank')
  }

  return (
    <section className="services-hero">
      <div className="services-wrapper">
        <h1>
          Hubungi <span>DataKita</span>
        </h1>

        <p className="services-lead">
          Ada pertanyaan, kebutuhan sistem pendataan, atau ingin bekerja sama?
          Kirim pesan kepada tim DataKita dan kami akan merespons Anda secepat mungkin.
        </p>

        <div className="services-cards" style={{ marginTop: '40px' }}>
          <form className="services-card" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ padding: '14px', marginBottom: '14px', width: '100%' }}
            />

            <input
              type="email"
              placeholder="Alamat Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: '14px', marginBottom: '14px', width: '100%' }}
            />

            <textarea
              placeholder="Tulis pesan atau kebutuhan Anda di sini..."
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{ padding: '14px', marginBottom: '20px', width: '100%' }}
            />

            <button type="submit" className="btn">
              Kirim Pesan via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}