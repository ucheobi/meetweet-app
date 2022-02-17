import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Friends } from '../../model/friends.model';
import { UserRegister, UserSignin } from '../../model/user.model';
import { FriendsService } from '../../service/friends.service';
import { UserService } from '../../service/user.service';
import { UserRepository } from '../../repository/user.repository';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  submitted: boolean = false;

  constructor(
  ) { }

  registerModel = new UserRegister(100, "username", "youremail@yahoo.com", "12345", "12345", true)

  loginModel = new  UserSignin("Youremail@yahoo.com", "12345")
  // get followers(): Follower[] {
  //   return this.followerService.getFollowers();
  // }

  onSubmit() {
    console.log(this.registerModel);  
  }

  loginUser(){
    console.log(this.loginModel);  
  }


}
