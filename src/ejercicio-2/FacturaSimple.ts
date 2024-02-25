import { Factura } from './IFactura';

/**
 * Implementación concreta de la interfaz Factura.
 */
export class FacturaSimple implements Factura {
    /**
     * Construye una instancia de FacturaSimple.
     * @param id Identificador único de la factura.
     * @param emisor Nombre o identificación del emisor de la factura.
     * @param receptor Nombre o identificación del receptor de la factura.
     * @param cantidad Cantidad total de la factura.
     * @param fechaVencimiento Fecha de vencimiento de la factura.
     * @param estaPagada Indica si la factura está pagada o no.
     */
    constructor(public id: string, public emisor: string, public receptor: string, public cantidad: number,
                public fechaVencimiento: Date, public estaPagada: boolean = false) {}

    /**
     * Marca la factura como pagada.
     */
    public marcarPagada() {
        this.estaPagada = true;
    }

    /**
     * Marca la factura como no pagada.
     */
    public marcarNoPagada() {
        this.estaPagada = false;
    }
}
