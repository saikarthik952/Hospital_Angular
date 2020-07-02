import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyServiceService } from './my-service.service';
import { CashHomeComponent } from './cash-home/cash-home.component';
import { CashHomePageComponent } from './cash-home-page/cash-home-page.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { PharmaHomeComponent } from './pharma-home/pharma-home.component';
import { DiagHomeComponent } from './diag-home/diag-home.component';
import { BillingComponent } from './billing/billing.component';
@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    
    CashHomeComponent,
    
    CashHomePageComponent,
    
    AddPatientComponent,
    
    UpdatePatientComponent,
    
    AllPatientsComponent,
    
    DeletePatientComponent,
    
    PharmaHomeComponent,
    
    DiagHomeComponent,
    
    BillingComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
