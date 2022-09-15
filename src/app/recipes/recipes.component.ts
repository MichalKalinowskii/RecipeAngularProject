import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recpies.services';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  passedRecipe: Recipe;
  constructor(private recpiesService: RecipesService) { }

  ngOnInit(): void {
    this.recpiesService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.passedRecipe = recipe;
      }
    );
  }

}
