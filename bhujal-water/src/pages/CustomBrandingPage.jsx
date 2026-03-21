import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const steps = [
  { step: '01', title: 'Choose Your Size', desc: 'Pick from 100ml to 50L based on your event needs' },
  { step: '02', title: 'Share Your Design', desc: 'Send us your logo, colors and label design' },
  { step: '03', title: 'We Create Mockups', desc: 'Get a digital preview of your branded bottles' },
  { step: '04', title: 'Production & Delivery', desc: 'We produce and deliver before your deadline' },
]

const useCases = [
  { emoji: '🏢', title: 'Corporate Events', desc: 'Boardroom meetings, team events, conferences with your brand on every bottle.', color: 'from-blue-500/20 to-ocean-800' },
  { emoji: '💍', title: 'Weddings', desc: 'Personalized water for your perfect day. Custom couple names and dates.', color: 'from-pink-500/20 to-ocean-800' },
  { emoji: '🏨', title: 'Hotels & Restaurants', desc: 'Elevate room service and dining with premium branded water.', color: 'from-amber-500/20 to-ocean-800' },
  { emoji: '📢', title: 'Brand Promotions', desc: 'Product launches and campaigns — your brand reaches every hand.', color: 'from-green-500/20 to-ocean-800' },
  { emoji: '🎊', title: 'Parties & Events', desc: 'Birthday parties, reunions, social gatherings with styled bottles.', color: 'from-purple-500/20 to-ocean-800' },
  { emoji: '🏆', title: 'Sports Events', desc: 'Tournaments, marathons, fitness events — hydration with your team branding.', color: 'from-red-500/20 to-ocean-800' },
]

