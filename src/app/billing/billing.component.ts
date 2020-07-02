import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {MyServiceService, Patient, PatientMedicines, PatientDiagnostics} from '../my-service.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  getpatientform : FormGroup;
  p:Patient;
  pmed:any;
  pdiag:any;
  dt:number;
  mt:number;
  rt:number;
  sum:number;
  failuremessage:string;
  failuremsgmed:string;
  failuremsgdiag:string;
  constructor(private service:MyServiceService) { }


  ngOnInit(): void {
    this.getpatientform= new FormGroup({
      ws_pat_id:new FormControl('',Validators.required)
    });
  }

  getallpatientmedicines() {

    console.log();
    this.service.getallpatientmedicines( this.getpatientform.value)
      .subscribe(
        data => {
          this.pmed=data;
          this.mt=this.pmed.map(item=>Number(+item.ws_med_amt)).reduce((a:number,b:number)=>+a + b );
          this.failuremsgmed=null;
          console.log(data);
          //this.reloadData();
        },
        error => {this.failuremsgmed="No Medicines Bought";
        this.pmed=null;
      }        );
  }

  getallpatientdiagnostics() {

    console.log();
    this.service.getallpatientdiagnostics( this.getpatientform.value)
      .subscribe(
        data => {
          this.pdiag=data;
          this.dt=this.pdiag.map(item=>Number(+item.ws_diag_amt)).reduce((a:number,b:number)=>+a + b);
          this.failuremsgdiag=null;
          console.log(this.dt);
          //this.reloadData();
        },
        error => {this.failuremsgdiag="Patient Not Found";
        this.pdiag=null;
      }        );
  }


  getpatient() {

    console.log();
    this.service.getpatient( this.getpatientform.value)
      .subscribe(
        data => {
          this.p=data;
          if(this.p.ws_pat_type=="General ward")
          {
            this.rt=2000 * Number(+this.p.ws_pat_nod);
          }
          else if(this.p.ws_pat_type=="semi sharing")
          {
            this.rt=4000 * Number(+this.p.ws_pat_nod);
          }
          else if(this.p.ws_pat_type=="single Room")
          {
            this.rt=8000 * Number(+this.p.ws_pat_nod);
          }
          console.log(this.rt);
          this.failuremessage=null;
          console.log(data);
          //this.reloadData();
        },
        error => {this.failuremessage="Patient Not Found";
        this.p=null;
      }        );
  }

  
}
