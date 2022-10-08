import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recpies.services';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  id: number;
  constructor(
    private recipesServices: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeDetail = this.recipesServices.getRecipe(this.id);
      }
    );
  }

  onAddIngredientsToShoppingList() {
    this.recipesServices.addIngredientsToShoppingList(this.recipeDetail.ingredients);
  }

  deleteRecipe() {
    this.recipesServices.removeRecipe(this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
