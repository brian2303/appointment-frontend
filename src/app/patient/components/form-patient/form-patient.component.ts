import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { PatientService } from '../../../services/patient/patient.service';
import { Router } from  '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.css']
})
export class FormPatientComponent implements OnInit {

  form:FormGroup;
  
  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private patientService:PatientService
  ) { 
    this.form = this.formBuilder.group({});
    this.buildForm();
  }

  ngOnInit(): void {
  }

  createPatient(event:Event){
    event.preventDefault();
    if(this.form.valid){
      let newDate: moment.Moment = moment.utc(this.form.value.dateOfBirth).local();
      this.form.value.dateOfBirth = newDate.format("YYYY-MM-DD")
      this.patientService.createPatient(this.form.value)
        .subscribe(responsePatient =>{
          this.router.navigate(['./pacientes']);
        })
    }
  }

  buildForm(){
    this.form = this.formBuilder.group({
      name: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      dateOfBirth: ['',[Validators.required]],
      identification: ['',[Validators.required]],
      identificationType: ['',[Validators.required]],
      affiliation: ['',[Validators.required]],
      medicalHistory: ['',[Validators.required]]
    })
  }
}
