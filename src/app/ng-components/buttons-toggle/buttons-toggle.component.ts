import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ng-buttons-toggle',
  templateUrl: './buttons-toggle.component.html',
  styleUrls: ['./buttons-toggle.component.scss']
})
export class ButtonsToggleComponent {

  isToggle: boolean = false;

  fontStyle?: String;
  fontStyleControl = new FormControl();

  onToggle(ref: any){
    console.log(ref);
    this.isToggle = ref.checked;
  }

  onToggleGroup(group: any){
    console.log(group)
  }
}
