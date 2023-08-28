import { Component, OnInit } from '@angular/core';
import { OpenAiService } from '../services/open-ai.service';
import { ITextCompletionDto } from '../dto/openai-text-completion.request';
import { IOpenAiChoice, IOpenAiMessage } from '../dto/openai-choice';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: { text: string; sender: 'user' | 'bot' }[] = [];
  inputText = '';
  isLoading = false;

  constructor(private openAiService: OpenAiService) { }

  ngOnInit(): void {
    this.addBotMessage('Hello! How can I assist you?');
  }

  addUserMessage(message: string) {
    this.messages.push({ text: message, sender: 'user' });
    this.generateBotReply(message);
    this.inputText = ''; // Clear the input field
  }

  addBotMessage(message: string) {
    this.messages.push({ text: message, sender: 'bot' });
  }

  generateBotReply(userMessage: string) {
    const request: ITextCompletionDto = {
      prompt: userMessage
    }
    this.isLoading = true;
    this.openAiService.generateContentForChat(request)
      .subscribe((message: IOpenAiMessage) => {
        this.isLoading = false;
        this.addBotMessage(message.content);
      });
  }
}
