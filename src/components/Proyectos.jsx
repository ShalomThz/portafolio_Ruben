function Proyectos() {
  const proyectos = [
    {
      titulo: "Brazo Robótico Impreso en 3D",
      descripcion: "Diseño y fabricación de un brazo robótico de 4 ejes utilizando impresión 3D FDM con componentes mecánicos optimizados.",
      tecnologias: ["SolidWorks", "Cura", "Arduino"],
      resultados: "Reducción de costos del 70% comparado con alternativas comerciales",
      categoria: "Robótica"
    },
    {
      titulo: "Sistema de Engranajes Planetarios",
      descripcion: "Modelado 3D y simulación de caja de engranajes planetarios con análisis de movimiento.",
      tecnologias: ["SolidWorks", "Motion Study", "AutoCAD"],
      resultados: "Prototipo funcional impreso con precisión de 0.1mm",
      categoria: "Diseño Mecánico"
    },
    {
      titulo: "Soporte Personalizado de Cámara",
      descripcion: "Diseño ergonómico de soporte ajustable para cámara con sistema de montaje rápido.",
      tecnologias: ["SolidWorks", "Impresión 3D", "PLA+"],
      resultados: "Producto funcional y ligero con excelente acabado",
      categoria: "Diseño de Producto"
    },
    {
      titulo: "Prótesis de Mano Mecánica",
      descripcion: "Desarrollo de prótesis de mano funcional de bajo costo mediante impresión 3D.",
      tecnologias: ["SolidWorks", "FDM", "TPU"],
      resultados: "Dispositivo funcional con movilidad de 5 dedos",
      categoria: "Biomecánica"
    },
    {
      titulo: "Organizador Modular de Escritorio",
      descripcion: "Sistema modular de organización con piezas intercambiables diseñadas paramétricamente.",
      tecnologias: ["SolidWorks", "Diseño Paramétrico", "Cura"],
      resultados: "15+ variaciones diferentes del mismo diseño base",
      categoria: "Diseño Funcional"
    },
    {
      titulo: "Mini Turbina de Viento",
      descripcion: "Modelo funcional de turbina eólica con análisis aerodinámico de aspas.",
      tecnologias: ["SolidWorks", "Flow Simulation", "PETG"],
      resultados: "Generación efectiva de energía en escala de prototipo",
      categoria: "Energías Renovables"
    }
  ];

  return (
    <section className="py-20 px-8 bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-fade-in">
          Proyectos Destacados
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-12 animate-scale-in"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="group bg-dark-card rounded-xl p-8 border border-dark-border hover:border-accent-primary/50 hover:-translate-y-2 transition-all duration-300 flex flex-col animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="inline-block self-start bg-gradient-to-r from-accent-primary to-accent-secondary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {proyecto.categoria}
              </div>
              <h3 className="text-2xl font-bold text-accent-glow group-hover:text-accent-primary transition-colors mb-4">
                {proyecto.titulo}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                {proyecto.descripcion}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proyecto.tecnologias.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-accent-primary/10 border border-accent-primary/30 text-accent-glow px-3 py-1 rounded-full text-sm hover:bg-accent-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-dark-border text-gray-300 text-sm">
                <strong className="text-accent-secondary">Resultados:</strong> {proyecto.resultados}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
