import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productName = 'Mi-Diario-del-Ciclo-2025';
const version = '1.0.0';

async function createDistributionZip() {
  try {
    console.log('📦 Creando archivo ZIP para distribución...');
    
    const productDir = path.join(__dirname, '..', 'product', productName);
    const outputDir = path.join(__dirname, '..', 'distribution');
    
    // Ensure output directory exists
    await fs.ensureDir(outputDir);
    
    // Check if product directory exists
    if (!await fs.pathExists(productDir)) {
      throw new Error('❌ Directorio del producto no encontrado. Ejecuta "npm run build:product" primero.');
    }
    
    const zipName = `${productName}-v${version}.zip`;
    const zipPath = path.join(outputDir, zipName);
    
    // Create ZIP file
    const command = process.platform === 'win32' 
      ? `powershell Compress-Archive -Path "${productDir}\\*" -DestinationPath "${zipPath}" -Force`
      : `cd "${path.dirname(productDir)}" && zip -r "${zipPath}" "${productName}"`;
    
    console.log('🔄 Comprimiendo archivos...');
    execSync(command, { stdio: 'inherit' });
    
    // Get file size
    const stats = await fs.stat(zipPath);
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    console.log('✅ ZIP creado exitosamente!');
    console.log(\`📁 Ubicación: \${zipPath}\`);
    console.log(\`📊 Tamaño: \${fileSizeInMB} MB\`);
    console.log('');
    console.log('🎯 Este archivo está listo para:');
    console.log('   - Subir a Etsy como descarga digital');
    console.log('   - Vender en Gumroad');
    console.log('   - Distribuir en tu sitio web');
    console.log('   - Enviar a Creative Market');
    console.log('');
    console.log('💰 Precio sugerido: €19.99 - €29.99');
    
    return zipPath;
    
  } catch (error) {
    console.error('❌ Error creando ZIP:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  createDistributionZip();
}

export default createDistributionZip;