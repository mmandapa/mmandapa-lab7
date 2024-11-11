import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  surveyResponses: any[] = [];

  addResponse(response: any) {
    this.surveyResponses.push(response);
  }
}