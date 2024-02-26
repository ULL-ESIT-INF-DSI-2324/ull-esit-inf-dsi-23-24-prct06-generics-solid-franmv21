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
     * Comprueba si la factura está pagada.
     * @returns true si la factura está pagada, false en caso contrario.
     */

    public getPagada(): boolean {
        return this.estaPagada;
    }
    /**
     * Marca la factura como pagada.
     */
    public marcarPagada() {
        this.estaPagada = true;
    }
}
