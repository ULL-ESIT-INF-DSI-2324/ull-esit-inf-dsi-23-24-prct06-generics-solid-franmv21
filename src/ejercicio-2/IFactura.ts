/**
 * Representa la interfaz de una Factura.
 */
export interface Factura {
    id: string;
    emisor: string;
    receptor: string;
    cantidad: number;
    fechaVencimiento: Date;
    estaPagada: boolean;
}