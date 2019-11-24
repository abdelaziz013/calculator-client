import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const BACKEND_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) {

  }

  // get sum
  getSum(firstNumber: number, secondNumber: number) {
    const queryParams = `?firstNum=${firstNumber}&secondNum=${secondNumber}`;
    return this.http.get<{ total}>(BACKEND_URL + '/api/get-sum' + queryParams);
  }


  // get average
  getAverage(listNumber: number[]) {
    return this.http.post<{ average}>(BACKEND_URL + '/api/post-average', listNumber);
  }

}
