import { Component, OnInit } from '@angular/core';

import {MyServiceService, User} from '../my-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    submitted = false;
    message:string;
  constructor(private formBuilder: FormBuilder,private service: MyServiceService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      
      emailId: new FormControl('',Validators.email),
      password: new FormControl('',Validators.minLength(9))
  });

  }
  login() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
   
this.service.login(new User(this.loginForm.controls.emailId.value,this.loginForm.controls.password.value)).subscribe((data)=>{
  console.log(data);
  if(data=="user not found")
  this.message=data;
  else if(data=="password incorrect")
  this.message=data;
  else{
    localStorage.setItem("role",data);
    if(data=="cash")
    {this.router.navigate(['cash/Homepage']);
    this.message=data;
    }else if(data=="pharamcist")
    this.message=data;
   else if(data=="pharamcist")
   this.message=data;
    
  }


});
    
}

}
