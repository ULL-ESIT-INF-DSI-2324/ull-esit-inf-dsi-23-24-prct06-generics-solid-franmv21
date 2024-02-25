import { FacturaSimple } from './FacturaSimple';
import { GestorFacturas } from './GestorFactura';
import { ExportadorHTML } from './exportadorHTML';
import { ExportadorPDF } from './exportadorPDF';


const gestor = new GestorFacturas();
const facturaNueva = new FacturaSimple('002', 'Worten', 'Pepe Benavente', 1500, new Date(2024, 4, 20), false);

gestor.agregarFactura(facturaNueva);

// Exportar factura en HTML
const facturaExportadaHtml = gestor.exportarFactura('002', new ExportadorHTML());
console.log(facturaExportadaHtml);

// Exportar factura en Texto Plano
const facturaExportadaTexto = gestor.exportarFactura('002', new ExportadorPDF());
console.log(facturaExportadaTexto);