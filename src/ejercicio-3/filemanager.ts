import { IFileReader } from "./IFileReader";
import { IFileWriter } from "./IFileWriter";

/**
 * Clase fachada para gestionar operaciones de archivos usando FileReader y FileWriter.
 */
export class FileManager {
    /**
     * Inicializa una nueva instancia de la clase FileManager.
     * @param reader Una instancia de IFileReader para leer archivos.
     * @param writer Una instancia de IFileWriter para escribir archivos.
     */
    constructor(private reader: IFileReader, private writer: IFileWriter) {}
  
    /**
     * Lee el contenido del archivo.
     * @returns El contenido del archivo como una cadena de texto.
     */
    read(): string {
      return this.reader.readFile();
    }
  
    /**
     * Escribe los datos proporcionados en el archivo.
     * @param data Los datos a escribir en el archivo.
     */
    write(data: string): void {
      this.writer.writeFile(data);
    }
  }