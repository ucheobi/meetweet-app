import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Follower } from '../../model/follower.model';
import { User } from '../../model/user.model';
import { FollowerService } from '../../service/follower.service';
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

  // get followers(): Follower[] {
  //   return this.followerService.getFollowers();
  // }


}
