import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-[9999] overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 60%, #042d5c 0%, #021b3d 40%, #010e21 100%)' }}>

      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ocean-600/10 rounded-full blur-3xl animate-wave" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gold-500/8 rounded-full blur-3xl animate-wave2" />
      </div>

      {/* Ripple rings */}
      <div className="relative flex items-center justify-center mb-10">
        {[0, 0.5, 1.0, 1.5].map((delay, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ border: `1px solid rgba(251,191,36,${0.35 - i * 0.07})` }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: 200, height: 200, opacity: 0 }}
            transition={{ duration: 2.4, delay, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}

        {/* Logo image */}
        <motion.img
          src="/Logo.png"
          alt="BHUJAL"
          className="relative z-10 object-contain drop-shadow-[0_0_30px_rgba(251,191,36,0.7)]"
          style={{ width: 160, height: 'auto' }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Loading bar */}
      <motion.div
        className="mt-10 w-56 h-0.5 bg-white/10 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #fbbf24, #fde68a, #fbbf24)' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.9, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.p
        className="mt-4 text-white/25 text-xs tracking-[0.2em] font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        FROM EARTH'S PURE DEPTHS
      </motion.p>
    </div>
  )
}
