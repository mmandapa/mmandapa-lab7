import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyFormComponent } from './survey-comp/survey-form/survey-form.component';
import { SurveyTableComponent } from './survey-comp/survey-table/survey-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SurveyFormComponent, SurveyTableComponent],
  template: `
    <div>
      <h1>Survey Application</h1>
      <<app-survey-form></app-survey-form>
      <app-survey-table></app-survey-table>>
    </div>
  `
})
export class AppComponent {}
