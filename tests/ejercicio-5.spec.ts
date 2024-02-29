import 'mocha';
import {expect} from 'chai';
import { Notifier } from '../src/ejercicio-5/notifier';
import { EmailService } from '../src/ejercicio-5/emailservice';
import { ShortMessageService } from '../src/ejercicio-5/shortmessage';

describe('Ejercicio 5 - Servicio de mensajería', () => {
  it('Envía una notificación por correo electrónico', () => {
    const emailNotifier = new Notifier(new EmailService());
    expect(emailNotifier.sendNotification('Hello World!')).to.be.undefined;
  });

  it('Envía una notificación por SMS', () => {
    const shortMessageNotifier = new Notifier(new ShortMessageService());
    expect(shortMessageNotifier.sendNotification('Hello World!')).to.be.undefined;
  });
});