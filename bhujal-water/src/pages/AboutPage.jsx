import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

const values = [
  {
    icon: '💧',
    title: 'Purity First',
    desc: 'Every drop goes through rigorous RO + Active Alkaline purification. Your health is our highest priority.',
  },
  {
    icon: '🏆',
    title: 'Quality Assured',
    desc: 'Our production follows the highest food safety standards. Clean, certified, and safe.',
  },
  {
    icon: '🌊',
    title: 'Nature Inspired',
    desc: 'Inspired by the pure depths of the earth. BHUJAL means "groundwater" — pure by nature.',
  },
  {
    icon: '🤝',
    title: 'Community Trust',
    desc: 'Built on trust. We serve homes, businesses and organizations across Andhra Pradesh.',
  },
]

const milestones = [
  { year: '2025', event: 'CKP Enterprises founded in Kakinada, AP' },
  { year: '2025', event: 'BHUJAL brand launched with RO purification technology' },
  { year: '2025', event: 'Expanded to custom branding for events & corporates' },
  { year: '2026', event: 'Growing pan-AP distribution network' },
]

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us — BHUJAL | CKP Enterprises, Kakinada'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Learn about BHUJAL and CKP Enterprises — founded in Kakinada, Andhra Pradesh. Our mission is to deliver pure RO + Active Alkaline packaged drinking water to homes and businesses.')
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 min-h-[60vh] flex items-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="/about_hero.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/90 via-ocean-950/70 to-ocean-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-ocean-950/40" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-ocean-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] bg-gold-500/8 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.span variants={fadeUp} className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">
              Our Story
            </motion.span>
            <motion.h1 variants={fadeUp} className="section-title mt-3 mb-6">
              About <span className="gold-text">BHUJAL</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-lg leading-relaxed">
              Born from the vision of bringing nature's purest water to every household and business, 
              BHUJAL by CKP Enterprises is Andhra Pradesh's premium packaged drinking water brand.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About CKP */}
      <section className="py-20 bg-ocean-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="glass rounded-3xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold-400/5 rounded-full blur-2xl" />
                {/* Real product image */}
                <div className="relative overflow-hidden">
                  <img
                    src="/WhatsApp%20Image%202026-03-20%20at%201.55.51%20PM.jpeg"
                    alt="BHUJAL Packaged Drinking Water"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="p-6 grid grid-cols-2 gap-4">
                  {[
                    { label: 'Established', value: '2025' },
                    { label: 'Location', value: 'Kakinada, AP' },
                    { label: 'Products', value: '8+ Sizes' },
                    { label: 'Service', value: '24/7' },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <p className="text-gold-400 font-bold text-lg">{item.value}</p>
                      <p className="text-white/40 text-xs mt-0.5">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">Who We Are</span>
              <h2 className="section-title mt-3 mb-6">CKP <span className="gold-text">Enterprises</span></h2>
              <p className="text-white/70 leading-relaxed mb-6">
                CKP Enterprises is a forward-thinking beverages and water purification company based in 
                Ramanayyapeta, Andhra Pradesh. Founded in 2025 by Sri Charan Thangisetty, we set out with 
                one mission — to provide the purest, highest-quality packaged drinking water to every corner of the region.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                We provide <span className="text-gold-400 font-semibold">all types of water</span> — from 
                compact 100ml bottles to bulk 50-litre cans — serving homes, 
                offices, hotels, restaurants, corporate events, weddings and more.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                Our advanced RO + Active Alkaline purification system ensures that every bottle you receive is 
                safe, clean, and perfectly balanced for optimal hydration.
              </p>
              <Link to="/contact" className="btn-primary inline-block">
                Connect With Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Story — Promo Posters */}
      <section className="py-20 bg-ocean-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">Brand Story</span>
            <h2 className="section-title mt-3">The <span className="gold-text">BHUJAL</span> Promise</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                src: '/WhatsApp%20Image%202026-03-20%20at%201.55.51%20PM.jpeg',
                label: 'Customized & Own Branding Water Bottles',
              },
              {
                src: '/WhatsApp%20Image%202026-03-20%20at%201.55.52%20PM.jpeg',
                label: 'All Quantities — 150ml to 50 Litres',
              },
            ].map((poster, i) => (
              <motion.div
                key={i}
                className="relative rounded-3xl overflow-hidden shadow-2xl group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <img
                  src={poster.src}
                  alt={poster.label}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-white text-sm font-semibold bg-ocean-950/60 px-4 py-1.5 rounded-full">{poster.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative" style={{ background: 'linear-gradient(180deg, #042d5c 0%, #010e21 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="glass-gold rounded-3xl p-10 relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
              <div className="w-12 h-12 bg-gold-400/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gold-400 mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                To deliver the purest, most wholesome packaged drinking water with the highest standards of
                quality, safety, and hygiene — making premium hydration accessible to all, from individual
                consumers to large enterprises.
              </p>
            </motion.div>
            <motion.div
              className="glass rounded-3xl p-10 border border-gold-400/15 relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ocean-400/30 to-transparent" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-ocean-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="w-12 h-12 bg-ocean-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-ocean-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To become the most trusted water brand in Andhra Pradesh and beyond — recognized for
                unmatched purity, innovative custom branding solutions, and unwavering commitment
                to customer satisfaction and public health.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-ocean-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">Our Products</span>
            <h2 className="section-title mt-3">See <span className="gold-text">BHUJAL</span> in Action</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: '/IMG_8811.JPG.jpeg', label: 'Pure Collection' },
              { src: '/IMG_8814.JPG.jpeg', label: 'Premium Quality' },
              { src: '/IMG_8813.JPG.jpeg', label: 'Every Occasion' },
              { src: '/IMG_8814.JPG%20(1).jpeg', label: 'Custom Branded' },
            ].map((photo, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl group aspect-square"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-white text-sm font-semibold">{photo.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-ocean-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">Our Values</span>
            <h2 className="section-title mt-3">What We Stand <span className="gold-text">For</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="glass rounded-2xl p-6 text-center card-hover border border-white/5 hover:border-gold-400/25 group relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{v.icon}</div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-gold-300 transition-colors">{v.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative" style={{ background: 'linear-gradient(180deg, #042d5c 0%, #010e21 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">Our Journey</span>
            <h2 className="section-title mt-3">Growing <span className="gold-text">Together</span></h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/50 to-transparent" />
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className={`flex items-start gap-8 mb-10 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}">
                  <div className="glass rounded-2xl p-5 inline-block max-w-xs border border-white/5 hover:border-gold-400/20 transition-colors">
                    <p className="text-gold-400 font-black text-xl mb-1">{m.year}</p>
                    <p className="text-white/70 text-sm">{m.event}</p>
                  </div>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-gold-400 rounded-full border-4 border-ocean-950 shadow-[0_0_14px_rgba(251,191,36,0.6)]" />
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
