interface CoverPageProps {
  selectedYear: number;
}

export function CoverPage({ selectedYear }: CoverPageProps) {
  return (
    <div className="mobile-page text-center space-y-6 md:space-y-8">
      {/* Main Title */}
      <div className="mb-8 md:mb-12">
        <div className="text-6xl md:text-8xl mb-4 md:mb-6">🌙</div>
        <h1 className="font-serif mb-4 md:mb-6 text-3xl md:text-4xl" style={{ color: 'var(--color-rose-dark)' }}>
          Mi Diario del Ciclo
        </h1>
        <div className="text-xl md:text-2xl mb-2 md:mb-3" style={{ color: 'var(--color-lavender-dark)' }}>
          {selectedYear}
        </div>
        <p className="text-sm md:text-lg" style={{ color: 'var(--color-muted-foreground)' }}>
          Conecta con tu ritmo natural durante todo el año
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="flex justify-center items-center space-x-4 md:space-x-6 mb-8 md:mb-12">
        <div className="text-3xl md:text-4xl">🌸</div>
        <div className="w-16 md:w-24 h-0.5 rounded-full" style={{ background: 'var(--color-rose-dark)' }}></div>
        <div className="text-3xl md:text-4xl">🌙</div>
        <div className="w-16 md:w-24 h-0.5 rounded-full" style={{ background: 'var(--color-rose-dark)' }}></div>
        <div className="text-3xl md:text-4xl">🌸</div>
      </div>

      {/* Year Highlight */}
      <div className="p-6 md:p-8 rounded-xl mb-8 md:mb-12" style={{ backgroundColor: 'var(--color-beige-light)' }}>
        <h3 className="font-serif mb-3 md:mb-4 text-lg md:text-xl" style={{ color: 'var(--color-beige-dark)' }}>
          Tu Año de Autoconocimiento
        </h3>
        <p className="text-sm md:text-base mb-4 md:mb-6" style={{ color: 'var(--color-muted-foreground)' }}>
          Este diario te acompañará durante todo {selectedYear}, ayudándote a entender y honrar 
          cada fase de tu ciclo menstrual único. Cada mes incluye todas las herramientas que necesitas 
          para conectar profundamente contigo misma, sin importar si tu ciclo es regular o irregular.
        </p>
        
        {/* Year Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
          <div className="space-y-2 md:space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg md:text-xl">📅</span>
              <span className="text-sm md:text-base">12 meses de seguimiento completo</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg md:text-xl">🔄</span>
              <span className="text-sm md:text-base">Soporte para ciclos regulares e irregulares</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg md:text-xl">🌱</span>
              <span className="text-sm md:text-base">Crecimiento personal continuo</span>
            </div>
          </div>
          <div className="space-y-2 md:space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg md:text-xl">💭</span>
              <span className="text-sm md:text-base">Reflexiones semanales guiadas</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg md:text-xl">✨</span>
              <span className="text-sm md:text-base">Conexión con tu sabiduría innata</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg md:text-xl">🎯</span>
              <span className="text-sm md:text-base">Configuración personalizable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Cycle Phases Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
        <div className="p-4 md:p-6 rounded-xl text-center" style={{ backgroundColor: 'var(--color-rose-light)' }}>
          <div className="text-2xl md:text-3xl mb-2 md:mb-3">🌑</div>
          <h4 className="mb-1 md:mb-2 text-xs md:text-sm">Menstrual</h4>
          <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>3-7 días de renovación</p>
        </div>
        
        <div className="p-4 md:p-6 rounded-xl text-center" style={{ backgroundColor: 'var(--color-beige-light)' }}>
          <div className="text-2xl md:text-3xl mb-2 md:mb-3">🌱</div>
          <h4 className="mb-1 md:mb-2 text-xs md:text-sm">Folicular</h4>
          <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>Energía creciente</p>
        </div>
        
        <div className="p-4 md:p-6 rounded-xl text-center" style={{ backgroundColor: 'var(--color-lavender-light)' }}>
          <div className="text-2xl md:text-3xl mb-2 md:mb-3">☀️</div>
          <h4 className="mb-1 md:mb-2 text-xs md:text-sm">Ovulatoria</h4>
          <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>Pico de energía</p>
        </div>
        
        <div className="p-4 md:p-6 rounded-xl text-center" style={{ backgroundColor: 'var(--color-rose-light)' }}>
          <div className="text-2xl md:text-3xl mb-2 md:mb-3">🍂</div>
          <h4 className="mb-1 md:mb-2 text-xs md:text-sm">Lútea</h4>
          <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>Introspección</p>
        </div>
      </div>

      {/* NEW: Customization Features */}
      <div className="p-6 md:p-8 rounded-xl mb-8 md:mb-12" style={{ backgroundColor: 'var(--color-lavender-light)' }}>
        <h3 className="font-serif mb-3 md:mb-4 text-lg md:text-xl" style={{ color: 'var(--color-lavender-dark)' }}>
          🔧 Completamente Personalizable
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left text-sm md:text-base">
          <div className="space-y-2">
            <h4 className="font-medium">Para Ciclos Regulares:</h4>
            <ul className="space-y-1 text-xs md:text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
              <li>• Configura tu duración de ciclo (21-35 días)</li>
              <li>• Ajusta tu período menstrual (3-7 días)</li>
              <li>• Cálculos automáticos de fases</li>
              <li>• Predicciones personalizadas</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Para Ciclos Irregulares:</h4>
            <ul className="space-y-1 text-xs md:text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
              <li>• Modo manual sin predicciones</li>
              <li>• Marca fases según tu experiencia</li>
              <li>• Seguimiento de síntomas personalizados</li>
              <li>• Total flexibilidad y control</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Affirmation for the Year */}
      <div className="p-6 md:p-8 rounded-xl" style={{ backgroundColor: 'var(--color-lavender-light)' }}>
        <p className="text-base md:text-lg italic mb-3 md:mb-4" style={{ color: 'var(--color-lavender-dark)' }}>
          "En {selectedYear}, honro mi ciclo único como una fuente de sabiduría y poder personal."
        </p>
        <div className="flex justify-center space-x-2 md:space-x-3">
          <span className="text-lg md:text-xl">🌙</span>
          <span className="text-lg md:text-xl">✨</span>
          <span className="text-lg md:text-xl">🌙</span>
        </div>
      </div>

      {/* Getting Started */}
      <div className="text-center mt-8 md:mt-12">
        <p className="text-sm md:text-base mb-4 md:mb-6" style={{ color: 'var(--color-muted-foreground)' }}>
          Comienza seleccionando el mes actual de {selectedYear} arriba y configura tu ciclo único
        </p>
        <div className="flex justify-center">
          <div className="text-2xl md:text-3xl animate-bounce">👆</div>
        </div>
      </div>
    </div>
  );
}