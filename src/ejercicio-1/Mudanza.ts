import { Enser } from "./Enser";
import { Caja } from "./Caja";

/**
 * Clase que representa la gestión de una mudanza, permitiendo manejar múltiples cajas de enseres.
 */
export class Mudanza<T extends Enser>{
    /** Colección de cajas utilizadas en la mudanza. */
    private cajas: Caja<T>[] = [];

    /**
     * Crea una instancia de gestión de mudanza.
     */
    constructor() {
        this.cajas = [];
    }

    /**
     * Agrega una caja a la colección de cajas de la mudanza.
     * @param caja La caja a agregar.
     */
    public agregarCaja(caja: Caja<T>): void {
        this.cajas.push(caja);
    }

    /**
     * Elimina una caja de la colección basado en su índice.
     * @param indice El índice de la caja a eliminar.
     */
    public eliminarCaja(indice: number): void {
        if (indice < 0 || indice >= this.cajas.length) {
            throw new Error("Índice de caja fuera de rango.");
        }
        this.cajas.splice(indice, 1);
    }

    /**
     * Obtiene la cantidad de cajas en la mudanza.
     * @returns El número de cajas en la mudanza.
     */
    public cantidadCajas(): number {
        return this.cajas.length;
    }

    /**
     * Lista todas las cajas de la mudanza, incluyendo sus enseres.
     * @returns Una cadena con la lista de cajas y sus enseres.
     */
    public listarCajas(): string {
        if (this.cajas.length === 0) {
            return "No hay cajas.";
        }
    
        let resultado = "";
        this.cajas.forEach((caja, i) => {
            // Asumiendo que caja.listarEnseres() ahora devuelve un string.
            resultado += `[Caja ${i + 1}]\n${caja.listarEnseres()}\n`;
        });
    
        return resultado.trim(); // Elimina espacios en blanco extra al final
    }

    /**
     * Calcula el peso total de la mudanza sumando el peso de todas las cajas.
     * @returns El peso total de la mudanza.
     */
    public pesoTotalMudanza(): number {
        return this.cajas.reduce((total, caja) => total + caja.pesoTotal(), 0);
    }
}