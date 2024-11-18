import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Required for forms handling
import { AppComponent } from './app.component';
import { SurveyFormComponent } from './survey-comp/survey-form/survey-form.component';
import { SurveyTableComponent } from './survey-comp/survey-table/survey-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent,  // Add SurveyFormComponent here
    SurveyTableComponent, // Add SurveyTableComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Necessary for handling form inputs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
