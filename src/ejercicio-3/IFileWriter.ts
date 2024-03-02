/**
 * Interfaz para operaciones de escritura de archivos.
 */
export interface IFileWriter {
    /**
     * Escribe los datos proporcionados en un archivo.
     * @param data Los datos a escribir en el archivo.
     */
    writeFile(data: string): void;
}