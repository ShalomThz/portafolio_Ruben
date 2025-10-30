function Reconocimientos() {
  const reconocimientos = [
    {
      titulo: "Certificación SolidWorks Associate (CSWA)",
      organizacion: "Dassault Systèmes",
      año: "2024",
      descripcion: "Certificación oficial en diseño 3D y modelado paramétrico con SolidWorks"
    },
    {
      titulo: "Excelencia Académica ELAC",
      organizacion: "East Los Angeles College",
      año: "2024",
      descripcion: "Reconocimiento por desempeño académico destacado en cursos de ingeniería"
    },
    {
      titulo: "Proyecto Destacado de Diseño",
      organizacion: "ELAC - Departamento de Ingeniería",
      año: "2024",
      descripcion: "Mejor proyecto de diseño mecánico del semestre - Brazo Robótico 3D"
    },
    {
      titulo: "Maker Faire LA - Participante",
      organizacion: "Maker Faire Los Angeles",
      año: "2023",
      descripcion: "Exhibición de proyectos de impresión 3D y diseño mecánico"
    },
    {
      titulo: "Portafolio Digital de Diseño",
      organizacion: "Desarrollo Personal",
      año: "2023 - Presente",
      descripcion: "Colección de más de 50 diseños 3D y proyectos de manufactura aditiva"
    },
    {
      titulo: "Tutor de SolidWorks",
      organizacion: "ELAC - Peer Tutoring",
      año: "2024",
      descripcion: "Asistencia a compañeros en el aprendizaje de software CAD y diseño 3D"
    }
  ];

  return (
    <section className="py-20 px-8 bg-dark-card min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-fade-in">
          Reconocimientos y Logros
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
                  {item.año}
                </div>
                <h3 className="text-xl font-bold text-accent-glow group-hover:text-accent-primary transition-colors mb-2">{item.titulo}</h3>
                <h4 className="text-gray-400 text-base font-medium mb-4">{item.organizacion}</h4>
                <p className="text-gray-300 leading-relaxed">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reconocimientos;
