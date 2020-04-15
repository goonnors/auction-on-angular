import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppObservablesComponent} from './app-observables.component';
import {RouterModule} from '@angular/router';
import {FormcontrolComponent} from './components/formcontrol/formcontrol.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FromeventComponent} from './components/fromevent/fromevent.component';
import { HttpComponent } from './components/http/http.component';
import {HttpClientModule} from '@angular/common/http';
import { SubjectComponent } from './components/subject/subject.component';
import { SubjectsharedComponent } from './components/subjectshared/subjectshared.component';



@NgModule({
  declarations: [AppObservablesComponent, FormcontrolComponent, FromeventComponent, HttpComponent, SubjectComponent, SubjectsharedComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: AppObservablesComponent},
      {path: 'formcontrol', component: FormcontrolComponent},
      {path: 'fromevent', component: FromeventComponent},
      {path: 'http', component: HttpComponent},
      {path: 'subject', component: SubjectComponent},
      {path: 'subjectshared', component: SubjectsharedComponent},
    ])
  ]
})
export default class ObservablesModule { }
