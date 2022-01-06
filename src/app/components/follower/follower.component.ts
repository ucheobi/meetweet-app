import { Component, OnInit } from '@angular/core';
import { Friends } from 'src/app/model/friends.model';
import { User } from 'src/app/model/user.model';
import { FriendsService } from 'src/app/service/friends.service';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent {

  constructor(private friendsService: FriendsService) { }


  getUserFriends(userId: number): Friends[] {
    return this.friendsService.getUserFriends(userId)
  }

  get friends() {
    console.log(this.getUserFriends(2));
    
    return this.getUserFriends(2);
  }
}
