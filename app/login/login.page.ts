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
    private alertController: AlertController 
  ) {}

  async login() {
    if (this.username && this.password) {
      if (this.username === 'admin' && this.password === '1234') {
        // Autenticación exitosa
        this.router.navigate(['/home'], { state: { username: this.username } });
      } else {
        await this.showAlert('Error', 'Usuario o contraseña incorrectos');
      }
    } else {
      await this.showAlert('Error', 'Por favor, complete todos los campos');
    }
  }

  resetPassword() {
    this.router.navigate(['/reset-password']);
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
