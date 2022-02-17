import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from 'src/app/chat/chat.service';
import { Friends } from 'src/app/model/friends.model';
import { UserRegister } from 'src/app/model/user.model';
import { FriendsService } from 'src/app/service/friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FollowerComponent {

  @Output() display = new EventEmitter<string>();
  @Output() user = new EventEmitter<number>();
  @Output() username = new EventEmitter<string>();
  @Output() avatar = new EventEmitter<string>();
  
  showChatWindowAndDetails(id: number): void{
    this.display.emit('block');
    this.getFriendDetails(id)
  }

  constructor(private friendsService: FriendsService, private chatService: ChatService) { }

  getUserFriends(userId: number): Friends[] {
    return this.friendsService.getUserFriends(userId)
  }

  get friends() {
    return this.getUserFriends(2);
  }

  getFriendDetails(id: number) {
    let friendDetails = this.friends.find(friend => friend.id == id);

    this.user.emit(friendDetails?.id)
    this.username.emit(friendDetails?.username)
    this.avatar.emit(friendDetails?.avatarUrl)
  }
}
