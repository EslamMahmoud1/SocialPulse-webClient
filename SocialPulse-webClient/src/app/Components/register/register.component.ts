import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { environment } from '../../../enviroments/enviroment';
import { AuthServiceService } from '../../Services/auth-service.service';
import { IUser } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthServiceService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.http
        .post<{ user: IUser }>(`${environment.apiUrl}/users`, {
          user: this.registerForm.getRawValue(),
        })
        .subscribe((response) => {
          console.log(response);
          console.log(this.authService.currentUserSig());
          this.authService.currentUserSig.set(response.user);
          console.log(this.authService.currentUserSig());
          this.router.navigate(['/']);
        });
    }
  }
}
