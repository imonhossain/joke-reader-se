import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate, query, group, keyframes } from '@angular/animations';
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({ opacity: 0 })))
    ]),


    trigger('routeAnimation', [
      transition('* <=> *', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.3s cubic-bezier(1,1,1,1)', style({
              transform: 'translateX(100%)',
            })),
          ], { optional: true }),
          // and now reveal the enter
          query(':enter',
            animate('0.3s cubic-bezier(1,1,1,1)', style({
              transform: 'rotateX(0)',
            }))

          ),
        ]),
      ]),
    ])



  ],
})
export class JokeComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  
  }
   getDepth(outlet) {
    return outlet.activatedRouteData.state;
  }

}
