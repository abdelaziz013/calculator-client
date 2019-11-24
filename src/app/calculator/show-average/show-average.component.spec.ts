import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAverageComponent } from './show-average.component';
import { ReactiveFormsModule, FormArray } from '@angular/forms';
import { AveragePipe } from 'src/app/pipe/average.pipe';
import { HttpClientModule } from '@angular/common/http';


describe('ShowAverageComponent', () => {
  let component: ShowAverageComponent;
  let fixture: ComponentFixture<ShowAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,HttpClientModule],
      declarations: [ ShowAverageComponent,AveragePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain form with one control', () => {
    expect(component.numberList.contains('numbers')).toBeTruthy();
  });


  it('control should not empty', () => {
    let control = component.numberList.get('numbers')  

    control.setValue([''])
    expect(control.valid).toBeFalsy();
  });

  it("should render average", () => {
    let fixture = TestBed.createComponent(ShowAverageComponent);
    let component = fixture.componentInstance;
    component.average  = 30;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p").textContent).toContain(
      '"The average is 30"'
    );
  });


  

  
});
