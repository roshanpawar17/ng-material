import { Component } from '@angular/core';
import { components } from './components';

@Component({
  selector: 'app-ng-components',
  templateUrl: './ng-components.component.html',
  styleUrls: ['./ng-components.component.scss']
})
export class NgComponentsComponent {
  components = components;

  constructor() {}
}
