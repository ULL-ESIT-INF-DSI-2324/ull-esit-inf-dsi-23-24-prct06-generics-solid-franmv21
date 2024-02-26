import { Factura } from './IFactura';
import { ExportadorFactura } from './exportadorFactura';

/**
 * Exportador de facturas en formato HTML.
 */
export class ExportadorHTML implements ExportadorFactura {  
    /**
     * Exporta una factura a formato HTML.
     * @param factura La factura a exportar.
     * @returns La factura en formato HTML.
     */
    public exportar(factura: Factura): string {
      return `<h1>Factura ${factura.id}</h1>\n<p>Emisor: ${factura.emisor}</p>\n<p>Receptor: ${factura.receptor}</p>\n<p>Cantidad: ${factura.cantidad}</p>\n<p>Fecha de Vencimiento: ${factura.fechaVencimiento.toLocaleDateString()}</p>\n<p>Estado: ${factura.estaPagada ? 'Pagada' : 'Pendiente de pago'}</p>`;
    }
}
