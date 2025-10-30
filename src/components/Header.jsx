import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

function Header() {
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-dark-bg/95 backdrop-blur-lg border-b border-dark-border z-50 animate-slide-up">
      <nav className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 py-4 gap-4">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
          Ruden M.
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex flex-wrap justify-center gap-8 list-none">
            <li>
              <Link
                to="/"
                className={`font-medium transition-all relative group ${
                  isActive('/') ? 'text-accent-primary' : 'text-gray-400 hover:text-accent-glow'
                }`}
              >
                {t('nav.home')}
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
                {t('nav.studies')}
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
                {t('nav.skills')}
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
                {t('nav.projects')}
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
                {t('nav.achievements')}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary transition-transform ${isActive('/reconocimientos') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            </li>
          </ul>

          {/* Language Selector */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 bg-dark-card border border-dark-border rounded-lg hover:border-accent-primary/50 transition-all group"
            aria-label="Toggle language"
          >
            <svg className="w-5 h-5 text-gray-400 group-hover:text-accent-glow transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span className="text-sm font-semibold text-accent-glow uppercase">{language}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
