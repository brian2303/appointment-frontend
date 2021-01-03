import { Component, OnInit } from '@angular/core';
import { IDoctor } from '../../../model/doctor.model';
import { DoctorService } from '../../../services/doctor/doctor.service';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctors:IDoctor[] = [];
  displayedColumns: string[] = [
    'Nombre',
    'Tipo de identificación',
    'Identificación',
    'Experiencia',
    'Especialidad',
    'Inicio atención',
    'Fin atención',
    'actions'
  ];

  constructor(
    private doctorService:DoctorService
  ) { }

  ngOnInit(): void {
    this.fetchDoctors();
    
  }

  fetchDoctors(){
    this.doctorService.getAllDoctors()
      .subscribe(doctors =>{
        this.doctors = doctors;
        console.log(this.doctors)
      })
  }

  deleteDoctor(id:number){
    this.doctorService.deleteDoctor(id).subscribe(() => {});
    let idx:number = this.doctors.findIndex(doctor => doctor.idDoctor == id);
    this.doctors.splice(idx,1);
    this.doctors = [...this.doctors];
  }

}