export default function CustomBrandingPage() {
  useEffect(() => {
    document.title = 'Custom Branded Water Bottles — Events & Hotels | BHUJAL'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Custom branded water bottles for weddings, corporate events, hotels and promotions. Your logo on premium BHUJAL bottles. Available in 100ml to 50L. Order from Andhra Pradesh.')
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 lg:py-28 min-h-[100svh] sm:min-h-[70vh] flex items-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="/custom_branding_hero.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/95 via-ocean-950/80 to-ocean-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-transparent to-ocean-950/50" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gold-500/8 rounded-full blur-3xl animate-wave" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-ocean-400/8 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gold-400 text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase">Unique Selling Point</span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mt-2 sm:mt-3 mb-4 sm:mb-6">
                Your Brand, <br /><span className="gold-text">Every Bottle</span>
              </h1>
              <p className="text-white/60 text-sm sm:text-lg leading-relaxed mb-3 sm:mb-4">
                Make a lasting impression with BHUJAL's custom branding service. 
                Transform ordinary water bottles into powerful brand ambassadors.
              </p>
              <p className="text-white/60 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-10">
                Perfect for <span className="text-gold-400 font-semibold">corporate events, weddings, hotels, 
                restaurants, promotions, and parties</span> — any quantity, any size.
              </p>

              {/* Bottles row — visible on mobile only */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex lg:hidden justify-center mb-8 relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gold-400/10 rounded-full blur-2xl scale-150" />
                  <div className="flex gap-3 items-end relative">
                    {[
                      { src: '/2L.jpeg', label: 'WEDDING', tint: 'from-pink-500/40' },
                      { src: '/1L.jpeg',       label: 'CORPORATE', tint: 'from-gold-500/40' },
                      { src: '/2L.jpeg',                             label: '2 LITRE',   tint: 'from-blue-500/40' },
                    ].map((bottle, i) => (
                      <motion.div
                        key={bottle.label}
                        className="relative rounded-xl overflow-hidden shadow-2xl"
                        style={{ width: i === 1 ? 90 : 75, height: i === 1 ? 145 : 120 }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                      >
                        <img
                          src={bottle.src}
                          alt={`BHUJAL ${bottle.label} Custom Bottle`}
                          className="w-full h-full object-cover object-bottom"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${bottle.tint} to-transparent`} />
                        <div className="absolute bottom-1.5 left-0 right-0 text-center">
                          <span className="text-white text-[9px] font-black tracking-widest drop-shadow-lg">{bottle.label}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-gold rounded-full px-3 py-1.5 whitespace-nowrap"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-gold-400 text-[10px] font-bold tracking-wider">✦ CUSTOM BRANDED ✦</span>
                  </motion.div>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/contact" className="btn-primary text-sm sm:text-base px-6 sm:px-10 py-3 sm:py-4 text-center">
                  Request Custom Branding
                </Link>
                <a
                  href="https://wa.me/918247836366?text=Hi!%20I'm%20interested%20in%20custom%20branded%20water%20bottles."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm sm:text-base px-6 sm:px-10 py-3 sm:py-4 text-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            {/* Mockup visual — desktop only */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-gold-400/10 rounded-full blur-3xl scale-150" />
                {/* 3 bottles side by side */}
                <div className="flex gap-4 items-end relative">
                  {[
                    { src: '/2L.jpeg', label: 'WEDDING', tint: 'from-pink-500/40' },
                    { src: '/1L.jpeg',       label: 'CORPORATE', tint: 'from-gold-500/40' },
                    { src: '/2L.jpeg',                             label: '2 LITRE',   tint: 'from-blue-500/40' },
                  ].map((bottle, i) => (
                    <motion.div
                      key={bottle.label}
                      className="relative rounded-2xl overflow-hidden shadow-2xl"
                      style={{ width: i === 1 ? 140 : 120, height: i === 1 ? 220 : 190 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                    >
                      <img
                        src={bottle.src}
                        alt={`BHUJAL ${bottle.label} Custom Bottle`}
                        className="w-full h-full object-cover object-bottom"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${bottle.tint} to-transparent`} />
                      <div className="absolute bottom-2 left-0 right-0 text-center">
                        <span className="text-white text-xs font-black tracking-widest drop-shadow-lg">{bottle.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Badge */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-gold rounded-full px-4 py-2 whitespace-nowrap"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-gold-400 text-xs font-bold tracking-wider">✦ CUSTOM BRANDED ✦</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-ocean-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">Use Cases</span>
            <h2 className="section-title mt-3">Made For <span className="gold-text">Every Occasion</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((c, i) => (
              <motion.div
                key={c.title}
                className={`rounded-3xl p-8 bg-gradient-to-br ${c.color} border border-white/6 hover:border-gold-400/25 card-hover group relative overflow-hidden`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{c.emoji}</div>
                <h4 className="text-white font-black text-xl mb-2 group-hover:text-gold-300 transition-colors">{c.title}</h4>
                <p className="text-white/55 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 relative" style={{ background: 'linear-gradient(180deg, #042d5c 0%, #010e21 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">Process</span>
            <h2 className="section-title mt-3">How It <span className="gold-text">Works</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-px z-0">
                    <div className="w-full h-full bg-gradient-to-r from-gold-400/40 to-transparent" />
                  </div>
                )}
                <div className="glass rounded-2xl p-6 text-center relative z-10 border border-white/5 hover:border-gold-400/25 group transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-400/25 to-ocean-600/20 border border-gold-400/35 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_16px_rgba(251,191,36,0.3)] transition-all duration-300">
                    <span className="text-gold-400 font-black text-xl">{step.step}</span>
                  </div>
                  <h4 className="text-white font-bold mb-2 group-hover:text-gold-300 transition-colors">{step.title}</h4>
                  <p className="text-white/50 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ocean-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-gold rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ready to Brand Your <span className="gold-text">Water Bottles</span>?
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Contact us with your requirements — event date, quantity, logo file, and preferred bottle size. 
                We'll get back with a custom quote within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-base px-10 py-4">
                  Request Custom Branding
                </Link>
                <a
                  href="mailto:ckpenterprises2025@gmail.com"
                  className="btn-outline text-base px-10 py-4 text-center"
                >
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
