import { Component } from '@angular/core';
import { Navbar } from '../components/navbar/navbar';
import { Hero } from '../components/hero/hero';

@Component({
  selector: 'app-landing',
  imports: [Navbar, Hero],
  template: `
    <app-navbar />
    <app-hero />
  `,
})
export class Landing {}
