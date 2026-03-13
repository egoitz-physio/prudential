import { motion } from 'framer-motion'

export default function ImplementTab() {
  const phases = [
    {
      num: '01',
      title: 'Diseño',
      duration: '2 semanas',
      items: [
        'Definición de alcance con Medicus',
        'Personalización de marca (colores, logo)',
        'Configuración de dashboard Medicus',
        'Integración técnica con Medicard (opcional)'
      ]
    },
    {
      num: '02',
      title: 'Formación',
      duration: '1 semana',
      items: [
        'Capacitación equipo comercial Medicus',
        'Formación a kinesiólogos de la red',
        'Materiales de comunicación interna',
        'Guías para asegurados'
      ]
    },
    {
      num: '03',
      title: 'Lanzamiento',
      duration: '1 semana',
      items: [
        'Comunicación a asegurados',
        'Activación progresiva por segmento',
        'Webinar de bienvenida',
        'Soporte dedicado inicial'
      ]
    },
    {
      num: '04',
      title: 'Operación',
      duration: 'Continuo',
      items: [
        'Reportes mensuales de uso',
        'Revisiones trimestrales',
        'Optimización continua',
        'Evolución de roadmap'
      ]
    },
  ]

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
      {/* Header */}
      <section className="mb-20">
        <span className="section-label mb-8 inline-block">
          Proceso de Implementación
        </span>
        <h2 className="heading-display text-display-lg text-cream mb-6 max-w-3xl">
          De 0 a lanzamiento en 4 semanas
        </h2>
        <p className="text-cream/50 text-xl max-w-2xl font-light">
          Un proceso ágil y profesional, diseñado para minimizar 
          la carga operativa del equipo de Medicus.
        </p>
      </section>

      {/* Timeline */}
      <section className="mb-32">
        <div className="grid lg:grid-cols-4 gap-px bg-cream/5">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#0d1a2e] p-8 lg:p-10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-accent/50 text-xs tracking-[0.3em]">{phase.num}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 border border-cream/10 text-cream/30">
                  {phase.duration}
                </span>
              </div>
              
              <h3 className="font-display text-xl text-cream mb-6">
                {phase.title}
              </h3>
              
              <ul className="space-y-3">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="w-1 h-1 bg-accent/40 mt-2 flex-shrink-0" />
                    <span className="text-cream/50 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Medicus provides */}
      <section className="mb-32">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-accent/50" />
          <h3 className="text-cream/40 text-xs uppercase tracking-[0.3em] font-light">
            Requerimientos de Medicus
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-cream/5">
          {[
            { title: 'Brand assets', desc: 'Logo, colores y guía de estilo para personalizar la plataforma', effort: 'Bajo' },
            { title: 'Interlocutor', desc: 'Punto de contacto para toma de decisiones', effort: 'Bajo' },
            { title: 'Comunicación', desc: 'Canales para llegar a asegurados (email, app, web)', effort: 'Medio' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0d1a2e] p-8 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-display text-cream">{item.title}</h4>
                <span className={`text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 ${
                  item.effort === 'Bajo' ? 'bg-accent/10 text-accent' : 'bg-cream/5 text-cream/30'
                }`}>
                  {item.effort}
                </span>
              </div>
              <p className="text-cream/40 text-sm font-light flex-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Fisify provides */}
      <section className="mb-32">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-cream/20" />
          <h3 className="text-cream/40 text-xs uppercase tracking-[0.3em] font-light">
            Compromiso de Fisify
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-cream/5">
          {[
            { title: 'Project Manager dedicado', desc: 'Un interlocutor único para toda la implementación y operación' },
            { title: 'Soporte técnico 24/7', desc: 'Equipo de soporte disponible para asegurados y equipo Medicus' },
            { title: 'Dashboard ejecutivo', desc: 'Panel de métricas en tiempo real para el equipo Medicus' },
            { title: 'Reportes mensuales', desc: 'Informes detallados de uso, satisfacción y resultados' },
            { title: 'Optimización continua', desc: 'Mejoras basadas en feedback de asegurados' },
            { title: 'SLA garantizado', desc: 'Disponibilidad 99.9% con penalidades contractuales' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0d1a2e] p-8"
            >
              <h4 className="font-display text-cream mb-2">{item.title}</h4>
              <p className="text-cream/40 text-sm font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline visual */}
      <section className="mb-20">
        <div className="border border-cream/10 p-12 lg:p-16 bg-[#0d1a2e]">
          <h3 className="font-display text-2xl text-cream mb-12 text-center">
            Timeline de Lanzamiento
          </h3>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Line */}
            <div className="absolute top-4 left-0 right-0 h-px bg-gradient-to-r from-accent via-cream/20 to-cream/5" />
            
            <div className="grid grid-cols-4 gap-4">
              {[
                { week: 'Sem 1-2', label: 'Diseño' },
                { week: 'Sem 3', label: 'Formación' },
                { week: 'Sem 4', label: 'Lanzamiento' },
                { week: 'Continuo', label: 'Operación' },
              ].map((item, i) => (
                <div key={item.week} className="text-center">
                  <div className={`w-2 h-2 mx-auto mb-4 ${
                    i === 0 ? 'bg-accent' : 'bg-cream/20'
                  }`} />
                  <span className="text-cream/60 text-sm font-light block mb-1">{item.week}</span>
                  <span className="text-cream/30 text-xs font-light">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="text-center">
          <p className="text-cream/40 text-lg mb-8 font-light">
            ¿Listos para comenzar?
          </p>
          <button className="btn-primary">
            Iniciar Proyecto
          </button>
        </div>
      </section>
    </div>
  )
}
