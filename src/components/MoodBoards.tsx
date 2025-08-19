import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

export function MoodBoards() {
  const phases = [
    {
      phase: "Menstrual",
      icon: "🌑",
      color: "var(--color-rose)",
      lightColor: "var(--color-rose-light)",
      darkColor: "var(--color-rose-dark)",
      themes: ["Descanso", "Introspección", "Renovación", "Calma"],
      colors: ["Rojos suaves", "Borgoña", "Tierra", "Negro"],
      elements: ["Luna", "Cuevas", "Capullos", "Mantas"],
      affirmations: [
        "Honro mi necesidad de descanso",
        "Mi cuerpo se renueva naturalmente",
        "Es seguro ir más despacio"
      ],
      questions: [
        "¿Qué colores me tranquilizan más?",
        "¿Qué imágenes representan mi refugio interior?"
      ]
    },
    {
      phase: "Folicular",
      icon: "🌱",
      color: "var(--color-lavender)",
      lightColor: "var(--color-lavender-light)",
      darkColor: "var(--color-lavender-dark)",
      themes: ["Crecimiento", "Nuevos inicios", "Frescura", "Posibilidades"],
      colors: ["Verde claro", "Lavanda", "Rosa pálido", "Amarillo suave"],
      elements: ["Brotes", "Mariposas", "Amaneceres", "Flores pequeñas"],
      affirmations: [
        "Estoy llena de nuevas posibilidades",
        "Mi energía crece cada día",
        "Abrazo los nuevos comienzos"
      ],
      questions: [
        "¿Qué representa crecimiento para mí?",
        "¿Qué colores me dan energía renovada?"
      ]
    },
    {
      phase: "Ovulatoria",
      icon: "☀️",
      color: "var(--color-beige)",
      lightColor: "var(--color-beige-light)",
      darkColor: "var(--color-beige-dark)",
      themes: ["Radiante", "Confianza", "Conexión", "Abundancia"],
      colors: ["Dorado", "Naranja", "Amarillo brillante", "Coral"],
      elements: ["Sol", "Flores abiertas", "Fuego", "Cristales"],
      affirmations: [
        "Brillo con mi luz interior",
        "Soy magnética y poderosa",
        "Me expreso con confianza"
      ],
      questions: [
        "¿Cómo expreso mi poder interior?",
        "¿Qué me hace sentir radiante?"
      ]
    },
    {
      phase: "Lútea",
      icon: "🍂",
      color: "var(--color-rose-dark)",
      lightColor: "var(--color-rose-light)",
      darkColor: "var(--color-rose-dark)",
      themes: ["Cosecha", "Sabiduría", "Preparación", "Gratitud"],
      colors: ["Naranjas otoñales", "Marrones", "Dorado profundo", "Púrpura"],
      elements: ["Hojas otoñales", "Frutos", "Nidos", "Atardeceres"],
      affirmations: [
        "Cosecho los frutos de mi trabajo",
        "Confío en mi sabiduría interior",
        "Estoy preparada para el siguiente ciclo"
      ],
      questions: [
        "¿Qué sabiduría he ganado este ciclo?",
        "¿Qué quiero cosechar en mi vida?"
      ]
    }
  ];

  return (
    <div className="a4-page page-break">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="font-serif mb-2" style={{ color: 'var(--color-rose-dark)' }}>
          Tableros de Inspiración por Fase
        </h2>
        <p className="text-lg mb-4" style={{ color: 'var(--color-muted-foreground)' }}>
          Conecta visualmente con la energía de cada fase
        </p>
        
        {/* Instructions */}
        <div className="p-4 rounded-xl text-sm" style={{ backgroundColor: 'var(--color-beige-light)' }}>
          <p>🎨 <strong>Cómo crear tu tablero:</strong> Pega imágenes, dibuja, colorea, escribe palabras o símbolos que representen cada fase para ti. ¡Haz que sea completamente tuyo!</p>
        </div>
      </div>

      {/* Phases - Each gets a full section */}
      <div className="space-y-8">
        {phases.map((phaseData) => (
          <div key={phaseData.phase} className="p-6 rounded-xl border-2"
               style={{ 
                 backgroundColor: phaseData.lightColor,
                 borderColor: phaseData.darkColor
               }}>
            {/* Phase header */}
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">{phaseData.icon}</div>
              <h3 className="font-serif text-xl mb-2">{phaseData.phase}</h3>
              <div className="flex justify-center space-x-2">
                {phaseData.themes.map((theme, index) => (
                  <span key={index} className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: 'white', color: phaseData.darkColor }}>
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Main mood board area */}
            <div className="mb-6">
              <h4 className="mb-3 text-center">🖼️ Mi Tablero Visual</h4>
              <div className="w-full h-40 border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-sm relative"
                   style={{ borderColor: phaseData.darkColor, backgroundColor: 'white' }}>
                <div className="text-center space-y-2">
                  <div className="text-2xl" style={{ color: phaseData.darkColor }}>
                    {phaseData.icon}
                  </div>
                  <p style={{ color: 'var(--color-muted-foreground)' }}>
                    Espacio para imágenes, dibujos, colores, palabras...
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
                    Puedes imprimir y pegar recortes, o dibuja digitalmente
                  </p>
                </div>
              </div>
            </div>

            {/* Inspiration grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-3 bg-white rounded-lg border" style={{ borderColor: phaseData.color }}>
                <h4 className="mb-2 text-sm font-medium">🌈 Paleta de Colores</h4>
                <div className="space-y-1">
                  {phaseData.colors.map((color, index) => (
                    <div key={index} className="text-xs p-2 rounded" 
                         style={{ backgroundColor: phaseData.lightColor }}>
                      {color}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border" style={{ borderColor: phaseData.color }}>
                <h4 className="mb-2 text-sm font-medium">✨ Elementos Visuales</h4>
                <div className="space-y-1">
                  {phaseData.elements.map((element, index) => (
                    <div key={index} className="text-xs p-2 rounded" 
                         style={{ backgroundColor: phaseData.lightColor }}>
                      {element}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border" style={{ borderColor: phaseData.color }}>
                <h4 className="mb-2 text-sm font-medium">💭 Preguntas Guía</h4>
                <div className="space-y-2">
                  {phaseData.questions.map((question, index) => (
                    <p key={index} className="text-xs italic p-2 rounded" 
                       style={{ backgroundColor: phaseData.lightColor }}>
                      {question}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Affirmations section */}
            <div className="mb-4 p-3 bg-white rounded-lg border" style={{ borderColor: phaseData.color }}>
              <h4 className="mb-2 text-sm font-medium text-center">🌟 Afirmaciones</h4>
              <div className="grid grid-cols-1 gap-2">
                {phaseData.affirmations.map((affirmation, index) => (
                  <p key={index} className="text-sm italic text-center p-2 rounded" 
                     style={{ backgroundColor: phaseData.lightColor, color: phaseData.darkColor }}>
                    "{affirmation}"
                  </p>
                ))}
              </div>
            </div>

            {/* Personal reflection */}
            <div className="space-y-3">
              <div>
                <label className="block mb-1 text-sm font-medium">📝 Mis palabras clave para esta fase:</label>
                <Input 
                  type="text" 
                  className="w-full border-2"
                  style={{ borderColor: phaseData.darkColor, backgroundColor: 'white' }}
                  placeholder="Palabras que capturen la esencia de tu fase..."
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">🎯 Lo que más quiero expresar en esta fase:</label>
                <Textarea 
                  className="w-full h-16 resize-none border-2"
                  style={{ borderColor: phaseData.darkColor, backgroundColor: 'white' }}
                  placeholder="Describe cómo te gustaría sentirte y expresarte..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final reflection */}
      <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: 'var(--color-beige-light)' }}>
        <h4 className="mb-6 text-center font-serif text-lg">🌙 Mi Mapa Visual del Ciclo</h4>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">¿Cuál es mi fase visual favorita y por qué?</label>
            <Textarea 
              className="w-full h-20 resize-none"
              placeholder="Reflexiona sobre qué fase resuena más contigo visualmente..."
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">¿Cómo puedo usar estos elementos visuales en mi día a día?</label>
            <Textarea 
              className="w-full h-20 resize-none"
              placeholder="Ideas para incorporar estos colores, elementos o energías en tu espacio, ropa, decoración..."
            />
          </div>
        </div>
        
        {/* Creative space */}
        <div className="mt-6">
          <label className="block mb-2 text-sm font-medium text-center">🎨 Espacio libre para tu arte del ciclo</label>
          <div className="w-full h-32 border-2 border-dashed rounded-lg flex items-center justify-center"
               style={{ borderColor: 'var(--color-beige-dark)', backgroundColor: 'white' }}>
            <p className="text-sm text-center" style={{ color: 'var(--color-muted-foreground)' }}>
              Dibuja tu símbolo personal del ciclo, crea un mandala, o diseña tu propio elemento visual...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
