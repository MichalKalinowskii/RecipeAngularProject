import { EventEmitter } from "@angular/core";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable({ providedIn: 'root' })
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Spaghetti', 'Italian dish', 'https://static.fajnegotowanie.pl/media/uploads/media_image/auto/recipe-content/7788/desktop/spaghetti-napolitana.jpg.webp',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Tomatoes', 3),
        new Ingredient('Cheese',1)
      ]
    ),
    new Recipe('Kotlet Schabowy', 'Polish dish', 'https://bi.im-g.pl/im/19/12/1b/z28385561IH,kotlet-schabowy.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Potatoes', 5),
        new Ingredient('Salad', 1)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

}
