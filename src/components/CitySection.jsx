import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function CitySection({ id, titleJP, titleEN, description, image, accent }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05])
  const rotate = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5])

  return (
    <section id={id} ref={ref} className="relative min-h-screen flex items-center py-24">
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${accent}22, transparent 25%, transparent 75%, ${accent}22)` }} />
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h2 style={{ y }} className="text-4xl md:text-6xl font-black tracking-tight text-slate-900">
            {titleJP}
            <span className="block text-2xl md:text-3xl font-medium text-slate-700 mt-3">{titleEN}</span>
          </motion.h2>
          <motion.p className="mt-6 text-lg text-slate-700/90" style={{ y }}>
            {description}
          </motion.p>
        </div>

        <div className="relative">
          <motion.div style={{ scale, rotate }} className="rounded-3xl overflow-hidden shadow-2xl border border-black/5">
            <img src={image} alt={titleEN} className="w-full h-[420px] object-cover" />
          </motion.div>
          <motion.div style={{ y }} className="absolute -z-10 -inset-6 rounded-[2rem]" aria-hidden>
            <div className="w-full h-full rounded-[2rem]" style={{ background: `radial-gradient( circle at 70% 30%, ${accent}55, transparent 60%)` }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CitySection
