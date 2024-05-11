import { Component, Inject, ViewChild } from '@angular/core';
import { MatRipple, RippleGlobalOptions } from '@angular/material/core';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';

@Component({
  selector: 'ng-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.scss']
})
export class RippleComponent {
  @ViewChild('manualRipple', { static: true, read: MatRipple }) ripple?: MatRipple;

  constructor(
    @Inject(MAT_RIPPLE_GLOBAL_OPTIONS) private globalOption: RippleGlobalOptions 
  ){}

  launchRipple(){
    const rippleRef = this.ripple?.launch({
      persistent: true,
      centered: true
    });
    // const rippleRef = this.ripple?.launch(this.globalOption);

    setTimeout(()=>rippleRef?.fadeOut(), 300);
  }

}
