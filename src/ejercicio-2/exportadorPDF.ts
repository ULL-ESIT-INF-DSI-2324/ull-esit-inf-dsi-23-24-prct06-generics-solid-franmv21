import { Factura } from './IFactura';
import { ExportadorFactura } from './exportadorFactura';

/**
 * Exportador de facturas en formato PDF.
 */
export class ExportadorPDF implements ExportadorFactura {
    /**
     * Exporta una factura a formato PDF.
     * @param factura La factura a exportar.
     * @returns La representación de la factura como si fuera un PDF.
     */
    public exportar(factura: Factura): string {
      return `
        Factura ${factura.id}
        Emisor: ${factura.emisor}
        Receptor: ${factura.receptor}
        Cantidad: ${factura.cantidad}
        Fecha de Vencimiento: ${factura.fechaVencimiento.toLocaleDateString()}
        Estado: ${factura.estaPagada ? 'Pagada' : 'Pendiente de pago'}`;
    }
}