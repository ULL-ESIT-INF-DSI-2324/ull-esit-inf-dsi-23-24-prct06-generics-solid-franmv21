import { EmailService } from './emailservice';
import { ShortMessageService } from './shortmessage';
import { Notifier } from './notifier'

// Ejemplo de código cliente
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!'); // Envía una notificación por correo electrónico

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!'); // Envía una notificación por SMS
