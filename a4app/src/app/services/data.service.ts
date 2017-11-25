import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {

  constructor(public http:Http) {console.log('Data service connected...');}
  
  getPosts()
  {
    return this.http.get('http://127.0.0.1:5002/tracks')
    .map(res => res.json());
  }
  
    
}
