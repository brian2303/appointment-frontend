import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAppointment } from '../../../model/appointment.model';
import { AppointmentService } from '../../../services/appointment/appointment.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointments:IAppointment[] = [];
  displayedColumns:String[] = [
    'Fecha cita',
    'Hora cita',
    'Doctor',
    'Paciente',
    'Opciones'
  ]
  constructor(
    private appointmentService:AppointmentService,
    private _snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getAllAppointments();
  }

  openSnackBar(message:string,end:string){
    this._snackBar.open(message,end,{
      duration:5000,
      horizontalPosition : 'right',
      verticalPosition:'top'
    })
  }

  deleteAppointment(id:number){
    this.appointmentService.deleteAppointment(id).subscribe();
    let idx = this.appointments.findIndex(appointment => appointment.idAppointment === id)
    this.appointments.splice(idx,1);
    this.appointments = [...this.appointments];
    this.openSnackBar('Cita eliminada con exito','OK!')
  }

  getAllAppointments(){
    this.appointmentService.getAllAppointments()
      .subscribe(appointments => {
        this.appointments = appointments;
      })
  }

}
