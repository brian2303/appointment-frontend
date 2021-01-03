import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'
const routes: Routes = [
  {
    path: '',
    component:LayoutComponent,
    children:[
      {
        path: 'doctores',
        loadChildren: () => import('./doctor/doctor.module')
                              .then(m => m.DoctorModule)
      },
      {
        path: 'pacientes',
        loadChildren: () => import('./patient/patient.module')
                              .then(m =>m.PatientModule)
      },
      {
        path: 'citas',
        loadChildren: () => import('./appointment/appointment.module')
                              .then(m => m.AppointmentModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
