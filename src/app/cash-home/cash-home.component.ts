import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cash-home',
  templateUrl: './cash-home.component.html',
  styleUrls: ['./cash-home.component.css']
})
export class CashHomeComponent implements OnInit {
user:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
   
    this.user=localStorage.getItem('role');
    if(this.user!="cash")
    {
      localStorage.clear();
    this.router.navigate(['login']);
    }
    

  }

}
