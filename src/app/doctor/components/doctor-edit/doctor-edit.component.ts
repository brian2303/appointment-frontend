import { Component, OnInit,OnChanges,SimpleChanges } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { DoctorService } from '../../../services/doctor/doctor.service';
import { Router,ActivatedRoute,Params } from  '@angular/router';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {

  form:FormGroup;
  id:number = 0;  
  constructor(
      private doctorService:DoctorService,
      private formBuilder:FormBuilder,
      private router:Router,
      private activatedRoute:ActivatedRoute
  ){
    this.form = this.formBuilder.group({}) ;
    this.buildForm();
  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params) =>{
      this.id = params.id
      this.doctorService.getDoctor(this.id)
        .subscribe(doctor =>{
          this.form.patchValue({
            name: doctor.name,
            identificationType: doctor.identificationType,
            identification: doctor.identification,
            professionalCard: doctor.professionalCard,
            experience: doctor.experience,
            speciality: doctor.speciality,
            startSchedule: doctor.startSchedule,
            endSchedule: doctor.endSchedule
          })
        })
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
  
  updateDoctor(event:Event){
    event.preventDefault();
    const doctor = this.form.value;
    if(this.form.valid){
      this.doctorService.updateDoctor(this.id,doctor)
        .subscribe(responseDoctor =>{
          this.router.navigate(['./doctores']);
        })
    }
  }

}
