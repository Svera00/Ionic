import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  username: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    if (history.state && history.state.username) {
      this.username = history.state.username;
    } else {
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

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
