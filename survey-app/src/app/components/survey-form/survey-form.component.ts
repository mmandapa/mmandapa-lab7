import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent {
  surveyForm: FormGroup;
  surveyResponses: any[] = [];

  constructor(private fb: FormBuilder) {
    this.surveyForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      feedback: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.surveyForm.valid) {
      this.surveyResponses.push(this.surveyForm.value);
      this.surveyForm.reset();
    }
  }
}