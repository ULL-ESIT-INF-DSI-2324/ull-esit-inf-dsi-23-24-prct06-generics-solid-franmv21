import * as fs from 'fs';

import { IFileWriter } from './IFileWriter';

/**
 * Implementación concreta de IFileWriter para escribir archivos en el sistema de archivos.
 */
export class FileWriter implements IFileWriter {
    /**
     * Inicializa una nueva instancia de la clase FileWriter.
     * @param filePath La ruta del archivo en el que escribir.
     */
    constructor(private filePath: string) {}
  
    /**
     * Escribe los datos proporcionados en el archivo especificado por filePath.
     * @param data Los datos a escribir en el archivo.
     */
    writeFile(data: string): void {
      try {
        fs.writeFileSync(this.filePath, data, 'utf-8');
        console.log('Archivo escrito exitosamente.');
      } catch (error) {
        console.error('Error al escribir en el archivo:', error.message);
      }
    }
}