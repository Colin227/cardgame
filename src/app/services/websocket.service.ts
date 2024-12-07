import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { Message } from '../models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket$: WebSocketSubject<Message[]>;

  constructor() {
    this.socket$ = webSocket(`ws://${environment.apiUrl}`);
  }

  sendMessage = (message: Message[]) => {
    this.socket$.next(message);
  }

  getMessages(): Observable<Message[]> {
    return this.socket$.asObservable();
  }

  closeConnection = () => {
    this.socket$.complete();
  }
}
