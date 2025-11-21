import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CitySection from './components/CitySection'
import Footer from './components/Footer'

function App() {
  const cities = [
    {
      id: 'tokyo',
      titleJP: '東京',
      titleEN: 'Tokyo — Neon skylines and timeless shrines',
      description:
        'Ultramodern towers meet tranquil temples. Wander through Shibuya’s energy, Asakusa’s heritage, and the peaceful gardens that hide between them.',
      image:
        'https://images.unsplash.com/photo-1518544801976-3e188ea76158?q=80&w=1600&auto=format&fit=crop',
      accent: '#ef4444',
    },
    {
      id: 'kyoto',
      titleJP: '京都',
      titleEN: 'Kyoto — Gates, geisha, and golden pavilions',
      description:
        'Walk beneath thousands of vermilion torii at Fushimi Inari, hear the quiet of moss temples, and catch a glimpse of maiko at dusk in Gion.',
      image:
        'https://images.unsplash.com/photo-1545569341-b3136fc1fdfd?q=80&w=1600&auto=format&fit=crop',
      accent: '#f59e0b',
    },
    {
      id: 'osaka',
      titleJP: '大阪',
      titleEN: 'Osaka — Street food and sparkling canals',
      description:
        'Laughter, takoyaki, and neon signs along Dotonbori. A lively city where every corner serves flavor and fun in equal measure.',
      image:
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop',
      accent: '#22c55e',
    },
    {
      id: 'hiroshima',
      titleJP: '広島',
      titleEN: 'Hiroshima — Memory, peace, and Miyajima',
      description:
        'A serene city reborn, with moving memorials and the floating torii of Itsukushima Shrine just a ferry ride away.',
      image:
        'https://images.unsplash.com/photo-1584988299603-7e6f39b09d9c?q=80&w=1600&auto=format&fit=crop',
      accent: '#38bdf8',
    },
    {
      id: 'sapporo',
      titleJP: '札幌',
      titleEN: 'Sapporo — Snow festivals and summer fields',
      description:
        'From sparkling winter sculptures to lavender seas in Furano, Hokkaido’s gateway blends nature with a vibrant city pulse.',
      image:
        'https://images.unsplash.com/photo-1549890762-0a3f8933bc86?q=80&w=1600&auto=format&fit=crop',
      accent: '#8b5cf6',
    },
    {
      id: 'nara',
      titleJP: '奈良',
      titleEN: 'Nara — Ancient temples and gentle deer',
      description:
        'Monumental Buddhas, lantern-lit paths, and friendly deer roaming through sun-dappled parks and shrine grounds.',
      image:
        'https://images.unsplash.com/photo-1545569341-0daa6e56c1cb?q=80&w=1600&auto=format&fit=crop',
      accent: '#06b6d4',
    },
  ]

  return (
    <div className="relative bg-white text-slate-900">
      {/* Depth field for a subtle 3D feel across the page */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(244,63,94,0.08),transparent),radial-gradient(800px_400px_at_110%_10%,rgba(14,165,233,0.07),transparent)]" />
      </div>

      <Navbar />
      <Hero />

      {cities.map((c) => (
        <CitySection key={c.id} {...c} />
      ))}

      <Footer />
    </div>
  )
}

export default App
