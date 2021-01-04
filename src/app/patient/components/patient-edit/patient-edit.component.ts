import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../services/patient/patient.service';
import { Router,ActivatedRoute,Params } from  '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  form:FormGroup;
  id:number = 0;
  
  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private patientService:PatientService,
    private activatedRoute:ActivatedRoute,
    private _snackBar:MatSnackBar
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

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params) =>{
      this.id = params.id;
      this.patientService.getPatient(this.id)
        .subscribe(patient =>{
          this.form.patchValue({
            name: patient.name,
            lastname: patient.lastname,
            dateOfBirth: patient.dateOfBirth,
            identification: patient.identification,
            identificationType: patient.identificationType,
            affiliation: patient.affiliation,
            medicalHistory: patient.medicalHistory
          })
        })
    })
  }

  updatePatient(event:Event){
    event.preventDefault();
    if(this.form.valid){
      let newDate: moment.Moment = moment.utc(this.form.value.dateOfBirth).local();
      this.form.value.dateOfBirth = newDate.format("YYYY-MM-DD")
      this.patientService.updatePatient(this.id,this.form.value)
        .subscribe((res) =>{
          this.openSnackBar(`paciente ${res.name} actualizado`,'OK!')
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
