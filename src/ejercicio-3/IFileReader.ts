/**
 * Interfaz para operaciones de lectura de archivos.
 */
export interface IFileReader {
    /**
     * Lee el contenido de un archivo y lo devuelve como una cadena de texto.
     * @returns El contenido del archivo como una cadena de texto.
     */
    readFile(): string;
}