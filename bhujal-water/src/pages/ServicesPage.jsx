import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 1,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Packaged Drinking Water',
    desc: 'Sealed, safe, and ready-to-drink packaged water available in 8 different sizes. Perfect for retail, hospitality, and bulk requirements.',
    features: ['BIS Certified', 'Seal Guaranteed', 'Bulk Available', '8 Size Options'],
    highlight: true,
  },
  {
    id: 2,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'RO + Active Alkaline Water',
    desc: 'Advanced Reverse Osmosis combined with active alkaline mineral balancing for superior taste, purity, and health benefits.',
    features: ['pH Balanced', 'Multi-stage RO', 'Mineral Rich', 'Healthier Choice'],
    highlight: false,
  },
  {
    id: 3,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: 'Custom Branding Service',
    desc: 'Transform plain water bottles into powerful brand ambassadors. Your logo, your colors, your message — on every bottle.',
    features: ['Logo Printing', 'Custom Labels', 'Any Quantity', 'Fast Turnaround'],
    highlight: true,
  },
]

const customUsesCases = [
  {
    icon: '🏢',
    title: 'Corporate Events',
    desc: 'Board meetings, conferences, team outings — branded water that speaks professionalism.',
  },
  {
    icon: '💒',
    title: 'Weddings',
    desc: 'Make your special day memorable with custom labeled bottles for every guest.',
  },
  {
    icon: '🏨',
    title: 'Hotels & Restaurants',
    desc: 'Elevate your guest experience with branded water across rooms and dining areas.',
  },
  {
    icon: '📣',
    title: 'Promotions',
    desc: 'Product launches, campaigns, and brand activations with custom water bottles.',
  },
  {
    icon: '🎉',
    title: 'Parties & Get-togethers',
    desc: 'Birthday parties, reunions, and social events with a premium personal touch.',
  },
  {
    icon: '🏆',
    title: 'Sports & Tournaments',
    desc: 'Keep athletes hydrated with your team-branded bottles during every match.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 min-h-[50vh] flex items-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="/service-hero.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/90 via-ocean-950/70 to-ocean-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-ocean-950/40" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-ocean-400/8 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">What We Offer</span>
            <h1 className="section-title mt-3 mb-6">Our <span className="gold-text">Services</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              From premium packaged water to full-service custom branding — BHUJAL covers all your hydration needs with excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-ocean-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                className={`rounded-3xl p-8 relative overflow-hidden card-hover border group
                  ${service.highlight
                    ? 'border-gold-400/35 bg-gradient-to-br from-gold-400/10 via-ocean-800/50 to-ocean-950'
                    : 'glass border-white/8'
                  }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                {/* Top glow */}
                {service.highlight && (
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
                )}
                {/* Ambient glow */}
                <div className={`absolute top-0 left-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  ${service.highlight ? 'bg-gold-400/8' : 'bg-ocean-400/8'}`} />

                {service.highlight && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-gold-400 to-gold-600 text-ocean-950 text-[10px] font-black px-3 py-1 rounded-full tracking-wider shadow-[0_0_12px_rgba(251,191,36,0.4)]">
                    POPULAR
                  </div>
                )}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110
                  ${service.highlight
                    ? 'bg-gold-400/20 text-gold-400 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.35)]'
                    : 'bg-ocean-600/20 text-ocean-300'
                  }`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${service.highlight ? 'text-white group-hover:text-gold-300' : 'text-white'}`}>{service.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                      <span className="w-4 h-4 rounded-full bg-gold-400/15 border border-gold-400/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 px-6 rounded-full font-bold text-sm transition-all duration-300
                    ${service.highlight
                      ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-ocean-950 hover:shadow-[0_0_24px_rgba(251,191,36,0.45)] hover:scale-105'
                      : 'border border-white/20 text-white hover:border-gold-400/50 hover:text-gold-400 hover:bg-gold-400/5'
                    }`}
                >
                  Enquire Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Branding Use Cases */}
      <section className="py-20 relative" style={{ background: 'linear-gradient(180deg, #042d5c 0%, #010e21 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">Custom Branding</span>
            <h2 className="section-title mt-3">Perfect For <span className="gold-text">Every Occasion</span></h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Our custom branding service lets you put your brand on every bottle. Great for events, businesses, and promotions.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {customUsesCases.map((c, i) => (
              <motion.div
                key={c.title}
                className="glass rounded-2xl p-7 card-hover group border border-white/5 hover:border-gold-400/25 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Top border glow on hover */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{c.icon}</div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-gold-400 transition-colors duration-300">{c.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/custom-branding" className="btn-primary inline-block text-base px-10 py-4">
              Explore Custom Branding
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why BHUJAL */}
      <section className="py-20 bg-ocean-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-gold rounded-3xl p-10 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
            <motion.img
              src="/Logo.png"
              alt="BHUJAL"
              className="w-28 h-auto mx-auto mb-6 drop-shadow-[0_0_24px_rgba(251,191,36,0.5)]"
              animate={{ scale: [1, 1.07, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <h2 className="text-3xl font-black text-white mb-4">Why Choose <span className="gold-text">BHUJAL</span>?</h2>
            <p className="text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
              We don’t just sell water — we deliver confidence, health and brand value in every bottle.
              With 24/7 availability, advanced purification, and custom solutions, BHUJAL is your complete water partner.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { icon: '⚡', label: '24/7 Service' },
                { icon: '💎', label: 'Premium Quality' },
                { icon: '🎨', label: 'Custom Labels' },
                { icon: '🚚', label: 'Fast Delivery' },
              ].map((item) => (
                <div key={item.label} className="text-center group">
                  <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300 inline-block">{item.icon}</div>
                  <p className="text-white/80 text-sm font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
