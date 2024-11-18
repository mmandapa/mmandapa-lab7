import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent {
  survey = {
    name: '',
    email: '',
    feedback: ''
  };

  submitSurvey() {
    console.log('Survey submitted:', this.survey);
    // Reset form
    this.survey = {
      name: '',
      email: '',
      feedback: ''
    };
  }
}
