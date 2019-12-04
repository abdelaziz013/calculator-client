import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialgeComponent } from './confirmation-dialge.component';

describe('ConfirmationDialgeComponent', () => {
  let component: ConfirmationDialgeComponent;
  let fixture: ComponentFixture<ConfirmationDialgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationDialgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDialgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
