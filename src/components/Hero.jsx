import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark-bg text-white px-8 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-4xl text-center relative z-10">
        <div className="mb-6 animate-fade-in">
          <span className="px-4 py-2 bg-dark-card border border-accent-primary/30 rounded-full text-sm text-accent-glow inline-block">
            {t('hero.badge')}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-white via-accent-glow to-white bg-clip-text text-transparent">
          {t('hero.name')}
        </h1>

        <p className="text-xl md:text-2xl mb-6 text-gray-300 animate-slide-up" style={{animationDelay: '0.15s'}}>
          {t('hero.specialty')}
        </p>

        <div className="flex items-center justify-center gap-2 mb-8 text-gray-400 animate-slide-up" style={{animationDelay: '0.25s'}}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{t('hero.location')}</span>
        </div>

        <p className="text-base md:text-lg leading-relaxed mb-12 text-gray-400 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.35s'}}>
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.5s'}}>
          <Link
            to="/proyectos"
            className="group px-8 py-4 text-base font-semibold bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg hover:scale-105 transition-all duration-500 shadow-lg shadow-accent-primary/50 hover:shadow-accent-primary/80"
          >
            <span className="flex items-center gap-2 justify-center">
              {t('hero.btnProjects')}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <button
            className="px-8 py-4 text-base font-semibold bg-dark-card border-2 border-accent-primary text-accent-glow rounded-lg hover:bg-dark-hover hover:scale-105 transition-all duration-500"
            onClick={() => window.open('#', '_blank')}
          >
            {t('hero.btnCV')}
          </button>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-3 gap-8 mt-20 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent-primary mb-2">50+</div>
            <div className="text-sm text-gray-400">{t('hero.stats.models')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent-secondary mb-2">15+</div>
            <div className="text-sm text-gray-400">{t('hero.stats.printed')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent-glow mb-2">100+</div>
            <div className="text-sm text-gray-400">{t('hero.stats.hours')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
