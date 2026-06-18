import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthState } from '../../core/auth-state';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly auth = inject(AuthState);
}
