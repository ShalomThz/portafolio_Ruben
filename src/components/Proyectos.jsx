import { useLanguage } from '../contexts/LanguageContext';

function Proyectos() {
  const { t } = useLanguage();
  const proyectos = t('projects.items') || [];

  return (
    <section className="py-20 px-8 bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-fade-in">
          {t('projects.title')}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-12 animate-scale-in"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="group bg-dark-card rounded-xl p-8 border border-dark-border hover:border-accent-primary/50 hover:-translate-y-2 transition-all duration-500 flex flex-col animate-scale-in"
              style={{animationDelay: `${index * 0.08}s`}}
            >
              <div className="inline-block self-start bg-gradient-to-r from-accent-primary to-accent-secondary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {proyecto.category}
              </div>
              <h3 className="text-2xl font-bold text-accent-glow group-hover:text-accent-primary transition-colors mb-4">
                {proyecto.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                {proyecto.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proyecto.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-accent-primary/10 border border-accent-primary/30 text-accent-glow px-3 py-1 rounded-full text-sm hover:bg-accent-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-dark-border text-gray-300 text-sm">
                <strong className="text-accent-secondary">{t('projects.results')}:</strong> {proyecto.results}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
