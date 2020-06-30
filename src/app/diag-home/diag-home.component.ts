import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {MyServiceService, User, Patient,PatientMedicines,Medicines, Diagnostics, PatientDiagnostics} from '../my-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { error } from 'protractor';
@Component({
  selector: 'app-diag-home',
  templateUrl: './diag-home.component.html',
  styleUrls: ['./diag-home.component.css']
})
export class DiagHomeComponent implements OnInit {
  successmessage:string;
  failuremessage:string;
  medicinemessage:string;
  addsuccessmessage:string;
  user:string;
  p:Patient;
  pm:PatientDiagnostics[]=[];
  newmedicines:PatientDiagnostics[]=[];

  constructor(private router:Router,private service:MyServiceService) { }

  getpatientform:FormGroup;
  addmedicine:FormGroup;
  getmedicine:FormGroup;

  ngOnInit(): void {
    this.user=localStorage.getItem('role');
    if(this.user!="diagnositics")
    {
      localStorage.clear();
    this.router.navigate(['login']);
    }
    this.getpatientform= new FormGroup({
      ws_pat_id:new FormControl('',Validators.required)
    });
    this.getmedicine= new FormGroup({
      ws_diag_name:new FormControl('',Validators.required)
    });
    this.addmedicine= new FormGroup({
      ws_pat_id:new FormControl('',Validators.required),
      ws_diag_name:new FormControl('',Validators.required),
      ws_diag_amt:new FormControl('',Validators.required)
    });
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  getpatient(addsuccessmessage = null)
  {
    
    //this.medicinemessage=null;
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
    this.service.getallpatientdiagnostics(value).subscribe(data=>{
      this.pm=data;

    });
  }
  getmedicines()
  {
    this.service.getdiagnostic(this.getmedicine.value).subscribe(data=>{
    this.medicinemessage=null;
    if(data.ws_diag_id=="0")
    {
    this.medicinemessage="No Diagnose Found";
    }else{
      this.medicinemessage="Diagnose Found";
      this.addmedicine.patchValue({
        ws_pat_id:this.p.ws_pat_id,
      ws_diag_name:data.ws_diag_name,
    
      ws_diag_amt:data.ws_diag_amt,
    

      });


    }

    });
  }

    
  getamount()
  {
    this.addmedicine.patchValue({
      ws_diag_amt:Number(+this.addmedicine.controls.ws_diag_amt.value)
    });
  }

  addmedicines()
  {
    console.log(this.addmedicine.value);
    this.service.adddiagnostic(this.addmedicine.value).subscribe(data=>{
      if(data=="Diagnostic Stored Successfully")
      {
        this.medicinemessage=null;
        this.successmessage=data;
        this.addsuccessmessage=data;
        this.newmedicines.push(this.addmedicine.value);
        this.addmedicine.reset();
      }
    });
    this.medicinemessage=null;
  //  this.getpatient(this.addsuccessmessage);
  }
  
  update()
  {
    this.successmessage="All Test Added SuccessFully";
    this.medicinemessage=null;
    this.newmedicines=[];
    this.service.getallpatientdiagnostics(this.getpatientform.value).subscribe(data=>{
      this.pm=data;
      
          });
        
        //  this.getpatient(this.successmessage);
    
    
  }








}
