import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

interface DailyTrackingProps {
  monthName: string;
  year: number;
}

export function DailyTracking({ monthName, year }: DailyTrackingProps) {
  const trackingDays = Array.from({ length: 8 }, (_, i) => i + 1);
  
  // Create unique storage keys for this month and year
  const storageKeyPrefix = `dailyTracking_${year}_${monthName}`;
  
  // State for cycle settings
  const [periodStartDate, setPeriodStartDate] = useState('');
  const [weekStartDate, setWeekStartDate] = useState('');
  const [isIrregular, setIsIrregular] = useState(false);
  const [cycleLength, setCycleLength] = useState(28);
  const [menstrualLength, setMenstrualLength] = useState(5);
  const [showSettings, setShowSettings] = useState(false);
  
  // Load saved data on component mount
  useEffect(() => {
    const savedPeriodStart = localStorage.getItem(`${storageKeyPrefix}_periodStart`);
    const savedWeekStart = localStorage.getItem(`${storageKeyPrefix}_weekStart`);
    const savedIsIrregular = localStorage.getItem(`${storageKeyPrefix}_irregular`);
    const savedCycleLength = localStorage.getItem(`${storageKeyPrefix}_cycleLength`);
    const savedMenstrualLength = localStorage.getItem(`${storageKeyPrefix}_menstrualLength`);
    
    if (savedPeriodStart) setPeriodStartDate(savedPeriodStart);
    if (savedWeekStart) setWeekStartDate(savedWeekStart);
    if (savedIsIrregular) setIsIrregular(savedIsIrregular === 'true');
    if (savedCycleLength) setCycleLength(parseInt(savedCycleLength));
    if (savedMenstrualLength) setMenstrualLength(parseInt(savedMenstrualLength));
  }, [storageKeyPrefix]);
  
  // Save data when it changes
  useEffect(() => {
    if (periodStartDate) {
      localStorage.setItem(`${storageKeyPrefix}_periodStart`, periodStartDate);
    }
  }, [periodStartDate, storageKeyPrefix]);
  
  useEffect(() => {
    if (weekStartDate) {
      localStorage.setItem(`${storageKeyPrefix}_weekStart`, weekStartDate);
    }
  }, [weekStartDate, storageKeyPrefix]);
  
  useEffect(() => {
    localStorage.setItem(`${storageKeyPrefix}_irregular`, isIrregular.toString());
  }, [isIrregular, storageKeyPrefix]);
  
  useEffect(() => {
    localStorage.setItem(`${storageKeyPrefix}_cycleLength`, cycleLength.toString());
  }, [cycleLength, storageKeyPrefix]);
  
  useEffect(() => {
    localStorage.setItem(`${storageKeyPrefix}_menstrualLength`, menstrualLength.toString());
  }, [menstrualLength, storageKeyPrefix]);
  
  // Calculate cycle day based on period start date
  const calculateCycleDay = (date: string, periodStart: string) => {
    if (!date || !periodStart) return '';
    
    const currentDate = new Date(date);
    const startDate = new Date(periodStart);
    const diffTime = currentDate.getTime() - startDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    return diffDays > 0 && diffDays <= cycleLength ? diffDays : '';
  };
  
  // Get phase based on cycle day (updated for longer periods and customizable cycles)
  const getPhaseFromCycleDay = (cycleDay: number) => {
    if (isIrregular) {
      // For irregular cycles, return a neutral indicator
      return { phase: '❓', name: 'Manual' };
    }
    
    // Menstrual phase: 1-7 days (customizable)
    if (cycleDay <= menstrualLength) return { phase: '🌑', name: 'Menstrual' };
    
    // Calculate dynamic phase boundaries based on cycle length
    const follicularEnd = Math.floor(cycleLength * 0.45); // ~45% of cycle
    const ovulatoryEnd = Math.floor(cycleLength * 0.55); // ~55% of cycle
    
    if (cycleDay <= follicularEnd) return { phase: '🌱', name: 'Folicular' };
    if (cycleDay <= ovulatoryEnd) return { phase: '☀️', name: 'Ovulatoria' };
    if (cycleDay <= cycleLength) return { phase: '🍂', name: 'Lútea' };
    
    return { phase: '', name: '' };
  };
  
  // Handle input changes with year-specific storage
  const handleInputChange = (day: number, field: string, value: string) => {
    const key = `${storageKeyPrefix}_day${day}_${field}`;
    localStorage.setItem(key, value);
  };
  
  // Get saved input value
  const getSavedValue = (day: number, field: string) => {
    const key = `${storageKeyPrefix}_day${day}_${field}`;
    return localStorage.getItem(key) || '';
  };
  
  return (
    <div className="mobile-page page-break">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="font-serif mb-2 md:mb-4 text-lg md:text-xl" style={{ color: 'var(--color-lavender-dark)' }}>
          Seguimiento Diario - {monthName} {year}
        </h2>
        <p className="text-sm md:text-lg" style={{ color: 'var(--color-muted-foreground)' }}>
          Registra tu energía, estado de ánimo y síntomas día a día
        </p>
      </div>
      
      {/* Cycle Settings Toggle */}
      <div className="text-center mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowSettings(!showSettings)}
          className="text-xs md:text-sm border-2"
          style={{ borderColor: 'var(--color-lavender)', backgroundColor: showSettings ? 'var(--color-lavender-light)' : 'transparent' }}
        >
          ⚙️ {showSettings ? 'Ocultar' : 'Configurar'} Ciclo
        </Button>
      </div>
      
      {/* Cycle Settings Panel */}
      {showSettings && (
        <div className="mb-6 p-4 md:p-6 rounded-xl border-2" style={{ backgroundColor: 'var(--color-beige-light)', borderColor: 'var(--color-beige-dark)' }}>
          <h3 className="text-base md:text-lg mb-4 text-center" style={{ color: 'var(--color-beige-dark)' }}>
            ⚙️ Configuración de tu Ciclo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Irregular cycle toggle */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="irregular" 
                  checked={isIrregular}
                  onCheckedChange={setIsIrregular}
                />
                <label htmlFor="irregular" className="text-sm md:text-base">
                  Mi ciclo es irregular
                </label>
              </div>
              
              {isIrregular && (
                <div className="p-3 rounded-lg text-xs md:text-sm" style={{ backgroundColor: 'var(--color-rose-light)' }}>
                  <p><strong>Modo Irregular:</strong> Podrás establecer manualmente las fases en cada día. 
                  Las sugerencias automáticas se desactivarán para darte control total.</p>
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
          
          {/* Phase preview for regular cycles */}
          {!isIrregular && (
            <div className="mt-4 p-3 rounded-lg text-xs md:text-sm" style={{ backgroundColor: 'white' }}>
              <p className="font-medium mb-2">Vista previa de fases (ciclo de {cycleLength} días):</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                <div>🌑 Días 1-{menstrualLength}: Menstrual</div>
                <div>🌱 Días {menstrualLength + 1}-{Math.floor(cycleLength * 0.45)}: Folicular</div>
                <div>☀️ Días {Math.floor(cycleLength * 0.45) + 1}-{Math.floor(cycleLength * 0.55)}: Ovulatoria</div>
                <div>🍂 Días {Math.floor(cycleLength * 0.55) + 1}-{cycleLength}: Lútea</div>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Week and Period Start inputs */}
      <div className="flex flex-col md:flex-row justify-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
        <div className="text-center">
          <label className="block mb-2 text-sm md:text-base">Semana del:</label>
          <Input 
            type="date" 
            className="w-full md:w-40 h-10 border-2 text-center text-sm md:text-base" 
            style={{ borderColor: 'var(--color-lavender)', backgroundColor: 'var(--color-lavender-light)' }}
            value={weekStartDate}
            onChange={(e) => setWeekStartDate(e.target.value)}
          />
        </div>
        <div className="text-center">
          <label className="block mb-2 text-sm md:text-base">🌑 Último Período:</label>
          <Input 
            type="date" 
            className="w-full md:w-40 h-10 border-2 text-center text-sm md:text-base" 
            style={{ borderColor: 'var(--color-rose)', backgroundColor: 'var(--color-rose-light)' }}
            value={periodStartDate}
            onChange={(e) => setPeriodStartDate(e.target.value)}
            placeholder="Para calcular días del ciclo"
          />
        </div>
      </div>
      
      {/* Energy scale reference */}
      <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: 'var(--color-rose-light)' }}>
        <h4 className="mb-2 text-center text-sm md:text-base">Escala de Energía</h4>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 text-xs md:text-sm text-center">
          <span>1 - Muy baja</span>
          <span>2 - Baja</span>
          <span>3 - Normal</span>
          <span>4 - Alta</span>
          <span>5 - Muy alta</span>
        </div>
      </div>
      
      {/* Mobile-optimized tracking cards */}
      <div className="md:hidden space-y-3">
        {trackingDays.map((day, index) => {
          let currentDate = '';
          let cycleDay = '';
          let suggestedPhase = '';
          
          if (weekStartDate) {
            const date = new Date(weekStartDate);
            date.setDate(date.getDate() + index);
            currentDate = date.toISOString().split('T')[0];
            
            if (periodStartDate && !isIrregular) {
              const calculatedDay = calculateCycleDay(currentDate, periodStartDate);
              cycleDay = calculatedDay.toString();
              if (calculatedDay) {
                const phaseInfo = getPhaseFromCycleDay(calculatedDay);
                suggestedPhase = phaseInfo.phase;
              }
            }
          }
          
          return (
            <div key={day} className="p-4 rounded-xl border-2" 
                 style={{ 
                   backgroundColor: 'white',
                   borderColor: 'var(--color-lavender)'
                 }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Día {day}</span>
                  {cycleDay && !isIrregular && (
                    <span className="px-2 py-1 rounded text-xs"
                          style={{ backgroundColor: 'var(--color-rose-light)' }}>
                      Ciclo: {cycleDay}
                    </span>
                  )}
                  {isIrregular && (
                    <span className="px-2 py-1 rounded text-xs"
                          style={{ backgroundColor: 'var(--color-beige-light)' }}>
                      Manual
                    </span>
                  )}
                </div>
                <Input 
                  type="date" 
                  className="w-32 h-8 text-xs" 
                  value={currentDate}
                  readOnly
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1">Energía (1-5)</label>
                  <Input 
                    type="number" 
                    min="1" 
                    max="5" 
                    className="w-full h-8 text-sm" 
                    placeholder="3"
                    defaultValue={getSavedValue(day, 'energy')}
                    onChange={(e) => handleInputChange(day, 'energy', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">
                    Fase {isIrregular ? '(manual)' : '(auto)'}
                  </label>
                  <Input 
                    type="text" 
                    className="w-full h-8 text-center text-sm" 
                    placeholder={isIrregular ? "🌑🌱☀️🍂" : (suggestedPhase || "🌑")}
                    defaultValue={getSavedValue(day, 'phase') || (!isIrregular ? suggestedPhase : '')}
                    onChange={(e) => handleInputChange(day, 'phase', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">Estado de ánimo</label>
                  <Input 
                    type="text" 
                    className="w-full h-8 text-sm" 
                    placeholder="Feliz"
                    defaultValue={getSavedValue(day, 'mood')}
                    onChange={(e) => handleInputChange(day, 'mood', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">Creatividad</label>
                  <Input 
                    type="text" 
                    className="w-full h-8 text-sm" 
                    placeholder="Alta"
                    defaultValue={getSavedValue(day, 'creativity')}
                    onChange={(e) => handleInputChange(day, 'creativity', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">Social</label>
                  <Input 
                    type="text" 
                    className="w-full h-8 text-sm" 
                    placeholder="Activa"
                    defaultValue={getSavedValue(day, 'social')}
                    onChange={(e) => handleInputChange(day, 'social', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">Cuerpo/Síntomas</label>
                  <Input 
                    type="text" 
                    className="w-full h-8 text-sm" 
                    placeholder="Sin dolor"
                    defaultValue={getSavedValue(day, 'symptoms')}
                    onChange={(e) => handleInputChange(day, 'symptoms', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mt-3">
                <label className="block text-xs mb-1">Notas</label>
                <Input 
                  type="text" 
                  className="w-full h-8 text-sm" 
                  placeholder="Día tranquilo"
                  defaultValue={getSavedValue(day, 'notes')}
                  onChange={(e) => handleInputChange(day, 'notes', e.target.value)}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Desktop tracking table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-2 rounded-xl overflow-hidden" style={{ borderColor: 'var(--color-lavender)' }}>
          {/* Header */}
          <thead>
            <tr style={{ backgroundColor: 'var(--color-lavender)' }}>
              <th className="p-3 text-left border-r" style={{ borderColor: 'var(--color-lavender-dark)' }}>Fecha</th>
              <th className="p-3 text-center border-r" style={{ borderColor: 'var(--color-lavender-dark)' }}>Día<br/>Ciclo</th>
              <th className="p-3 text-left border-r" style={{ borderColor: 'var(--color-lavender-dark)' }}>
                Fase {isIrregular ? '(Manual)' : '(Auto)'}
              </th>
              <th className="p-3 text-center border-r" style={{ borderColor: 'var(--color-lavender-dark)' }}>Energía<br />(1-5)</th>
              <th className="p-3 text-left border-r" style={{ borderColor: 'var(--color-lavender-dark)' }}>Estado de ánimo</th>
              <th className="p-3 text-left border-r" style={{ borderColor: 'var(--color-lavender-dark)' }}>Creatividad</th>
              <th className="p-3 text-left border-r" style={{ borderColor: 'var(--color-lavender-dark)' }}>Social</th>
              <th className="p-3 text-left border-r" style={{ borderColor: 'var(--color-lavender-dark)' }}>Cuerpo/Síntomas</th>
              <th className="p-3 text-left">Notas</th>
            </tr>
          </thead>
          
          {/* Rows */}
          <tbody>
            {trackingDays.map((day, index) => {
              let currentDate = '';
              let cycleDay = '';
              let suggestedPhase = '';
              
              if (weekStartDate) {
                const date = new Date(weekStartDate);
                date.setDate(date.getDate() + index);
                currentDate = date.toISOString().split('T')[0];
                
                if (periodStartDate && !isIrregular) {
                  const calculatedDay = calculateCycleDay(currentDate, periodStartDate);
                  cycleDay = calculatedDay.toString();
                  if (calculatedDay) {
                    const phaseInfo = getPhaseFromCycleDay(calculatedDay);
                    suggestedPhase = phaseInfo.phase;
                  }
                }
              }
              
              return (
                <tr key={day} className={index % 2 === 0 ? '' : ''} 
                    style={{ backgroundColor: index % 2 === 0 ? 'white' : 'var(--color-beige-light)' }}>
                  <td className="p-2 border-r border-b" style={{ borderColor: 'var(--color-lavender)' }}>
                    <Input 
                      type="date" 
                      className="w-28 h-8 text-xs" 
                      value={currentDate}
                      readOnly
                    />
                  </td>
                  <td className="p-2 border-r border-b text-center" style={{ borderColor: 'var(--color-lavender)' }}>
                    <div className="w-12 h-8 flex items-center justify-center text-sm font-medium"
                         style={{ 
                           backgroundColor: (cycleDay && !isIrregular) ? 'var(--color-rose-light)' : isIrregular ? 'var(--color-beige-light)' : 'transparent',
                           borderRadius: '4px'
                         }}>
                      {isIrregular ? '?' : cycleDay}
                    </div>
                  </td>
                  <td className="p-2 border-r border-b" style={{ borderColor: 'var(--color-lavender)' }}>
                    <Input 
                      type="text" 
                      className="w-16 h-8 text-center text-sm" 
                      placeholder={isIrregular ? "🌑🌱☀️🍂" : (suggestedPhase || "🌑")}
                      defaultValue={getSavedValue(day, 'phase') || (!isIrregular ? suggestedPhase : '')}
                      onChange={(e) => handleInputChange(day, 'phase', e.target.value)}
                    />
                  </td>
                  <td className="p-2 border-r border-b text-center" style={{ borderColor: 'var(--color-lavender)' }}>
                    <Input 
                      type="number" 
                      min="1" 
                      max="5" 
                      className="w-12 h-8 text-center text-sm" 
                      placeholder="3"
                      defaultValue={getSavedValue(day, 'energy')}
                      onChange={(e) => handleInputChange(day, 'energy', e.target.value)}
                    />
                  </td>
                  <td className="p-2 border-r border-b" style={{ borderColor: 'var(--color-lavender)' }}>
                    <Input 
                      type="text" 
                      className="w-24 h-8 text-sm" 
                      placeholder="Feliz"
                      defaultValue={getSavedValue(day, 'mood')}
                      onChange={(e) => handleInputChange(day, 'mood', e.target.value)}
                    />
                  </td>
                  <td className="p-2 border-r border-b" style={{ borderColor: 'var(--color-lavender)' }}>
                    <Input 
                      type="text" 
                      className="w-20 h-8 text-sm" 
                      placeholder="Alta"
                      defaultValue={getSavedValue(day, 'creativity')}
                      onChange={(e) => handleInputChange(day, 'creativity', e.target.value)}
                    />
                  </td>
                  <td className="p-2 border-r border-b" style={{ borderColor: 'var(--color-lavender)' }}>
                    <Input 
                      type="text" 
                      className="w-20 h-8 text-sm" 
                      placeholder="Activa"
                      defaultValue={getSavedValue(day, 'social')}
                      onChange={(e) => handleInputChange(day, 'social', e.target.value)}
                    />
                  </td>
                  <td className="p-2 border-r border-b" style={{ borderColor: 'var(--color-lavender)' }}>
                    <Input 
                      type="text" 
                      className="w-28 h-8 text-sm" 
                      placeholder="Sin dolor"
                      defaultValue={getSavedValue(day, 'symptoms')}
                      onChange={(e) => handleInputChange(day, 'symptoms', e.target.value)}
                    />
                  </td>
                  <td className="p-2 border-b" style={{ borderColor: 'var(--color-lavender)' }}>
                    <Input 
                      type="text" 
                      className="w-32 h-8 text-sm" 
                      placeholder="Día tranquilo"
                      defaultValue={getSavedValue(day, 'notes')}
                      onChange={(e) => handleInputChange(day, 'notes', e.target.value)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {/* Information panels */}
      <div className="mt-4 space-y-3">
        {/* Cycle calculation info */}
        {periodStartDate && !isIrregular && (
          <div className="p-3 rounded-lg text-xs md:text-sm" style={{ backgroundColor: 'var(--color-beige-light)' }}>
            <p className="text-center">
              💡 <strong>Cálculo automático</strong> basado en ciclo de {cycleLength} días con período de {menstrualLength} días. 
              Las fases se ajustan automáticamente. Puedes modificar manualmente cualquier fase si no coincide con tu experiencia.
            </p>
          </div>
        )}
        
        {/* Irregular cycle info */}
        {isIrregular && (
          <div className="p-3 rounded-lg text-xs md:text-sm" style={{ backgroundColor: 'var(--color-rose-light)' }}>
            <p className="text-center">
              ❓ <strong>Modo irregular activo:</strong> Establece manualmente las fases en cada día según tu experiencia personal. 
              Usa 🌑 (menstrual), 🌱 (folicular), ☀️ (ovulatoria), 🍂 (lútea) o cualquier símbolo que prefieras.
            </p>
          </div>
        )}
      </div>
      
      {/* Phase symbols reference */}
      <div className="mt-6 text-center text-xs md:text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
        <p>Símbolos de fases: 🌑 Menstrual (1-{menstrualLength} días) | 🌱 Folicular | ☀️ Ovulatoria | 🍂 Lútea</p>
        <p className="mt-2">
          📁 Datos guardados para: {monthName} {year} | 
          {isIrregular ? ' Modo: Irregular' : ` Ciclo: ${cycleLength} días`}
        </p>
      </div>
    </div>
  );
}