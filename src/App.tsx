import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ClientPresentationApp from './components/ClientPresentationApp'
import PrudentialApp from './pages/PrudentialApp'
import ZurichApp from './pages/ZurichApp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrudentialApp />} />
        <Route path="/prudential" element={<PrudentialApp />} />
        <Route path="/Zurich" element={<ZurichApp homePath="/Zurich" />} />
        <Route path="/zurich" element={<ZurichApp homePath="/zurich" />} />
        <Route path="/medicus" element={<ClientPresentationApp clientName="Medicus" clientLogo="/images/medicus-logo-white.png" homePath="/medicus" />} />
        <Route path="/AIG" element={<NotFound />} />
        <Route path="/aig" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a1628] text-white px-6">
      <div className="max-w-xl text-center">
        <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">404</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">Esta página no existe</h1>
        <p className="mt-4 text-white/68 font-light leading-relaxed">
          La ruta que intentas abrir no está disponible en esta presentación. Vuelve al inicio para ver la propuesta de Prudential.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#08101a]"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  )
}

export default App
