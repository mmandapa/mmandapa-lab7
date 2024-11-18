import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-survey-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './survey-table.component.html',
  styleUrls: ['./survey-table.component.scss']
})
export class SurveyTableComponent {
  surveys = [
    { name: 'Alice', email: 'alice@example.com', feedback: 'Great survey!' },
    { name: 'Bob', email: 'bob@example.com', feedback: 'Loved the experience.' },
    { name: 'Charlie', email: 'charlie@example.com', feedback: 'Could be improved.' }
  ];
}
