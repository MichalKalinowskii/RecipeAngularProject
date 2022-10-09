import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipesService } from "../recipes/recpies.services";
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import * as fromApp from '../store/app.reducer';
import * as RecipesActions from '../recipes/store/recipe.actions';
import { Store } from "@ngrx/store";

@Injectable({ providedIn: 'root' })
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipesService, private store: Store<fromApp.AppState>) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://udemy-course-fa369-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes).subscribe(response => {
      console.log(response)
    });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://udemy-course-fa369-default-rtdb.europe-west1.firebasedatabase.app/recipes.json').pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
        })
      }),
      tap(recipes => {
        //this.recipeService.setRecipes(recipes);
        this.store.dispatch(new RecipesActions.SetRecipes(recipes));
      })
    );
  }
}
