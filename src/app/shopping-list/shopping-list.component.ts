import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('chicken', 12),
    new Ingredient('Onions', 10),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Lemon', 4),

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
