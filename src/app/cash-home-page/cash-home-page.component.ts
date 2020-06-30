import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {MyServiceService, Patient} from '../my-service.service';



@Component({
  selector: 'app-cash-home-page',
  templateUrl: './cash-home-page.component.html',
  styleUrls: ['./cash-home-page.component.css']
})
export class CashHomePageComponent implements OnInit {

  getpatientform : FormGroup;
  p:Patient;
  failuremessage:string;
  constructor(private service:MyServiceService) { }

  ngOnInit(): void {
    this.getpatientform= new FormGroup({
      ws_pat_id:new FormControl('',Validators.required)
    });
  }

  getpatient() {

    console.log();
    this.service.getpatient( this.getpatientform.value)
      .subscribe(
        data => {
          this.p=data;
          this.failuremessage=null;
          console.log(data);
          //this.reloadData();
        },
        error => {this.failuremessage="Patient Not Found";
        this.p=null;
      }        );
  }


}
