import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Tajine',
      'Moroccan tajine',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FTpsUQ7SbTXs%2Fmaxresdefault.jpg&f=1&nofb=1'
    ),
    new Recipe('Pizza',
      'Italian Pizza',
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fla-cucina.fr%2Fwp-content%2Fuploads%2F2014%2F07%2Fgal1.jpg&f=1&nofb=1'
    )
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  public onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
