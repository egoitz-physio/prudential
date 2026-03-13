import { motion } from 'framer-motion'

interface NavigationProps {
  scrolled: boolean
  onExplore: () => void
}

export default function Navigation({ scrolled, onExplore }: NavigationProps) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0a1628]/90 backdrop-blur-xl border-b border-cream/5' 
          : ''
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <span className="font-display text-cream text-xl italic group-hover:text-accent transition-colors">
              fisify
            </span>
            <span className="text-accent/40 text-sm">×</span>
            <span className="text-cream/50 text-sm font-light tracking-wide">
              Medicus
            </span>
          </a>

          {/* Nav Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#about" className="nav-link">Proyecto</a>
            <a href="#results" className="nav-link">Resultados</a>
            <a href="#roadmap" className="nav-link">Roadmap</a>
          </div>

          {/* CTA */}
          <button
            onClick={onExplore}
            className="text-cream/40 hover:text-accent text-xs uppercase tracking-[0.2em] font-light transition-colors"
          >
            Explorar
          </button>
        </div>
      </nav>
    </motion.header>
  )
}
