import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private patientService:PatientService,
    private _snackBar: MatSnackBar
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

  openSnackBar(message:string,end:string){
    this._snackBar.open(message,end,{
      duration:5000,
      horizontalPosition : 'right',
      verticalPosition:'top'
    })
  }

  deletePatient(id:number){
    this.patientService.deletePatient(id).subscribe()
    let idx:number = this.patients.findIndex(patient => patient.idPatient == id);
    this.patients.splice(idx,1);
    this.patients = [...this.patients];
    this.openSnackBar('Paciente eliminado exitosamente','OK!');
  }
}
