import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalculatorService } from '../calculator.service';
import { MatDialog } from '@angular/material';

import { ConfirmationDialgeComponent } from '../confirmation-dialge/confirmation-dialge.component';


@Component({
  selector: 'app-show-total',
  templateUrl: './show-total.component.html',
  styleUrls: ['./show-total.component.css']
})
export class ShowTotalComponent implements OnInit {

  addResult
  @ViewChild('addForm') addForm: NgForm;

  constructor(private calcService: CalculatorService,
    public dialog: MatDialog

  ) { }

  ngOnInit() {

  }


  add(addForm: NgForm) {

    if (addForm.invalid) {
      return;
    }

    const dialogRef = this.dialog.open(ConfirmationDialgeComponent, {
      width: '350px',

      data: `Are you sure you want to delete add twow numbers`
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const firstNumber = addForm.value.firstNum;
        const secondNumber = addForm.value.secondNumber;
        this.calcService.getSum(firstNumber, secondNumber).subscribe(response => {
          this.addResult = response.total
        })
        addForm.resetForm()
      }
    });



    // const firstNumber = addForm.value.firstNum;
    // const secondNumber = addForm.value.secondNumber;
    // this.calcService.getSum(firstNumber, secondNumber).subscribe(response => {
    //   this.addResult = response.total
    // })
    // addForm.resetForm()

  }
}
