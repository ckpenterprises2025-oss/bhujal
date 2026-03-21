import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const productSizes = ['100ml', '200ml', '500ml', '1L', '2L', '5L', '20L', '50L']

export default function OrderModal({ product, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    size: product?.size || '',
    quantity: '',
    address: '',
    customLabel: 'No',
    notes: '',
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)

    const sizeLabel = product
      ? `${product.size} (${product.name})`
      : form.size

    const text = [
      `🛒 *New Order Request — BHUJAL Water*`,
      ``,
      `*Product Size:* BHUJAL ${sizeLabel}`,
      `*Quantity:* ${form.quantity}`,
      ``,
      `*Customer Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      `*Delivery Address:* ${form.address}`,
      `*Custom Label Required:* ${form.customLabel}`,
      form.notes ? `*Additional Notes:* ${form.notes}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    const waUrl = `https://wa.me/918247836366?text=${encodeURIComponent(text)}`

    setTimeout(() => {
      setSending(false)
      setSent(true)
      window.open(waUrl, '_blank')
      setTimeout(() => onClose(), 2500)
    }, 600)
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-ocean-950/80 backdrop-blur-sm" onClick={onClose} />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-lg glass rounded-3xl p-8 border border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 30, opacity: 0 }}
          transition={{ type: 'spring', damping: 22, stiffness: 300 }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all"
          >
            ✕
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            {product && (
              <img
                src={product.img}
                alt={product.size}
                className="w-16 h-16 object-contain rounded-xl bg-ocean-900 p-1 flex-shrink-0"
              />
            )}
            <div>
              <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase">Place Order</p>
              {product ? (
                <>
                  <h3 className="text-white text-xl font-bold">
                    BHUJAL {product.size}{' '}
                    <span className="text-white/40 text-sm font-medium">— {product.name}</span>
                  </h3>
                  <p className="text-white/40 text-xs mt-0.5">{product.use}</p>
                </>
              ) : (
                <h3 className="text-white text-xl font-bold">Order BHUJAL Water</h3>
              )}
            </div>
          </div>

          {sent ? (
            <motion.div
              className="text-center py-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="text-5xl mb-4">✅</div>
              <h4 className="text-white text-xl font-bold mb-2">Order Sent!</h4>
              <p className="text-white/50 text-sm">
                WhatsApp has opened with your order details. Our team will confirm shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name + Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                    Full Name *
                  </label>
                  <input
                    name="name" required value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm border border-white/10 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all"
                    style={{ background: 'rgba(4, 20, 45, 0.85)' }}
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                    Phone *
                  </label>
                  <input
                    name="phone" required type="tel" value={form.phone} onChange={handleChange}
                    placeholder="Mobile number"
                    className="w-full rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm border border-white/10 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all"
                    style={{ background: 'rgba(4, 20, 45, 0.85)' }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                  Email
                </label>
                <input
                  name="email" type="email" value={form.email} onChange={handleChange}
                  placeholder="your@email.com (optional)"
                  className="w-full rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm border border-white/10 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all"
                  style={{ background: 'rgba(4, 20, 45, 0.85)' }}
                />
              </div>

              {/* Size (only when no product pre-selected) + Quantity */}
              <div className="grid grid-cols-2 gap-4">
                {!product && (
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                        Bottle Size *
                      </label>
                      <select
                        name="size" required value={form.size} onChange={handleChange}
                        className="w-full rounded-xl px-4 py-3 text-white text-sm border border-white/10 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all"
                        style={{ background: 'rgba(4, 20, 45, 0.85)' }}
                      >
                        <option value="">Select size</option>
                        {productSizes.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                        Quantity *
                      </label>
                      <input
                        name="quantity" required value={form.quantity} onChange={handleChange}
                        placeholder="e.g. 500 bottles"
                        className="w-full rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm border border-white/10 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all"
                        style={{ background: 'rgba(4, 20, 45, 0.85)' }}
                      />
                    </div>
                  </div>
                )}
                {product && (
                  <>
                    <div>
                      <label className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                        Quantity *
                      </label>
                      <input
                        name="quantity" required value={form.quantity} onChange={handleChange}
                        placeholder="e.g. 500 bottles"
                        className="w-full rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm border border-white/10 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all"
                        style={{ background: 'rgba(4, 20, 45, 0.85)' }}
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                        Custom Label?
                      </label>
                      <select
                        name="customLabel" value={form.customLabel} onChange={handleChange}
                        className="w-full rounded-xl px-4 py-3 text-white text-sm border border-white/10 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all"
                        style={{ background: 'rgba(4, 20, 45, 0.85)' }}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              {/* Custom label (when no product pre-selected) */}
              {!product && (
                <div>
                  <label className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                    Custom Label?
                  </label>
                  <select
                    name="customLabel" value={form.customLabel} onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 text-white text-sm border border-white/10 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all"
                    style={{ background: 'rgba(4, 20, 45, 0.85)' }}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
              )}

              {/* Delivery Address */}
              <div>
                <label className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                  Delivery Address *
                </label>
                <textarea
                  name="address" required value={form.address} onChange={handleChange}
                  placeholder="Full delivery address including city & pincode"
                  rows={3}
                  className="w-full rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm border border-white/10 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all resize-none"
                  style={{ background: 'rgba(4, 20, 45, 0.85)' }}
                />
              </div>

              {/* Notes */}
              <div>
                <label className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                  Additional Notes
                </label>
                <textarea
                  name="notes" value={form.notes} onChange={handleChange}
                  placeholder="Special instructions, preferred delivery date, etc."
                  rows={2}
                  className="w-full rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm border border-white/10 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all resize-none"
                  style={{ background: 'rgba(4, 20, 45, 0.85)' }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="w-full btn-primary py-3.5 text-base font-bold flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {sending ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.845L0 24l6.335-1.654A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.6-.5-5.112-1.374l-.367-.218-3.758.984.999-3.647-.239-.378A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    Send Order via WhatsApp
                  </>
                )}
              </button>

              <p className="text-white/30 text-xs text-center">
                Your order will be sent directly to our team on WhatsApp
              </p>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
