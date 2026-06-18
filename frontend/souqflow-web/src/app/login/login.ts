import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthState } from '../core/auth-state';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
})
export class Login {
  private readonly auth = inject(AuthState);
  private readonly router = inject(Router);

  protected email = '';
  protected password = '';

  /** UI-only: no real authentication. Sets demo state and returns home. */
  protected onSubmit(): void {
    const name = this.email ? this.email.split('@')[0] : 'Member';
    this.auth.login(name.charAt(0).toUpperCase() + name.slice(1));
    this.router.navigateByUrl('/');
  }
}
