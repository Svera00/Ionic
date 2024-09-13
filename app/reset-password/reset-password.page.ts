import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {

  username: string= '';

  constructor(private router: Router) {}

  recoverPassword() {
    this.router.navigate(['/login']);
  }
}
