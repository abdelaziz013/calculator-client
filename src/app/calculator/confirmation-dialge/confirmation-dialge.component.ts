import { Component, OnInit, Inject, } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirmation-dialge',
  templateUrl: './confirmation-dialge.component.html',
  styleUrls: ['./confirmation-dialge.component.css']
})
export class ConfirmationDialgeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialgeComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string


  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
