import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAverageComponent } from './show-average.component';

describe('ShowAverageComponent', () => {
  let component: ShowAverageComponent;
  let fixture: ComponentFixture<ShowAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAverageComponent ]
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
});
