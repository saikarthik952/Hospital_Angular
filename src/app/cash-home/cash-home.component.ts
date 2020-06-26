import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-home',
  templateUrl: './cash-home.component.html',
  styleUrls: ['./cash-home.component.css']
})
export class CashHomeComponent implements OnInit {
user:string;
  constructor() { }

  ngOnInit(): void {
    this.user=localStorage.getItem('role');
  }

}
