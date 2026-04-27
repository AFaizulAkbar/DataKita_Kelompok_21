'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.body.classList.add('dark')
      setDark(true)
    }
  }, [])

  const toggleTheme = () => {
    if (dark) {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    setDark(!dark)
  }

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="logo">
        <img src="/assets/image/Logo DK.png" alt="Logo DataKita" />
        <span>DataKita</span>
      </div>

      {/* NAV */}
      <nav className={`nav-links ${open ? 'active' : ''}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/services" onClick={closeMenu}>Services</Link>
        <Link href="/team" onClick={closeMenu}>Team</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
      </nav>

      <div className="nav-actions">
        <button onClick={toggleTheme} className="theme-toggle">
          {dark ? '☀️' : '🌙'}
        </button>

        {/* HAMBURGER (muncul di HP) */}
        <div
          className="menu-toggle"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>
    </header>
  )
}