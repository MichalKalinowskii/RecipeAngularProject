import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromAuth from '../store/app.reducer';


@Injectable({ providedIn: 'root' })
export class RecipesService {
  recipesChanges = new Subject<Recipe[]>();

  //private recipes: Recipe[] = [
  //  new Recipe('Spaghetti', 'Italian dish', 'https://static.fajnegotowanie.pl/media/uploads/media_image/auto/recipe-content/7788/desktop/spaghetti-napolitana.jpg.webp',
  //    [
  //      new Ingredient('Pasta', 1),
  //      new Ingredient('Tomatoes', 3),
  //      new Ingredient('Cheese', 1)
  //    ]
  //  ),
  //  new Recipe('Kotlet Schabowy', 'Polish dish', 'https://bi.im-g.pl/im/19/12/1b/z28385561IH,kotlet-schabowy.jpg',
  //    [
  //      new Ingredient('Meat', 1),
  //      new Ingredient('Potatoes', 5),
  //      new Ingredient('Salad', 1)
  //    ]
  //  )
  //];
  private recipes: Recipe[] = [];

  constructor(
    private store: Store<fromAuth.AppState>
  ) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanges.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanges.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanges.next(this.recipes.slice());
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanges.next(this.recipes.slice());

  }

}
