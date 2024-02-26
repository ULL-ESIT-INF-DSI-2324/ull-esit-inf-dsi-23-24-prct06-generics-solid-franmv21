import * as fs from 'fs';

import { IFileReader } from './IFileReader';

/**
 * Implementación concreta de IFileReader para leer archivos del sistema de archivos.
 */
export class FileReader implements IFileReader {
    /**
     * Inicializa una nueva instancia de la clase FileReader.
     * @param filePath La ruta del archivo a leer.
     */
    constructor(private filePath: string) {}
  
    /**
     * Lee el contenido del archivo especificado por filePath.
     * @returns El contenido del archivo como una cadena de texto.
     */
    readFile(): string {
      try {
        return fs.readFileSync(this.filePath, 'utf-8');
      } catch (error) {
        console.error('Error al leer el archivo:', error.message);
        return '';
      }
    }
}