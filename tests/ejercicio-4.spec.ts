import 'mocha';
import {expect} from 'chai';
import { Printer } from '../src/ejercicio-4/Printer';
import { Scanner } from '../src/ejercicio-4/Scanner';
import { PrinterScanner } from '../src/ejercicio-4/ScannerPrinter';

describe('Ejercicio 4 - Pruebas', () => {
  it('Printer', () => {
    const printer = new Printer();
    expect(printer.print()).to.equal(undefined);
  });
  it('Scanner', () => {
    const scanner = new Scanner();
    expect(scanner.scan()).to.equal(undefined);
  });
  it('PrinterScanner', () => {
    const printer = new Printer();
    const scanner = new Scanner();
    const composedPrinterScanner = new PrinterScanner(printer, scanner);
    expect(composedPrinterScanner.print()).to.equal(undefined);
  });
  it('PrinterScanner', () => {
    const printer = new Printer();
    const scanner = new Scanner();
    const composedPrinterScanner = new PrinterScanner(printer, scanner);
    expect(composedPrinterScanner.scan()).to.equal(undefined);
  });

});