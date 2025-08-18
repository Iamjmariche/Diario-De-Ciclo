import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function HabitTracker() {
  const phases = [
    {
      phase: "Menstrual",
      icon: "🌑",
      color: "var(--color-rose)",
      lightColor: "var(--color-rose-light)",
      habits: [
        "Descanso extra (8+ horas)",
        "Baño relajante",
        "Meditación/mindfulness",
        "Comida nutritiva",
        "Yoga suave",
        "Journaling",
        "Autocuidado",
        "Límites saludables"
      ]
    },
    {
      phase: "Folicular",
      icon: "🌱",
      color: "var(--color-lavender)",
      lightColor: "var(--color-lavender-light)",
      habits: [
        "Ejercicio moderado",
        "Planificar proyectos",
        "Socializar",
        "Aprender algo nuevo",
        "Establecer metas",
        "Comer verde y fresco",
        "Explorar creatividad",
        "Organizar espacios"
      ]
    },
    {
      phase: "Ovulatoria",
      icon: "☀️",
      color: "var(--color-beige)",
      lightColor: "var(--color-beige-light)",
      habits: [
        "Ejercicio intenso",
        "Presentaciones/reuniones",
        "Conectar con otros",
        "Tomar decisiones",
        "Comunicar claramente",
        "Ser aventurera",
        "Expresar opiniones",
        "Celebrar logros"
      ]
    },
    {
      phase: "Lútea",
      icon: "🍂",
      color: "var(--color-rose-dark)",
      lightColor: "var(--color-rose-light)",
      habits: [
        "Completar tareas",
        "Ejercicio moderado",
        "Organizar/limpiar",
        "Cocinar nutritivo",
        "Reflexionar",
        "Preparar para menstrual",
        "Cuidado extra",
        "Decir no cuando necesario"
      ]
    }
  ];

  const daysOfWeek = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  return (
    <div className="a4-page page-break">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="font-serif mb-2" style={{ color: 'var(--color-rose-dark)' }}>
          Seguimiento de Hábitos por Fase
        </h2>
        <p className="text-lg" style={{ color: 'var(--color-muted-foreground)' }}>
          Honra tu ritmo natural con hábitos alineados a cada fase
        </p>
        
        {/* Week input */}
        <div className="mt-6">
          <label className="block mb-2">Semana del:</label>
          <Input 
            type="date" 
            className="w-40 h-10 border-2 text-center mx-auto" 
            style={{ borderColor: 'var(--color-rose)', backgroundColor: 'var(--color-rose-light)' }}
          />
        </div>
      </div>

      {/* Phases - Each phase gets its own section */}
      <div className="space-y-6">
        {phases.map((phaseData) => (
          <div key={phaseData.phase} className="p-6 rounded-xl border-2"
               style={{ 
                 backgroundColor: phaseData.lightColor,
                 borderColor: phaseData.color
               }}>
            {/* Phase header */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-3xl">{phaseData.icon}</span>
              <h3 className="font-serif text-xl">{phaseData.phase}</h3>
            </div>

            {/* Days of week header */}
            <div className="grid grid-cols-8 gap-2 mb-4">
              <div className="text-sm font-medium">Hábito / Día</div>
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center font-medium bg-white rounded-md py-2" 
                     style={{ backgroundColor: 'white', border: `1px solid ${phaseData.color}` }}>
                  {day}
                </div>
              ))}
            </div>

            {/* Habits checklist */}
            <div className="space-y-2">
              {phaseData.habits.map((habit, habitIndex) => (
                <div key={habitIndex} className="grid grid-cols-8 gap-2 items-center">
                  <div className="text-xs font-medium p-2 bg-white rounded border" 
                       style={{ borderColor: phaseData.color }}>
                    {habit}
                  </div>
                  {daysOfWeek.map((day, dayIndex) => (
                    <div key={dayIndex} className="flex justify-center p-2 bg-white rounded border" 
                         style={{ borderColor: phaseData.color }}>
                      <Checkbox className="w-5 h-5" />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Phase-specific notes */}
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium">Notas para la fase {phaseData.phase}:</label>
              <Input 
                type="text" 
                className="w-full border-2" 
                style={{ borderColor: phaseData.color, backgroundColor: 'white' }}
                placeholder={`¿Cómo te sientes durante tu fase ${phaseData.phase.toLowerCase()}?`} 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Weekly reflection section */}
      <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: 'var(--color-beige-light)' }}>
        <h4 className="text-center mb-6 font-serif text-lg">📝 Reflexión Semanal de Hábitos</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium">🌟 Hábitos que más me sirvieron:</label>
            <Textarea 
              className="w-full h-20 resize-none" 
              placeholder="Describe cuáles hábitos te dieron más energía y bienestar..."
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">🔄 Hábitos que quiero ajustar:</label>
            <Textarea 
              className="w-full h-20 resize-none" 
              placeholder="¿Qué cambiarías o probarías diferente la próxima semana?"
            />
          </div>
        </div>
        
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium">💡 Mi descubrimiento de la semana:</label>
          <Input 
            type="text" 
            className="w-full" 
            placeholder="Una cosa nueva que aprendiste sobre tu ritmo natural..."
          />
        </div>
      </div>

      {/* Tips section */}
      <div className="mt-6 p-4 rounded-xl text-sm text-center" style={{ backgroundColor: 'var(--color-rose-light)' }}>
        <p>
          💫 <strong>Recuerda:</strong> Los hábitos perfectos no existen. Honra donde estás hoy y celebra cada pequeño paso hacia tu bienestar.
        </p>
      </div>
    </div>
  );
}