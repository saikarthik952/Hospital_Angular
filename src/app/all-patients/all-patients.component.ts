import { Component, OnInit } from '@angular/core';
import {MyServiceService, User, Patient} from '../my-service.service';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {

  patients: Observable<Patient[]>;

  constructor(private service:MyServiceService) { }

  ngOnInit(): void {
    this.reloadData();
    
  }
  reloadData() {
    
    this.patients = this.service.getallpatients();
    console.log(this.patients);
    console.log("component");
  }

  deletePatientById(id: number) {
    console.log(Number(id));
    this.service.deletePatientById(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  

}
