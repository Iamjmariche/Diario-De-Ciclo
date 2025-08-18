export function PhaseGuide() {
  const phases = [
    {
      icon: "🌑",
      name: "Menstrual",
      period: "Días 1-7",
      color: "var(--color-rose)",
      lightColor: "var(--color-rose-light)",
      characteristics: [
        "Descanso y introspección profunda",
        "Momento sagrado para el autocuidado",
        "Reflexión y renovación energética",
        "Energía naturalmente más baja",
        "Conexión con tu sabiduría interior",
        "Liberación emocional y física"
      ],
      activities: [
        "Meditación y yoga restaurativo",
        "Baños relajantes con sales",
        "Journaling reflexivo",
        "Descanso extra y sueño profundo",
        "Aromaterapia y masajes suaves",
        "Arte contemplativo"
      ],
      notes: "La fase menstrual puede durar entre 3-7 días. Es tu momento de mayor sabiduría intuitiva."
    },
    {
      icon: "🌱",
      name: "Folicular",
      period: "Días 8-13*",
      color: "var(--color-lavender)",
      lightColor: "var(--color-lavender-light)",
      characteristics: [
        "Energía ascendente y renovada",
        "Nuevas ideas y visiones creativas",
        "Momento de expansión y posibilidades",
        "Optimismo y motivación crecientes",
        "Curiosidad y ganas de aprender",
        "Apertura a experiencias nuevas"
      ],
      activities: [
        "Planificar nuevos proyectos",
        "Brainstorming y creatividad",
        "Ejercicio cardiovascular suave",
        "Aprender habilidades nuevas",
        "Explorar nuevos lugares",
        "Conectar con la naturaleza"
      ],
      notes: "Después de la menstruación hasta la ovulación. Tu energía se renueva gradualmente."
    },
    {
      icon: "☀️",
      name: "Ovulatoria",
      period: "Días 14-17*",
      color: "var(--color-beige)",
      lightColor: "var(--color-beige-light)",
      characteristics: [
        "Máxima vitalidad y magnetismo",
        "Comunicación clara y persuasiva",
        "Carisma y brillo social natural",
        "Confianza elevada en ti misma",
        "Energía radiante y atractiva",
        "Capacidad de liderazgo"
      ],
      activities: [
        "Presentaciones importantes",
        "Socializar y crear conexiones",
        "Ejercicio intenso y desafiante",
        "Colaborar en proyectos de equipo",
        "Negociaciones importantes",
        "Expresión creativa pública"
      ],
      notes: "Momento de máxima fertilidad y energía. Ideal para actividades importantes."
    },
    {
      icon: "🍂",
      name: "Lútea",
      period: "Días 18-30*",
      color: "var(--color-rose-dark)",
      lightColor: "var(--color-rose-light)",
      characteristics: [
        "Enfoque perfeccionista en detalles",
        "Energía para cerrar proyectos",
        "Instinto organizador natural",
        "Necesidad de nutrición y cuidado",
        "Sensibilidad emocional elevada",
        "Preparación para el próximo ciclo"
      ],
      activities: [
        "Completar tareas pendientes",
        "Organizar espacios y documentos",
        "Cocinar meals nutritivos",
        "Ejercicio moderado y constante",
        "Cuidado personal intensivo",
        "Preparación y planificación"
      ],
      notes: "Desde la ovulación hasta la próxima menstruación. Tiempo de completar y preparar."
    }
  ];

  return (
    <div className="mobile-page page-break">
      {/* Header */}
      <div className="text-center mb-8 md:mb-10">
        <h2 className="font-serif mb-2 md:mb-4 text-lg md:text-xl" style={{ color: 'var(--color-rose-dark)' }}>
          Guía Completa de Fases del Ciclo
        </h2>
        <p className="text-sm md:text-lg mb-4 md:mb-6" style={{ color: 'var(--color-muted-foreground)' }}>
          Comprende y honra cada fase de tu ciclo único
        </p>
        
        {/* Decorative cycle illustration */}
        <div className="flex justify-center space-x-2 md:space-x-4 mb-6 md:mb-8">
          {phases.map((phase) => (
            <div key={phase.name} className="text-2xl md:text-3xl">
              {phase.icon}
            </div>
          ))}
        </div>
      </div>
      
      {/* Important note about variations */}
      <div className="mb-6 md:mb-8 p-4 md:p-6 rounded-xl border-2" style={{ backgroundColor: 'var(--color-beige-light)', borderColor: 'var(--color-beige-dark)' }}>
        <h4 className="mb-3 md:mb-4 text-center text-sm md:text-base">⚠️ Importante: Cada Ciclo es Único</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
          <div>
            <p><strong>Duración variable:</strong> Los ciclos pueden variar entre 21-35 días.</p>
            <p><strong>Períodos únicos:</strong> La menstruación puede durar 3-7 días.</p>
          </div>
          <div>
            <p><strong>*Los días son aproximados:</strong> Se ajustan según tu ciclo personal.</p>
            <p><strong>Ciclos irregulares:</strong> Es completamente normal tener variaciones.</p>
          </div>
        </div>
      </div>
      
      {/* Phases grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {phases.map((phase) => (
          <div key={phase.name} className="p-4 md:p-6 rounded-xl border-2 transition-all hover:shadow-lg"
               style={{ 
                 backgroundColor: phase.lightColor,
                 borderColor: phase.color
               }}>
            {/* Phase header */}
            <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
              <span className="text-2xl md:text-3xl">{phase.icon}</span>
              <div>
                <h3 className="font-serif text-base md:text-lg" style={{ color: 'var(--color-foreground)' }}>
                  {phase.name}
                </h3>
                <p className="text-xs md:text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                  {phase.period}
                </p>
              </div>
            </div>
            
            {/* Characteristics */}
            <div className="mb-3 md:mb-4">
              <h4 className="mb-2 text-sm md:text-base">Características:</h4>
              <ul className="space-y-1 text-xs md:text-sm">
                {phase.characteristics.map((char, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-xs mt-1">•</span>
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Activities */}
            <div className="mb-3 md:mb-4">
              <h4 className="mb-2 text-sm md:text-base">Actividades recomendadas:</h4>
              <ul className="space-y-1 text-xs md:text-sm">
                {phase.activities.map((activity, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-xs mt-1">•</span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Phase notes */}
            <div className="p-2 md:p-3 rounded-lg text-xs md:text-sm" style={{ backgroundColor: 'white' }}>
              <p><strong>Nota:</strong> {phase.notes}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Special section for irregular cycles */}
      <div className="mt-6 md:mt-8 p-4 md:p-6 rounded-xl border-2" style={{ backgroundColor: 'var(--color-lavender-light)', borderColor: 'var(--color-lavender)' }}>
        <h4 className="mb-3 md:mb-4 text-center text-sm md:text-base">❓ ¿Tienes Ciclos Irregulares?</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-xs md:text-sm">
          <div>
            <h5 className="font-medium mb-2">Es completamente normal si:</h5>
            <ul className="space-y-1">
              <li>• Tu ciclo varía entre 21-35 días</li>
              <li>• Las fases no siguen un patrón fijo</li>
              <li>• Algunos meses son muy diferentes</li>
              <li>• Estás en transiciones hormonales</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">Para ciclos irregulares:</h5>
            <ul className="space-y-1">
              <li>• Activa el "Modo Irregular" en el seguimiento</li>
              <li>• Marca manualmente las fases que sientes</li>
              <li>• Enfócate en síntomas y sensaciones</li>
              <li>• Celebra tu ritmo único y personal</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Enhanced tips section */}
      <div className="mt-6 md:mt-8 p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-beige-light)' }}>
        <h4 className="mb-3 md:mb-4 text-center text-sm md:text-base">💡 Consejos para el Seguimiento Personalizado</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
          <div className="space-y-2">
            <p><strong>Sé consistente:</strong> Registra diariamente para identificar TUS patrones únicos.</p>
            <p><strong>Sin juicios:</strong> No hay ciclo "correcto" - observa sin criticar.</p>
            <p><strong>Personaliza completamente:</strong> Adapta las fases a tu experiencia real.</p>
          </div>
          <div className="space-y-2">
            <p><strong>Honra tu ritmo:</strong> Planifica actividades según tu energía natural.</p>
            <p><strong>Paciencia:</strong> Los patrones emergen después de 3-6 meses de seguimiento.</p>
            <p><strong>Flexibilidad:</strong> Tu ciclo puede cambiar - y está bien.</p>
          </div>
        </div>
      </div>
      
      {/* Customization guide */}
      <div className="mt-4 md:mt-6 p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-rose-light)' }}>
        <h4 className="mb-3 md:mb-4 text-center text-sm md:text-base">🎯 Personalización de Fases</h4>
        <div className="text-xs md:text-sm space-y-2">
          <p><strong>Configuración automática:</strong> Ajusta la duración de tu período (3-7 días) y ciclo total (21-35 días). Las fases se calcularán automáticamente.</p>
          <p><strong>Modo irregular:</strong> Desactiva el cálculo automático y marca manualmente las fases según tu experiencia personal cada día.</p>
          <p><strong>Símbolos personalizados:</strong> Puedes usar emojis diferentes o crear tu propio sistema de símbolos para las fases.</p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-6 md:mt-8 text-center">
        <div className="flex justify-center items-center space-x-2 mb-2">
          <span className="text-base md:text-lg">🌙</span>
          <p className="text-xs md:text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
            Con amor y respeto por tu ciclo único y natural
          </p>
          <span className="text-base md:text-lg">✨</span>
        </div>
      </div>
    </div>
  );
}
