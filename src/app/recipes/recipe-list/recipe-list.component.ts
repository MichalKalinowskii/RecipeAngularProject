import { Component,OnDestroy,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recpies.services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subs: Subscription;
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.subs = this.recipesService.recipesChanges.subscribe((recipe: Recipe[]) => {
      this.recipes = recipe;
    });
    this.recipes = this.recipesService.getRecipes();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
