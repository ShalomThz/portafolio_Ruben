import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import EstudiosPage from './pages/EstudiosPage'
import HabilidadesPage from './pages/HabilidadesPage'
import ProyectosPage from './pages/ProyectosPage'
import ReconocimientosPage from './pages/ReconocimientosPage'

function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen flex flex-col bg-dark-bg">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estudios" element={<EstudiosPage />} />
            <Route path="/habilidades" element={<HabilidadesPage />} />
            <Route path="/proyectos" element={<ProyectosPage />} />
            <Route path="/reconocimientos" element={<ReconocimientosPage />} />
          </Routes>
        </main>
        <footer className="bg-dark-card border-t border-dark-border text-gray-400 text-center py-8">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-4">
              <span className="text-lg font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Ruden Mendez Acuna
              </span>
            </div>
            <p className="text-sm">Estudiante de Ingeniería Mecánica - ELAC</p>
            <p className="text-xs mt-2 opacity-70">&copy; 2025 Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
