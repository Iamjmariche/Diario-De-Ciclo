import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState, useEffect } from "react";

interface WeeklyReflectionProps {
  monthName: string;
  year: number;
}

export function WeeklyReflection({ monthName, year }: WeeklyReflectionProps) {
  // Create unique storage keys for this month and year
  const storageKeyPrefix = `weeklyReflection_${year}_${monthName}`;
  
  // State for form inputs
  const [weekDate, setWeekDate] = useState('');
  const [energyReflection, setEnergyReflection] = useState('');
  const [creativityReflection, setCreativityReflection] = useState('');
  const [bodyReflection, setBodyReflection] = useState('');
  const [oneWord, setOneWord] = useState('');
  
  // Load saved data on component mount
  useEffect(() => {
    const savedWeekDate = localStorage.getItem(`${storageKeyPrefix}_weekDate`);
    const savedEnergy = localStorage.getItem(`${storageKeyPrefix}_energy`);
    const savedCreativity = localStorage.getItem(`${storageKeyPrefix}_creativity`);
    const savedBody = localStorage.getItem(`${storageKeyPrefix}_body`);
    const savedWord = localStorage.getItem(`${storageKeyPrefix}_word`);
    
    if (savedWeekDate) setWeekDate(savedWeekDate);
    if (savedEnergy) setEnergyReflection(savedEnergy);
    if (savedCreativity) setCreativityReflection(savedCreativity);
    if (savedBody) setBodyReflection(savedBody);
    if (savedWord) setOneWord(savedWord);
  }, [storageKeyPrefix]);
  
  // Save data when it changes
  const saveToStorage = (key: string, value: string) => {
    localStorage.setItem(`${storageKeyPrefix}_${key}`, value);
  };
  
  return (
    <div className="mobile-page page-break">
      {/* Header */}
      <div className="text-center mb-8 md:mb-10">
        <h2 className="font-serif mb-2 md:mb-4 text-lg md:text-xl" style={{ color: 'var(--color-beige-dark)' }}>
          Reflexión Semanal - {monthName} {year}
        </h2>
        <p className="text-sm md:text-lg" style={{ color: 'var(--color-muted-foreground)' }}>
          Conecta con tu experiencia y descubre tus patrones
        </p>
        
        {/* Decorative divider */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            <span className="text-xl md:text-2xl">🌸</span>
            <div className="w-12 md:w-16 h-0.5 rounded-full self-center" style={{ background: 'var(--color-beige-dark)' }}></div>
            <span className="text-xl md:text-2xl">🌿</span>
          </div>
        </div>
      </div>
      
      {/* Week input */}
      <div className="text-center mb-6 md:mb-8">
        <label className="block mb-2 text-sm md:text-base">Semana del:</label>
        <div className="flex justify-center">
          <Input 
            type="date" 
            className="w-full md:w-48 h-10 border-2 text-center" 
            style={{ borderColor: 'var(--color-beige-dark)', backgroundColor: 'var(--color-beige-light)' }}
            value={weekDate}
            onChange={(e) => {
              setWeekDate(e.target.value);
              saveToStorage('weekDate', e.target.value);
            }}
          />
        </div>
      </div>
      
      {/* Reflection questions */}
      <div className="space-y-6 md:space-y-8">
        {/* Question 1 */}
        <div className="p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-rose-light)' }}>
          <h4 className="mb-3 md:mb-4 flex items-center space-x-2 text-sm md:text-base">
            <span className="text-lg md:text-xl">💫</span>
            <span>¿Qué descubrí sobre mi energía esta semana?</span>
          </h4>
          <Textarea 
            className="w-full h-20 md:h-24 resize-none border-2 text-sm md:text-base"
            style={{ borderColor: 'var(--color-rose-dark)', backgroundColor: 'white' }}
            placeholder="Reflexiona sobre tus niveles de energía, cuándo se sintieron más altos y más bajos..."
            value={energyReflection}
            onChange={(e) => {
              setEnergyReflection(e.target.value);
              saveToStorage('energy', e.target.value);
            }}
          />
        </div>
        
        {/* Question 2 */}
        <div className="p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-lavender-light)' }}>
          <h4 className="mb-3 md:mb-4 flex items-center space-x-2 text-sm md:text-base">
            <span className="text-lg md:text-xl">🎨</span>
            <span>¿Cómo se expresó mi creatividad?</span>
          </h4>
          <Textarea 
            className="w-full h-20 md:h-24 resize-none border-2 text-sm md:text-base"
            style={{ borderColor: 'var(--color-lavender-dark)', backgroundColor: 'white' }}
            placeholder="Escribe sobre momentos creativos, ideas nuevas, o formas de expresión que surgieron..."
            value={creativityReflection}
            onChange={(e) => {
              setCreativityReflection(e.target.value);
              saveToStorage('creativity', e.target.value);
            }}
          />
        </div>
        
        {/* Question 3 */}
        <div className="p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-beige-light)' }}>
          <h4 className="mb-3 md:mb-4 flex items-center space-x-2 text-sm md:text-base">
            <span className="text-lg md:text-xl">🌱</span>
            <span>¿Qué necesitó más mi cuerpo?</span>
          </h4>
          <Textarea 
            className="w-full h-16 md:h-20 resize-none border-2 text-sm md:text-base"
            style={{ borderColor: 'var(--color-beige-dark)', backgroundColor: 'white' }}
            placeholder="Piensa en qué alimentos, movimientos, descanso o cuidados buscaste más..."
            value={bodyReflection}
            onChange={(e) => {
              setBodyReflection(e.target.value);
              saveToStorage('body', e.target.value);
            }}
          />
        </div>
        
        {/* One word summary */}
        <div className="text-center">
          <div className="p-4 md:p-6 rounded-xl" style={{ backgroundColor: 'var(--color-rose-light)' }}>
            <h4 className="mb-3 md:mb-4 flex items-center justify-center space-x-2 text-sm md:text-base">
              <span className="text-lg md:text-xl">✨</span>
              <span>Una palabra que describe mi semana:</span>
            </h4>
            <div className="flex justify-center">
              <Input 
                type="text" 
                className="w-full md:w-64 h-10 md:h-12 border-2 text-center text-base md:text-lg" 
                style={{ borderColor: 'var(--color-rose-dark)', backgroundColor: 'white' }}
                placeholder="Escribe una palabra..."
                value={oneWord}
                onChange={(e) => {
                  setOneWord(e.target.value);
                  saveToStorage('word', e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Data storage indicator */}
      <div className="mt-6 text-center text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
        📁 Reflexiones guardadas para: {monthName} {year}
      </div>
      
      {/* Bottom decorative element */}
      <div className="mt-8 md:mt-10 flex justify-center">
        <div className="flex items-center space-x-2 md:space-x-3">
          <span className="text-base md:text-lg">🌙</span>
          <div className="w-16 md:w-20 h-0.5 rounded-full" style={{ background: 'var(--color-beige-dark)' }}></div>
          <span className="text-base md:text-lg">🌸</span>
          <div className="w-16 md:w-20 h-0.5 rounded-full" style={{ background: 'var(--color-beige-dark)' }}></div>
          <span className="text-base md:text-lg">🌿</span>
        </div>
      </div>
    </div>
  );
}
