import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController // Para mostrar alertas en caso de error
  ) {}

  // Método para manejar el login
  async login() {
    if (this.username && this.password) {
      // Simulación de autenticación
      if (this.username === 'admin' && this.password === '1234') {
        // Autenticación exitosa
        this.router.navigate(['/home'], { state: { username: this.username } });
      } else {
        // Mostrar alerta de error
        await this.showAlert('Error', 'Usuario o contraseña incorrectos');
      }
    } else {
      // Mostrar alerta si faltan campos
      await this.showAlert('Error', 'Por favor, complete todos los campos');
    }
  }

  // Método para manejar el restablecimiento de contraseña
  resetPassword() {
    this.router.navigate(['/reset-password']);
  }

  // Método para mostrar una alerta de error
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
