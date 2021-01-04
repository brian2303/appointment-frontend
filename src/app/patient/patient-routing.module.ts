import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PatientComponent } from './components/patient/patient.component';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';
import { FormPatientComponent } from './components/form-patient/form-patient.component';
const routes: Routes = [
    {
        path:'',
        component: PatientComponent
    },
    {
        path:'nuevo',
        component: FormPatientComponent
    },
    {
        path:'editar/:id',
        component: PatientEditComponent
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
export class PatientRoutingModule {}