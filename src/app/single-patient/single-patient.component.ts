import { Component, OnInit } from '@angular/core';
import {MyServiceService, User, Patient} from '../my-service.service';
import { Observable } from "rxjs";
import { Router } from '@angular/router';


@Component({
  selector: 'app-single-patient',
  templateUrl: './single-patient.component.html',
  styleUrls: ['./single-patient.component.css']
})
export class SinglePatientComponent implements OnInit {
  p:any;
  id : string;

  constructor(private service:MyServiceService) { }

  ngOnInit(): void {
    
  }
  
  

}
