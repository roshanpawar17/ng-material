import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ng-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.scss']
})
export class Dialog2Component {

  animal!: string;
  
  constructor(
    // MAT_DIALOG_DATA getting data from parent into the dialog
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<Dialog2Component>
  ){
    // console.log(data)
  }

  closeDialog(){
    // console.log(this.animal)
    this.dialogRef.close(this.animal);
  }
}
