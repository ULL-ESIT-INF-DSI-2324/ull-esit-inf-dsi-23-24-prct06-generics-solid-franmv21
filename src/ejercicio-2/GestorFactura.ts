import { Factura } from './IFactura';
import { ExportadorFactura } from './exportadorFactura';
import { IGestorFacturas } from './IGestorFacturas';

/**
 * Gestiona el conjunto de facturas en el sistema.
 */
export class GestorFacturas implements IGestorFacturas{
    /**
     * Almacena las facturas en un array.
     */
    private facturas: Factura[];

    /**
     * Constructor que inicializa la lista de facturas.
     */
    constructor() {
      this.facturas = [];
    }
  
    /**
     * Agrega una nueva factura al sistema.
     * @param factura La instancia de `Factura` a ser agregada.
     */
    public agregarFactura(factura: Factura) {
      this.facturas.push(factura);
    }

    /**
     * Obtiene una factura por su identificador único (ID).
     * @param id El identificador de la factura a buscar.
     * @returns La instancia de `Factura` encontrada o `undefined` si no existe una factura con el ID proporcionado.
     */
    public obtenerFactura(id: string): Factura | undefined {
      return this.facturas.find(factura => factura.id === id);
    }
  
    /**
     * Exporta una factura específica utilizando un exportador dado.
     * @param id El identificador de la factura a exportar.
     * @param exportador Una instancia que implementa la interfaz `ExportadorFactura`, utilizada para realizar la exportación.
     * @returns La representación de la factura en el formato especificado por el exportador, o `undefined` si la factura no se encuentra.
     */
    public exportarFactura(id: string, exportador: ExportadorFactura): string | undefined {
      const factura = this.obtenerFactura(id);
      if (!factura) {
        console.log("Factura no encontrada.");
        return;
      }
      return exportador.exportar(factura);
    }
}
