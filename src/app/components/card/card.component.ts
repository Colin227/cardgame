import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Card } from '../../models';

export interface CardConfig  {
  id: string;
  title: string;
  displayed: boolean;
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
  @Output() cardPlayed = new EventEmitter<Card>();

  playCard() {
    this.cardPlayed.emit({id: this.config.id, title: this.config.title, displayed: false});
  }

}
