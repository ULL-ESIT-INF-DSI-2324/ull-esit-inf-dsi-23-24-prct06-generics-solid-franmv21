import { Factura } from "./IFactura";
import { ExportadorFactura } from "./exportadorFactura";

/**
 * Interfaz para la gestión de facturas.
 */
export interface IGestorFacturas {
    /**
     * Agrega una factura al sistema.
     * @param factura La factura a agregar.
     */
    agregarFactura(factura: Factura): void;

    /**
     * Obtiene una factura por su identificador.
     * @param id El identificador de la factura.
     * @returns La factura encontrada o undefined si no se encuentra.
     */
    obtenerFactura(id: string): Factura | undefined;

    /**
     * Exporta una factura a un formato específico utilizando un exportador dado.
     * @param id El identificador de la factura a exportar.
     * @param exportador El exportador a utilizar.
     * @returns La factura exportada en formato de cadena o undefined si la factura no se encuentra.
     */
    exportarFactura(id: string, exportador: ExportadorFactura): string | undefined;
}
