import { Component, OnInit,OnChanges } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from  '@angular/router';
import * as moment from 'moment';
import { IAppointmentAvailable } from 'src/app/model/appointment-available.model';
import { IDoctor } from 'src/app/model/doctor.model';
import { IPatient } from 'src/app/model/patient.model';
import { DoctorService } from '../../../services/doctor/doctor.service';
import { AppointmentService } from '../../../services/appointment/appointment.service';
import { PatientService } from '../../../services/patient/patient.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-appointment',
  templateUrl: './form-appointment.component.html',
  styleUrls: ['./form-appointment.component.css']
})
export class FormAppointmentComponent implements OnInit {

  form:FormGroup;
  doctors:IDoctor[] = [];
  patients:IPatient[] = [];
  scheduleAvailableDoctor:any = [];
  disableFields:boolean = true;
  quantityAppointmentByPatient:any = 0;
  disableSubmit:boolean = false;

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private doctorService:DoctorService,
    private appointmentService:AppointmentService,
    private patientService:PatientService,
    private _snackBar: MatSnackBar,
  ) { 
    this.form = this.formBuilder.group({});
    this.buildForm();
  }

  openSnackBar(message:string,end:string){
    this._snackBar.open(message,end,{
      duration:5000,
      horizontalPosition : 'right',
      verticalPosition:'top'
    })
  }
  
  getScheduleAvailableByDoctor(){
    this.convertDate();
    this.disableFields = false;

    const available:IAppointmentAvailable = {
      id: this.form.value.idDoctor,
      date: this.form.value.appointmentDate
    }

    if(available.id){
      this.appointmentService.getScheduleAvailable(available)
        .subscribe(schedule => {
          this.scheduleAvailableDoctor = schedule;
        })
    }
  }

  private convertDate(){
    let appointmentDate: moment.Moment = moment.utc(this.form.value.appointmentDate).local();
    this.form.value.appointmentDate = appointmentDate.format("YYYY-MM-DD")
  }

  getQuantityAppointmentsByPatient(){
    const available:IAppointmentAvailable = {
      id:this.form.value.idPatient,
      date:this.form.value.appointmentDate
    };
    if(available.id){
      this.appointmentService.getQuantityAppointmentsByPatient(available)
        .subscribe(quantity =>{
          this.quantityAppointmentByPatient = quantity;
          this.validateQuantity()
        })
    }
  }

  validateQuantity(){
    if(this.quantityAppointmentByPatient >=2){
      this.disableSubmit = true;
    }else{
      this.disableSubmit = false;
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      appointmentDate:['',[Validators.required]],
      idDoctor:[null,[Validators.required]],
      appointmentHour:['',[Validators.required]],
      idPatient:[null,[Validators.required]],
    })
  }

  createAppointment(event:Event){
    event.preventDefault();
    if(this.form.valid){
      this.appointmentService.createAppointment(this.form.value)
        .subscribe(res =>{
          this.openSnackBar('Cita agendada exitosamente','OK!!');
          this.router.navigate(['./citas'])
        })
    }
  }

  getAllDoctors(){
    this.doctorService.getAllDoctors()
      .subscribe(doctors =>{
        this.doctors = doctors;
      })
  }

  getAllPatients(){
    this.patientService.getAllPatients()
    .subscribe(patients =>{
      this.patients = patients
    })
  }

  ngOnInit(): void {
    this.getAllDoctors();
    this.getAllPatients();
  }

}
