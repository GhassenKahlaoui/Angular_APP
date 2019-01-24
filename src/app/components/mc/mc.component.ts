import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mc',
  templateUrl: './mc.component.html',
  styleUrls: ['./mc.component.css']
})
export class McComponent implements OnInit {
users:any[];

  constructor(private http : Http) {

   }

  ngOnInit() {
this.http.get("https://jsonplaceholder.typicode.com/users").subscribe( response => {
  this.users = response.json()
})
  }


}
