import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'ng-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  
  // programatically oepn menu
  // @ViewChild(MatMenuTrigger) pMenu!: MatMenuTrigger;
  @ViewChild('ptriggerMenu') pMenu!: MatMenuTrigger;

  triggerMenu(){
    this.pMenu.openMenu();
  }

  ngOnInit(): void {
    setTimeout(()=>this.triggerMenu(), 1000)
  }

  print(){
    console.log("hello")
  }

  getName(name: any){
    console.log(name)
  }


}
