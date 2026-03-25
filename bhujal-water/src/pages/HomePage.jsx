import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '24/7 Availability',
    desc: 'We never close. Fresh water delivered any time, any day, 365 days a year.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'RO + Active Alkaline',
    desc: 'Advanced purification with alkaline balancing for superior taste and health.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: 'Custom Branding',
    desc: 'Put your logo on our bottles. Perfect for events, hotels and corporates.',
  },
]

const bottleSizes = [
  { size: '100ml', img: '/100ml.jpeg' },
  { size: '200ml', img: '/200ml.jpeg' },
  { size: '500ml', img: '/500ml.jpeg' },
  { size: '1L',    img: '/1L.jpeg' },
  { size: '2L',    img: '/2L.jpeg' },
  { size: '5L',    img: '/5L.jpeg' },
  { size: '20L',   img: '/20L.jpeg' },
  { size: '50L',   img: '/50L.jpeg' },
]


export default function HomePage() {
  useEffect(() => {
    document.title = 'BHUJAL — Premium Packaged Drinking Water | CKP Enterprises'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'BHUJAL by CKP Enterprises — Premium RO + Active Alkaline packaged drinking water in Andhra Pradesh. Available in 100ml to 50L. Custom branding for events, hotels & corporates.')
  }, [])

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full hero background image */}
        <div className="absolute inset-0">
          <img
            src="/hero-bottle.jpeg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/90 via-ocean-950/70 to-ocean-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-ocean-950/40" />
        </div>
        
        {/* Animated background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-ocean-500/10 rounded-full blur-3xl animate-wave" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gold-500/8 rounded-full blur-3xl animate-wave2" />
          {/* Particle dots */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${4 + (i % 3) * 2}px`,
                height: `${4 + (i % 3) * 2}px`,
                top: `${10 + i * 11}%`,
                left: `${5 + i * 12}%`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
        </div>

        {/* Water wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,60 C180,100 360,20 540,60 C720,100 900,20 1080,60 C1260,100 1350,40 1440,60 L1440,120 L0,120 Z"
              fill="rgba(4,45,92,0.5)"
            />
            <path
              d="M0,80 C200,40 400,100 600,70 C800,40 1000,90 1200,60 C1350,40 1400,70 1440,80 L1440,120 L0,120 Z"
              fill="rgba(1,14,33,0.6)"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                <span className="text-gold-400 text-sm font-medium tracking-wider">PREMIUM PACKAGED DRINKING WATER</span>
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-white mb-4">
                FROM
                <br />
                <span className="shimmer-text">EARTH'S</span>
                <br />
                PURE DEPTHS
              </motion.h1>

              <motion.p variants={fadeUp} className="text-white/60 text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
                Experience the essence of pure, refreshing water — RO + Active Alkaline technology. 
                Available from <span className="text-gold-400 font-semibold">100ml to 50L</span>, delivered to your doorstep.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="btn-primary text-base px-10 py-4">
                  Order Now
                </Link>
                <Link to="/custom-branding" className="btn-outline text-base px-10 py-4">
                  Customize Bottles
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeUp} className="flex gap-8 mt-12 justify-center lg:justify-start">
                {[
                  { num: '8+',   label: 'Bottle Sizes' },
                  { num: '24/7', label: 'Availability' },
                  { num: '100%', label: 'Pure & Safe'  },
                ].map((stat) => (
                  <div key={stat.label} className="text-center group">
                    <p className="text-3xl font-black text-gold-400 group-hover:text-gold-300 transition-colors drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]">{stat.num}</p>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent my-1" />
                    <p className="text-white/45 text-xs tracking-wider mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Bottle Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                {/* Glow circle */}
                <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-3xl scale-125 pointer-events-none" />
                {/* Gemini hero image cropped to bottle */}
                <motion.img
                  src="/hero-bottle.jpeg"
                  alt="BHUJAL Premium Packaged Drinking Water Bottle"
                  className="relative w-80 lg:w-96 h-auto object-cover object-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-3xl"
                  style={{ aspectRatio: '3/4', objectPosition: 'center center' }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Pure badge */}
                <motion.div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-gold rounded-full px-4 py-1.5 whitespace-nowrap"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <span className="text-gold-400 text-xs font-bold tracking-wider">✦ 100% PURE ✦</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="py-4 overflow-hidden" style={{ background: 'linear-gradient(90deg, #021b3d, #042d5c, #021b3d)' }}>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#021b3d] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#021b3d] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-0 marquee whitespace-nowrap">
            {[...Array(2)].map((_, j) => (
              <div key={j} className="flex items-center gap-8 pr-8">
                {['Premium Water','RO+Alkaline','24/7 Delivery','Custom Branding','100% Pure','8 Bottle Sizes','Kakinada, AP','BHUJAL Water','BIS Certified','Bulk Orders'].map((item) => (
                  <span key={item} className="flex items-center gap-3 text-sm font-semibold tracking-wider text-white/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section className="py-24 bg-ocean-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">Why Choose Us</span>
            <h2 className="section-title mt-3">Water That Defines <span className="gold-text">Premium</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="glass rounded-2xl p-8 card-hover group relative overflow-hidden border border-white/5 hover:border-gold-400/20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Top glow border */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Radial glow BG */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400/20 to-ocean-600/20 border border-gold-400/20
                               flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">{feature.title}</h3>
                <p className="text-white/55 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT PHOTO GALLERY ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #042d5c 0%, #021b3d 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">Our Products</span>
            <h2 className="section-title mt-3">Pure Water, <span className="gold-text">Real Shots</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/500ml.jpeg', label: 'BHUJAL Bottles' },
              { src: '/1L.jpeg', label: 'Premium Range' },
              { src: '/2L.jpeg', label: 'Pure & Sealed' },
              { src: '/5L.jpeg', label: 'All Sizes' },
              { src: '/20L.jpeg', label: 'Bulk Options' },
              { src: '/50L.jpeg', label: 'Quality Assured' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl group aspect-square"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-transparent opacity-100 transition-all duration-300" />
                <div className="absolute bottom-3 left-3 opacity-100 transition-all duration-300 translate-y-0">
                  <span className="text-white text-sm font-semibold">{item.label}</span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-6 h-6 glass-gold rounded-full flex items-center justify-center">
                    <div className="w-2 h-2.5 bg-gradient-to-b from-gold-300 to-gold-500 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] transform rotate-180" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTLE SIZES ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #042d5c 0%, #010e21 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">Our Range</span>
            <h2 className="section-title mt-3">Every Size, <span className="gold-text">Every Need</span></h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">From pocket-sized 100ml to bulk 50L — we cover every requirement for homes, offices, hotels and events.</p>
          </motion.div>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
            {bottleSizes.map((item, i) => (
              <motion.div
                key={item.size}
                className="glass rounded-xl p-2 text-center card-hover group cursor-pointer border border-white/5 hover:border-gold-400/30 overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                {/* Product image */}
                <div className="h-20 sm:h-28 flex items-center justify-center mb-1.5 overflow-hidden rounded-lg bg-ocean-900/50">
                  <img
                    src={item.img}
                    alt={`BHUJAL ${item.size}`}
                    className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-white font-bold text-xs group-hover:text-gold-400 transition-colors">{item.size}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/products" className="btn-outline inline-block">
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>


      {/* ── CTA BANNER ── */}
      <section className="py-24 relative overflow-hidden">
        {/* Fixed parallax background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/hero-bottle.jpeg)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-950/88 via-ocean-950/75 to-ocean-900/85" />
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold-400/10 rounded-full blur-3xl" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ocean-400/20 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <motion.img
              src="/Logo.png"
              alt="BHUJAL"
              className="w-28 h-auto mx-auto mb-8 drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="section-badge mb-5 inline-flex">Ready to Order?</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Experience the Purest <br /><span className="gold-text">BHUJAL Water</span>
            </h2>
            <p className="text-white/55 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Contact us today to place your order or get custom branded bottles for your next event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-base px-12 py-4 pulse-gold">
                Get in Touch
              </Link>
              <Link to="/services" className="btn-outline text-base px-12 py-4">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
