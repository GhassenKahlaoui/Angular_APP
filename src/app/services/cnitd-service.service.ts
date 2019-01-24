import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CnitdServiceService {


  constructor( private http : Http) { 



  }

  //call Api 

  getPost() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

}
