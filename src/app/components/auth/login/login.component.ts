import { Component } from '@angular/core';
import { AuthServiceService } from '../../../core/services/auth-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  message: string = '';
  processConnexion: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  login() {
    this.processConnexion = true;
    this.authService.login(this.loginForm.value).subscribe((response) => {
      if (response.statut === 200) {
        this.processConnexion = false;
        localStorage.setItem('token', response.token);
        this.router.navigate(['/register']);
      } else {
        this.message = 'Email ou mot de passe incorret';
        this.processConnexion = false;
      }
    });
  }
}
