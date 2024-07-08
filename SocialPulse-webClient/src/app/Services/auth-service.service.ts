import { Injectable, signal } from '@angular/core';
import { IUser } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private currentUserSubject = new BehaviorSubject<any | null>(null);
  public currentUser = this.currentUserSubject.asObservable();

  constructor() {}

  set currentUserSig(user: any | null) {
    this.currentUserSubject.next(user);
  }

  get currentUserSig(): any | null {
    return this.currentUserSubject.value;
  }
}
