import { Component, OnInit,OnChanges,SimpleChanges } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { DoctorService } from '../../../services/doctor/doctor.service';
import { Router } from  '@angular/router';
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
      private router:Router
  ){
    this.form = this.formBuilder.group({}) ;
    this.buildForm();
  }
  
  ngOnInit(): void {
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
          this.router.navigate(['./doctores']);
        })
    }
  }
}
