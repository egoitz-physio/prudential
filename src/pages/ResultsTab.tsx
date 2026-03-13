import { motion } from 'framer-motion'

export default function ResultsTab() {
  const stats = {
    prevention: [
      { value: '160', label: 'Usuarios activos', detail: '26.67% de colaboradores Medicus' },
      { value: '768', label: 'Logins totales', detail: 'Uso recurrente validado' },
      { value: '9.82', label: 'Satisfacción', detail: 'Puntuación sobre 10' },
      { value: '2,344', label: 'Ejercicios', detail: 'Completados en el piloto' },
    ],
    rehab: [
      { value: '80%', label: 'Activación', detail: '28 de 35 pacientes' },
      { value: '6.64', label: 'Sesiones/paciente', detail: 'Adherencia sostenida' },
      { value: '186', label: 'Sesiones totales', detail: 'Completadas con éxito' },
      { value: '9.18', label: 'Satisfacción', detail: 'Puntuación sobre 10' },
    ]
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
      {/* Header */}
      <section className="mb-20">
        <span className="section-label mb-8 inline-block">
          Prueba de Concepto 2025
        </span>
        <h2 className="heading-display text-display-lg text-cream mb-6 max-w-3xl">
          Resultados que validan el modelo
        </h2>
        <p className="text-cream/50 text-xl max-w-2xl font-light">
          Dos programas piloto con colaboradores y asegurados de Medicus. 
          Datos reales. Impacto medible.
        </p>
      </section>

      {/* Programs overview */}
      <section className="mb-32">
        <div className="grid lg:grid-cols-2 gap-px bg-cream/5">
          {/* Prevention */}
          <div className="bg-[#0d1a2e] p-12 lg:p-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-cream/40 text-xs uppercase tracking-[0.2em] font-light">
                Programa 01
              </span>
            </div>
            <h3 className="font-display text-2xl text-cream mb-4">
              Prevención y Bienestar
            </h3>
            <p className="text-cream/40 mb-8 font-light">
              600 colaboradores de Medicus · Plataforma Estar Bien · 2.5 meses
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between py-3 border-b border-cream/5">
                <span className="text-cream/40 font-light">Póliza</span>
                <span className="text-cream">Colectivos</span>
              </div>
              <div className="flex justify-between py-3 border-b border-cream/5">
                <span className="text-cream/40 font-light">Objetivo</span>
                <span className="text-cream">Validar adopción</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-cream/40 font-light">Resultado</span>
                <span className="text-accent">✓ Éxito</span>
              </div>
            </div>
          </div>

          {/* Rehabilitation */}
          <div className="bg-[#0d1a2e] p-12 lg:p-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 bg-medicus" />
              <span className="text-cream/40 text-xs uppercase tracking-[0.2em] font-light">
                Programa 02
              </span>
            </div>
            <h3 className="font-display text-2xl text-cream mb-4">
              Rehabilitación Híbrida
            </h3>
            <p className="text-cream/40 mb-8 font-light">
              15 kinesiólogos de la red Medicus + pacientes · FisifyStudio · 2 meses
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between py-3 border-b border-cream/5">
                <span className="text-cream/40 font-light">Póliza</span>
                <span className="text-cream">Salud</span>
              </div>
              <div className="flex justify-between py-3 border-b border-cream/5">
                <span className="text-cream/40 font-light">Objetivo</span>
                <span className="text-cream">Optimizar acceso</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-cream/40 font-light">Resultado</span>
                <span className="text-accent">✓ Éxito</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Stats */}
      <section className="mb-32">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-accent/50" />
          <h3 className="text-cream/40 text-xs uppercase tracking-[0.3em] font-light">
            Datos de Prevención
          </h3>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-cream/5">
          {stats.prevention.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0d1a2e] p-8 lg:p-12"
            >
              <span className="stat-value text-4xl lg:text-5xl block mb-3">
                {stat.value}
              </span>
              <span className="text-cream font-light block mb-1">
                {stat.label}
              </span>
              <span className="text-cream/30 text-sm font-light">
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rehab Stats */}
      <section className="mb-32">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-medicus/50" />
          <h3 className="text-cream/40 text-xs uppercase tracking-[0.3em] font-light">
            Datos de Rehabilitación
          </h3>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-cream/5">
          {stats.rehab.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0d1a2e] p-8 lg:p-12"
            >
              <span className="text-cream text-4xl lg:text-5xl font-display block mb-3">
                {stat.value}
              </span>
              <span className="text-cream font-light block mb-1">
                {stat.label}
              </span>
              <span className="text-cream/30 text-sm font-light">
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Learnings */}
      <section className="mb-20">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-cream/20" />
          <h3 className="text-cream/40 text-xs uppercase tracking-[0.3em] font-light">
            Aprendizajes Clave
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-cream/5">
          {[
            {
              num: '01',
              title: 'Adopción validada',
              desc: 'Los asegurados de Medicus no solo prueban la solución, la integran en su día a día. El modelo encaja en su rutina de cuidado.'
            },
            {
              num: '02',
              title: 'Valor en salud',
              desc: 'El piloto demuestra que es posible activar hábitos saludables de forma digital, alineado con la filosofía preventiva de Medicus.'
            },
            {
              num: '03',
              title: 'Satisfacción excepcional',
              desc: 'Puntuaciones superiores a 9/10 reflejan el estándar de excelencia que los asegurados de Medicus esperan y merecen.'
            },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#0d1a2e] p-10 lg:p-14"
            >
              <span className="text-accent/60 text-xs tracking-[0.3em] mb-6 block font-light">
                {item.num}
              </span>
              <h4 className="font-display text-xl text-cream mb-4">
                {item.title}
              </h4>
              <p className="text-cream/40 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
