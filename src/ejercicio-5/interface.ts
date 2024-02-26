/**
 * Interfaz para el servicio de notificación.
 */
export interface INotificationService {
    /**
     * Envía una notificación con el mensaje proporcionado.
     * @param message El mensaje de la notificación a enviar.
     */
    notify(message: string): void;
}