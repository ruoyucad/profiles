import { Component, OnInit } from '@angular/core';
import{DataService} from '../../services/data.service';
import { post } from 'selenium-webdriver/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];

  constructor(private dataService:DataService) { 
    console.log("constructor run...");

  }

  ngOnInit() {
    console.log("ngOnInit Run...");
    this.name ="Angelo";
    this.age = 29;
    this.email ='123@gmail.com';
    this.hobbies=['eat','pray','love'];
    this.address = {
      street : '50 main St',
      city : 'Boston',
      state : 'MA'
    };
    this.dataService.getPosts().subscribe((post)=>{
      console.log(post);
      this.posts = post;
    })
  }

  onClick(){
    console.log("button clicked");
    this.name='JJ';
    this.hobbies.push('New hobby added')
  }

  addHobby(hobby){
    console.log(hobby+" added");
    this.hobbies.unshift(hobby);
  }

  deleteHobby(hobby){
    for(let i =0; i<this.hobbies.length;i++){
      if (this.hobbies[i]==hobby) {
        this.hobbies.splice(i,1);
      }
    }
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}
interface Post{
  id:number;
  title:string;
  body:string;
  userId:number;
}