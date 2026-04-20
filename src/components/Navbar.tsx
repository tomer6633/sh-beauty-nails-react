import { useState } from 'react'
import { Link } from 'react-router-dom'
import { business } from '../data/BusinessData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-bold text-rose-600" style={{ color: '#d63384' }}>
          {business.name}
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#services" className="hover:text-rose-600 transition" style={{ color: '#2c2c2c' }}>Services</a>
          <a href="#about" className="hover:text-rose-600 transition" style={{ color: '#2c2c2c' }}>About</a>
          <a href="#reviews" className="hover:text-rose-600 transition" style={{ color: '#2c2c2c' }}>Reviews</a>
          <a href={business.tel} className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-rose-700 transition" style={{ backgroundColor: '#d63384' }}>
            📞 Call Now
          </a>
        </div>
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4 flex flex-col gap-4 text-sm font-medium">
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#reviews" onClick={() => setOpen(false)}>Reviews</a>
          <a href={business.tel} className="text-white text-center py-2 rounded-full font-semibold" style={{ backgroundColor: '#d63384' }}>📞 Call Now</a>
        </div>
      )}
    </nav>
  )
}
