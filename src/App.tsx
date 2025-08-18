import { useState } from "react";
import { CoverPage } from "./components/CoverPage";
import { MonthlyCalendar } from "./components/MonthlyCalendar";
import { DailyTracking } from "./components/DailyTracking";
import { WeeklyReflection } from "./components/WeeklyReflection";
import { PhaseGuide } from "./components/PhaseGuide";
import { HabitTracker } from "./components/HabitTracker";
import { MoodBoards } from "./components/MoodBoards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";

export default function App() {
  const [activeTab, setActiveTab] = useState("cover");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  
  // Generate year options (current year ± 10 years)
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);
  
  const months = [
    { id: "enero", name: "Enero", season: "invierno" },
    { id: "febrero", name: "Febrero", season: "invierno" },
    { id: "marzo", name: "Marzo", season: "primavera" },
    { id: "abril", name: "Abril", season: "primavera" },
    { id: "mayo", name: "Mayo", season: "primavera" },
    { id: "junio", name: "Junio", season: "verano" },
    { id: "julio", name: "Julio", season: "verano" },
    { id: "agosto", name: "Agosto", season: "verano" },
    { id: "septiembre", name: "Septiembre", season: "otoño" },
    { id: "octubre", name: "Octubre", season: "otoño" },
    { id: "noviembre", name: "Noviembre", season: "otoño" },
    { id: "diciembre", name: "Diciembre", season: "invierno" }
  ];

  const getSeasonEmoji = (season: string) => {
    switch (season) {
      case "primavera": return "🌸";
      case "verano": return "☀️";
      case "otoño": return "🍂";
      case "invierno": return "❄️";
      default: return "🌙";
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-6xl mx-auto py-2 md:py-8 px-2 md:px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Mobile-Optimized Navigation Tabs */}
          <div className="sticky top-0 z-50 mb-4 md:mb-8 p-2 md:p-4 rounded-xl" 
               style={{ backgroundColor: 'var(--color-background)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
            
            {/* Year Selector - Always visible at top */}
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="flex items-center space-x-2 md:space-x-3">
                <span className="text-sm md:text-base font-medium" style={{ color: 'var(--color-foreground)' }}>
                  🌙 Mi Diario del Ciclo
                </span>
                <div className="text-xs md:text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                  |
                </div>
                <Select value={selectedYear.toString()} onValueChange={(value) => setSelectedYear(parseInt(value))}>
                  <SelectTrigger className="w-20 md:w-24 h-8 md:h-9 text-xs md:text-sm border-2" 
                               style={{ borderColor: 'var(--color-lavender)', backgroundColor: 'var(--color-lavender-light)' }}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {yearOptions.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Quick year navigation buttons */}
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setSelectedYear(selectedYear - 1)}
                  className="p-1 md:p-2 rounded text-xs md:text-sm hover:bg-opacity-80 transition-colors"
                  style={{ backgroundColor: 'var(--color-beige-light)', color: 'var(--color-foreground)' }}
                  title="Año anterior"
                >
                  ←
                </button>
                <button
                  onClick={() => setSelectedYear(currentYear)}
                  className="px-2 md:px-3 py-1 md:py-2 rounded text-xs md:text-sm hover:bg-opacity-80 transition-colors"
                  style={{ backgroundColor: 'var(--color-rose-light)', color: 'var(--color-rose-dark)' }}
                  title="Año actual"
                >
                  Hoy
                </button>
                <button
                  onClick={() => setSelectedYear(selectedYear + 1)}
                  className="p-1 md:p-2 rounded text-xs md:text-sm hover:bg-opacity-80 transition-colors"
                  style={{ backgroundColor: 'var(--color-beige-light)', color: 'var(--color-foreground)' }}
                  title="Año siguiente"
                >
                  →
                </button>
              </div>
            </div>
            
            {/* Mobile Navigation - Horizontal Scroll */}
            <div className="md:hidden">
              <TabsList className="w-full flex overflow-x-auto gap-1 p-2 bg-white rounded-xl scrollbar-hide">
                {/* Cover Page - Mobile */}
                <TabsTrigger 
                  value="cover" 
                  className="flex-shrink-0 px-3 py-2 text-xs whitespace-nowrap data-[state=active]:bg-rose-light data-[state=active]:text-rose-dark border-2 border-transparent data-[state=active]:border-rose min-w-[80px]"
                  style={{ 
                    backgroundColor: activeTab === "cover" ? 'var(--color-rose-light)' : 'transparent',
                    color: activeTab === "cover" ? 'var(--color-rose-dark)' : 'var(--color-muted-foreground)',
                    borderColor: activeTab === "cover" ? 'var(--color-rose)' : 'transparent'
                  }}
                >
                  🌙 Inicio
                </TabsTrigger>
                
                {/* Monthly tabs - Mobile */}
                {months.map((month) => (
                  <TabsTrigger 
                    key={month.id}
                    value={month.id}
                    className="flex-shrink-0 px-3 py-2 text-xs whitespace-nowrap data-[state=active]:bg-lavender-light data-[state=active]:text-lavender-dark border-2 border-transparent data-[state=active]:border-lavender min-w-[90px]"
                    style={{ 
                      backgroundColor: activeTab === month.id ? 'var(--color-lavender-light)' : 'transparent',
                      color: activeTab === month.id ? 'var(--color-lavender-dark)' : 'var(--color-muted-foreground)',
                      borderColor: activeTab === month.id ? 'var(--color-lavender)' : 'transparent'
                    }}
                  >
                    <span className="mr-1">{getSeasonEmoji(month.season)}</span>
                    <span>{month.name.slice(0, 3)}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Desktop Navigation - Grid Layout */}
            <div className="hidden md:block">
              <TabsList className="grid grid-cols-4 lg:grid-cols-7 xl:grid-cols-13 gap-2 h-auto p-2 bg-white rounded-xl">
                {/* Cover Page - Desktop */}
                <TabsTrigger 
                  value="cover" 
                  className="data-[state=active]:bg-rose-light data-[state=active]:text-rose-dark border-2 border-transparent data-[state=active]:border-rose"
                  style={{ 
                    backgroundColor: activeTab === "cover" ? 'var(--color-rose-light)' : 'transparent',
                    color: activeTab === "cover" ? 'var(--color-rose-dark)' : 'var(--color-muted-foreground)',
                    borderColor: activeTab === "cover" ? 'var(--color-rose)' : 'transparent'
                  }}
                >
                  🌙 Inicio
                </TabsTrigger>
                
                {/* Monthly tabs - Desktop */}
                {months.map((month) => (
                  <TabsTrigger 
                    key={month.id}
                    value={month.id}
                    className="data-[state=active]:bg-lavender-light data-[state=active]:text-lavender-dark border-2 border-transparent data-[state=active]:border-lavender text-xs"
                    style={{ 
                      backgroundColor: activeTab === month.id ? 'var(--color-lavender-light)' : 'transparent',
                      color: activeTab === month.id ? 'var(--color-lavender-dark)' : 'var(--color-muted-foreground)',
                      borderColor: activeTab === month.id ? 'var(--color-lavender)' : 'transparent'
                    }}
                  >
                    {getSeasonEmoji(month.season)} {month.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          {/* Cover Page */}
          <TabsContent value="cover" className="mt-0">
            <CoverPage selectedYear={selectedYear} />
            
            {/* Welcome instructions - Mobile Optimized */}
            <div className="mobile-page text-center space-y-4 md:space-y-6">
              <div className="mb-6 md:mb-8">
                <h2 className="font-serif mb-2 md:mb-4 text-xl md:text-2xl" style={{ color: 'var(--color-rose-dark)' }}>
                  Bienvenida a tu Diario del Ciclo {selectedYear}
                </h2>
                <p className="text-base md:text-lg" style={{ color: 'var(--color-muted-foreground)' }}>
                  Un año completo para conectar con tu ritmo natural
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                <div className="p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-rose-light)' }}>
                  <div className="text-2xl md:text-3xl mb-2 md:mb-3">📅</div>
                  <h4 className="mb-1 md:mb-2 text-sm md:text-base">Vista Mensual</h4>
                  <p className="text-xs md:text-sm">Calendario con cálculo automático de fases y seguimiento diario</p>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-lavender-light)' }}>
                  <div className="text-2xl md:text-3xl mb-2 md:mb-3">📖</div>
                  <h4 className="mb-1 md:mb-2 text-sm md:text-base">Guía de Fases</h4>
                  <p className="text-xs md:text-sm">Referencia completa para entender y honrar cada fase de tu ciclo</p>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-beige-light)' }}>
                  <div className="text-2xl md:text-3xl mb-2 md:mb-3">✅</div>
                  <h4 className="mb-1 md:mb-2 text-sm md:text-base">Seguimiento de Hábitos</h4>
                  <p className="text-xs md:text-sm">Hábitos específicos para cada fase de tu ciclo menstrual</p>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-rose-light)' }}>
                  <div className="text-2xl md:text-3xl mb-2 md:mb-3">🎨</div>
                  <h4 className="mb-1 md:mb-2 text-sm md:text-base">Tableros de Inspiración</h4>
                  <p className="text-xs md:text-sm">Espacios creativos para conectar visualmente con cada fase</p>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-lavender-light)' }}>
                  <div className="text-2xl md:text-3xl mb-2 md:mb-3">💭</div>
                  <h4 className="mb-1 md:mb-2 text-sm md:text-base">Reflexión Semanal</h4>
                  <p className="text-xs md:text-sm">Preguntas guiadas para profundizar en tu autoconocimiento</p>
                </div>
                
                <div className="p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-beige-light)' }}>
                  <div className="text-2xl md:text-3xl mb-2 md:mb-3">📝</div>
                  <h4 className="mb-1 md:mb-2 text-sm md:text-base">Resumen Mensual</h4>
                  <p className="text-xs md:text-sm">Espacio para celebrar tu crecimiento y establecer intenciones</p>
                </div>
              </div>
              
              <div className="mt-6 md:mt-8 p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-beige-light)' }}>
                <h4 className="mb-3 md:mb-4 text-sm md:text-base">🌟 Cómo usar tu diario</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm text-left">
                  <div className="space-y-2">
                    <p><strong>1. Selecciona tu año:</strong> Usa el selector arriba para cambiar entre años</p>
                    <p><strong>2. Selecciona tu mes:</strong> Cada mes es un diario completo con todas las herramientas</p>
                    <p><strong>3. Marca tu período:</strong> El calendario calculará automáticamente tus fases</p>
                  </div>
                  <div className="space-y-2">
                    <p><strong>4. Registra diariamente:</strong> Unos minutos cada día para conectar contigo</p>
                    <p><strong>5. Sigue tus hábitos:</strong> Alinea tus actividades con tu energía natural</p>
                    <p><strong>6. Reflexiona y celebra:</strong> Observa tus patrones y honra tu sabiduría</p>
                  </div>
                </div>
              </div>
              
              {/* Year navigation help */}
              <div className="mt-6 md:mt-8 p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-lavender-light)' }}>
                <h4 className="mb-3 md:mb-4 text-sm md:text-base">⏰ Navegación por Años</h4>
                <div className="text-xs md:text-sm text-left space-y-2">
                  <p><strong>Selector de año:</strong> Cambia fácilmente entre años pasados, presente y futuros</p>
                  <p><strong>Botones rápidos:</strong> Usa ← → para navegar año por año, o "Hoy" para volver al año actual</p>
                  <p><strong>Datos preservados:</strong> Cada año mantiene sus propios datos guardados localmente</p>
                  <p><strong>Uso ilimitado:</strong> Este diario te acompañará durante todos los años que necesites</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Monthly Sections */}
          {months.map((month) => (
            <TabsContent key={month.id} value={month.id} className="mt-0">
              {/* Month Header - Mobile Optimized */}
              <div className="text-center mb-4 md:mb-8 p-4 md:p-6 rounded-xl" 
                   style={{ backgroundColor: 'var(--color-lavender-light)' }}>
                <div className="text-3xl md:text-4xl mb-1 md:mb-2">{getSeasonEmoji(month.season)}</div>
                <h2 className="font-serif mb-1 md:mb-2 text-xl md:text-2xl" style={{ color: 'var(--color-lavender-dark)' }}>
                  {month.name} {selectedYear}
                </h2>
                <p className="text-sm md:text-lg mb-4 md:mb-6" style={{ color: 'var(--color-muted-foreground)' }}>
                  Tu ciclo completo en {month.name.toLowerCase()}
                </p>
                
                {/* Month navigation guide - Mobile Optimized */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 text-xs">
                  <div className="flex items-center justify-center space-x-1 p-2 rounded" style={{ backgroundColor: 'var(--color-rose-light)' }}>
                    <span>📅</span>
                    <span className="hidden sm:inline">Calendario</span>
                    <span className="sm:hidden">Cal</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1 p-2 rounded" style={{ backgroundColor: 'var(--color-beige-light)' }}>
                    <span>📊</span>
                    <span className="hidden sm:inline">Seguimiento</span>
                    <span className="sm:hidden">Seg</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1 p-2 rounded" style={{ backgroundColor: 'var(--color-lavender-light)' }}>
                    <span>💭</span>
                    <span className="hidden sm:inline">Reflexión</span>
                    <span className="sm:hidden">Ref</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1 p-2 rounded" style={{ backgroundColor: 'var(--color-rose-light)' }}>
                    <span>📖</span>
                    <span className="hidden sm:inline">Guía</span>
                    <span className="sm:hidden">Guía</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1 p-2 rounded" style={{ backgroundColor: 'var(--color-beige-light)' }}>
                    <span>✅</span>
                    <span className="hidden sm:inline">Hábitos</span>
                    <span className="sm:hidden">Háb</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1 p-2 rounded" style={{ backgroundColor: 'var(--color-lavender-light)' }}>
                    <span>🎨</span>
                    <span className="hidden sm:inline">Inspiración</span>
                    <span className="sm:hidden">Insp</span>
                  </div>
                </div>
              </div>
              
              {/* Complete month content */}
              <MonthlyCalendar monthName={month.name} monthNumber={months.indexOf(month) + 1} year={selectedYear} />
              <DailyTracking monthName={month.name} year={selectedYear} />
              <WeeklyReflection monthName={month.name} year={selectedYear} />
              <PhaseGuide />
              <HabitTracker />
              <MoodBoards />
              
              {/* Month summary - Mobile Optimized */}
              <div className="mobile-page page-break">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="font-serif mb-2 md:mb-4 text-lg md:text-xl" style={{ color: 'var(--color-rose-dark)' }}>
                    Resumen de {month.name} {selectedYear}
                  </h3>
                  <p className="text-sm md:text-lg mb-3 md:mb-4" style={{ color: 'var(--color-muted-foreground)' }}>
                    Reflexiona sobre tu mes y celebra tu crecimiento
                  </p>
                  
                  {/* Decorative month closing */}
                  <div className="flex justify-center">
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <span className="text-lg md:text-2xl">{getSeasonEmoji(month.season)}</span>
                      <div className="w-12 md:w-16 h-0.5 rounded-full" style={{ background: 'var(--color-lavender-dark)' }}></div>
                      <span className="text-lg md:text-2xl">🌙</span>
                      <div className="w-12 md:w-16 h-0.5 rounded-full" style={{ background: 'var(--color-lavender-dark)' }}></div>
                      <span className="text-lg md:text-2xl">{getSeasonEmoji(month.season)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-rose-light)' }}>
                    <h4 className="mb-3 md:mb-4 flex items-center space-x-2 text-sm md:text-base">
                      <span className="text-lg md:text-xl">🌟</span>
                      <span>Lo más destacado de mi {month.name}</span>
                    </h4>
                    <textarea 
                      className="w-full h-20 md:h-24 p-3 md:p-4 border-2 rounded-lg resize-none text-sm md:text-base"
                      style={{ borderColor: 'var(--color-rose)', backgroundColor: 'white' }}
                      placeholder="¿Qué momentos, descubrimientos o logros quieres recordar de este mes? ¿Qué te llenó de orgullo?"
                    />
                  </div>
                  
                  <div className="p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-lavender-light)' }}>
                    <h4 className="mb-3 md:mb-4 flex items-center space-x-2 text-sm md:text-base">
                      <span className="text-lg md:text-xl">📈</span>
                      <span>Patrones y descubrimientos</span>
                    </h4>
                    <textarea 
                      className="w-full h-20 md:h-24 p-3 md:p-4 border-2 rounded-lg resize-none text-sm md:text-base"
                      style={{ borderColor: 'var(--color-lavender)', backgroundColor: 'white' }}
                      placeholder="¿Qué patrones notaste en tu energía, estado de ánimo o ciclo? ¿Qué aprendiste sobre ti misma?"
                    />
                  </div>
                  
                  <div className="p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-beige-light)' }}>
                    <h4 className="mb-3 md:mb-4 flex items-center space-x-2 text-sm md:text-base">
                      <span className="text-lg md:text-xl">💚</span>
                      <span>Gratitud y aprecio</span>
                    </h4>
                    <textarea 
                      className="w-full h-16 md:h-20 p-3 md:p-4 border-2 rounded-lg resize-none text-sm md:text-base"
                      style={{ borderColor: 'var(--color-beige)', backgroundColor: 'white' }}
                      placeholder="¿Por qué te sientes agradecida este mes? ¿Qué aspectos de tu ciclo quieres celebrar?"
                    />
                  </div>
                  
                  <div className="p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-rose-light)' }}>
                    <h4 className="mb-3 md:mb-4 flex items-center space-x-2 text-sm md:text-base">
                      <span className="text-lg md:text-xl">🎯</span>
                      <span>Intenciones para {months[(months.indexOf(month) + 1) % 12]?.name || "el próximo mes"}</span>
                    </h4>
                    <textarea 
                      className="w-full h-20 md:h-24 p-3 md:p-4 border-2 rounded-lg resize-none text-sm md:text-base"
                      style={{ borderColor: 'var(--color-rose)', backgroundColor: 'white' }}
                      placeholder="¿Cómo quieres honrar tu ciclo el próximo mes? ¿Qué te gustaría explorar o cambiar?"
                    />
                  </div>
                </div>
                
                {/* Month closing affirmation */}
                <div className="mt-6 md:mt-8 p-4 md:p-6 text-center rounded-xl" style={{ backgroundColor: 'var(--color-beige-light)' }}>
                  <p className="text-base md:text-lg italic" style={{ color: 'var(--color-rose-dark)' }}>
                    "Honro mi viaje en {month.name} y confío en la sabiduría de mi ciclo."
                  </p>
                  <div className="mt-3 md:mt-4 flex justify-center">
                    <div className="text-xl md:text-2xl">{getSeasonEmoji(month.season)}</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Digital use instructions - Mobile Optimized */}
        <div className="text-center py-4 md:py-8 text-xs md:text-sm space-y-2" style={{ color: 'var(--color-muted-foreground)' }}>
          <p><strong>💻 Para uso digital:</strong> Desliza las pestañas horizontalmente o navega entre meses. Cambia de año usando el selector superior.</p>
          <p className="hidden md:block"><strong>🖨️ Para imprimir un mes completo:</strong> Selecciona el mes, usa Ctrl+P (Cmd+P en Mac) y activa "Gráficos de fondo"</p>
          <p className="md:hidden"><strong>🖨️ Para imprimir:</strong> Selecciona el mes y usa la función de imprimir del navegador</p>
          <p><strong>💾 Para guardar:</strong> Usa Ctrl+S (Cmd+S en Mac) para guardar como HTML</p>
          <p><strong>⏰ Datos por año:</strong> Cada año mantiene sus propios datos guardados por separado</p>
        </div>
      </div>
    </div>
  );
}
