/**
 * Interfaz que representa un enser que puede ser almacenado en una caja.
 * Define las propiedades básicas que todos los enseres deben tener.
 */
export interface Enser {
    /** Nombre del enser. */
    nombre: string;
    /** Peso del enser en kilogramos. */
    pesokg: number;
    /** Indica si el enser es frágil. */
    fragil: boolean;
}
