import { Component, OnInit} from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { DoctorService } from '../../../services/doctor/doctor.service';
import { Router } from  '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-form-doctor',
  templateUrl: './form-doctor.component.html',
  styleUrls: ['./form-doctor.component.css']
})
export class FormDoctorComponent implements OnInit {

  form:FormGroup;
  
  constructor(
      private doctorService:DoctorService,
      private formBuilder:FormBuilder,
      private router:Router,
      private _snackBar:MatSnackBar
  ){
    this.form = this.formBuilder.group({});
    this.buildForm();
  }
  
  ngOnInit(): void {
  }

  openSnackBar(message:string,end:string){
    this._snackBar.open(message,end,{
      duration:5000,
      horizontalPosition : 'right',
      verticalPosition:'top'
    })
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name:['',[Validators.required]],
      identificationType:['',[Validators.required]],
      identification:['',[Validators.required]],
      professionalCard:['',[Validators.required]],
      experience:[0,[Validators.required]],
      speciality:['',[Validators.required]],
      startSchedule:['',[Validators.required]],
      endSchedule:['',[Validators.required]]
    })
  }
  
  createDoctor(event:Event){
    event.preventDefault();
    const doctor = this.form.value;
    if(this.form.valid){
      this.doctorService.createDoctor(doctor)
        .subscribe(responseDoctor =>{
          this.openSnackBar('Doctor registrado','OK!')
          this.router.navigate(['./doctores']);
        })
    }
  }
}
