import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppointment } from '../../model/appointment.model'
import { IAppointmentAvailable } from '../../model/appointment-available.model';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(
    private http:HttpClient
  ) { }

  getAllAppointments(){
    return this.http.get<IAppointment[]>('http://localhost:8080/api/appointments');
  }

  getAppointment(id:number){
    return this.http.get<IAppointment>(`http://localhost:8080/api/appointments/${id}`);
  }

  deleteAppointment(id:number){
    return this.http.delete(`http://localhost:8080/api/appointments/${id}`)
  }

  createAppointment(appointment:IAppointment){
    return this.http.post(`http://localhost:8080/api/appointments`,appointment);
  }

  updateAppointment(appointment:IAppointment,id:number){
    return this.http.put(`http://localhost:8080/api/appointments/${id}`,appointment)
  }

  getScheduleAvailable(available:IAppointmentAvailable){
    return this.http.post(`http://localhost:8080/api/appointments/available`,available);
  }

  getQuantityAppointmentsByPatient(available:IAppointmentAvailable){
    return this.http.post(`http://localhost:8080/api/appointments/quantity`,available);
  }

}
