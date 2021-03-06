import { Component, OnInit } from '@angular/core';
import {MyServiceService, User} from '../my-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import countries from "../_files/countries.json";

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {
  deletepatientform:FormGroup;
  getpatientform:FormGroup;
  constructor(private service:MyServiceService) {}

  stateInfo: any[] = [];
  status:any[]=['Active','Discharged'];
  successmessage:string;
  failuremessage:string;
  countryInfo: any;
  statevalue:any;
  
  bedtype:any[]=[ "General ward", "semi sharing", "single room"];
  cityInfo: any[] = [];
   

  ngOnInit(): void {
        this.countryInfo=(countries as any).Countries;
        this.getpatientform= new FormGroup({
          ws_pat_id:new FormControl('',Validators.required)
        });
    //console.log('Data:', this.countryInfo);
        this.deletepatientform=new FormGroup({

          ws_pat_id:new FormControl('',Validators.required),
      ws_pat_name:new FormControl('',Validators.required),
        
      ws_pat_ssn:new FormControl('',Validators.required),
      
      ws_pat_adrs:new FormControl('',Validators.required),
        
      ws_pat_age:new FormControl('',Validators.required),
      
      ws_pat_dob:new FormControl('',Validators.required),
      
      
      ws_pat_status:new FormControl('',Validators.required),

        });
        this.stateInfo=this.countryInfo[100].States;
  }

  onChangeState(stateValue) {
    this.statevalue=stateValue;
  this.cityInfo=this.stateInfo[stateValue].Cities;
 
}

deletepatient()
{
  
 
  this.service.deletepatient(this.deletepatientform.value).subscribe(data=>{



      console.log(data);
      if(data=="Patient Deleted Successfully")
      {
        this.deletepatientform.reset();
      this.successmessage=data;
      }else
      {
        this.failuremessage="Patient Deleted Failed";
      }
  });

  }

  getpatient()
  {
    this.service.getpatient(this.getpatientform.value).subscribe((data)=>{
      this.failuremessage=null;

console.log(data.ws_pat_id);
      this.deletepatientform.setValue({
            ws_pat_id:data.ws_pat_id,
	 ws_pat_name:data.ws_pat_name,
	 	
	 ws_pat_ssn:data.ws_pat_ssn,
	
	 ws_pat_adrs:data.ws_pat_adrs,
	 	
	 ws_pat_age:data.ws_pat_age,
	
	 ws_pat_dob:data.ws_pat_dob,
	
   
ws_pat_status:data.ws_pat_status,
   
      });



    },error=>{
      this.deletepatientform.reset();
      this.failuremessage="Patient Not Found";
    });


  }

}
