import { Printable } from './interfaces';

/**
 * Clase Printer que implementa la interfaz Printable.
 * Representa un dispositivo impresora capaz de imprimir documentos.
 */
export class Printer implements Printable {
    /**
     * Imprime un documento.
     * Muestra un mensaje en la consola indicando que se está realizando una operación de impresión.
     */
    print(): void {
      console.log('Printing...');
    }
}