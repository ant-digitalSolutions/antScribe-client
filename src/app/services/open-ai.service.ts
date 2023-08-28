import { IOpenAiChoice, IOpenAiMessage } from './../dto/openai-choice';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITextCompletionDto } from '../dto/openai-text-completion.request';


@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  private backendUrlBase = 'http://localhost:3000/ai/'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  generateContent(prompt: ITextCompletionDto): Observable<IOpenAiChoice> {
    return this.http.post<IOpenAiChoice>(this.backendUrlBase + 'generate-content', { prompt });
  }

  generateContentForChat(prompt: ITextCompletionDto): Observable<IOpenAiMessage> {
    return this.http.post<IOpenAiMessage>(this.backendUrlBase + 'chat', prompt);
  }
}
