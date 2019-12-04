import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('CalculatorService', () => {
  let httpMock: HttpTestingController
  let service: CalculatorService
 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [CalculatorService]
    });
    
    service = TestBed.get(CalculatorService)
    httpMock = TestBed.get(HttpTestingController);   
  })

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpMock.verify();
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should get sum of two numbers from API using get method', () => {
    service.getSum(6, 7).subscribe(response => {
      expect(response.total).toBe(13);
    })
    const req = httpMock.expectOne(`http://localhost:8080/api/get-sum?firstNum=6&secondNum=7`);
    expect(req.request.method).toBe('GET');

    req.flush({
      total: 13
    });

  });


  it('should get average of list of numbers from API using post method', () => {
    service.getAverage([1, 2, 3]).subscribe(response => {
      expect(response.average).toBe(2);
    })

    const req = httpMock.expectOne(`http://localhost:8080/api/post-average`);
    expect(req.request.method).toBe('POST');

    req.flush({
      average: 2
    });

  });

});
