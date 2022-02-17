import { Injectable } from '@angular/core';
import { FriendsService } from '../service/friends.service';
import { Chat } from './chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  webSocket!: WebSocket;
  chatMessages: Chat[] = [];

  constructor(public friendService: FriendsService) { }

  getUserFriend(id: number): any {
    return this.friendService.getFriend(id)
  }

  public openWebSocket() {
    this.webSocket = new WebSocket('ws://localhost:3800/chat');

    this.webSocket.onopen = event =>  console.log('Open: ', event);

    this.webSocket.onmessage = event => {
      const chatMsg = JSON.parse(event.data);
      this.chatMessages.push(chatMsg);
    };

    this.webSocket.onclose = event => console.log('Close', event);
  }

  public sendMessage(chatMsg: Chat) {
    this.webSocket.send(JSON.stringify(chatMsg));
  }

  public closeWebSocket = () => this.webSocket.close(); 
}
