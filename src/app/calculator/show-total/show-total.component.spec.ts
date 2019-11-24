import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ShowTotalComponent } from "./show-total.component";

import { HttpClientModule } from "@angular/common/http";
import { TotalPipe } from "src/app/pipe/total.pipe";
import { FormsModule, NgForm } from "@angular/forms";


describe("ShowTotalComponent", () => {
  let component: ShowTotalComponent;
  let fixture: ComponentFixture<ShowTotalComponent>;




  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [ShowTotalComponent, TotalPipe]
    }).compileComponents();
  })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render add-result", () => {
    let fixture = TestBed.createComponent(ShowTotalComponent);
    let component = fixture.componentInstance;
    component.addResult = 17;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p").textContent).toContain(
      '"The addition result: 17"'
    );
  });

  it("should not render add-result if no add-result", async () => {
    let fixture = TestBed.createComponent(ShowTotalComponent);
    let component = fixture.componentInstance;
    component.addResult = null;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p")).not.toBeTruthy();
  });

  it('should contain  template form', () => {
    expect(fixture.debugElement.componentInstance.addForm).toBeTruthy();
  })

 
});
