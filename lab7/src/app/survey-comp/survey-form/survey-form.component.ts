import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent {
  @Output() submitSurvey = new EventEmitter<{ name: string; email: string; feedback: string }>();

  survey = {
    name: '',
    email: '',
    feedback: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitSurvey.emit(this.survey);
      form.resetForm();
    }
  }
}
