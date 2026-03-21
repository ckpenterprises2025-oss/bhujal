import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import OrderModal from '../components/OrderModal'

const products = [
  {
    size: '100ml',
    name: 'Mini',
    use: 'Airlines, events, gifting',
    desc: 'Compact pocket-sized bottle, ideal for short trips and event distribution.',
    img: '/100ml.jpeg',
    popular: false,
  },
  {
    size: '200ml',
    name: 'Small',
    use: 'Cafes, schools, hospitals',
    desc: 'Perfect single-serve for food courts, clinics, and individual use.',
    img: '/200ml.jpeg',
    popular: false,
  },
  {
    size: '500ml',
    name: 'Standard',
    use: 'Personal use, retail',
    desc: 'The most popular size for everyday hydration on the go.',
    img: '/500ml.jpeg',
    popular: true,
  },
  {
    size: '1L',
    name: 'Family',
    use: 'Home & office',
    desc: 'Great for meals, gym sessions, and office desk hydration.',
    img: '/1L.jpeg',
    popular: true,
  },
  {
    size: '2L',
    name: 'Value',
    use: 'Households, picnics',
    desc: 'Economical family size — perfect for daily household drinking.',
    img: '/2L.jpeg',
    popular: false,
  },
  {
    size: '5L',
    name: 'Bulk Light',
    use: 'Offices, small events',
    desc: 'Convenient for small groups, ideal for workplaces and gatherings.',
    img: '/5L.jpeg',
    popular: false,
  },
  {
    size: '20L',
    name: 'Standard Jar',
    use: 'Offices, restaurants',
    desc: 'The classic office water jar — fits standard dispensers, easy to handle.',
    img: '/20L.jpeg',
    popular: true,
  },
  {
    size: '50L',
    name: 'Bulk Can',
    use: 'Large events, factories',
    desc: 'Heavy-duty bulk supply for large-scale industrial and event requirements.',
    img: '/50L.jpeg',
    popular: false,
  },
]

export default function ProductsPage() {
  const [orderModal, setOrderModal] = useState(null) // holds selected product or null

  const openOrder = (product) => setOrderModal(product)
  const closeOrder = () => setOrderModal(null)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 min-h-[50vh] flex items-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="/products_hero.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/90 via-ocean-950/70 to-ocean-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-ocean-950/40" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-ocean-400/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-gold-500/6 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">Our Products</span>
            <h1 className="section-title mt-3 mb-6">Every Size, <span className="gold-text">Purity Assured</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
              Choose from 8 bottle sizes — from 100ml to 50L. All packed with RO-purified, 
              alkaline-balanced water and available with custom branding options.
            </p>
            {/* Custom label badge */}
            <div className="inline-flex items-center gap-2 glass-gold rounded-full px-5 py-2.5">
              <svg className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gold-400 text-sm font-medium">Custom Label Available on All Sizes</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-ocean-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.size}
                className={`rounded-3xl p-6 relative card-hover group border overflow-hidden
                  ${product.popular
                    ? 'border-gold-400/35 bg-gradient-to-br from-gold-400/8 via-ocean-800/50 to-ocean-950'
                    : 'glass border-white/6 hover:border-gold-400/20'
                  }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {/* Top glow line for popular */}
                {product.popular && (
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
                )}

                {product.popular && (
                  <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 bg-gradient-to-r from-gold-400 to-gold-600 text-ocean-950 text-[9px] font-black px-2.5 py-1 rounded-full shadow-[0_0_12px_rgba(251,191,36,0.5)] tracking-wider">
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    BESTSELLER
                  </div>
                )}

                {/* Product image */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl h-64 mb-5 bg-ocean-900"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={product.img}
                    alt={`BHUJAL ${product.size} ${product.name} water bottle`}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                    style={{ objectPosition: 'center center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <span className="text-white font-black text-2xl drop-shadow-lg">{product.size}</span>
                  </div>
                </motion.div>

                {/* Info */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white/35 text-xs font-medium">{product.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400/50 flex-shrink-0" />
                  </div>
                  <p className="text-gold-400/80 text-xs mb-3 font-semibold">{product.use}</p>
                  <p className="text-white/45 text-xs leading-relaxed mb-5">{product.desc}</p>

                  {/* Custom label badge */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <svg className="w-3 h-3 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gold-400/65 text-[10px] font-medium">Custom Label Available</span>
                  </div>

                  <button
                    onClick={() => openOrder(product)}
                    className={`block w-full text-center py-2.5 rounded-xl text-sm font-bold transition-all duration-300
                      ${product.popular
                        ? 'bg-gold-400/15 border border-gold-400/35 text-gold-400 hover:bg-gold-400 hover:text-ocean-950 hover:border-gold-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.35)]'
                        : 'border border-white/10 text-white/65 hover:border-gold-400/40 hover:text-gold-400 hover:bg-gold-400/5'
                      }`}
                  >
                    Order This Size
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info bottom */}
      <section className="py-16 relative" style={{ background: 'linear-gradient(180deg, #042d5c 0%, #010e21 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '✅', title: 'All Sizes In Stock', desc: '100ml to 50L — available for immediate dispatch.' },
              { icon: '🎨', title: 'Custom Labels',     desc: 'Put your brand on any size. Minimum orders apply.' },
              { icon: '📦', title: 'Bulk Orders',       desc: 'Special pricing for large orders. Contact us for quotes.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="glass rounded-2xl p-6 text-center group border border-white/5 hover:border-gold-400/20 transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
                <h4 className="text-white font-bold mb-2 group-hover:text-gold-300 transition-colors">{item.title}</h4>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="btn-primary inline-block text-base px-10 py-4">
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Order Modal */}
      {orderModal && <OrderModal product={orderModal} onClose={closeOrder} />}
    </div>
  )
}
