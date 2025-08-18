import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productName = 'Mi-Diario-del-Ciclo-Perpetuo';
const version = '2.0.0'; // Major version for year-agnostic update

async function packageProduct() {
  try {
    console.log('🚀 Empaquetando producto digital perpetuo (para todos los años)...');
    
    // Create product directory
    const productDir = path.join(__dirname, '..', 'product', productName);
    await fs.ensureDir(productDir);
    
    // Copy built files
    const distDir = path.join(__dirname, '..', 'dist');
    if (!await fs.pathExists(distDir)) {
      throw new Error('❌ No se encontró la carpeta dist. Ejecuta "npm run build" primero.');
    }
    
    console.log('📁 Copiando archivos del diario...');
    await fs.copy(distDir, productDir);
    
    // Copy instruction files
    console.log('📝 Añadiendo instrucciones completas para usuarios...');
    
    // Main User Instructions (Updated for perpetual use)
    const userInstructions = `# 🌙 Mi Diario del Ciclo - Instrucciones de Uso

## ¡Bienvenida a tu Diario Digital Perpetuo del Ciclo! ✨

Gracias por adquirir Mi Diario del Ciclo. Este es tu sistema completo de seguimiento del ciclo menstrual diseñado para acompañarte durante todos los años que necesites, ayudándote a conectar con tu ritmo natural sin limitaciones temporales.

## 🌟 ¡NUEVA FUNCIÓN! Selector de Año

### ⏰ Uso Perpetuo:
- **Sin límite de años**: Funciona para cualquier año - pasado, presente o futuro
- **Selector intuitivo**: Cambia fácilmente entre años usando el menú desplegable superior
- **Navegación rápida**: Botones ← → para moverte año por año, o "Hoy" para el año actual
- **Datos separados**: Cada año mantiene sus propios datos guardados independientemente

## 🚀 Cómo Empezar

### En Computadora:
1. **Abre el archivo principal**: Haz doble clic en \`index.html\`
2. **Selecciona tu año**: Usa el selector en la parte superior
3. **Guarda como favorito**: Presiona Ctrl+D (PC) o Cmd+D (Mac)
4. **¡Comienza a usar tu diario!**

### En Móvil/Tablet:
1. **Abre directamente**: Toca el archivo \`index.html\` desde tu navegador móvil
2. **Selecciona tu año**: Usa el selector superior
3. **Agregar a pantalla principal**: 
   - **iPhone**: Toca "Compartir" → "Agregar a pantalla de inicio"
   - **Android**: Menú → "Agregar a pantalla principal"
4. **¡Usa como una app perpetua!**: Acceso directo desde tu pantalla principal

## 📱 Optimización Móvil

### ✨ Características Móviles:
- **Navegación deslizable**: Desliza horizontalmente entre las pestañas de meses
- **Selector de año móvil**: Optimizado para pantallas táctiles
- **Diseño adaptativo**: Optimizado automáticamente para tu tamaño de pantalla
- **Elementos táctiles**: Botones y campos dimensionados para dedos
- **Texto legible**: Tamaños de fuente optimizados para lectura móvil
- **Sin internet necesario**: Funciona completamente offline

### 📝 Navegación Móvil:
- **Año**: Selecciona cualquier año usando el menú superior
- **Pestañas**: Desliza horizontalmente para ver todos los meses
- **Toque**: Selecciona cualquier mes o sección tocando
- **Scroll**: Desliza verticalmente dentro de cada sección
- **Zoom**: Pellizca para ampliar cualquier área (función del navegador)

## 📝 Cómo Usar Tu Diario

### Navegación Temporal:
- **Selecciona tu año**: Usa el selector superior para cualquier año que necesites
- **Navegación rápida**: ← para año anterior, → para año siguiente, "Hoy" para año actual
- **Cambio de año**: Los datos se guardan automáticamente por año
- **Histórico completo**: Revisa años anteriores para ver tu evolución

### Navegación por Meses:
- **Computadora**: Usa las pestañas superiores para navegar entre meses
- **Móvil**: Desliza las pestañas horizontalmente o toca el mes deseado
- Cada mes incluye: Calendario, Seguimiento Diario, Reflexión Semanal, Guía de Fases, Seguimiento de Hábitos, y Tableros de Inspiración

### Completar Tu Diario:
- **Todos los campos son editables** - solo haz clic/toca y escribe
- **Las casillas funcionan** - haz clic/toca para marcar/desmarcar
- **Campos de fecha** - haz clic/toca para abrir selector de fecha
- **Áreas de texto** - Optimizadas para escritura tanto en computadora como móvil
- Tus entradas se guardan automáticamente en tu navegador por año

### Guardar Tu Progreso:
- **Auto-guardado por año**: Tus entradas se guardan localmente organizadas por año
- **Guardado manual**: Presiona Ctrl+S (Cmd+S en Mac) para guardar como archivo HTML
- **Respaldo móvil**: Usa la función "Compartir" para enviar por email o guardar en la nube
- **Respaldo**: Guarda copias regularmente con nombres que incluyan el año

## 🖨️ Imprimir Tu Diario

### Desde Computadora:
1. Selecciona el año y mes que quieres imprimir
2. Presiona Ctrl+P (Cmd+P en Mac)
3. **Importante**: En configuración de impresión, activa "Gráficos de fondo"
4. Elige tamaño A4 y márgenes mínimos

### Desde Móvil:
1. **iPhone**: Usa AirPrint para impresoras compatibles
2. **Android**: Usa Google Cloud Print o conecta por WiFi
3. **Alternativa**: Guarda como PDF usando "Imprimir → Guardar como PDF"
4. **Envío**: Comparte el archivo con un ordenador para imprimir

## 💾 Gestión de Datos

### Tu Privacidad:
- Todo se almacena localmente en tu dispositivo
- No se envían datos a ningún servidor
- Tu diario es completamente privado y seguro
- Funciona sin conexión a internet

### Organización por Años:
- **Separación automática**: Cada año mantiene datos independientes
- **Fácil navegación**: Cambia entre años sin perder información
- **Histórico completo**: Mantén registro de múltiples años
- **Comparación temporal**: Revisa patrones a lo largo de los años

### Respaldos:
- **Computadora**: Guarda el archivo HTML incluyendo el año en el nombre
- **Móvil**: Usa la función "Compartir" para enviarte copias por email
- **Nube**: Sube a Google Drive, iCloud, o Dropbox para acceso multiplataforma
- **Recomendación**: Haz respaldos anuales al final de cada año

## 🔧 Solución de Problemas

### Problemas Generales:
#### Si no se guardan los campos:
- Asegúrate de abrir el archivo desde tu dispositivo (no desde vista previa de email)
- Habilita JavaScript en tu navegador
- Prueba con un navegador diferente (Chrome, Firefox, Safari)

#### Si los datos de años anteriores no aparecen:
- Los datos se organizan por año automáticamente
- Cambia al año correcto usando el selector superior
- Si perdiste datos, revisa si tienes respaldos guardados

#### Si no se imprimen los colores:
- Activa "Gráficos de fondo" en configuración de impresión
- Intenta imprimir desde Chrome para mejores resultados

### Problemas Móviles:
#### El selector de año no responde:
- Toca directamente en el selector de año
- Asegúrate de estar tocando el área correcta del menú
- Recarga la página si el problema persiste

#### El texto se ve muy pequeño:
- Usa el zoom del navegador (pellizca para ampliar)
- Ajusta el tamaño de texto en configuración del navegador

#### Las pestañas no se deslizan:
- Asegúrate de deslizar horizontalmente en el área de las pestañas
- Toca directamente en las pestañas como alternativa

### Navegadores Recomendados:
- **Computadora**: Chrome, Firefox, Safari, Edge
- **iPhone/iPad**: Safari (mejor rendimiento) o Chrome
- **Android**: Chrome (recomendado) o Firefox

## 💡 Mejores Prácticas

### Para Mejores Resultados:
- **Sé consistente**: Intenta completar el seguimiento diario cada noche
- **Sé honesta**: Este es tu espacio privado - sé auténtica
- **Sé paciente**: Los patrones emergen después de 2-3 meses de seguimiento
- **Sé amable**: Sin juicios, solo observación y crecimiento

### Uso Multi-Anual:
- **Planifica el futuro**: Usa años futuros para establecer intenciones anuales
- **Revisa el pasado**: Consulta años anteriores para ver tu evolución
- **Encuentra patrones**: Observa cómo cambias y evolucionas año tras año
- **Celebra el crecimiento**: Reconoce tu progreso temporal

### Aprovechar la Versión Perpetua:
- **Rutina anual**: Al final de cada año, revisa y planifica el siguiente
- **Patrones a largo plazo**: Observa tendencias que se repiten anualmente
- **Evolución personal**: Documenta cómo cambias y creces con los años
- **Sabiduría acumulada**: Usa años anteriores como guía para los futuros

### Obtener el Máximo Valor:
- Lee la sección Guía de Fases para entender tu ciclo (válida para todos los años)
- Usa el Seguimiento de Hábitos para alinear actividades con tu energía
- Revisa las reflexiones semanales y mensuales para detectar patrones
- Compara años para ver tu evolución y crecimiento personal
- Celebra tus descubrimientos y tu viaje de autoconocimiento continuo

## 🌟 Novedades en esta Versión

### ✨ Funcionalidad Perpetua:
- **Selector de año completo**: Navega fácilmente entre cualquier año
- **Datos organizados por año**: Cada año mantiene información independiente
- **Navegación temporal intuitiva**: Botones rápidos y selector visual
- **Sin limitaciones temporales**: Usa durante todos los años que necesites

### 🚀 Mejoras de Usabilidad:
- **Interfaz temporal mejorada**: Selector de año prominente y fácil de usar
- **Indicadores visuales**: El año actual se destaca claramente
- **Navegación rápida**: Botones para moverte entre años adyacentes
- **Contextualización**: Cada sección incluye el año correspondiente

### 💝 Valor Agregado:
- **Inversión única**: Un solo producto para uso ilimitado en el tiempo
- **Evolución personal**: Documenta y observa tu crecimiento a lo largo de los años
- **Flexibilidad total**: Comienza en cualquier año, usa para cualquier propósito temporal
- **Perspectiva histórica**: Mantén registro completo de tu viaje de autoconocimiento

---

**Recuerda**: Este diario es una herramienta para el autodescubrimiento y honrar tu ritmo natural durante toda tu vida. No hay forma "correcta" de usarlo - haz que funcione para tus necesidades únicas a través del tiempo.

**¡Ahora optimizado para acompañarte durante toda tu vida!** 📱💻⏰

¡Feliz seguimiento perpetuo! 🌙✨

**Versión**: ${version} (Diario Perpetuo - Todos los Años)
**Fecha**: ${new Date().toLocaleDateString('es-ES')}
**Compatibilidad Temporal**: Sin límites - Cualquier año, pasado, presente o futuro
`;

    await fs.writeFile(path.join(productDir, 'INSTRUCCIONES.md'), userInstructions);
    
    // Updated mobile guide for perpetual use
    const mobileGuide = `# 📱 Guía de Uso Móvil - Mi Diario del Ciclo Perpetuo

## 🌟 Optimizado para Móvil y Todos los Años

Tu Diario del Ciclo ahora está completamente optimizado para dispositivos móviles Y para uso perpetuo. Aquí te explicamos cómo aprovechar al máximo la experiencia móvil temporal.

## ⏰ NUEVA FUNCIÓN: Navegación Temporal Móvil

### Selector de Año Móvil:
- **Menú desplegable**: Toca el selector de año en la parte superior
- **Rango amplio**: Selecciona cualquier año desde 10 años atrás hasta 10 años adelante
- **Botones rápidos**: 
  - **←**: Año anterior
  - **Hoy**: Volver al año actual
  - **→**: Año siguiente
- **Indicador visual**: El año actual se destaca claramente

### Gestión Temporal:
- **Datos por año**: Cada año mantiene sus propios datos separados
- **Cambio fluido**: Cambia entre años sin perder información
- **Persistencia**: Los datos se mantienen incluso al cambiar de año
- **Organización automática**: El sistema organiza todo por año automáticamente

## 📱 Navegación Móvil

### Pestañas Deslizables:
- **En móvil**: Las pestañas se muestran horizontalmente y puedes deslizar para ver todos los meses
- **Navegación intuitiva**: Desliza hacia la izquierda o derecha para explorar todos los meses
- **Vista compacta**: Los nombres de meses se muestran abreviados (Ene, Feb, Mar, etc.)
- **Contexto temporal**: El año seleccionado se muestra claramente en cada mes

### Gestos Táctiles:
- **Toque**: Selecciona cualquier año, mes o sección
- **Deslizamiento horizontal**: Navega entre las pestañas de meses
- **Pellizco**: Zoom in/out en cualquier página (funcionalidad nativa del navegador)
- **Scroll vertical**: Navega dentro de cada sección del mes
- **Toque prolongado**: Activa menús contextuales en algunos campos

## 🎯 Características Móviles Mejoradas

### Diseño Temporal Adaptativo:
- **Selector prominente**: El año siempre visible en la parte superior
- **Texto contextual**: Fechas y referencias temporales claras
- **Navegación consistente**: Misma experiencia en todos los años
- **Indicadores visuales**: El año actual se destaca con colores especiales

### Componentes Móviles Optimizados:
- **Formularios por año**: Campos organizados y separados por año
- **Botones de año accesibles**: Tamaño optimizado para dedos
- **Menús temporales**: Listas desplegables fáciles de usar en móvil
- **Áreas de texto expandidas**: Textareas con altura apropiada para escritura móvil

## 📝 Uso Multi-Anual en Móvil

### Completar el Diario:
1. **Selecciona tu año**: Usa el selector superior para el año que necesites
2. **Selecciona tu mes**: Desliza las pestañas horizontalmente hasta encontrar el mes deseado
3. **Navega por secciones**: Cada mes contiene todas las herramientas en una sola vista
4. **Completa campos**: Toca cualquier campo de texto para empezar a escribir
5. **Marca casillas**: Toca las casillas de verificación para marcar hábitos y seguimiento
6. **Guarda automáticamente**: Los datos se organizan y guardan por año automáticamente

### Navegación Temporal Móvil:
- **Cambio de año**: Toca el selector y elige cualquier año
- **Navegación rápida**: Usa ← → para moverte entre años adyacentes
- **Año actual**: Toca "Hoy" para volver rápidamente al año presente
- **Contexto claro**: Cada página muestra claramente el año seleccionado

### Escritura Móvil por Años:
- **Autocorrección**: Funciona normalmente con el teclado de tu dispositivo
- **Teclado inteligente**: Se adapta automáticamente al tipo de campo
- **Selección de texto**: Mantén presionado para seleccionar y editar texto
- **Copiar/Pegar**: Funcionalidad estándar, útil para copiar entre años

## 💾 Guardado y Organización Temporal

### Almacenamiento por Año:
- **Sin conexión**: El diario funciona completamente sin internet
- **Organización automática**: Los datos se separan automáticamente por año
- **Privacidad total**: Ningún dato se envía a servidores externos
- **Persistencia**: Los datos permanecen incluso al cambiar de dispositivo (si transfieres el archivo)

### Respaldo Multi-Anual:
- **Método 1**: Usa la función "Compartir" del navegador para enviarte el archivo completo por email
- **Método 2**: Guarda en la nube incluyendo el año en el nombre del archivo
- **Método 3**: Exporta periódicamente usando el menú del navegador
- **Recomendación**: Haz respaldos anuales al final de cada año

## 🖨️ Impresión Multi-Anual desde Móvil

### Opciones de Impresión:
1. **AirPrint (iOS)**: Conecta directamente a impresoras compatibles
2. **Google Cloud Print**: Imprime desde cualquier lugar usando Google Cloud
3. **Compartir archivo**: Envía el archivo a un ordenador para imprimir
4. **Guardar como PDF**: Usa la función "Imprimir > Guardar como PDF" incluyendo el año

### Organización de Impresión:
- **Por año**: Imprime años completos para archivos físicos organizados
- **Por período**: Imprime rangos específicos de meses de diferentes años
- **Comparativo**: Imprime el mismo mes de diferentes años para comparar
- **Archivo histórico**: Crea archivos físicos organizados cronológicamente

## 🔧 Solución de Problemas Temporales

### Problemas Multi-Anuales:

#### Los datos de años anteriores no aparecen:
- **Solución**: Verifica que estés en el año correcto usando el selector superior
- **Verificación**: Usa el selector para navegar entre años y confirmar donde están los datos
- **Recuperación**: Si perdiste datos, busca respaldos con fechas en el nombre

#### El selector de año no funciona:
- **Solución**: Toca directamente en el área del selector de año
- **Alternativa**: Usa los botones ← → para navegar año por año
- **Reinicio**: Recarga la página si el selector no responde

#### Confusión temporal:
- **Orientación**: Siempre verifica el año mostrado en la parte superior
- **Referencia**: Cada página de mes muestra el año correspondiente
- **Navegación**: Usa "Hoy" para volver rápidamente al año actual

#### Los campos no guardan en el año correcto:
- **Verificación**: Confirma que estás en el año correcto antes de escribir
- **Solución**: Los datos se guardan automáticamente en el año seleccionado
- **Precaución**: Cambia de año ANTES de empezar a escribir, no después

### Navegadores Recomendados para Uso Perpetuo:
- **iOS**: Safari (mejor rendimiento) o Chrome
- **Android**: Chrome (recomendado) o Firefox
- **Evitar**: Navegadores muy antiguos que pueden tener problemas con el selector de fecha

## 🎨 Personalización Multi-Anual

### Agregar a Pantalla Principal:
1. **iPhone/iPad**: Toca el ícono de compartir → "Agregar a pantalla de inicio"
2. **Android**: Menú del navegador → "Agregar a pantalla principal"
3. **Resultado**: Acceso directo perpetuo como si fuera una app
4. **Nombre sugerido**: "Mi Diario del Ciclo" (sin año específico)

### Organización por Años:
- **Naming**: Si creas múltiples accesos directos, incluye el año en el nombre
- **Iconos**: Usa diferentes iconos o colores para diferentes rangos de años
- **Carpetas**: Organiza en carpetas por décadas si usas durante muchos años

## 📱 Consejos para Experiencia Multi-Anual

### Uso Eficiente:
- **Rutina de cambio de año**: Al inicio de cada año, cambia el selector y comienza el nuevo año
- **Revisión anual**: Al final de cada año, revisa todo el año antes de cambiar
- **Comparación temporal**: Usa el selector para comparar el mismo mes en diferentes años
- **Planificación**: Usa años futuros para establecer intenciones y metas

### Organización Temporal:
- **Rutina consistente**: Mantén la misma rutina de seguimiento año tras año
- **Evolución documentada**: Anota cómo cambias y evolucionas con los años  
- **Patrones multi-anuales**: Observa tendencias que se repiten anualmente
- **Celebración del crecimiento**: Reconoce tu progreso a través del tiempo

### Privacidad Multi-Anual:
- **Navegación privada**: Usa modo incógnito si compartes el dispositivo
- **Bloqueo de pantalla**: Asegúrate de tener tu dispositivo protegido
- **Respaldos seguros**: Usa servicios de nube con autenticación de dos factores
- **Archivos históricos**: Considera la seguridad de archivos de múltiples años

---

**¡Disfruta de tu diario del ciclo perpetuo optimizado para móvil!** 📱✨⏰

Tu experiencia móvil ahora está diseñada para acompañarte durante toda tu vida, siendo intuitiva, eficiente y completamente privada sin importar el año que uses.

**¿Necesitas ayuda?** Estas instrucciones están incluidas en cada descarga del producto para tus clientes y se actualizan para reflejar el uso perpetuo.

**Recuerda**: Este diario crecerá contigo año tras año, creando un archivo histórico personal invaluable de tu viaje de autoconocimiento.
`;

    await fs.writeFile(path.join(productDir, 'GUIA-MOVIL.md'), mobileGuide);
    
    // Updated printing guide for perpetual use
    const printingGuide = `# 🖨️ Guía de Impresión Multi-Anual - Mi Diario del Ciclo

## Configuración Óptima para Impresión (Cualquier Año)

### Configuración Recomendada:
- **Tamaño de papel**: A4
- **Orientación**: Vertical (Retrato)
- **Márgenes**: Mínimos (0.5cm)
- **Gráficos de fondo**: ✅ ACTIVADO (MUY IMPORTANTE)
- **Calidad**: Alta o Mejor
- **Escala**: 100% (Sin ajustes)

### Consideraciones Temporales:
- **Año visible**: Cada página impresa incluirá el año seleccionado
- **Organización**: Considera incluir el año en el nombre del archivo antes de imprimir
- **Archivo histórico**: Perfecto para crear archivos físicos organizados por año

### Por Navegador:

#### Google Chrome (Recomendado):
1. **Selecciona el año** que quieres imprimir usando el selector superior
2. Presiona Ctrl+P (Cmd+P en Mac)
3. En "Destino" selecciona tu impresora
4. Busca "Más configuraciones"
5. ✅ Activa "Gráficos de fondo"
6. Selecciona tamaño A4
7. Elige márgenes "Mínimos"

#### Firefox:
1. **Confirma el año** en el selector superior
2. Presiona Ctrl+P (Cmd+P en Mac)
3. Haz clic en "Configuración de página"
4. ✅ Activa "Imprimir fondos (colores e imágenes)"
5. Selecciona tamaño A4

#### Safari (Mac/iOS):
1. **Verifica el año seleccionado**
2. Presiona Cmd+P
3. Haz clic en "Mostrar detalles"
4. ✅ Activa "Imprimir fondos"
5. Selecciona tamaño A4

## 📱 Impresión Multi-Anual desde Dispositivos Móviles

### iPhone/iPad:
1. **AirPrint por Año**: 
   - Selecciona el año deseado en el selector superior
   - Abre el diario en Safari
   - Toca el ícono de compartir
   - Selecciona "Imprimir"
   - **Importante**: El año aparecerá en cada página impresa
   - Elige tu impresora AirPrint
   - Configura: A4, Vertical, con gráficos

2. **Guardar como PDF Multi-Anual**:
   - Sigue los pasos de AirPrint
   - En lugar de imprimir, pellizca con dos dedos en vista previa
   - **Nombra el archivo**: Incluye el año (ej: "MiDiario2024.pdf")
   - Guarda en Archivos o comparte

### Android:
1. **Google Cloud Print por Año**:
   - Confirma el año en el selector superior
   - Abre el diario en Chrome
   - Toca los tres puntos (menú)
   - Selecciona "Imprimir"
   - Elige Google Cloud Print
   - Configura tu impresora

2. **Guardar como PDF Anual**:
   - Chrome → Menú → Imprimir
   - Selecciona "Guardar como PDF"
   - **Nombra con el año**: "DiarioCiclo2024.pdf"
   - Guarda en Google Drive o compartir

## 🗂️ Estrategias de Impresión Multi-Anual

### Opción 1: Archivo Anual Completo
- Selecciona un año específico
- Imprime los 12 meses del año completo
- **Ideal para**: Crear archivos físicos anuales organizados
- **Páginas aproximadas**: 180-240 páginas por año completo
- **Organización**: Perfecto para carpetas anuales separadas

### Opción 2: Impresión Comparativa
- Selecciona el mismo mes en diferentes años
- Imprime para comparar evolución temporal
- **Ideal para**: Ver patrones y crecimiento a lo largo del tiempo
- **Uso**: Consultas médicas, análisis personal

### Opción 3: Períodos Específicos Multi-Anuales
- Imprime rangos que abarquen cambios de año
- **Ejemplo**: Últimos 6 meses de un año + primeros 6 del siguiente
- **Ideal para**: Transiciones, cambios de vida, análisis de patrones

### Opción 4: Resúmenes Anuales
- Imprime solo las páginas de resumen mensual de cada año
- **Ideal para**: Vista panorámica anual, reportes condensados
- **Páginas**: Aproximadamente 12 páginas por año

## 📅 Organización de Archivos Físicos por Años

### Sistema de Carpetas Recomendado:
```
📁 Mi Diario del Ciclo/
├── 📁 2024/
│   ├── Enero-Marzo 2024.pdf
│   ├── Abril-Junio 2024.pdf
│   ├── Julio-Septiembre 2024.pdf
│   └── Octubre-Diciembre 2024.pdf
├── 📁 2025/
│   ├── Enero-Marzo 2025.pdf
│   └── ...
└── 📁 Resúmenes Anuales/
    ├── Resumen 2024.pdf
    └── Resumen 2025.pdf
```

### Naming Conventions:
- **Meses individuales**: "Enero2024-MiDiario.pdf"
- **Trimestres**: "T1-2024-DiarioCiclo.pdf" 
- **Años completos**: "MiDiario-AñoCompleto-2024.pdf"
- **Comparativos**: "Comparativo-Enero-2023vs2024.pdf"

## 📊 Costos de Impresión Multi-Anual

### Casa (Impresora Personal):
#### Por Año Completo:
- **Páginas por año**: ~180-240 páginas
- **Costo por página**: ~€0.10-0.15
- **Costo anual**: ~€20-35 por año completo
- **Beneficio**: Archivo físico completo para toda la vida

#### Por Trimestre:
- **Páginas por trimestre**: ~45-60 páginas
- **Costo trimestral**: ~€5-9
- **Costo anual**: ~€20-36 (similar al año completo)
- **Beneficio**: Más manejable, fácil actualización

### Imprenta Local Multi-Anual:
#### Servicios Profesionales:
- **Año completo encuadernado**: ~€25-40
- **Trimestres con espiral**: ~€8-12 cada uno
- **Comparativos personalizados**: ~€15-25
- **Ventaja**: Calidad profesional, encuadernación duradera

### Servicios Online:
- **Impresión bajo demanda**: ~€0.08-0.15 por página + envío
- **Libros anuales**: ~€30-50 por año completo encuadernado
- **Beneficio**: Calidad profesional, entrega a domicilio

## 🌱 Alternativas Eco-Friendly Multi-Anuales

### Uso Híbrido Inteligente:
- **Digital principal**: Mantén todos los años en digital
- **Impresión selectiva**: Solo años o períodos importantes
- **Resúmenes anuales**: Imprime solo las páginas de resumen de cada año
- **Consulta histórica**: Usa digital para revisar, físico para consulta frecuente

### Métodos Sostenibles por Años:
- **Papel reciclado**: Usa para archivos históricos menos consultados
- **Impresión bajo demanda anual**: Solo cuando completes cada año
- **Reutilización**: Aprovecha papeles impresos por error como borradores
- **Digital por defecto**: Imprime solo cuando realmente necesites consulta física

### Estrategia de Vida Sostenible:
- **Años activos**: Mantén en digital los años que estás viviendo
- **Años históricos**: Imprime selectivamente años importantes de tu vida
- **Archivos de consulta**: Crea resúmenes impresos cada 5-10 años
- **Legado personal**: Considera qué años querrías conservar físicamente

## 📋 Consejos Específicos Multi-Anuales

### Antes de Imprimir Cualquier Año:
- **Verifica el año**: Confirma que tienes el año correcto seleccionado
- **Revisa completitud**: Asegúrate de haber completado lo que quieres imprimir
- **Nombra apropiadamente**: Incluye siempre el año en nombres de archivo
- **Vista previa**: Revisa que las fechas y años aparezcan correctamente

### Organización Eficiente:
- **Planifica anuales**: Imprime años completos al final de cada año
- **Mantén orden**: Usa el mismo sistema de naming para todos los años
- **Archiva sistemáticamente**: Carpetas físicas organizadas cronológicamente
- **Índice maestro**: Mantén una lista de qué años tienes impresos y dónde

### Para Uso Médico/Profesional:
- **Períodos específicos**: Imprime solo los meses relevantes con fechas claras
- **Formato consistente**: Usa el mismo formato para todas las consultas
- **Información temporal**: Asegúrate de que años y fechas sean prominentes
- **Copias de respaldo**: Mantén copias digitales de lo que imprimes

---

**¡Disfruta de tu archivo físico multi-anual personalizado!** 🌸📚

**Tip Multi-Anual**: Considera crear un "archivo de vida" donde imprimes selectivamente los años más significativos de tu viaje de autoconocimiento.

**Versión**: ${version} - ¡Ahora con soporte completo para impresión de cualquier año!

**Filosofía de Archivo**: Este diario está diseñado para acompañarte durante décadas, creando un registro físico valioso de tu evolución personal a través del tiempo.
`;

    await fs.writeFile(path.join(productDir, 'GUIA-IMPRESION.md'), printingGuide);
    
    // Create an updated README for the perpetual product
    const productReadme = `# 🌙 Mi Diario del Ciclo Perpetuo - Para Toda la Vida

## Diario Digital Completo para el Seguimiento del Ciclo Menstrual

### ✨ Lo que incluye este producto:

📁 **Archivos principales:**
- \`index.html\` - Tu diario interactivo perpetuo (¡abre este archivo!)
- \`assets/\` - Todos los archivos de estilo y funcionalidad

📝 **Documentación completa:**
- \`INSTRUCCIONES.md\` - Guía completa de uso perpetuo (desktop + móvil)
- \`GUIA-MOVIL.md\` - Guía específica para dispositivos móviles multi-anuales
- \`GUIA-IMPRESION.md\` - Cómo imprimir desde cualquier dispositivo y cualquier año
- \`README.md\` - Este archivo

### 🚀 Inicio Rápido:
1. **Computadora**: Haz doble clic en \`index.html\`
2. **Móvil**: Abre \`index.html\` desde tu navegador móvil
3. **Selecciona tu año**: Usa el selector superior para cualquier año
4. **¡Comienza tu viaje perpetuo de autoconocimiento!**
5. Lee \`INSTRUCCIONES.md\` para guía completa

### ⏰ NUEVA FUNCIÓN: Uso Perpetuo

#### ✨ Características Temporales Revolucionarias:
- ✅ **Selector de año completo**: Navega entre cualquier año (pasado, presente, futuro)
- ✅ **Datos organizados por año**: Cada año mantiene información completamente independiente
- ✅ **Navegación temporal intuitiva**: Botones rápidos ← → y selector visual
- ✅ **Sin limitaciones temporales**: Usa durante toda tu vida sin restricciones
- ✅ **Perspectiva histórica**: Revisa años anteriores para ver tu evolución
- ✅ **Planificación futura**: Usa años futuros para establecer intenciones

#### 🎯 Experiencia Multi-Anual:
- **Una compra, uso de por vida**: Inversión única para seguimiento ilimitado
- **Evolución documentada**: Observa tu crecimiento a través de los años
- **Patrones a largo plazo**: Identifica tendencias que se repiten anualmente
- **Archivo personal**: Crea un registro histórico de tu viaje de autoconocimiento
- **Flexibilidad total**: Comienza en cualquier año, salta entre años libremente

### 📱 Optimización Móvil Perpetua

#### ✨ Características Móviles Multi-Anuales:
- ✅ **Selector de año móvil**: Optimizado para pantallas táctiles
- ✅ **Navegación deslizable**: Pestañas que se deslizan horizontalmente
- ✅ **Diseño adaptativo temporal**: Optimizado para cualquier año en cualquier pantalla
- ✅ **Elementos táctiles por año**: Botones de tamaño adecuado para navegación temporal
- ✅ **Contexto temporal claro**: Cada página muestra claramente el año correspondiente
- ✅ **Funciona sin internet**: Completamente offline para cualquier año
- ✅ **Agregar a pantalla principal**: Usa como app nativa perpetua

### 🎨 Características Principales Perpetuas:
- ✅ Seguimiento ilimitado por años
- ✅ Cálculo automático de fases del ciclo (cualquier año)
- ✅ Seguimiento diario de energía y estado de ánimo histórico
- ✅ Reflexiones semanales guiadas por año
- ✅ Guía completa de fases menstruales (atemporal)
- ✅ Seguimiento de hábitos por fase y por año
- ✅ Tableros de inspiración creativos por año
- ✅ **Funciona en computadora Y móvil durante toda la vida**
- ✅ Completamente privado con organización por años
- ✅ Listo para imprimir cualquier año desde cualquier dispositivo

### 💰 Valor Excepcional:

#### 🌟 Una Inversión, Beneficio de Por Vida:
- **Versus productos anuales**: Ahorro significativo comparado con comprar cada año
- **Versus apps de subscripción**: Sin pagos recurrentes, posesión total
- **Versus cuadernos físicos**: Funcionalidad digital + opción de impresión
- **Valor incremental**: Se vuelve más valioso cada año que lo uses

#### 📈 Beneficios Acumulativos:
- **Año 1**: Herramienta de autoconocimiento
- **Año 2+**: Comparación y evolución personal  
- **Año 5+**: Patrones de vida identificables
- **Año 10+**: Archivo histórico invaluable
- **Toda la vida**: Legado personal de sabiduría femenina

### 💚 Soporte Técnico Perpetuo:

#### Navegadores Recomendados (Actuales y Futuros):
- **Computadora**: Chrome, Firefox, Safari, Edge
- **iPhone/iPad**: Safari o Chrome
- **Android**: Chrome o Firefox
- **Compatibilidad futura**: Diseñado para funcionar con navegadores futuros

#### Solución de Problemas Multi-Anuales:
1. **Navegación temporal**: Consulta \`GUIA-MOVIL.md\` para problemas específicos de años
2. **Datos por año**: Revisa \`INSTRUCCIONES.md\` para organización de información
3. **Impresión multi-anual**: Verifica \`GUIA-IMPRESION.md\` para imprimir años específicos
4. **Migración futura**: El formato HTML asegura compatibilidad a largo plazo

#### Contacto y Filosofía:
Este producto está diseñado para acompañarte durante décadas. La documentación incluye todo lo necesario para una experiencia exitosa multi-anual, considerando tanto las necesidades actuales como futuras.

---

**¡Disfruta conectando con tu ritmo natural durante toda tu vida!** 🌸📱⏰

**Inversión de Por Vida**: Un solo producto que crece contigo, documenta tu evolución, y se convierte en un archivo personal invaluable.

**Visión a Largo Plazo**: Imagina tener 10, 20, o 30 años de tu viaje documentado, observando cómo has crecido y evolucionado.

**Versión**: ${version} - Diario Perpetuo para Toda la Vida
**Fecha**: ${new Date().toLocaleDateString('es-ES')}
**Compatibilidad**: Computadora, Tablet, Smartphone
**Temporal**: Sin límites - Cualquier año, durante toda tu vida
**Filosofía**: Una herramienta que evoluciona contigo y documenta tu sabiduría femenina a través del tiempo
`;

    await fs.writeFile(path.join(productDir, 'README.md'), productReadme);
    
    // Create version info file for perpetual use
    const versionInfo = {
      product: 'Mi Diario del Ciclo Perpetuo',
      version: version,
      buildDate: new Date().toISOString(),
      description: 'Diario digital perpetuo para el seguimiento del ciclo menstrual - Optimizado para uso de por vida',
      features: [
        'Selector de año completo (cualquier año)',
        'Navegación temporal intuitiva',
        'Datos organizados por año independiente',
        'Diseño responsive multi-anual',
        'Uso perpetuo sin limitaciones temporales',
        'Soporte multiplataforma móvil optimizado',
        'Impresión multi-anual desde cualquier dispositivo'
      ],
      temporalRange: {
        pastYears: 10,
        futureYears: 10,
        unlimited: true,
        dataOrganization: 'by-year-independent'
      },
      compatibility: {
        desktop: ['Windows', 'macOS', 'Linux'],
        mobile: ['iOS 12+', 'Android 8+'],
        browsers: ['Chrome', 'Firefox', 'Safari', 'Edge'],
        temporal: 'Unlimited - Any year, past, present, or future'
      },
      valueProposition: {
        purchaseModel: 'One-time purchase for lifetime use',
        comparison: 'Replaces annual journals and subscription apps',
        growthValue: 'Becomes more valuable with each year of use',
        archive: 'Creates invaluable personal historical record'
      },
      author: 'Tu Nombre',
      license: 'Uso personal y comercial permitido para toda la vida. No redistribuir.',
      supportEmail: 'tu-email@ejemplo.com',
      website: 'tu-sitio-web.com'
    };
    
    await fs.writeFile(
      path.join(productDir, 'version.json'), 
      JSON.stringify(versionInfo, null, 2)
    );
    
    // Update HTML with perpetual-optimized meta tags
    const htmlPath = path.join(productDir, 'index.html');
    if (await fs.pathExists(htmlPath)) {
      let htmlContent = await fs.readFile(htmlPath, 'utf8');
      
      // Add comprehensive meta tags for perpetual use
      const metaTags = `
    <meta name="product" content="Mi Diario del Ciclo Perpetuo">
    <meta name="version" content="${version}">
    <meta name="description" content="Diario digital perpetuo para el seguimiento del ciclo menstrual - Para toda la vida">
    <meta name="author" content="Tu Nombre">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="Mi Diario del Ciclo">
    <meta name="theme-color" content="#f4d1d1">
    <meta name="temporal-range" content="unlimited">
    <meta name="data-organization" content="by-year">
    <meta name="usage-model" content="perpetual">
    <meta name="msapplication-navbutton-color" content="#f4d1d1">
    <meta name="apple-mobile-web-app-status-bar-style" content="#f4d1d1">
      `;
      
      htmlContent = htmlContent.replace('<head>', `<head>${metaTags}`);
      
      // Add perpetual product watermark
      const watermark = `
    <div style="position: fixed; bottom: 8px; right: 8px; font-size: 9px; color: rgba(0,0,0,0.3); z-index: 9999; pointer-events: none;">
      Mi Diario del Ciclo Perpetuo v${version} ⏰
    </div>
      `;
      
      htmlContent = htmlContent.replace('</body>', `${watermark}</body>`);
      
      await fs.writeFile(htmlPath, htmlContent);
    }
    
    console.log('✅ Producto perpetuo empaquetado exitosamente!');
    console.log(\`📦 Ubicación: \${productDir}\`);
    console.log('📝 Archivos incluidos:');
    console.log('   - index.html (diario perpetuo optimizado)');
    console.log('   - assets/ (estilos y funcionalidad multi-anual)');
    console.log('   - INSTRUCCIONES.md (guía completa perpetua)');
    console.log('   - GUIA-MOVIL.md (guía móvil multi-anual)');
    console.log('   - GUIA-IMPRESION.md (impresión multi-anual)');
    console.log('   - README.md (información del producto perpetuo)');
    console.log('   - version.json (información de versión y compatibilidad temporal)');
    console.log('');
    console.log('⏰ NUEVAS Características Perpetuas:');
    console.log('   ✅ Selector de año completo (rango ilimitado)');
    console.log('   ✅ Navegación temporal intuitiva (← → Hoy)');
    console.log('   ✅ Datos organizados independientemente por año');
    console.log('   ✅ Interfaz contextual (año siempre visible)');
    console.log('   ✅ Valor acumulativo (más valioso cada año)');
    console.log('   ✅ Archivo histórico personal de por vida');
    console.log('');
    console.log('💰 Propuesta de Valor Mejorada:');
    console.log('   💎 Una compra → Uso de por vida');
    console.log('   📈 Valor incremental con cada año');
    console.log('   🏆 Supera a productos anuales y subscripciones');
    console.log('   📚 Crea archivo histórico invaluable');
    console.log('');
    console.log('🚀 Próximos pasos:');
    console.log('1. Prueba la funcionalidad multi-anual:');
    console.log('   - Abre: product/' + productName + '/index.html');
    console.log('   - Prueba el selector de año');
    console.log('   - Verifica que los datos se separen por año');
    console.log('   - Confirma funcionalidad móvil');
    console.log('2. Actualiza tu marketing:');
    console.log('   - Enfatiza "Una compra, uso de por vida"');
    console.log('   - Destaca el valor acumulativo');
    console.log('   - Menciona la creación de archivo histórico personal');
    console.log('3. Considera precio premium:');
    console.log('   - Valor de por vida justifica precio más alto');
    console.log('   - Compara con costos anuales acumulados');
    console.log('   - Destaca ROI a largo plazo');
    console.log('4. Crea ZIP y ¡lanza la versión perpetua!');
    
  } catch (error) {
    console.error('❌ Error empaquetando producto perpetuo:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  packageProduct();
}

export default packageProduct;