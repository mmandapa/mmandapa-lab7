import { Routes } from '@angular/router';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { SurveyTableComponent } from './components/survey-table/survey-table.component';

export const routes: Routes = [
  { path: '', redirectTo: '/survey-form', pathMatch: 'full' },
  { path: 'survey-form', component: SurveyFormComponent },
  { path: 'survey-table', component: SurveyTableComponent },
  { path: '**', redirectTo: '/survey-form' }
];