import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private httpService: HttpClient) { }
  private baseUrl = "http://localhost:3423/patient/";

  public login(user: User) {
    
    
    const headers =new HttpHeaders().set('Content_Type', 'application/json');
    return this.httpService.post<string>("http://localhost:3423/login", user, { headers,responseType:'text' as 'json'});
  }
  public addpatient(data: string) {
    
    
    const headers =new HttpHeaders().set('Content_Type', 'application/json');
    return this.httpService.post<string>("http://localhost:3423/patient/add", data, { headers,responseType:'text' as 'json'});
  }
  public updatepatient(data: string) {
    
    
    const headers =new HttpHeaders().set('Content_Type', 'application/json');
    return this.httpService.put<string>("http://localhost:3423/patient/updatepatient", data, { headers,responseType:'text' as 'json'});
  }
  public deletepatient(data: string) {
    
    
    const headers =new HttpHeaders().set('Content_Type', 'application/json');
    return this.httpService.put<string>("http://localhost:3423/patient/deletepatient", data, { headers,responseType:'text' as 'json'});
  }
  public getpatient(data: Patient): Observable<Patient> {
    
    
    const headers =new HttpHeaders().set('Content_Type', 'application/json');
    return this.httpService.put<Patient>("http://localhost:3423/patient/getpatient", data, { headers,responseType:'json'});
  }

  public  deletePatientById(id: number): Observable<any> {

    return this.httpService.delete('http://localhost:3423/patient/'+ id, { responseType: 'text' });
  }
  getallpatients():Observable<any> {
    console.log("Getting")
    
    return this.httpService.get("http://localhost:3423/patient/viewpatients");
    
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
export interface Patient
{ ws_pat_id:string;
   ws_pat_name:string;
 ws_pat_ssn:string;
   ws_pat_adrs:string;
 ws_pat_age:string;
 ws_pat_dob:string;
   ws_pat_type:string;
   ws_pat_city:string;
   ws_pat_state:string;
   ws_pat_status:string;
 

}