import { useLanguage } from '../contexts/LanguageContext';

function Estudios() {
  const { t } = useLanguage();
  const estudios = t('studies.items') || [
    {
      titulo: "Ingeniería Mecánica",
      institucion: "East Los Angeles College (ELAC)",
      periodo: "En curso",
      descripcion: "Formación integral en principios de ingeniería mecánica, diseño y manufactura",
      destacados: ["Diseño CAD/CAM", "Manufactura aditiva", "Análisis de sistemas mecánicos"]
    },
    {
      titulo: "Certificación SolidWorks",
      institucion: "SolidWorks Professional",
      periodo: "2024",
      descripcion: "Dominio avanzado de modelado 3D y diseño paramétrico",
      destacados: ["Modelado de piezas", "Ensamblajes complejos", "Dibujos técnicos"]
    },
    {
      titulo: "Especialización en Impresión 3D",
      institucion: "Autoaprendizaje y Práctica",
      periodo: "2023 - Presente",
      descripcion: "Diseño para manufactura aditiva y optimización de modelos",
      destacados: ["Diseño para FDM/SLA", "Slicing avanzado", "Post-procesamiento"]
    }
  ];

  return (
    <section className="py-20 px-8 bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-fade-in">
          {t('studies.title')}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-12 animate-scale-in"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {estudios.map((estudio, index) => (
            <div
              key={index}
              className="group bg-dark-card p-8 rounded-xl border border-dark-border hover:border-accent-primary/50 hover:-translate-y-2 transition-all duration-500 animate-slide-up"
              style={{animationDelay: `${index * 0.08}s`}}
            >
              <div className="flex justify-between items-start mb-4 gap-4">
                <h3 className="text-2xl font-bold text-accent-glow group-hover:text-accent-primary transition-colors">
                  {estudio.title}
                </h3>
                <span className="bg-accent-primary/10 text-accent-primary border border-accent-primary/30 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                  {estudio.period}
                </span>
              </div>
              <h4 className="text-gray-400 text-lg mb-2">{estudio.institution}</h4>
              <p className="text-gray-300 leading-relaxed mb-4">{estudio.description}</p>
              <ul className="space-y-2">
                {estudio.highlights?.map((item, i) => (
                  <li key={i} className="text-gray-300 border-l-2 border-accent-secondary pl-4 py-2 hover:border-accent-primary transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Estudios;
