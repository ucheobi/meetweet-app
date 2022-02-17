import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Chat } from '../chat.model';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  @Input() show: string | undefined;
  @Input() frndId: number | undefined;
  @Input() username: string | undefined;
  @Input() avatar: string | undefined;


  constructor( public chatService: ChatService,) { }

  ngOnInit(): void {
    this.chatService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.chatService.closeWebSocket();
  }

  sendMessage(sendMsg: NgForm) {
    const chatMsg = new Chat(sendMsg.value.user, sendMsg.value.message);
    this.chatService.sendMessage(chatMsg);
    sendMsg.controls.message.reset();
  }
  
  showDate(): string {
    return new Date().toLocaleString()
  }

  hideChat() {
    this.show = "none"
  }

  getFriend(id: number) {
    this.chatService.getUserFriend(id)
  }

}
