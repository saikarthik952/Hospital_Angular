import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CashHomeComponent } from './cash-home/cash-home.component';


const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'cashHome',component:CashHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
