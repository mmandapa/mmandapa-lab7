import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { SurveyFormComponent } from './survey-comp/survey-form/survey-form.component';
import { SurveyTableComponent } from './survey-comp/survey-table/survey-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent,  
    SurveyTableComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
