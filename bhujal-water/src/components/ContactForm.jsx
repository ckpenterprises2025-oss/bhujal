import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)

    const text = [
      `Hello BHUJAL! I'd like to get in touch.`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Email:* ${form.email}`,
      `*Message:* ${form.message}`,
    ].join('\n')

    const waUrl = `https://wa.me/918247836366?text=${encodeURIComponent(text)}`

    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', phone: '', email: '', message: '' })
      setTimeout(() => setSent(false), 5000)
      window.open(waUrl, '_blank')
    }, 600)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glass rounded-3xl p-8 space-y-5 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Top glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-7 bg-gradient-to-b from-gold-400 to-gold-600 rounded-full" />
        <h3 className="text-2xl font-black text-white">Send Us a Message</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/55 text-xs font-semibold mb-2 tracking-wider uppercase">Full Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30
                       focus:outline-none focus:border-gold-400/60 focus:shadow-[0_0_0_3px_rgba(251,191,36,0.1)]
                       transition-all duration-300 text-sm"
            style={{ background: 'rgba(4, 20, 45, 0.85)' }}
          />
        </div>
        <div>
          <label className="block text-white/55 text-xs font-semibold mb-2 tracking-wider uppercase">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+91 XXXXX XXXXX"
            className="w-full border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30
                       focus:outline-none focus:border-gold-400/60 focus:shadow-[0_0_0_3px_rgba(251,191,36,0.1)]
                       transition-all duration-300 text-sm"
            style={{ background: 'rgba(4, 20, 45, 0.85)' }}
          />
        </div>
      </div>

      <div>
        <label className="block text-white/55 text-xs font-semibold mb-2 tracking-wider uppercase">Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30
                     focus:outline-none focus:border-gold-400/60 focus:shadow-[0_0_0_3px_rgba(251,191,36,0.1)]
                     transition-all duration-300 text-sm"
          style={{ background: 'rgba(4, 20, 45, 0.85)' }}
        />
      </div>

      <div>
        <label className="block text-white/55 text-xs font-semibold mb-2 tracking-wider uppercase">Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your requirements — bottle sizes, quantities, custom branding needs..."
          className="w-full border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30
                     focus:outline-none focus:border-gold-400/60 focus:shadow-[0_0_0_3px_rgba(251,191,36,0.1)]
                     transition-all duration-300 text-sm resize-none"
          style={{ background: 'rgba(4, 20, 45, 0.85)' }}
        />
      </div>

      <motion.button
        type="submit"
        disabled={sending || sent}
        className={`w-full py-4 text-base font-bold rounded-full transition-all duration-300 relative overflow-hidden
          ${sent
            ? 'bg-green-500/20 border border-green-500/40 text-green-400'
            : 'btn-primary disabled:opacity-70'
          }`}
        whileHover={{ scale: sending || sent ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {sending ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Sending...
          </span>
        ) : sent ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Message Sent!
          </span>
        ) : (
          'Send Message'
        )}
      </motion.button>

      {sent && (
        <motion.div
          className="flex items-center gap-2 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <p className="text-green-400 text-sm">Thank you! We&apos;ll get back to you within 24 hours.</p>
        </motion.div>
      )}
    </motion.form>
  )
}
