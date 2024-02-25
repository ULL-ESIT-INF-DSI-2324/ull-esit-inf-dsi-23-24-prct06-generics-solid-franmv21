import { Factura } from './IFactura';

/**
 * Define la interfaz para los exportadores de facturas.
 */
export interface ExportadorFactura {
    /**
     * Exporta una factura a un formato específico.
     * @param factura La factura a exportar.
     * @returns La factura en formato de cadena.
     */
    exportar(factura: Factura): string;
}