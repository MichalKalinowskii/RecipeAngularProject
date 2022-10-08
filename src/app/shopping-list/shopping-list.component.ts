import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredientList: Observable<{ ingredients: Ingredient[] }> ;

  //private subscription: Subscription;

  constructor(
    private store: Store<fromShoppingList.AppState>
  ) { }

  ngOnInit(): void {
    this.ingredientList = this.store.select('shoppingList');
    //this.ingredientList = this.shoppingListService.getIngredientList();
    //this.subscription=this.shoppingListService.ingredientsChanged.subscribe(
    //  (ingredients: Ingredient[]) => {
    //    this.ingredientList = ingredients;
    //  }
    //);
  }

  onEditItem(index: number) {
    //this.shoppingListService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }




}
