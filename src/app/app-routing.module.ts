import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CashHomeComponent } from './cash-home/cash-home.component';
import { CashHomePageComponent } from './cash-home-page/cash-home-page.component';
import { AddPatientComponent } from './add-patient/add-patient.component';


const routes: Routes = [
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
      
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
