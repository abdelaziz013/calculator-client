import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('CalculatorService', () => {




  beforeEach(() => TestBed.configureTestingModule({
    imports: [

      HttpClientTestingModule
    ],
    providers: [CalculatorService]
  }),



  )




  it('should be created', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service).toBeTruthy();
  });


  it('should get sum of two numbers from API using get method', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
    service.getSum(6, 7).subscribe(response => {
      expect(response.total).toBe(13);
    })

    const req = httpMock.expectOne(`http://localhost:8080/api/get-sum?firstNum=6&secondNum=7`);
    expect(req.request.method).toBe('GET');

    req.flush({
      total: 13
    });

    httpMock.verify();

  });


  it('should get average of list of numbers from API using post method', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
    service.getAverage([1, 2,3]).subscribe(response => {
      expect(response.average).toBe(2);
    })

    const req = httpMock.expectOne(`http://localhost:8080/api/post-average`);
    expect(req.request.method).toBe('POST');

    req.flush({
      average: 2
    });

    httpMock.verify();

  });





});
