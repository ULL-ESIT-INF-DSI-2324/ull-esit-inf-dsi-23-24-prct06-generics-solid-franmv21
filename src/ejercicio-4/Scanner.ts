import { Scannable } from './interfaces';

/**
 * Clase Scanner que implementa la interfaz Scannable.
 * Representa un dispositivo escáner capaz de escanear documentos.
 */
export class Scanner implements Scannable {
    /**
     * Escanea un documento.
     * Muestra un mensaje en la consola indicando que se está realizando una operación de escaneo.
     */
    scan(): void {
      console.log('Scanning...');
    }
}