import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { CalculatorService } from '../calculator.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialgeComponent } from '../confirmation-dialge/confirmation-dialge.component';



@Component({
  selector: 'app-show-average',
  templateUrl: './show-average.component.html',
  styleUrls: ['./show-average.component.css']
})
export class ShowAverageComponent implements OnInit {


  average
  numberList: FormGroup

  constructor(private fb: FormBuilder,
    private calcService: CalculatorService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.numberList = new FormGroup({
      numbers: new FormArray([this.fb.control('')])
    })




  }

  get numbers() {
    return this.numberList.get('numbers') as FormArray
  }

  // add new input row
  onAddNumber() {

    this.numbers.push(this.fb.control(''))
  }

  removeFormRows() {
    (<FormArray>this.numberList.controls.numbers).controls.splice(0, (<FormArray>this.numberList.controls.numbers).controls.length)
    this.numbers.push(this.fb.control(''))
  }

  onSubmit() {
    if (this.numberList.invalid) {
      return;
    }
    const dialogRef = this.dialog.open(ConfirmationDialgeComponent, {
      width: '800px',
      data: `Are you sure you want to get average of these numbers`
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const numbersList = this.numberList.value.numbers
        this.calcService.getAverage(numbersList).subscribe(response => {
          this.average = response.average
          this.removeFormRows()
        })
        this.numberList.reset();
      }
    });


  }

}
