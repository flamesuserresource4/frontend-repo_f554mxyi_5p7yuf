import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background gradient + subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-amber-100 to-sky-100" />
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #ef4444 1px, transparent 1px), radial-gradient(circle at 80% 40%, #f59e0b 1px, transparent 1px), radial-gradient(circle at 40% 80%, #38bdf8 1px, transparent 1px)', backgroundSize: '40px 40px, 50px 50px, 60px 60px' }} />

      {/* Parallax decorative artwork */}
      <motion.img
        src="https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop"
        alt="Japanese wave"
        className="absolute -left-20 bottom-0 w-[700px] opacity-80 mix-blend-multiply"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 0.8 }}
        transition={{ duration: 1.2 }}
      />
      <motion.img
        src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=1600&auto=format&fit=crop"
        alt="Cranes"
        className="absolute right-0 top-10 w-[520px] opacity-70"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 0.7 }}
        transition={{ duration: 1.2, delay: 0.15 }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 md:pt-36">
        <div className="max-w-2xl">
          <motion.h1
            className="text-5xl md:text-7xl font-black tracking-tight text-slate-900"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            日本の旅
            <span className="block text-2xl md:text-3xl font-medium text-slate-700 mt-4">Journey through Japan's iconic cities</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-slate-700/90"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Scroll to explore Tokyo, Kyoto, Osaka and more, with floating layers and subtle 3D depth.
          </motion.p>

          <motion.div
            className="mt-8 flex items-center gap-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <a href="#tokyo" className="px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">Start exploring</a>
            <a href="/test" className="px-5 py-3 rounded-xl bg-white/70 backdrop-blur border border-slate-900/10 text-slate-900 font-semibold hover:bg-white transition">Check backend</a>
          </motion.div>
        </div>
      </div>

      {/* Floating lanterns */}
      <div className="pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_25px_rgba(251,191,36,0.9)]"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [-20, -200 - i * 40], opacity: [0, 1, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
            style={{ left: `${10 + i * 12}%` }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
