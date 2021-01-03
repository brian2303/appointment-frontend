import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppointmentComponent } from './components/appointment/appointment.component';

const routes: Routes = [
    {
        path:'',
        component: AppointmentComponent
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