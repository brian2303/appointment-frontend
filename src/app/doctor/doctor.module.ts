import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module'
import { DoctorComponent } from './components/doctor/doctor.component';
import { FormDoctorComponent } from './components/form-doctor/form-doctor.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule} from '@angular/forms';
import { DoctorEditComponent } from './components/doctor-edit/doctor-edit.component'

@NgModule({
  declarations: [
    DoctorComponent,
    FormDoctorComponent,
    DoctorEditComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }
