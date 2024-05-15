import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../core/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  message: string = '';

  RegisterForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    password_confirmation: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  register() {
    this.authService.register(this.RegisterForm.value).subscribe((response) => {
      if (response.statut === 201) {
        this.router.navigate(['/login']);
      } else {
        this.message = "Erreur lors de l'insertion";
      }
    });
  }
}
