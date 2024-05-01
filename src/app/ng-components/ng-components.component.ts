import { Component, OnInit } from '@angular/core';
import { components } from './components';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-ng-components',
  templateUrl: './ng-components.component.html',
  styleUrls: ['./ng-components.component.scss']
})
export class NgComponentsComponent implements OnInit {
  components = components;
  // showContainer = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.router.events.subscribe(event=>{
    //   if(event instanceof NavigationStart){
    //     this.showContainer = false;
    //   }else if(event instanceof NavigationEnd){
    //     setTimeout(()=>{
    //       this.showContainer = true;
    //     });
    //   }
    // })
  }  
}
