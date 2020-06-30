import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CashHomeComponent } from './cash-home/cash-home.component';
import { CashHomePageComponent } from './cash-home-page/cash-home-page.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { SinglePatientComponent } from './single-patient/single-patient.component';

import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { PharmaHomeComponent } from './pharma-home/pharma-home.component';
const routes: Routes = [ {
  path:'pharmahome',component:PharmaHomeComponent

},
  {path:'',redirectTo:'login', pathMatch: 'full' },
  {

    path:'login',component:LoginComponent
  },
  {
    path:'cash',component:CashHomeComponent,
    children:[
      {

        path:'Homepage',component:CashHomePageComponent
        
      },
      {

        path:'addpatient',component:AddPatientComponent
        
      },
      {

        path:'updatepatient',component:UpdatePatientComponent
        
      },
      {

        path:'deletepatient',component:DeletePatientComponent
        
      },
      {

        path:'viewpatients',component:AllPatientsComponent
        
      },
      {

        path:'singlepatient',component:AllPatientsComponent
        
      },

     
      
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
