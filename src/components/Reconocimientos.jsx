import { useLanguage } from '../contexts/LanguageContext';

function Reconocimientos() {
  const { t } = useLanguage();
  const reconocimientos = t('achievements.items') || [];

  return (
    <section className="py-20 px-8 bg-dark-card min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-fade-in">
          {t('achievements.title')}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-12 animate-scale-in"></div>

        <div className="relative max-w-4xl mx-auto py-8">
          {/* Línea central del timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary rounded-full shadow-lg shadow-accent-primary/50"></div>

          {reconocimientos.map((item, index) => (
            <div
              key={index}
              className={`relative flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} mb-12 animate-fade-in`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Marcador del timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-accent-primary to-accent-secondary border-4 border-dark-bg rounded-full shadow-lg shadow-accent-primary/70 z-10 animate-pulse"></div>

              {/* Contenido */}
              <div className={`group w-full md:w-[calc(50%-40px)] bg-dark-bg border border-dark-border p-6 rounded-xl hover:border-accent-primary/50 hover:scale-105 transition-all duration-500 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className="inline-block bg-gradient-to-r from-accent-primary to-accent-secondary text-white px-4 py-2 rounded-full font-bold mb-4 shadow-lg">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-accent-glow group-hover:text-accent-primary transition-colors mb-2">{item.title}</h3>
                <h4 className="text-gray-400 text-base font-medium mb-4">{item.organization}</h4>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reconocimientos;
