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
      return `Factura ${factura.id}\nEmisor: ${factura.emisor}\nReceptor: ${factura.receptor}\nCantidad: ${factura.cantidad}\nFecha de Vencimiento: ${factura.fechaVencimiento.toLocaleDateString()}\nEstado: ${factura.estaPagada ? 'Pagada' : 'Pendiente de pago'}`;
    }
}