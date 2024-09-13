import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  username: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Obtenemos el nombre de usuario desde el estado del enrutador
    if (history.state && history.state.username) {
      this.username = history.state.username;
    } else {
      // Si no se obtiene el username, redirigir al login
      this.router.navigate(['/login']);
    }
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter - Se ejecuta justo antes de que se muestre la página');
  }
  
  ionViewDidEnter() {
    console.log('ionViewDidEnter - Se ejecuta cuando la página ya está visible');
  }
  
  ionViewWillLeave() {
    console.log('ionViewWillLeave - Se ejecuta justo antes de abandonar la página');
  }
  
  ionViewDidLeave() {
    console.log('ionViewDidLeave - Se ejecuta después de que se abandona la página');
  }
  
}
