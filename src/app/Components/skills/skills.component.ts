import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
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
export class SkillsComponent implements OnInit {
  skills: skills[] = [
    { name: 'HTML', progress: 90 },
    { name: 'CSS', progress: 80 },
    { name: 'Outsystem', progress: 75 },
    { name: 'JS', progress: 80 },
    { name: 'Angular', progress: 80 },
    { name: 'MySql', progress: 50 },

    // Add more skills as needed
  ];
  constructor() {}
  ngOnInit(): void {
    //  $('[data-toggle="tooltip"]').tooltip();
    //npm install --save-dev @types/jquery
    //     //{
    //   "compilerOptions": {
    //     "types": [
    //       "jquery"
    //     ]
    //   }
    // }
  }
}
export class skills {
  name: string | undefined;
  progress: number | undefined;
}
