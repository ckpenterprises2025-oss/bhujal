import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Custom Branding', path: '/custom-branding' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar({ onOrderNow }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/10 shadow-[0_4px_40px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/Logo.png"
              alt="BHUJAL"
              className="h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_14px_rgba(251,191,36,0.45)] group-hover:drop-shadow-[0_0_24px_rgba(251,191,36,0.75)]"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full group
                  ${location.pathname === link.path
                    ? 'text-gold-400 nav-active-pill'
                    : 'text-white/75 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
                {location.pathname !== link.path && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full transition-all duration-300 w-0 group-hover:w-3/4" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOrderNow}
              className="hidden lg:block btn-primary text-sm py-2.5 px-7"
            >
              Order Now
            </button>
            <button
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-xl hover:bg-white/5 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden glass border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-3 py-3 px-4 text-base font-semibold rounded-xl transition-all duration-200
                      ${location.pathname === link.path
                        ? 'text-gold-400 bg-gold-400/10 border border-gold-400/20'
                        : 'text-white/75 hover:text-gold-400 hover:bg-white/5'
                      }`}
                  >
                    {location.pathname === link.path && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                    )}
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link to="/contact" className="btn-primary text-center mt-4 text-sm">
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
