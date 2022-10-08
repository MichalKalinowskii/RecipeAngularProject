////import { Injectable } from "@angular/core";
////import { Ingredient } from "../shared/ingredient.model";
////import { Subject } from 'rxjs';

////@Injectable({ providedIn:'root'})
////export class ShoppingListService {

////  ingredientsChanged = new Subject<Ingredient[]>();
////  startedEditing = new Subject<number>();
////  private ingredientList: Ingredient[] = [
////    new Ingredient('Apples', 5),
////    new Ingredient('Banana', 6)
////  ];

////  getIngredientList() {
////    return this.ingredientList.slice();
////  }

////  getIngredient(index: number) {
////    return this.ingredientList[index];
////  }

////  addIngredient(ingredient: Ingredient) {
////    this.ingredientList.push(ingredient);
////    this.ingredientsChanged.next(this.ingredientList.slice());
////  }

////  addIngredients(ingredients: Ingredient[]) {
////    this.ingredientList.push(...ingredients);
////    this.ingredientsChanged.next(this.ingredientList.slice());
////  }

////  updateIngredient(index: number, newIngredient: Ingredient) {
////    this.ingredientList[index] = newIngredient;
////    this.ingredientsChanged.next(this.ingredientList.slice());
////  }

////  removeIngredient(index: number) {
////    this.ingredientList.splice(index, 1);
////    this.ingredientsChanged.next(this.ingredientList.slice());
////  }

////}
