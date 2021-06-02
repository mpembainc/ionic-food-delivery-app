import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent {
  @Input() item: Food;

  @Output() clicked = new EventEmitter();
}
