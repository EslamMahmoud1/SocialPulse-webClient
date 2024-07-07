import { Component, inject, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../models/user';
import { environment } from '../../../enviroments/enviroment';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  constructor(private http: HttpClient, auth: AuthServiceService) {}
  authService = inject(AuthServiceService);
  logout() {
    this.authService.currentUserSig.set(null);
  }
}
