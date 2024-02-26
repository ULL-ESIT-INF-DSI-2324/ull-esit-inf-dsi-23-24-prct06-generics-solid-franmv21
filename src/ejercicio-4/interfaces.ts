/**
 * Interfaz para dispositivos imprimibles.
 */
export interface Printable {
    /**
     * Ejecuta la operación de impresión.
     */
    print(): void;
}
  
  /**
   * Interfaz para dispositivos escaneables.
   */
export interface Scannable {
    /**
     * Ejecuta la operación de escaneo.
     */
    scan(): void;
}