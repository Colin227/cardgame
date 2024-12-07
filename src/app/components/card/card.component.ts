import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

export interface CardConfig  {
  id: string;
  title: string;
  viewOnly?: boolean;
  subtitle?: string;
  content?: string;
}


@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) config!: CardConfig;
  @Output() cardPlayed = new EventEmitter<string>();

  playCard() {
    this.cardPlayed.emit(this.config.id);
  }

}
