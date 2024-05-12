import { Component } from '@angular/core';

@Component({
  selector: 'ng-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  count: number = 0;

  constructor() { }

  incrementCount(){
    this.count++;
  }

  decrementCount(){
    this.count--;
  }
}
