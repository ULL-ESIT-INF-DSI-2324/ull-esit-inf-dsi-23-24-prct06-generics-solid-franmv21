import { Printer } from './Printer';
import { Scanner } from './Scanner';
import { PrinterScanner } from './ScannerPrinter';

// Ejemplo de código cliente (no forma parte de la documentación de Typedoc)
const printer = new Printer();
printer.print(); 

const scanner = new Scanner();
scanner.scan(); 

const composedPrinterScanner = new PrinterScanner(new Printer(), new Scanner());
composedPrinterScanner.print(); 
composedPrinterScanner.scan(); 