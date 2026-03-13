import { motion } from 'framer-motion'

export default function ValueTab() {
  const impactMetrics = [
    { 
      value: 'x3', 
      label: 'Activación', 
      detail: 'Con modelo One-to-One + Fisio',
      context: 'Con los one-to-ones con fisioterapeuta, la adherencia se multiplica por tres'
    },
    { 
      value: '90%', 
      label: 'Adherencia', 
      detail: 'Usuarios activos semana 10',
      context: 'El 90% de usuarios siguen activos, consolidando un hábito de mínimo 5 min/semana'
    },
    { 
      value: '9.8', 
      label: 'Satisfacción', 
      detail: 'Fisify 3.0',
      context: 'Con el lanzamiento de Fisify 3.0 hemos triplicado la adherencia de los asegurados'
    },
  ]

  const addons = [
    { 
      num: '01', 
      title: 'FisifyCare Premium', 
      desc: '30 min con fisioterapeuta de la red Medicus + plan de recuperación + seguimiento semanal. Máximo nivel de atención personalizada.', 
      tag: 'Premium',
      objective: 'Objetivo: disminuir siniestralidad'
    },
    { 
      num: '02', 
      title: 'Apoyo de Marketing', 
      desc: 'El equipo de marketing de Fisify crea contenido branded para la comunicación interna de Medicus.', 
      tag: 'Incluido',
      objective: 'Objetivo: maximizar activación'
    },
    { 
      num: '03', 
      title: 'Formaciones Online', 
      desc: 'Charlas y webinars de salud física (45 min, online). Adaptadas al perfil del asegurado.', 
      tag: 'Add-on',
      objective: 'Objetivo: educación preventiva'
    },
    { 
      num: '04', 
      title: 'Clases Grupales', 
      desc: 'Espalda sana, fuerza, hipopresivos y suelo pélvico. Sesiones de 30 min online en directo.', 
      tag: 'Add-on',
      objective: 'Objetivo: comunidad y engagement'
    },
  ]

  const forInsured = [
    'Acceso 24/7 a programas de prevención y rehabilitación',
    'Atención personalizada con fisioterapeutas dedicados',
    'Tecnología de vanguardia (VA, visión artificial, wearables)',
    'Gamificación y engagement continuo'
  ]

  const forMedicus = [
    { title: 'Reducción de siniestralidad', desc: 'Prevención activa reduce costos de tratamientos correctivos', metric: '-25%', label: 'estimado' },
    { title: 'Diferenciación competitiva', desc: 'Liderazgo en innovación entre las prepagas argentinas', metric: '#1', label: 'posición' },
    { title: 'Satisfacción del asegurado', desc: 'Mejora en NPS y fidelización de socios', metric: '9.8', label: 'NPS proy.' },
    { title: 'Analytics avanzado', desc: 'Datos de uso, adherencia, zonas de dolor y outcomes', metric: '100%', label: 'visibilidad' },
  ]

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
      {/* Header */}
      <section className="mb-20">
        <span className="section-label mb-8 inline-block">
          Impacto Demostrado
        </span>
        <h2 className="heading-display text-display-lg text-cream mb-6 max-w-3xl">
          Resultados reales que validan nuestro modelo
        </h2>
        <p className="text-cream/50 text-xl max-w-2xl font-light">
          Más adherencia = menos siniestralidad = mayor rentabilidad para Medicus.
        </p>
      </section>

      {/* Key metrics */}
      <section className="mb-32">
        <div className="grid lg:grid-cols-3 gap-px bg-cream/5">
          {impactMetrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#0d1a2e] p-12 lg:p-16"
            >
              <span className="stat-value text-6xl lg:text-7xl block">
                {metric.value}
              </span>
              <h3 className="font-display text-xl text-cream mt-4 mb-2">
                {metric.label}
              </h3>
              <p className="text-accent text-sm mb-4">
                {metric.detail}
              </p>
              <p className="text-cream/30 text-sm font-light leading-relaxed">
                {metric.context}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Formula */}
        <div className="mt-px border border-accent/20 bg-accent/5 p-8 text-center">
          <p className="text-cream/70 text-lg font-light tracking-wide">
            <span className="text-accent">Más adherencia</span>
            <span className="text-cream/20 mx-4 md:mx-6">→</span>
            <span className="text-cream">Menos siniestralidad</span>
            <span className="text-cream/20 mx-4 md:mx-6">→</span>
            <span className="text-accent">Mayor rentabilidad</span>
          </p>
        </div>
      </section>

      {/* Value for Insured */}
      <section className="mb-32">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-accent/50" />
          <h3 className="text-cream/40 text-xs uppercase tracking-[0.3em] font-light">
            Valor para los Asegurados
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/5">
          {forInsured.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0d1a2e] p-8 flex items-start gap-4"
            >
              <span className="text-accent text-lg">✓</span>
              <p className="text-cream/70 text-sm font-light leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="mb-32">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-cream/20" />
          <h3 className="text-cream/40 text-xs uppercase tracking-[0.3em] font-light">
            Servicios Add-on Según Necesidad
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-cream/5">
          {addons.map((addon, i) => (
            <motion.div
              key={addon.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0d1a2e] p-10"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-accent/50 text-xs tracking-[0.3em]">{addon.num}</span>
                <span className={`text-[10px] uppercase tracking-[0.2em] px-3 py-1 border ${
                  addon.tag === 'Premium' ? 'border-accent/30 text-accent' :
                  addon.tag === 'Incluido' ? 'border-accent/20 text-accent/70' :
                  'border-cream/10 text-cream/40'
                }`}>
                  {addon.tag}
                </span>
              </div>
              <h4 className="font-display text-xl text-cream mb-3">
                {addon.title}
              </h4>
              <p className="text-cream/40 text-sm font-light leading-relaxed mb-4">
                {addon.desc}
              </p>
              <p className="text-cream/20 text-xs uppercase tracking-widest">
                {addon.objective}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Value for Medicus */}
      <section className="mb-32">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-accent/50" />
          <h3 className="text-cream/40 text-xs uppercase tracking-[0.3em] font-light">
            Valor para Medicus
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-cream/5">
          {forMedicus.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0d1a2e] p-10 flex items-start justify-between"
            >
              <div className="flex-1">
                <h4 className="font-display text-cream mb-2">{item.title}</h4>
                <p className="text-cream/40 text-sm font-light">{item.desc}</p>
              </div>
              <div className="text-right flex-shrink-0 ml-8">
                <span className="text-accent text-2xl font-display">{item.metric}</span>
                <span className="block text-cream/30 text-xs mt-1 font-light">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategic positioning */}
      <section className="mb-32">
        <div className="border border-cream/10 bg-[#0d1a2e] p-12 lg:p-16">
          <div className="max-w-3xl">
            <span className="text-accent/50 text-xs tracking-[0.3em] block mb-6">
              Posicionamiento Estratégico
            </span>
            <h3 className="font-display text-3xl text-cream mb-6">
              Medicus como referente en innovación
            </h3>
            <p className="text-cream/50 text-lg font-light leading-relaxed mb-8">
              50 años de excelencia médica + tecnología de vanguardia. 
              La combinación perfecta para liderar el futuro de la salud digital en Argentina.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { label: 'Años de trayectoria', value: '50+' },
                { label: 'Especialistas en red', value: '10k+' },
                { label: 'Asegurados potenciales', value: '600k+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center py-6 border-t border-cream/5">
                  <span className="text-accent text-2xl font-display">{stat.value}</span>
                  <span className="block text-cream/30 text-xs mt-2 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="border border-cream/10 p-12 lg:p-20 text-center bg-[#0d1a2e]">
          <h2 className="heading-display text-display text-cream mb-6">
            ¿Comenzamos juntos?
          </h2>
          <p className="text-cream/50 text-xl mb-10 max-w-2xl mx-auto font-light">
            Agenda una reunión con nuestro equipo para definir los próximos pasos 
            de esta alianza estratégica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Agendar Reunión
            </button>
            <button className="btn-ghost">
              Descargar Propuesta
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
