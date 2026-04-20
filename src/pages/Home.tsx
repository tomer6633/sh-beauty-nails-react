import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { business } from '../data/BusinessData'

export default function Home() {
  const fadeRefs = useRef<HTMLElement[]>([])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    fadeRefs.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])
  const addRef = (el: HTMLElement | null) => { if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el) }

  return (
    <main className="pb-20">
      <section className="relative h-[85vh] min-h-[480px] flex items-center justify-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url(${business.heroImage})`, backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment:'fixed' }}>
        <div className="text-center px-4">
          <p className="text-sm uppercase tracking-widest mb-3 text-pink-200">{business.neighbourhood}</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">{business.name}</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl mx-auto">{business.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={business.tel} className="text-white font-semibold px-8 py-3 rounded-full text-lg transition hover:opacity-90" style={{backgroundColor:'#d63384'}}>📞 {business.phone}</a>
            <a href="#services" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-white hover:text-gray-900 transition">See Services</a>
          </div>
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          {[{val:business.rating+'★',label:'Google Rating'},{val:business.reviews,label:'Happy Clients'},{val:'10+',label:'Years in London'}].map(s=>(
            <div key={s.label}><p className="text-2xl md:text-3xl font-bold" style={{color:'#d63384'}}>{s.val}</p><p className="text-sm text-gray-500 mt-1">{s.label}</p></div>
          ))}
        </div>
      </section>
      <section id="services" className="py-16 max-w-6xl mx-auto px-4">
        <h2 ref={addRef} className="fade-in font-serif text-3xl md:text-4xl font-bold text-center mb-2">Our Services</h2>
        <p ref={addRef} className="fade-in text-center text-gray-500 mb-10">Everything for beautiful nails — all under one roof.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {business.services.map(svc=>(
            <Link to={`/services/${svc.slug}`} key={svc.slug} className="service-card bg-white rounded-2xl overflow-hidden shadow-sm block">
              <img src={svc.image} alt={svc.title} className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-1">{svc.title}</h3>
                <p className="text-sm text-gray-500">{svc.description}</p>
                <span className="mt-3 inline-block text-sm font-medium" style={{color:'#d63384'}}>Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section id="about" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" alt="Salon" className="rounded-2xl shadow-md w-full h-72 object-cover"/>
          <div ref={addRef} className="fade-in">
            <p className="text-sm uppercase tracking-widest mb-2" style={{color:'#d63384'}}>About Us</p>
            <h2 className="font-serif text-3xl font-bold mb-4">Downtown London's Nail Destination</h2>
            <p className="text-gray-600 mb-4">At S&H Beauty Nails on Richmond Street, we believe every client deserves flawless nails and a relaxing experience. Our skilled technicians take pride in precision and cleanliness.</p>
            <p className="text-gray-600 mb-6">Walk-ins are always welcome. From a quick polish change to full acrylic sets, we do it all — beautifully.</p>
            <div className="text-sm text-gray-500 space-y-1">
              <p>📍 {business.address}</p>
              <p>🕐 {business.hours}</p>
              <p>📞 <a href={business.tel} style={{color:'#d63384'}}>{business.phone}</a></p>
            </div>
          </div>
        </div>
      </section>
      <section id="reviews" className="py-16 max-w-6xl mx-auto px-4">
        <h2 ref={addRef} className="fade-in font-serif text-3xl font-bold text-center mb-10">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {business.reviews_list.map(r=>(
            <div ref={addRef} key={r.name} className="fade-in bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-yellow-400 text-lg mb-2">{'★'.repeat(r.stars)}</p>
              <p className="text-gray-600 text-sm mb-4 italic">"{r.text}"</p>
              <p className="font-semibold text-sm">— {r.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 text-center px-4" style={{backgroundColor:'#d63384'}}>
        <h2 className="font-serif text-3xl font-bold text-white mb-4">Ready for Beautiful Nails?</h2>
        <p className="text-pink-100 mb-8">Walk-ins welcome — or call to book your appointment today.</p>
        <a href={business.tel} className="bg-white font-bold px-10 py-4 rounded-full text-lg hover:bg-pink-50 transition" style={{color:'#d63384'}}>📞 {business.phone}</a>
      </section>
    </main>
  )
}
