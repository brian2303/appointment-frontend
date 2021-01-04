import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPatient } from '../../model/patient.model';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private http:HttpClient
  ) { }

  getAllPatients(){
    return this.http.get<IPatient[]>('http://localhost:8080/api/patients');
  }

  getPatient(id:number){
    return this.http.get<IPatient>(`http://localhost:8080/api/patients/${id}`);
  }

  deletePatient(id:number){
    return this.http.delete(`http://localhost:8080/api/patients/${id}`);
  }

  createPatient(patient:IPatient){
    return this.http.post<IPatient>('http://localhost:8080/api/patients',patient);
  }

  updatePatient(id:number,patient:IPatient){
    return this.http.put<IPatient>(`http://localhost:8080/api/patients/${id}`,patient);
  }
}
