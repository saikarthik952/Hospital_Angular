import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private httpService: HttpClient) { }


  public login(user: User) {
    
    
    const headers =new HttpHeaders().set('Content_Type', 'application/json');
    return this.httpService.post<string>("http://localhost:3423/login", user, { headers,responseType:'text' as 'json'});
  }
}
export class User

{
emailId:string;
password:string;
role:string;

constructor(emailId:string,password:string)
{
this.emailId=emailId;
this.password=password;
}
}