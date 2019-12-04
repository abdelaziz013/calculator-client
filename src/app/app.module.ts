import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowTotalComponent } from './calculator/show-total/show-total.component';
import { ShowAverageComponent } from './calculator/show-average/show-average.component';
import { TotalPipe } from './pipe/total.pipe';
import { AveragePipe } from './pipe/average.pipe';
import { ConfirmationDialgeComponent } from './calculator/confirmation-dialge/confirmation-dialge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ShowTotalComponent,
    ShowAverageComponent,
    TotalPipe,
    AveragePipe,
    ConfirmationDialgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
   
  ],
  entryComponents: [
    ConfirmationDialgeComponent
  ],


  providers: [],
  bootstrap: [AppComponent],
  exports: [TotalPipe, AveragePipe]
})
export class AppModule { }
