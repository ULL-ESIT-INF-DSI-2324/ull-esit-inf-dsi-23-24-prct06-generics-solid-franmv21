import { INotificationService } from './interface';

/**
* Clase Notificador.
* Utiliza un servicio de notificación para enviar notificaciones.
*/
export class Notifier {
    /**
     * Crea una instancia de Notifier con el servicio de notificación especificado.
     * @param notificationService El servicio de notificación a utilizar para enviar notificaciones.
     */
    constructor(private notificationService: INotificationService) {
    }

    /**
    * Envía una notificación utilizando el servicio de notificación configurado.
    * @param message El mensaje de la notificación a enviar.
    */
    sendNotification(message: string): void {
      this.notificationService.notify(message);
   }
}