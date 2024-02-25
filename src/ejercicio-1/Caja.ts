import { Enser } from "./Enser";

/**
 * Clase que representa una caja para almacenar enseres durante una mudanza.
 * Permite agregar, eliminar, buscar y listar enseres, además de calcular el peso total.
 */
export class Caja<T extends Enser> {
    /** Array para los enseres almacenados en la caja. */
    private contenidos: T[] = [];

    /**
     * Crea una instancia de una caja.
     * @param id Identificador único para la caja.
     */
    constructor(public id: number) {}

    /**
     * Agrega un enser a la caja.
     * @param enser El enser a agregar.
     */
    public agregarEnser(enser: T): void {
        this.contenidos.push(enser);
    }

    /**
     * Elimina un enser de la caja basado en su nombre.
     * @param nombre El nombre del enser a eliminar.
     */
    public eliminarEnser(nombre: string): void {
        this.contenidos = this.contenidos.filter(enser => enser.nombre !== nombre);
    }

    /**
     * Obtiene la cantidad de enseres contenidos en la caja.
     * @returns El número de enseres en la caja.
     */
    public cantidadEnseres(): number {
        return this.contenidos.length;
    }

    /**
     * Lista todos los enseres contenidos en la caja.
     * @returns Una cadena con la lista de enseres.
     */
    public listarEnseres(): string {
        if (this.contenidos.length === 0) {
            return "La caja está vacía.";
        }
        
        let resultado = "Contenidos de la caja:\n";
        this.contenidos.forEach(enser => {
            resultado += `${enser.nombre}: ${enser.pesokg}kg, ${enser.fragil ? "frágil" : "no frágil"}\n`;
        });
        return resultado;
    }

    /**
     * Busca un enser en la caja basado en su nombre.
     * @param nombre El nombre del enser a buscar.
     * @returns El enser encontrado, o `undefined` si no se encuentra.
     */
    public buscarEnser(nombre: string): string {
        const enser = this.contenidos.find(enser => enser.nombre === nombre);
        if (enser) {
            return `Enser encontrado: ${enser.nombre}`;
        } else {
            return 'Enser no encontrado';
        }
    }    

    /**
     * Calcula el peso total de la caja sumando el peso de todos los enseres.
     * @returns El peso total de la caja en kilogramos.
     */
    public pesoTotal(): number {
        return this.contenidos.reduce((total, enser) => total + enser.pesokg, 0);
    }
}