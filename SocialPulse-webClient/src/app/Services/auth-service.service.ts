import { Injectable, signal } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  currentUserSig = signal<IUser | null>(null);
}
