import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { FormAppointmentComponent } from './components/form-appointment/form-appointment.component';
import { AppointmentEditComponent } from './components/appointment-edit/appointment-edit.component';
const routes: Routes = [
    {
        path:'',
        component: AppointmentComponent
    },
    {
        path:'nuevo',
        component: FormAppointmentComponent
    },
    {
        path:'editar/:id',
        component: AppointmentEditComponent
    }
]


@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ],
    exports:[
        RouterModule
    ]
})
export class AppointmentRoutingModule {}