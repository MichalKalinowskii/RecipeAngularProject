import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasPassed = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe1', 'Test desc1','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Test Recipe2', 'Test desc2','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];

  //getStuff() {
  //  this.recipes[0].imagePath
  //}

  constructor() { }

  ngOnInit(): void {
  }

  OnRecipeToPass(recipe: Recipe) {
    this.recipeWasPassed.emit(recipe);
  }

}
