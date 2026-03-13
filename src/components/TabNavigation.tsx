import { motion } from 'framer-motion'
import { ChartBar, Cpu, Diamond, Rocket } from 'lucide-react'

export type TabId = 'results' | 'product' | 'value' | 'implement'

interface Tab {
  id: TabId
  label: string
  icon: typeof ChartBar
}

const tabs: Tab[] = [
  { id: 'results', label: 'Resultados', icon: ChartBar },
  { id: 'product', label: 'Producto', icon: Cpu },
  { id: 'value', label: 'Valor', icon: Diamond },
  { id: 'implement', label: 'Implementación', icon: Rocket },
]

interface TabNavigationProps {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <nav className="sticky top-0 z-40 bg-surface/95 backdrop-blur-xl border-b border-cream/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo mini */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-accent/30 flex items-center justify-center">
              <span className="font-display text-accent text-sm">F</span>
            </div>
            <span className="text-cream/30 text-xs uppercase tracking-[0.2em] font-light hidden sm:block">
              Propuesta
            </span>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 md:gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`relative flex items-center gap-2 px-4 md:px-6 py-2.5 transition-all duration-300 ${
                    isActive 
                      ? 'text-cream' 
                      : 'text-cream/30 hover:text-cream/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-[0.15em] font-light hidden md:block">
                    {tab.label}
                  </span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-cream/5 border border-cream/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Contact */}
          <a 
            href="mailto:hola@fisify.com"
            className="hidden lg:flex items-center gap-2 text-cream/30 hover:text-accent text-xs uppercase tracking-[0.15em] font-light transition-colors"
          >
            <span className="w-1.5 h-1.5 bg-accent/50 rounded-full" />
            Contactar
          </a>
        </div>
      </div>
    </nav>
  )
}
