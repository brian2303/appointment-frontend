import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AppointmentComponent  } from './components/appointment/appointment.component';
import { FormAppointmentComponent } from './components/form-appointment/form-appointment.component';
import { AppointmentEditComponent } from './components/appointment-edit/appointment-edit.component';
@NgModule({
  declarations: [
    AppointmentComponent,
    FormAppointmentComponent,
    AppointmentEditComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class AppointmentModule { }
