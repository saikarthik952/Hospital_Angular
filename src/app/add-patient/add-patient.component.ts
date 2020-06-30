import { Component, OnInit } from '@angular/core';
import {MyServiceService, User} from '../my-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import countries from "../_files/countries.json";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  addpatientform:FormGroup;
  constructor(private service:MyServiceService) { }
  stateInfo: any[] = [];
  successmessage:string;
  failuremessage:string;
  countryInfo: any;
  statevalue:any;
  bedtype:any[]=[ "General ward", "semi sharing", "single room"];
  cityInfo: any[] = [];
  ngOnInit(): void {
this.countryInfo=(countries as any).Countries;
//console.log('Data:', this.countryInfo);
    this.addpatientform=new FormGroup({

      
	 ws_pat_name:new FormControl('',Validators.required),
	 	
	 ws_pat_ssn:new FormControl('',Validators.required),
	
	 ws_pat_adrs:new FormControl('',Validators.required),
	 	
	 ws_pat_age:new FormControl('',Validators.required),
	
	 ws_pat_dob:new FormControl('',Validators.required),
	
   ws_pat_type:new FormControl('',Validators.required),
   
   ws_pat_city:new FormControl('',Validators.required),

   ws_pat_state:new FormControl('',Validators.required),

    });
    this.stateInfo=this.countryInfo[100].States;
  }
  onChangeState(stateValue) {
      this.statevalue=stateValue;
    this.cityInfo=this.stateInfo[stateValue].Cities;
   
  }
 
    addpatient()
    {
      console.log(this.addpatientform.value);
      this.addpatientform.patchValue({
        ws_pat_state:this.stateInfo[this.statevalue].StateName
      });
      this.service.addpatient(this.addpatientform.value).subscribe(data=>{



      console.log(data);
      if(data=="Patient Created Successfully")
      {
        this.addpatientform.reset();
      this.successmessage=data;
      }else
      {
        this.failuremessage="Patient Creation Failed";
      }
      });

    }
}
