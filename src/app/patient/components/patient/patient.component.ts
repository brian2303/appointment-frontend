import { Component, OnInit } from '@angular/core';
import { IPatient } from '../../../model/patient.model';
import { PatientService } from '../../../services/patient/patient.service';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients:IPatient[] = [];
  
  displayedColumns: string[] = [
    'Nombres',
    'Apellidos',
    'Tipo de identificación',
    'Identificación',
    'Fecha de nacimiento',
    'Eps',
    'Historia medica',
    'actions'
  ];

  constructor(
    private patientService:PatientService
  ) { }

  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients(){
    this.patientService.getAllPatients()
      .subscribe(patients =>{
        this.patients = patients;
      })
  }

  deletePatient(id:number){
    this.patientService.deletePatient(id).subscribe()
    let idx:number = this.patients.findIndex(patient => patient.idPatient == id);
    this.patients.splice(idx,1);
    this.patients = [...this.patients];
  }
}
