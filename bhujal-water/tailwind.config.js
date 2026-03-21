/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50:  '#e8f4fd',
          100: '#c5e3f9',
          200: '#8ec7f3',
          300: '#4fa5e8',
          400: '#1e85d4',
          500: '#0b6ab8',
          600: '#08549a',
          700: '#063f7a',
          800: '#042d5c',
          900: '#021b3d',
          950: '#010e21',
        },
        gold: {
          300: '#fde68a',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'wave':         'wave 8s ease-in-out infinite',
        'wave2':        'wave 10s ease-in-out infinite reverse',
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 9s ease-in-out infinite',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ripple':       'ripple 2s linear infinite',
        'shimmer':      'shimmer 2.5s infinite',
        'spin-slow':    'spin 8s linear infinite',
        'fade-up':      'fadeUp 0.6s ease-out both',
        'glow-pulse':   'glowPulse 2.5s ease-in-out infinite',
        'slide-right':  'slideRight 0.4s ease-out both',
        'bounce-gentle':'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(-5%) translateY(-3%)' },
          '50%': { transform: 'translateX(3%) translateY(2%)' },
          '75%': { transform: 'translateX(-2%) translateY(-1%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        ripple: {
          '0%':   { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(251,191,36,0.4)' },
          '50%':       { boxShadow: '0 0 0 16px rgba(251,191,36,0)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'gold':      '0 0 30px rgba(251,191,36,0.45)',
        'gold-lg':   '0 0 60px rgba(251,191,36,0.35)',
        'ocean':     '0 0 30px rgba(11,106,184,0.45)',
        'card':      '0 8px 40px rgba(0,0,0,0.4)',
        'card-hover':'0 24px 80px rgba(11,106,184,0.25)',
        'inner-gold':'inset 0 1px 0 rgba(251,191,36,0.12)',
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #010e21 0%, #042d5c 40%, #063f7a 70%, #08549a 100%)',
        'gradient-gold':  'linear-gradient(135deg, #fde68a 0%, #fbbf24 40%, #f59e0b 70%, #d97706 100%)',
        'gradient-hero':  'linear-gradient(160deg, #010e21 0%, #042d5c 50%, #0b6ab8 100%)',
        'gradient-card':  'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'gradient-gold-radial': 'radial-gradient(ellipse at center, rgba(251,191,36,0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
