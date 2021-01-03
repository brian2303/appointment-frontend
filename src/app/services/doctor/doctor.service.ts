import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDoctor } from '../../model/doctor.model';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    private http:HttpClient
  ) { }

  getAllDoctors(){
    return this.http.get<IDoctor[]>('http://localhost:8080/api/doctors');
  }

  getDoctor(id:number){
    return this.http.get<IDoctor>(`http://localhost:8080/api/doctors/${id}`);
  }

  deleteDoctor(id:number){
    return this.http.delete(`http://localhost:8080/api/doctors/${id}`);
  }

  updateDoctor(id:number,doctor:IDoctor){
    return this.http.put(`http://localhost:8080/api/doctors/${id}`,doctor);
  }

  createDoctor(doctor:IDoctor){
    return this.http.post(`http://localhost:8080/api/doctors`,doctor);
  }
}
