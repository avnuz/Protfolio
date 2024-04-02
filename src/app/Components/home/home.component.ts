import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('typingAnimation', [
      state(
        'start',
        style({
          width: '0',
          visibility: 'visible',
        })
      ),
      state(
        'end',
        style({
          width: 'auto',
          visibility: 'visible',
        })
      ),
      transition('start => end', [animate('2000ms ease-in-out')]),
    ]),
    trigger('leftAnimation', [
      state(
        'start',
        style({
          transform: 'translateX(-10%)',
          opacity: 0,
        })
      ),
      state(
        'end',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      transition('start => end', [animate('1000ms ease-in-out')]),
    ]),
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
export class HomeComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {}
  typedText = '';
  text = 'Software Engineer!';
  animationState = 'start';

  ngOnInit(): void {
    this.activeRoute.fragment.subscribe((data) => {
      this.triggerAnimations(data);
      this.jumpToSection(data);
    });
    this.startTyping();
  }

  jumpToSection(section: any): void {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  startTyping(): void {
    setTimeout(() => {
      this.animationState = 'end'; // Start typing animation
      this.text.split('').forEach((char, index) => {
        setTimeout(() => {
          this.typedText += char;
        }, 100 * index);
      });
    }, 1000); // Delay before typing starts
  }

  triggerAnimations(fragment: any): void {
    console.log('trigger animations:: ', fragment);
    switch (fragment) {
      case 'home':
        this.animationState = 'end'; // Trigger typing animation
        break;

      case 'about':
        this.animationState = 'end'; // Trigger typing animation
        break;

      case 'skills':
        this.animationState = 'end'; // Trigger typing animation
        break;

      case 'contact':
        this.animationState = 'end'; // Trigger typing animation
        break;

      default:
        this.animationState = 'start'; // Reset animation state
        break;
    }
  }
}
