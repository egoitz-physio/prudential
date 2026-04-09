import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ClientPresentationApp from './components/ClientPresentationApp'
import PrudentialApp from './pages/PrudentialApp'
import ZurichApp from './pages/ZurichApp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrudentialApp />} />
        <Route path="/prudential" element={<PrudentialApp />} />
        <Route path="/AIG" element={<Navigate to="/" replace />} />
        <Route path="/aig" element={<Navigate to="/" replace />} />
        <Route path="/Zurich" element={<ZurichApp homePath="/Zurich" />} />
        <Route path="/zurich" element={<ZurichApp homePath="/zurich" />} />
        <Route path="/medicus" element={<ClientPresentationApp clientName="Medicus" clientLogo="/images/medicus-logo-white.png" homePath="/medicus" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
