import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-survey-table',
  templateUrl: './survey-table.component.html',
  styleUrls: ['./survey-table.component.scss']
})
export class SurveyTableComponent {
  @Input() surveyResponses: any[] = [];
}