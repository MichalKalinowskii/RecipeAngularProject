////import { Injectable } from "@angular/core";
////import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
////import { Observable } from 'rxjs';
////import { Ingredient } from "../../shared/ingredient.model";
////import { RecipesService } from "../recpies.services";



////interface RecipeDetail {
////  id: number;
////  name: string;
////  description: string;
////  imagePath: string;
////  ingredients: Ingredient[]
////}

////@Injectable({ providedIn: 'root' })
////export class RecipeDetailResolver implements Resolve<RecipeDetail> {
////  constructor(private recipesService: RecipesService) { }

////  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RecipeDetail> | Promise<RecipeDetail> | RecipeDetail {
////    return this.recipesService.getRecipe(+route.params['id']);
////  }

////}
