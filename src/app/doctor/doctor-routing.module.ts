import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DoctorComponent } from './components/doctor/doctor.component';
import { FormDoctorComponent } from './components/form-doctor/form-doctor.component';
import { DoctorEditComponent } from './components/doctor-edit/doctor-edit.component';

const routes: Routes = [
    {
        path:'',
        component: DoctorComponent
    },
    {
        path:'nuevo',
        component: FormDoctorComponent
    },
    {
        path:'editar/:id',
        component:DoctorEditComponent
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
export class DoctorRoutingModule {}