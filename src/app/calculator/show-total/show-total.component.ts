import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalculatorService } from '../calculator.service';
import { Sum } from '../sum';

@Component({
  selector: 'app-show-total',
  templateUrl: './show-total.component.html',
  styleUrls: ['./show-total.component.css']
})
export class ShowTotalComponent implements OnInit {
  result:Sum

  constructor(private calcService:CalculatorService) { }

  ngOnInit() {
  }


  add(f:NgForm){
    if (f.invalid) {
      return;
    }

    const firstNumber =f.value.firstNum;
    const secondNumber =f.value.secondNumber;
    this.calcService.getSum(firstNumber,secondNumber).subscribe(response=>{
      this.result =response.total
    })   

    f.resetForm()
    
  }
}
