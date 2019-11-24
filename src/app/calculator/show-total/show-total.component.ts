import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalculatorService } from '../calculator.service';


@Component({
  selector: 'app-show-total',
  templateUrl: './show-total.component.html',
  styleUrls: ['./show-total.component.css']
})
export class ShowTotalComponent implements OnInit {

  addResult
  @ViewChild('addForm') addForm: NgForm;

  constructor(private calcService: CalculatorService) { }

  ngOnInit() {
  }


  add(addForm: NgForm) {
    if (addForm.invalid) {
      return;
    }

    const firstNumber = addForm.value.firstNum;
    const secondNumber = addForm.value.secondNumber;
    this.calcService.getSum(firstNumber, secondNumber).subscribe(response => {
      this.addResult = response.total
    })

    addForm.resetForm()

  }
}
