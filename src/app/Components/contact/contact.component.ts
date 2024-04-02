import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('slideInFromLeft', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)', opacity: 0 }), // Initial style
        animate(
          '300ms ease-out', // Animation duration and easing function
          style({ transform: 'translateX(0)', opacity: 1 }) // Final style
        ),
      ]),
    ]),
    trigger('slideInFromRight', [
      transition('void => *', [
        style({ transform: 'translateX(100%)', opacity: 0 }), // Initial style (off-screen to the right)
        animate(
          '200ms ease-out', // Animation duration and easing function
          style({ transform: 'translateX(0)', opacity: 1 }) // Final style (on-screen)
        ),
      ]),
    ]),
  ],
})
export class ContactComponent {
  sendMessage(data: NgForm) {
    console.log(data);
  }
}
