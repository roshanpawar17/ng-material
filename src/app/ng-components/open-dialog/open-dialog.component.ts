import { AfterViewInit, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Dialog1Component } from 'src/app/shared/dialog1/dialog1.component';
import { Dialog2Component } from 'src/app/shared/dialog2/dialog2.component';

@Component({
  selector: 'ng-open-dialog',
  templateUrl: './open-dialog.component.html',
  styleUrls: ['./open-dialog.component.scss']
})
export class OpenDialogComponent {

  name!: string;
  fname = new FormControl();
  dialog2Data: any;

  constructor(
    private dialog: MatDialog
  ){}


  openDialog1(){
    const dialogRef = this.dialog.open(Dialog1Component);
    dialogRef.afterClosed().subscribe((res)=>{
      console.log(res);
    })
  }
  openDialog2(){
    const dialogRef = this.dialog.open(Dialog2Component, {
      disableClose: true,
      data: {
        name: this.name
        // name: this.fname.value
      }
    });
    dialogRef.afterClosed().subscribe((res)=>{
      // get data from dialog after close
      // console.log(res);
      this.dialog2Data = res;
    })
  }
}
