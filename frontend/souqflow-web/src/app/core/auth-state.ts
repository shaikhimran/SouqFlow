import { Injectable, signal } from '@angular/core';

/**
 * UI-only auth state (no backend). Holds a signal so the navbar and the login
 * page stay in sync. Swap this for a real AuthService + API later.
 */
@Injectable({ providedIn: 'root' })
export class AuthState {
  readonly isLoggedIn = signal(false);
  readonly userName = signal('Guest');

  login(name = 'Member'): void {
    this.userName.set(name);
    this.isLoggedIn.set(true);
  }

  logout(): void {
    this.isLoggedIn.set(false);
    this.userName.set('Guest');
  }
}
