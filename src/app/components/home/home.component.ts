import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/service/friends.service';

@Component({
  selector: 'app-main',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private friendService: FriendsService) { }

  display = "none"
  userId = 0;
  username = "";
  avatar = ""

  ngOnInit(): void {
  }

  showEvent(value: string): void {
    this.display = value;
  }

  getFrnd(userId: number): void {
    //this.user = userId
    let currentUser = this.friendService.getFriend(userId) 
  }

  getUsername(username: string) {
    this.username = username;
  }

  getAvatar(avatar: string) {
    this.avatar = avatar;
  }

}
