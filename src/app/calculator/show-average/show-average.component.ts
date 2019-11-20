import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { CalculatorService } from '../calculator.service';
import { Average } from '../average';

@Component({
  selector: 'app-show-average',
  templateUrl: './show-average.component.html',
  styleUrls: ['./show-average.component.css']
})
export class ShowAverageComponent implements OnInit {

  average: Average;
  numberList: FormGroup

  constructor(private fb: FormBuilder,
    private calcService: CalculatorService
  ) { }

  ngOnInit() {
    this.numberList = new FormGroup({
      'numbers': new FormArray([this.fb.control('')])
    })


  }

  // add new input row
  onAddNumber() {
    const control = new FormControl('');
    (<FormArray>this.numberList.get('numbers')).push(control)
  }

  onSubmit() {
    if (this.numberList.invalid) {
      return;
    }
    const numbersList = this.numberList.value.numbers
    this.calcService.getAverage(numbersList).subscribe(response => {
      this.average = response.average
    })

    this.numberList.reset();
  }

}
