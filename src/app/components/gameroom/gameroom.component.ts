import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Observable, Subscription, tap } from 'rxjs';
import { WebsocketService } from '../../services/websocket.service';
import { Message, Card, cards } from '../../models';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-gameroom',
  imports: [CardComponent, MatDividerModule, MatButtonModule],
  templateUrl: './gameroom.component.html',
  styleUrl: './gameroom.component.scss'
})
export class GameroomComponent {

  playedCards: any[] = [];
  allCards = cards;
  private _messageSubscription!: Subscription;

  constructor(private _webSocketService: WebsocketService) {}

  ngOnInit(): void {
    this._messageSubscription = this._webSocketService.getMessages().subscribe({
      next: (cards) => {
        console.log("message receieved: ", cards);
        // Clear current stored card list and replace with response from backend
        this.playedCards.length = 0;
        for (const card of cards) {
          this.playedCards.push(card)
        }
      },
      error: (err) => {
        console.log('error on subscribe: ', err)
      }
  })
  }

  sendMessage(messageData: any) {
    const message: Message = { type: 'cardplayed', data: messageData };
    this._webSocketService.sendMessage([message]);
  }

  ngOnDestroy(): void {
    this._messageSubscription.unsubscribe();
    this._webSocketService.closeConnection();
  }

  playCard(card: Card) {
    console.log("game room card played: ", card);
    this.sendMessage(card);
  }

  resetBoard() {
    const message: Message = { type: 'reset', data: 'no_data_needed'};
    this._webSocketService.sendMessage([message]);
  }

  flipCard(card: Card) {
    const message: Message = { type: 'flipCard', data: card};
    this._webSocketService.sendMessage([message]);
  }

  flipAllCards() {    
    this._webSocketService.sendMessage([{ type: 'flipAllCards', data: ''}]);
  }
}
