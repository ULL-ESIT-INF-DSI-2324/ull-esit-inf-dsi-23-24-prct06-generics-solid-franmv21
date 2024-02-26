 import 'mocha';
import {expect} from 'chai';
import {FacturaSimple} from '../src/ejercicio-2/FacturaSimple';
import {GestorFacturas} from '../src/ejercicio-2/GestorFactura';
import {ExportadorHTML} from '../src/ejercicio-2/exportadorHTML';
import {ExportadorPDF} from '../src/ejercicio-2/exportadorPDF';

describe('Ejercicio 2 - FacturaSimple', () => {
  it('Se puede crear una factura simple', () => {
    const factura = new FacturaSimple('002', 'Worten', 'Pepe Benavente', 1500, new Date(2024, 4, 20), false)
    expect(factura).to.be.an.instanceOf(FacturaSimple);
  });

  it('Comprobar si una factura está pagada', () => {
    const factura = new FacturaSimple('002', 'Worten', 'Pepe Benavente', 1500, new Date(2024, 4, 20), false);
    expect(factura.getPagada()).to.be.false;
  });

  it('Marcar factura como pagada', () => {
    const factura = new FacturaSimple('002', 'Worten', 'Pepe Benavente', 1500, new Date(2024, 4, 20), false);
    factura.marcarPagada();
    expect(factura.estaPagada).to.be.true;
  });

  it('Se puede exportar a HTML', () => {
    const gestor = new GestorFacturas();
    const factura = new FacturaSimple('002', 'Worten', 'Pepe Benavente', 1500, new Date(2024, 4, 20), false);
    gestor.agregarFactura(factura);
    const facturaExportadaHtml = gestor.exportarFactura('002', new ExportadorHTML());
    expect(facturaExportadaHtml).to.be.equal('<h1>Factura 002</h1>\n<p>Emisor: Worten</p>\n<p>Receptor: Pepe Benavente</p>\n<p>Cantidad: 1500</p>\n<p>Fecha de Vencimiento: 20/5/2024</p>\n<p>Estado: Pendiente de pago</p>');
    
  });

  it('Se puede exportar a PDF', () => {
    const gestor = new GestorFacturas();
    const factura = new FacturaSimple('002', 'Worten', 'Pepe Benavente', 1500, new Date(2024, 4, 20), false);
    gestor.agregarFactura(factura);
    const facturaExportadaTexto = gestor.exportarFactura('002', new ExportadorPDF());
    expect(facturaExportadaTexto).to.be.equal('Factura 002\nEmisor: Worten\nReceptor: Pepe Benavente\nCantidad: 1500\nFecha de Vencimiento: 20/5/2024\nEstado: Pendiente de pago');
  });

  it('Se puede obtener una factura por su ID', () => {
    const gestor = new GestorFacturas();
    const factura = new FacturaSimple('002', 'Worten', 'Pepe Benavente', 1500, new Date(2024, 4, 20), false);
    gestor.agregarFactura(factura);
    const facturaObtenida = gestor.obtenerFactura('002');
    expect(facturaObtenida).to.be.equal(factura);
  });

  it('No se puede obtener una factura por un ID que no existe', () => {
    const gestor = new GestorFacturas();
    const factura = new FacturaSimple('002', 'Worten', 'Pepe Benavente', 1500, new Date(2024, 4, 20), false);
    gestor.agregarFactura(factura);
    const facturaObtenida = gestor.obtenerFactura('003');
    expect(facturaObtenida).to.be.undefined;
  });

  it('No se puede exportar una factura que no existe', () => {
    const gestor = new GestorFacturas();
    const factura = new FacturaSimple('002', 'Worten', 'Pepe Benavente', 1500, new Date(2024, 4, 20), false);
    gestor.agregarFactura(factura);
    const facturaExportadaTexto = gestor.exportarFactura('003', new ExportadorPDF());
    expect(facturaExportadaTexto).to.be.undefined;
  });
});

