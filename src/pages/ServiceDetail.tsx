import { useParams, Link } from 'react-router-dom'
import { business } from '../data/BusinessData'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = business.services.find(s => s.slug === slug)
  if (!service) return <div className="p-8 text-center text-gray-500">Service not found. <Link to="/" className="underline">Go home</Link></div>
  return (
    <main className="pb-24">
      <div className="relative h-64 md:h-96" style={{ backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${service.image})`, backgroundSize:'cover', backgroundPosition:'center' }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="font-serif text-4xl font-bold mb-2">{service.title}</h1>
          <p className="text-pink-200">{business.name} · {business.neighbourhood}</p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 py-12">
        <p className="text-gray-600 text-lg mb-8">{service.description}</p>
        <p className="text-gray-500 mb-8">Our skilled technicians bring precision and care to every {service.title.toLowerCase()} appointment. Walk-ins welcome — or call to book.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={business.tel} className="text-white text-center font-semibold px-8 py-3 rounded-full hover:opacity-90 transition" style={{backgroundColor:'#d63384'}}>📞 Book Now — {business.phone}</a>
          <Link to="/" className="border border-gray-300 text-center font-medium px-8 py-3 rounded-full hover:bg-gray-50 transition text-gray-700">← Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
