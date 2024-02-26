import { Printable, Scannable } from './interfaces';
import { Printer } from './Printer';
import { Scanner } from './Scanner';

/**
 * Clase PrinterScanner que representa un dispositivo capaz de imprimir y escanear documentos.
 */
export class PrinterScanner implements Printable, Scannable {
    private printer: Printer;
    private scanner: Scanner;
  
    /**
     * Construye un nuevo PrinterScanner con una impresora y un escáner especificados.
     * @param printer - El componente de impresora del dispositivo multifunción.
     * @param scanner - El componente de escáner del dispositivo multifunción.
     */
    constructor(printer: Printer, scanner: Scanner) {
      this.printer = printer;
      this.scanner = scanner;
    }
  
    /**
     * Imprime un documento.
     */
    print(): void {
      this.printer.print();
    }
  
    /**
     * Escanea un documento.
     */
    scan(): void {
      this.scanner.scan();
    }
  }