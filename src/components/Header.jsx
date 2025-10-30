import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-dark-bg/95 backdrop-blur-lg border-b border-dark-border z-50 animate-slide-up">
      <nav className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 py-4 gap-4">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent hover:scale-105 transition-transform">
          Ruden M.
        </Link>
        <ul className="flex flex-wrap justify-center gap-8 list-none">
          <li>
            <Link
              to="/"
              className={`font-medium transition-all relative group ${
                isActive('/') ? 'text-accent-primary' : 'text-gray-400 hover:text-accent-glow'
              }`}
            >
              Inicio
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary transition-transform ${isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          </li>
          <li>
            <Link
              to="/estudios"
              className={`font-medium transition-all relative group ${
                isActive('/estudios') ? 'text-accent-primary' : 'text-gray-400 hover:text-accent-glow'
              }`}
            >
              Estudios
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary transition-transform ${isActive('/estudios') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          </li>
          <li>
            <Link
              to="/habilidades"
              className={`font-medium transition-all relative group ${
                isActive('/habilidades') ? 'text-accent-primary' : 'text-gray-400 hover:text-accent-glow'
              }`}
            >
              Habilidades
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary transition-transform ${isActive('/habilidades') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          </li>
          <li>
            <Link
              to="/proyectos"
              className={`font-medium transition-all relative group ${
                isActive('/proyectos') ? 'text-accent-primary' : 'text-gray-400 hover:text-accent-glow'
              }`}
            >
              Proyectos
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary transition-transform ${isActive('/proyectos') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          </li>
          <li>
            <Link
              to="/reconocimientos"
              className={`font-medium transition-all relative group ${
                isActive('/reconocimientos') ? 'text-accent-primary' : 'text-gray-400 hover:text-accent-glow'
              }`}
            >
              Reconocimientos
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary transition-transform ${isActive('/reconocimientos') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
