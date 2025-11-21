import { useState } from 'react'
import { Menu } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const items = [
    { id: 'tokyo', label: '東京 Tokyo' },
    { id: 'kyoto', label: '京都 Kyoto' },
    { id: 'osaka', label: '大阪 Osaka' },
    { id: 'hiroshima', label: '広島 Hiroshima' },
    { id: 'sapporo', label: '札幌 Sapporo' },
    { id: 'nara', label: '奈良 Nara' },
  ]

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => scrollTo('top')} className="flex items-center gap-3">
              <span className="text-2xl">🗻</span>
              <span className="font-semibold tracking-tight text-white">Nippon Voyage</span>
            </button>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {items.map((it) => (
                <button key={it.id} onClick={() => scrollTo(it.id)} className="text-slate-200/90 hover:text-white transition-colors">
                  {it.label}
                </button>
              ))}
              <a href="/test" className="text-slate-300/70 hover:text-white">Test</a>
            </nav>
            <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="menu">
              <Menu size={22} />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid grid-cols-2 gap-2">
                {items.map((it) => (
                  <button key={it.id} onClick={() => scrollTo(it.id)} className="text-left text-slate-200/90 hover:text-white transition-colors">
                    {it.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
