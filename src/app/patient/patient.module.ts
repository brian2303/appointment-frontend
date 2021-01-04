import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientComponent } from './components/patient/patient.component';
import { FormsModule } from '@angular/forms';
import { FormPatientComponent } from './components/form-patient/form-patient.component';
@NgModule({
  declarations: [
    PatientComponent,
    PatientEditComponent,
    FormPatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PatientModule { }
