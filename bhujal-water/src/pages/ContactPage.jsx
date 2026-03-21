import { useEffect } from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

const contactDetails = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Phone',
    lines: [
      <a key="p1" href="tel:+918247836366" className="hover:text-gold-400 transition-colors">+91 82478 36366</a>,
      <a key="p2" href="tel:+916303836366" className="hover:text-gold-400 transition-colors">+91 63038 36366</a>,
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    lines: [
      <a key="e1" href="mailto:ckpenterprises2025@gmail.com" className="hover:text-gold-400 transition-colors">ckpenterprises2025@gmail.com</a>,
      <a key="e2" href="mailto:contact@bhujalwater.com" className="hover:text-gold-400 transition-colors">contact@bhujalwater.com</a>,
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Address',
    lines: [
      <span key="a1">69/1-26G, Rajendra Nagar,</span>,
      <span key="a2">Ramanayyapeta, Andhra Pradesh</span>,
      <span key="a3" className="text-gold-400">533003</span>,
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Business Hours',
    lines: [
      <span key="h1" className="text-green-400 font-semibold">Open 24/7</span>,
      <span key="h2">365 Days a Year</span>,
      <span key="h3">No Holidays</span>,
    ],
  },
]

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Us — BHUJAL Water | +91 82478 36366'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Get in touch with BHUJAL by CKP Enterprises. Call +91 82478 36366 or email ckpenterprises2025@gmail.com. We supply packaged drinking water across Andhra Pradesh.')
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 min-h-[50vh] flex items-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="/contact_hero.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/90 via-ocean-950/70 to-ocean-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-ocean-950/40" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-ocean-400/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] bg-gold-500/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">Get In Touch</span>
            <h1 className="section-title mt-3 mb-6">Contact <span className="gold-text">BHUJAL</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Ready to order, or have questions about custom branding? 
              We're available 24/7 — just reach out and we'll respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-ocean-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Person Card */}
              <motion.div
                className="glass-gold rounded-3xl p-8 relative overflow-hidden"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-2xl flex items-center justify-center text-ocean-950 font-black text-xl shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                    SC
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Sri Charan Thangisetty</p>
                    <p className="text-gold-400 text-sm font-semibold">Founder, CKP Enterprises</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Reach out directly for bulk orders, custom branding inquiries,
                  partnership opportunities, or any questions about BHUJAL water.
                </p>
              </motion.div>

              {/* Contact Details */}
              {contactDetails.map((detail, i) => (
                <motion.div
                  key={detail.title}
                  className="glass rounded-2xl p-6 flex gap-5 border border-white/5 hover:border-gold-400/20 group transition-all duration-300"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400/20 to-ocean-600/20 border border-gold-400/20 rounded-xl flex items-center justify-center text-gold-400 flex-shrink-0 group-hover:shadow-[0_0_14px_rgba(251,191,36,0.25)] transition-all duration-300">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-gold-400 text-xs font-bold mb-1.5 tracking-wider uppercase">{detail.title}</p>
                    {detail.lines.map((line, j) => (
                      <div key={j} className="text-white/70 text-sm block leading-relaxed">
                        {line}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Social */}
              <motion.div
                className="glass rounded-2xl p-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-gold-400 text-sm font-semibold mb-4">Follow us on Social Media</p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/bhujal_water"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 glass px-3 py-2 rounded-xl hover:border-gold-400/40 hover:text-gold-400 transition-all text-sm text-white/70"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @bhujal_water
                  </a>
                  <a
                    href="https://wa.me/918247836366"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 glass px-3 py-2 rounded-xl hover:border-gold-400/40 hover:text-gold-400 transition-all text-sm text-white/70"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: Form + Map */}
            <div className="lg:col-span-3 space-y-8">
              <ContactForm />

              {/* Google Maps embed */}
              <motion.div
                className="glass rounded-3xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="p-4 border-b border-white/10 flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/80 text-sm font-medium">69/1-26G, Rajendra Nagar, Ramanayyapeta, AP 533003</span>
                </div>
                <div className="relative h-72">
                  <iframe
                    title="BHUJAL CKP Enterprises Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.0123!2d82.2185!3d16.9891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3827b8f6d0e5c1%3A0x0!2sRamanayyapeta%2C%20Andhra%20Pradesh%20533003!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick contact bar */}
      <section className="py-14 relative overflow-hidden" style={{ background: 'linear-gradient(90deg, #042d5c, #063f7a, #042d5c)' }}>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-black text-xl">Need water right now?</p>
              <p className="text-white/50 text-sm mt-1">Call us and we'll arrange delivery ASAP</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+918247836366" className="btn-primary flex items-center gap-2 text-sm py-3 px-7">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/918247836366"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2 text-sm py-3 px-7"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
