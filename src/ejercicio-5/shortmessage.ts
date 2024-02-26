import { INotificationService } from './interface';

/**
 * Servicio de notificación por mensaje corto (SMS).
 * Se encarga de enviar notificaciones por SMS.
 */
export class ShortMessageService implements INotificationService {
    /**
     * Envía una notificación por SMS.
     * @param message El mensaje de la notificación a enviar por SMS.
     */
    notify(message: string): void {
      console.log(`Sending notification by SMS: ${message}`);
    }
}