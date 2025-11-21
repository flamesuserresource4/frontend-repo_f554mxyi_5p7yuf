import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { useEffect } from 'react'

// Full-page 3D parallax background with layered Japanese-inspired scenery
// - Responds to mouse movement for subtle 3D tilt
// - Responds to scroll for depth parallax
// - Lightweight and GPU-accelerated

function ParallaxBackground() {
  const { scrollYProgress } = useScroll()

  // Mouse-based parallax
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 80, damping: 20 })
  const sy = useSpring(my, { stiffness: 80, damping: 20 })

  useEffect(() => {
    const handleMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window
      const x = (e.clientX - w / 2) / (w / 2) // -1..1
      const y = (e.clientY - h / 2) / (h / 2) // -1..1
      mx.set(x)
      my.set(y)
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [mx, my])

  // Scroll parallax base values
  const skyY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const farY = useTransform(scrollYProgress, [0, 1], [0, 220])
  const midY = useTransform(scrollYProgress, [0, 1], [0, 340])
  const nearY = useTransform(scrollYProgress, [0, 1], [0, 460])

  // Mouse transforms: different depths move at different rates
  const depth = (factor) => ({
    x: useTransform(sx, [-1, 1], [15 * factor, -15 * factor]),
    y: useTransform(sy, [-1, 1], [10 * factor, -10 * factor]),
    r: useTransform(sx, [-1, 1], [-2 * factor, 2 * factor])
  })

  const sky = depth(0.2)
  const far = depth(0.4)
  const mid = depth(0.7)
  const near = depth(1.0)

  return (
    <div className="pointer-events-none fixed inset-0 -z-20">
      {/* Base gradient sky */}
      <motion.div
        className="absolute inset-0"
        style={{ y: skyY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rose-100 via-amber-50 to-sky-100" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #ef4444 1px, transparent 1px), radial-gradient(circle at 80% 40%, #f59e0b 1px, transparent 1px), radial-gradient(circle at 40% 80%, #38bdf8 1px, transparent 1px)', backgroundSize: '42px 42px, 56px 56px, 68px 68px' }} />
      </motion.div>

      {/* Sun */}
      <motion.div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full"
        style={{ x: sky.x, y: sky.y, rotate: sky.r, filter: 'blur(0.2px)' }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-rose-400 to-amber-300 opacity-70 shadow-[0_0_150px_rgba(244,114,182,0.35)]" />
      </motion.div>

      {/* Distant mountains */}
      <motion.div className="absolute bottom-24 left-0 right-0 h-48" style={{ y: farY }}>
        <motion.div
          className="absolute inset-0"
          style={{ x: far.x, y: far.y, rotate: far.r }}
        >
          <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="none">
            <linearGradient id="farGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.8" />
            </linearGradient>
            <path d="M0,140 L120,110 L220,140 L360,90 L520,140 L700,100 L860,140 L1000,110 L1200,140 L1200,200 L0,200 Z" fill="url(#farGrad)" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Mid mountains with Torii */}
      <motion.div className="absolute bottom-10 left-0 right-0 h-56" style={{ y: midY }}>
        <motion.div className="absolute inset-0" style={{ x: mid.x, y: mid.y, rotate: mid.r }}>
          <svg viewBox="0 0 1200 240" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="midGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#64748b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path d="M0,160 L140,120 L300,160 L440,110 L620,160 L780,120 L920,160 L1080,130 L1200,160 L1200,240 L0,240 Z" fill="url(#midGrad)" />
          </svg>
          {/* Minimal Torii silhouette */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-24 h-20">
            <div className="absolute top-0 left-0 right-0 h-2 bg-rose-600 rounded" />
            <div className="absolute top-2 left-2 right-2 h-2 bg-rose-500 rounded" />
            <div className="absolute top-4 left-5 w-2 h-16 bg-rose-700 rounded" />
            <div className="absolute top-4 right-5 w-2 h-16 bg-rose-700 rounded" />
          </div>
        </motion.div>
      </motion.div>

      {/* Foreground hills and lanterns */}
      <motion.div className="absolute bottom-0 left-0 right-0 h-40" style={{ y: nearY }}>
        <motion.div className="absolute inset-0" style={{ x: near.x, y: near.y, rotate: near.r }}>
          <svg viewBox="0 0 1200 160" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="nearGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
            </defs>
            <path d="M0,120 L160,90 L320,120 L480,80 L640,120 L800,90 L960,120 L1120,85 L1200,120 L1200,160 L0,160 Z" fill="url(#nearGrad)" />
          </svg>
          {/* Floating lanterns */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-6 w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_24px_rgba(251,191,36,0.9)]"
              style={{ left: `${5 + i * 12}%` }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [-10, -80 - i * 10], opacity: [0, 1, 0] }}
              transition={{ duration: 6 + i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ParallaxBackground
