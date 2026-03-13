export default function FooterSection() {
  return (
    <footer className="relative mt-32 border-t border-cream/5 bg-[#060f1d]">
      {/* Top section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 border border-accent/30 flex items-center justify-center">
                <span className="font-display text-accent text-lg">F</span>
              </div>
              <div>
                <span className="font-display text-cream tracking-wide">
                  Fisify
                </span>
                <span className="text-accent/60 ml-2 text-sm">× Medicus</span>
              </div>
            </div>
            <p className="text-cream/40 text-sm leading-relaxed mb-8 max-w-sm font-light">
              Transformando la experiencia de salud de los asegurados de Medicus 
              a través de fisioterapia digital de excelencia.
            </p>
            <p className="text-cream/20 text-xs uppercase tracking-[0.2em]">
              Creada por médicos, para médicos
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-cream/60 text-xs uppercase tracking-[0.2em] mb-6 font-light">
              Soluciones
            </h4>
            <ul className="space-y-4">
              {['Prevención', 'Rehabilitación', 'FisifyStudio', 'FisifyCare'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-cream/30 hover:text-cream transition-colors text-sm font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-cream/60 text-xs uppercase tracking-[0.2em] mb-6 font-light">
              Empresa
            </h4>
            <ul className="space-y-4">
              {['Sobre nosotros', 'Casos de éxito', 'Blog', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-cream/30 hover:text-cream transition-colors text-sm font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-cream/60 text-xs uppercase tracking-[0.2em] mb-6 font-light">
              Contacto
            </h4>
            <div className="space-y-4 text-sm text-cream/30 font-light">
              <p>Buenos Aires, Argentina</p>
              <p>Madrid, España</p>
              <p className="text-accent">hola@fisify.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-cream/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/20 text-xs font-light tracking-wide">
            © 2026 Fisify. Propuesta exclusiva para Medicus.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-cream/20 hover:text-cream/40 text-xs transition-colors font-light">
              Privacidad
            </a>
            <a href="#" className="text-cream/20 hover:text-cream/40 text-xs transition-colors font-light">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
