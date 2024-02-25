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
      return `
        <h1>Factura ${factura.id}</h1>
        <p>Emisor: ${factura.emisor}</p>
        <p>Receptor: ${factura.receptor}</p>
        <p>Cantidad: ${factura.cantidad}</p>
        <p>Fecha de Vencimiento: ${factura.fechaVencimiento.toLocaleDateString()}</p>
        <p>Estado: ${factura.estaPagada ? 'Pagada' : 'Pendiente de pago'}</p>`;
    }
}
