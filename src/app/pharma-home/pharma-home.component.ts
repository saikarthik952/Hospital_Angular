import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {MyServiceService, User, Patient,PatientMedicines,Medicines} from '../my-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { error } from 'protractor';

@Component({
  selector: 'app-pharma-home',
  templateUrl: './pharma-home.component.html',
  styleUrls: ['./pharma-home.component.css']
})
export class PharmaHomeComponent implements OnInit {
  successmessage:string;
  failuremessage:string;
  medicinemessage:string;
  user:string;
  p:Patient;
 pm:PatientMedicines[]=[];
 newmedicines:PatientMedicines[]=[];

  constructor(private router:Router,private service:MyServiceService) { }
  getpatientform:FormGroup;
  addmedicine:FormGroup;
  getmedicine:FormGroup;
  ngOnInit(): void {
    this.user=localStorage.getItem('role');
    if(this.user!="pharamcist")
    {
      localStorage.clear();
    this.router.navigate(['login']);
    }
    this.getpatientform= new FormGroup({
      ws_pat_id:new FormControl('',Validators.required)
    });
    this.getmedicine= new FormGroup({
      ws_med_name:new FormControl('',Validators.required)
    });
    this.addmedicine= new FormGroup({
      ws_pat_id:new FormControl('',Validators.required),
   ws_med_name:new FormControl('',Validators.required),
 
   ws_med_rate:new FormControl('',Validators.required),
 ws_med_qty:new FormControl('',Validators.required),
 ws_med_amt:new FormControl('',Validators.required)
    });
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  
  getpatient()
  {
    this.service.getpatient(this.getpatientform.value).subscribe((data)=>{
      this.failuremessage=null;
this.p=data;
console.log(data.ws_pat_id);
this.getalpatientmedicines(this.getpatientform.value);
    },error=>{
      this.p=null;
     this.failuremessage="Patient Not Found";
     this.successmessage=null;
     this.medicinemessage=null;
    });


  }
  getalpatientmedicines(value:string)
  {
    this.service.getallpatientmedicines(value).subscribe(data=>{
this.pm=data;

    });
  }
  getmedicines()
  {
this.service.getmedicine(this.getmedicine.value).subscribe(data=>{
this.medicinemessage=null;
if(data.ws_med_id=="0")
this.medicinemessage=data.ws_med_avail;
else if(data.ws_med_avail=="Not Available")
this.medicinemessage="Stock not available Currently";
else{
  this.medicinemessage=data.ws_med_avail;
  this.addmedicine.patchValue({
    ws_pat_id:this.p.ws_pat_id,
   ws_med_name:data.ws_med_name,
 
   ws_med_rate:data.ws_med_rate,
 

  });


}

});
  }
  
getamount()
{
  this.addmedicine.patchValue({
    ws_med_amt:Number(+this.addmedicine.controls.ws_med_qty.value)*Number(+this.addmedicine.controls.ws_med_rate.value)
  });
}
addmedicines()
{
  console.log(this.addmedicine.value);
this.service.addmedicine(this.addmedicine.value).subscribe(data=>{
  if(data=="Medicine Stored Successfully")
  {
    this.medicinemessage=null;
    this.successmessage=data;
    this.newmedicines.push(this.addmedicine.value);
    this.addmedicine.reset();
  }
});
}
update()
{
this.successmessage="All Medicines Added SuccessFully";
this.medicinemessage=null;
this.newmedicines=[];
this.service.getallpatientmedicines(this.getpatientform.value).subscribe(data=>{
  this.pm=data;
  
      });
}
}
