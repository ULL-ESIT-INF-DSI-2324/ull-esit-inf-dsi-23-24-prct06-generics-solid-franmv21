import { INotificationService } from './interface';

/**
 * Servicio de notificación por correo electrónico.
 * Se encarga de enviar notificaciones por email.
 */
export class EmailService implements INotificationService {
    /**
     * Envía una notificación por correo electrónico.
     * @param message El mensaje de la notificación a enviar por correo electrónico.
     */
    notify(message: string): void {
      console.log(`Sending notification by email: ${message}`);
    }
}