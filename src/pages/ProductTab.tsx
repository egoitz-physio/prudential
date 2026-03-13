import { motion } from 'framer-motion'

export default function ProductTab() {
  const roadmap = [
    {
      quarter: 'Q3 2025',
      status: 'done',
      items: ['Evaluación personalizada', 'Asistente Virtual (VA)', 'Corrección en tiempo real']
    },
    {
      quarter: 'Q4 2025',
      status: 'done',
      items: ['FisifyWork', 'FisifySport', 'BodyOS', 'Píldoras de salud']
    },
    {
      quarter: 'Q1 2026',
      status: 'current',
      items: ['One-to-one con fisio', 'Gamificación', 'Dashboard Medicus', 'Charla bienvenida']
    },
    {
      quarter: 'Q2 2026',
      status: 'upcoming',
      items: ['Visión IA + LLM', 'Agentes conversacionales', 'Wearables', 'Integración Medicard']
    },
  ]

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
      {/* Header */}
      <section className="mb-20">
        <span className="section-label mb-8 inline-block">
          Roadmap de Producto
        </span>
        <h2 className="heading-display text-display-lg text-cream mb-6 max-w-3xl">
          Evolución continua
        </h2>
        <p className="text-cream/50 text-xl max-w-2xl font-light">
          Escuchamos a los asegurados. Optimizamos la experiencia. 
          Alineados con la visión de excelencia de Medicus.
        </p>
      </section>

      {/* Timeline */}
      <section className="mb-32">
        <div className="flex items-center gap-6 mb-16">
          <div className="w-16 h-px bg-accent/50" />
          <h3 className="text-cream/40 text-xs uppercase tracking-[0.3em] font-light">
            Timeline 2025-2026
          </h3>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-cream/10 to-cream/5" />
          
          <div className="space-y-0">
            {roadmap.map((phase, i) => (
              <motion.div
                key={phase.quarter}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 pb-16 last:pb-0"
              >
                {/* Dot */}
                <div className={`absolute left-0 top-0 w-2 h-2 -translate-x-[3px] ${
                  phase.status === 'done' ? 'bg-accent' :
                  phase.status === 'current' ? 'bg-accent animate-pulse' :
                  'bg-cream/20'
                }`} />
                
                {/* Content */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="lg:w-32 flex-shrink-0">
                    <span className={`text-sm font-light ${
                      phase.status === 'current' ? 'text-accent' : 'text-cream/40'
                    }`}>
                      {phase.quarter}
                    </span>
                    {phase.status === 'current' && (
                      <span className="block text-[10px] text-accent/60 mt-1 uppercase tracking-[0.2em]">
                        En progreso
                      </span>
                    )}
                  </div>
                  
                  <div className="flex-1 grid md:grid-cols-2 gap-3">
                    {phase.items.map((item) => (
                      <div
                        key={item}
                        className={`p-5 border transition-colors ${
                          phase.status === 'upcoming' 
                            ? 'border-cream/5 text-cream/30 bg-[#0d1a2e]/50' 
                            : 'border-cream/10 text-cream/70 bg-[#0d1a2e] hover:border-accent/30'
                        }`}
                      >
                        <span className="text-sm font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FisifyOne for Medicus */}
      <section className="mb-32">
        <div className="border border-cream/10 p-12 lg:p-20 bg-[#0d1a2e]">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label mb-6 inline-block">
              Exclusivo para Medicus
            </span>
            <h2 className="heading-display text-display-lg text-cream mb-6">
              FisifyOne
            </h2>
            <p className="text-cream/50 text-xl font-light">
              Atención one-to-one. Un fisioterapeuta dedicado para cada asegurado de Medicus.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-cream/5">
            {[
              { num: '01', title: 'Fisio personal', desc: 'Profesional asignado de la red Medicus' },
              { num: '02', title: 'Valoración', desc: 'Evaluación inicial completa vía chat' },
              { num: '03', title: 'Programa', desc: 'Rutinas personalizadas post-consulta' },
              { num: '04', title: 'Seguimiento', desc: 'Acompañamiento semanal continuo' },
            ].map((step) => (
              <div key={step.num} className="bg-[#0a1628] p-8 text-center">
                <span className="text-accent/50 text-xs tracking-[0.3em] block mb-4">{step.num}</span>
                <h4 className="font-display text-cream mb-2">{step.title}</h4>
                <p className="text-cream/40 text-sm font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech preview */}
      <section>
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-cream/20" />
          <h3 className="text-cream/40 text-xs uppercase tracking-[0.3em] font-light">
            Tecnología 2026
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-cream/5">
          {[
            { title: 'Visión IA + LLM', desc: 'Seguimiento avanzado mediante inteligencia artificial.' },
            { title: 'Agentes conversacionales', desc: 'Asistentes IA disponibles 24/7 para los asegurados.' },
            { title: 'Integración Medicard', desc: 'Acceso directo desde la app de Medicus.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0d1a2e] p-10"
            >
              <h4 className="font-display text-cream mb-3">{item.title}</h4>
              <p className="text-cream/40 text-sm font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
