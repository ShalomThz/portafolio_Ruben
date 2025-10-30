import { useLanguage } from '../contexts/LanguageContext';

function Habilidades() {
  const { t } = useLanguage();
  const habilidadesHard = t('skills.hardSkills') || [];
  const habilidadesSoft = t('skills.softSkills') || [];

  return (
    <section className="py-20 px-8 bg-dark-card min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-fade-in">
          {t('skills.title')}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-12 animate-scale-in"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Habilidades Técnicas */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold mb-8 text-accent-glow">{t('skills.technical')}</h3>
            <div className="flex flex-col gap-6">
              {habilidadesHard.map((skill, index) => (
                <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.06}s`}}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-200">{skill.name}</span>
                    <span className="text-accent-primary text-sm font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-dark-bg rounded-full overflow-hidden border border-dark-border">
                    <div
                      className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full transition-all duration-1000 shadow-lg shadow-accent-primary/50"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Habilidades Blandas */}
          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-bold mb-8 text-accent-glow">{t('skills.soft')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {habilidadesSoft.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-dark-bg border border-dark-border rounded-lg hover:border-accent-primary/50 hover:scale-105 transition-all duration-500 animate-scale-in"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <span className="w-6 h-6 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs">
                    ✓
                  </span>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
