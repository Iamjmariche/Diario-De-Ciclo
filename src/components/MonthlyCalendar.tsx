import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

interface MonthlyCalendarProps {
  monthName?: string;
  monthNumber?: number;
  year?: number;
}

export function MonthlyCalendar({ monthName = "", monthNumber = 1, year = 2025 }: MonthlyCalendarProps) {
  const daysOfWeek = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  
  // Create unique storage keys for this month and year
  const storageKeyPrefix = `monthlyCalendar_${year}_${monthName}`;
  
  // State for period and cycle settings
  const [periodStartDate, setPeriodStartDate] = useState('');
  const [isIrregular, setIsIrregular] = useState(false);
  const [cycleLength, setCycleLength] = useState(28);
  const [menstrualLength, setMenstrualLength] = useState(5);
  const [monthNotes, setMonthNotes] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  
  // Load saved data on component mount
  useEffect(() => {
    const savedPeriodStart = localStorage.getItem(`${storageKeyPrefix}_periodStart`);
    const savedIsIrregular = localStorage.getItem(`${storageKeyPrefix}_irregular`);
    const savedCycleLength = localStorage.getItem(`${storageKeyPrefix}_cycleLength`);
    const savedMenstrualLength = localStorage.getItem(`${storageKeyPrefix}_menstrualLength`);
    const savedNotes = localStorage.getItem(`${storageKeyPrefix}_notes`);
    
    if (savedPeriodStart) setPeriodStartDate(savedPeriodStart);
    if (savedIsIrregular) setIsIrregular(savedIsIrregular === 'true');
    if (savedCycleLength) setCycleLength(parseInt(savedCycleLength));
    if (savedMenstrualLength) setMenstrualLength(parseInt(savedMenstrualLength));
    if (savedNotes) setMonthNotes(savedNotes);
  }, [storageKeyPrefix]);
  
  // Save data when it changes
  useEffect(() => {
    if (periodStartDate) {
      localStorage.setItem(`${storageKeyPrefix}_periodStart`, periodStartDate);
    }
  }, [periodStartDate, storageKeyPrefix]);
  
  useEffect(() => {
    localStorage.setItem(`${storageKeyPrefix}_irregular`, isIrregular.toString());
  }, [isIrregular, storageKeyPrefix]);
  
  useEffect(() => {
    localStorage.setItem(`${storageKeyPrefix}_cycleLength`, cycleLength.toString());
  }, [cycleLength, storageKeyPrefix]);
  
  useEffect(() => {
    localStorage.setItem(`${storageKeyPrefix}_menstrualLength`, menstrualLength.toString());
  }, [menstrualLength, storageKeyPrefix]);
  
  useEffect(() => {
    localStorage.setItem(`${storageKeyPrefix}_notes`, monthNotes);
  }, [monthNotes, storageKeyPrefix]);
  
  // Calculate phase dates based on period start (updated for customizable cycles)
  const calculatePhases = (startDate: string) => {
    if (!startDate || isIrregular) return null;
    
    const start = new Date(startDate);
    const follicularEnd = Math.floor(cycleLength * 0.45); // ~45% of cycle
    const ovulatoryEnd = Math.floor(cycleLength * 0.55); // ~55% of cycle
    
    const phases = {
      menstrual: { 
        start: new Date(start), 
        end: new Date(start.getTime() + (menstrualLength - 1) * 24 * 60 * 60 * 1000) 
      },
      follicular: { 
        start: new Date(start.getTime() + menstrualLength * 24 * 60 * 60 * 1000), 
        end: new Date(start.getTime() + (follicularEnd - 1) * 24 * 60 * 60 * 1000) 
      },
      ovulatory: { 
        start: new Date(start.getTime() + follicularEnd * 24 * 60 * 60 * 1000), 
        end: new Date(start.getTime() + (ovulatoryEnd - 1) * 24 * 60 * 60 * 1000) 
      },
      luteal: { 
        start: new Date(start.getTime() + ovulatoryEnd * 24 * 60 * 60 * 1000), 
        end: new Date(start.getTime() + (cycleLength - 1) * 24 * 60 * 60 * 1000) 
      }
    };
    
    return phases;
  };
  
  const phases = calculatePhases(periodStartDate);
  
  // Format date for display
  const formatDate = (date: Date) => {
    return `${date.getDate()}/${date.getMonth() + 1}`;
  };
  
  // Get days in month
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };
  
  const daysInMonth = getDaysInMonth(monthNumber, year);
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  // Handle individual day notes
  const handleDayNoteChange = (day: number, value: string) => {
    const key = `${storageKeyPrefix}_day${day}_note`;
    localStorage.setItem(key, value);
  };
  
  const getDayNote = (day: number) => {
    const key = `${storageKeyPrefix}_day${day}_note`;
    return localStorage.getItem(key) || '';
  };
  
  return (
    <div className="mobile-page page-break">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="font-serif mb-2 md:mb-4 text-lg md:text-xl" style={{ color: 'var(--color-rose-dark)' }}>
          Vista Mensual - {monthName} {year}
        </h2>
        <p className="text-sm md:text-lg" style={{ color: 'var(--color-muted-foreground)' }}>
          Marca el inicio de tu ciclo y observa tus patrones
        </p>
      </div>
      
      {/* Settings Toggle */}
      <div className="text-center mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowSettings(!showSettings)}
          className="text-xs md:text-sm border-2"
          style={{ borderColor: 'var(--color-rose)', backgroundColor: showSettings ? 'var(--color-rose-light)' : 'transparent' }}
        >
          ⚙️ {showSettings ? 'Ocultar' : 'Configurar'} Vista
        </Button>
      </div>
      
      {/* Cycle Settings Panel */}
      {showSettings && (
        <div className="mb-6 p-4 md:p-6 rounded-xl border-2" style={{ backgroundColor: 'var(--color-beige-light)', borderColor: 'var(--color-beige-dark)' }}>
          <h3 className="text-base md:text-lg mb-4 text-center" style={{ color: 'var(--color-beige-dark)' }}>
            ⚙️ Configuración del Calendario
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Irregular cycle toggle */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="irregular-calendar" 
                  checked={isIrregular}
                  onCheckedChange={setIsIrregular}
                />
                <label htmlFor="irregular-calendar" className="text-sm md:text-base">
                  Mi ciclo es irregular
                </label>
              </div>
              
              {isIrregular && (
                <div className="p-3 rounded-lg text-xs md:text-sm" style={{ backgroundColor: 'var(--color-rose-light)' }}>
                  <p><strong>Vista Irregular:</strong> No se mostrarán predicciones automáticas. 
                  Podrás anotar manualmente en cada día del calendario.</p>
                </div>
              )}
            </div>
            
            {/* Cycle length settings */}
            {!isIrregular && (
              <div className="space-y-3">
                <div>
                  <label className="block text-sm md:text-base mb-2">Duración total del ciclo:</label>
                  <Select value={cycleLength.toString()} onValueChange={(value) => setCycleLength(parseInt(value))}>
                    <SelectTrigger className="h-10 border-2" style={{ borderColor: 'var(--color-beige-dark)' }}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 16 }, (_, i) => 21 + i).map(days => (
                        <SelectItem key={days} value={days.toString()}>
                          {days} días
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm md:text-base mb-2">Duración de la menstruación:</label>
                  <Select value={menstrualLength.toString()} onValueChange={(value) => setMenstrualLength(parseInt(value))}>
                    <SelectTrigger className="h-10 border-2" style={{ borderColor: 'var(--color-beige-dark)' }}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 7 }, (_, i) => i + 1).map(days => (
                        <SelectItem key={days} value={days.toString()}>
                          {days} día{days > 1 ? 's' : ''}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Period Start Date input */}
      <div className="flex justify-center mb-6">
        <div className="text-center">
          <label className="block mb-2 text-sm md:text-base">🌑 Inicio del Período</label>
          <Input 
            type="date" 
            className="w-full md:w-40 h-10 md:h-12 text-center border-2 text-sm md:text-lg" 
            style={{ borderColor: 'var(--color-rose-dark)', backgroundColor: 'var(--color-rose-light)' }}
            value={periodStartDate}
            onChange={(e) => setPeriodStartDate(e.target.value)}
          />
        </div>
      </div>
      
      {/* Phase calculations display - only for regular cycles */}
      {phases && !isIrregular && (
        <div className="mb-6 p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-lavender-light)' }}>
          <h4 className="mb-3 md:mb-4 text-center text-sm md:text-base">📅 Fechas Calculadas de Fases (Ciclo {cycleLength} días)</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 text-xs md:text-sm">
            <div className="text-center p-2 md:p-3 rounded" style={{ backgroundColor: 'var(--color-rose-light)' }}>
              <div className="flex justify-center items-center space-x-1 mb-1">
                <span className="text-base md:text-lg">🌑</span>
                <span className="font-medium">Menstrual</span>
              </div>
              <div className="text-xs">
                {formatDate(phases.menstrual.start)} - {formatDate(phases.menstrual.end)}
              </div>
              <div className="text-xs opacity-70">
                {menstrualLength} día{menstrualLength > 1 ? 's' : ''}
              </div>
            </div>
            <div className="text-center p-2 md:p-3 rounded" style={{ backgroundColor: 'var(--color-lavender-light)' }}>
              <div className="flex justify-center items-center space-x-1 mb-1">
                <span className="text-base md:text-lg">🌱</span>
                <span className="font-medium">Folicular</span>
              </div>
              <div className="text-xs">
                {formatDate(phases.follicular.start)} - {formatDate(phases.follicular.end)}
              </div>
            </div>
            <div className="text-center p-2 md:p-3 rounded" style={{ backgroundColor: 'var(--color-beige-light)' }}>
              <div className="flex justify-center items-center space-x-1 mb-1">
                <span className="text-base md:text-lg">☀️</span>
                <span className="font-medium">Ovulatoria</span>
              </div>
              <div className="text-xs">
                {formatDate(phases.ovulatory.start)} - {formatDate(phases.ovulatory.end)}
              </div>
            </div>
            <div className="text-center p-2 md:p-3 rounded" style={{ backgroundColor: 'var(--color-rose-light)' }}>
              <div className="flex justify-center items-center space-x-1 mb-1">
                <span className="text-base md:text-lg">🍂</span>
                <span className="font-medium">Lútea</span>
              </div>
              <div className="text-xs">
                {formatDate(phases.luteal.start)} - {formatDate(phases.luteal.end)}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Phase legend - updated for customizable cycles */}
      <div className="mb-6 p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-beige-light)' }}>
        <h4 className="mb-3 md:mb-4 text-center text-sm md:text-base">
          {isIrregular ? 'Fases del Ciclo (Manual)' : 'Fases del Ciclo (Automáticas)'}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 text-xs md:text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-base md:text-lg">🌑</span>
            <span>Menstrual (Días 1-{menstrualLength})</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-base md:text-lg">🌱</span>
            <span>Folicular {isIrregular ? '(Variable)' : `(~${Math.floor(cycleLength * 0.45)} días)`}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-base md:text-lg">☀️</span>
            <span>Ovulatoria {isIrregular ? '(Variable)' : '(3-4 días)'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-base md:text-lg">🍂</span>
            <span>Lútea {isIrregular ? '(Variable)' : `(~${cycleLength - Math.floor(cycleLength * 0.55)} días)`}</span>
          </div>
        </div>
        
        {isIrregular && (
          <div className="mt-3 p-3 rounded-lg text-xs md:text-sm" style={{ backgroundColor: 'white' }}>
            <p><strong>Modo Irregular:</strong> Anota manualmente tus fases y síntomas en cada día. 
            No hay predicciones automáticas - confía en tu experiencia personal.</p>
          </div>
        )}
      </div>
      
      {/* Calendar grid */}
      <div className="border-2 rounded-xl overflow-hidden" style={{ borderColor: 'var(--color-rose)' }}>
        {/* Days of week header */}
        <div className="grid grid-cols-7">
          {daysOfWeek.map((day, index) => (
            <div key={day} className="p-2 md:p-3 text-center border-r border-b last:border-r-0 text-xs md:text-base" 
                 style={{ 
                   backgroundColor: 'var(--color-lavender)', 
                   borderColor: 'var(--color-rose)',
                   fontWeight: '600'
                 }}>
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar days */}
        <div className="grid grid-cols-7">
          {monthDays.map((day) => {
            // Determine if this day falls within any phase (only for regular cycles)
            let dayPhase = '';
            let dayBgColor = 'white';
            
            if (phases && periodStartDate && !isIrregular) {
              const currentDate = new Date(year, monthNumber - 1, day);
              
              if (currentDate >= phases.menstrual.start && currentDate <= phases.menstrual.end) {
                dayPhase = '🌑';
                dayBgColor = 'var(--color-rose-light)';
              } else if (currentDate >= phases.ovulatory.start && currentDate <= phases.ovulatory.end) {
                dayPhase = '☀️';
                dayBgColor = 'var(--color-beige-light)';
              } else if (currentDate >= phases.luteal.start && currentDate <= phases.luteal.end) {
                dayPhase = '🍂';
                dayBgColor = 'var(--color-rose-light)';
              } else if (currentDate >= phases.follicular.start && currentDate <= phases.follicular.end) {
                dayPhase = '🌱';
                dayBgColor = 'var(--color-lavender-light)';
              }
            }
            
            return (
              <div key={day} className="aspect-square border-r border-b last:border-r-0 p-1 md:p-2 relative hover:bg-opacity-70 transition-colors"
                   style={{ 
                     borderColor: 'var(--color-rose)',
                     backgroundColor: isIrregular ? 'white' : (day % 7 === 0 ? 'var(--color-beige-light)' : dayBgColor)
                   }}>
                <div className="text-xs md:text-sm mb-1 flex justify-between items-start">
                  <span className="font-medium">{day}</span>
                  {dayPhase && !isIrregular && <span className="text-xs md:text-sm">{dayPhase}</span>}
                </div>
                
                {/* Note input for each day */}
                <Input 
                  type="text" 
                  className="absolute bottom-1 left-1 right-1 h-5 md:h-6 text-xs border border-dashed border-opacity-30 bg-transparent text-center px-1"
                  style={{ borderColor: 'var(--color-muted-foreground)' }}
                  placeholder={isIrregular ? "🌑🌱☀️🍂" : "Notas"}
                  defaultValue={getDayNote(day)}
                  onChange={(e) => handleDayNoteChange(day, e.target.value)}
                />
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Cycle length note */}
      <div className="mt-4 p-3 rounded-lg text-xs md:text-sm text-center" style={{ backgroundColor: 'var(--color-beige-light)' }}>
        {isIrregular ? (
          <p>❓ <strong>Modo Irregular:</strong> Usa las casillas de cada día para anotar fases, síntomas y observaciones personales.</p>
        ) : (
          <p>💡 <strong>Predicciones automáticas</strong> basadas en ciclo de {cycleLength} días con período de {menstrualLength} días. 
          Puedes anotar observaciones adicionales en cada día.</p>
        )}
      </div>
      
      {/* Notes section */}
      <div className="mt-6">
        <h4 className="mb-3 text-sm md:text-base">Notas generales de {monthName}</h4>
        <Textarea 
          className="w-full h-20 md:h-24 border-2 rounded-lg resize-none text-xs md:text-sm"
          style={{ 
            borderColor: 'var(--color-rose)', 
            backgroundColor: 'var(--color-rose-light)' 
          }}
          placeholder="Escribe aquí tus observaciones y patrones generales del mes..."
          value={monthNotes}
          onChange={(e) => setMonthNotes(e.target.value)}
        />
      </div>
      
      {/* Data storage indicator */}
      <div className="mt-4 text-center text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
        📁 Calendario guardado para: {monthName} {year} | 
        {isIrregular ? ' Modo: Irregular' : ` Ciclo: ${cycleLength} días`}
      </div>
    </div>
  );
}
