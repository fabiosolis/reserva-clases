import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage {

  constructor(private router: Router) { }

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      const username = loginForm.value.username;
      localStorage.setItem('username', username);
      this.router.navigateByUrl('/home');
    }
  }
}