import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ShowAverageComponent } from './calculator/show-average/show-average.component';
import { ShowTotalComponent } from './calculator/show-total/show-total.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TotalPipe } from './pipe/total.pipe';
import { AveragePipe } from './pipe/average.pipe'





describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule

      ],
      declarations: [
        AppComponent,
        ShowAverageComponent,
        ShowTotalComponent,
        TotalPipe,
        AveragePipe
      ],

    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Calculator-Client'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Calculator-Client');
  });

  it('should render Chripment - Software Engineering Coding Challenge in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Software Engineering Coding Challenge');
  });
});
