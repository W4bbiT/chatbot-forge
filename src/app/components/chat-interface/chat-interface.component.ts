import { Component, OnInit} from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.css']
})
export class ChatInterfaceComponent {

  message: string = '';
  messages: string[] = [];

  constructor(private chatService: ChatService) {}

  sendMessage() {
    this.chatService.sendMessage(this.message).subscribe((response: string) => {
      this.messages.push(this.message);
      this.messages.push(response);
      this.message = '';
    });
  }
}
