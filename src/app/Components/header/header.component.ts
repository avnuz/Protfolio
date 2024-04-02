import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

  animations: [
    trigger('slideInFromBottom', [
      transition('void => *', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate(
          '300ms ease-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
    ]),
    trigger('slideInFromLeft', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)', opacity: 0 }), // Initial style
        animate(
          '300ms ease-out', // Animation duration and easing function
          style({ transform: 'translateX(0)', opacity: 1 }) // Final style
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent {}
