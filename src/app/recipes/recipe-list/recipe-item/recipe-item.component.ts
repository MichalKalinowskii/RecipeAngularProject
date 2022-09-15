import { Input, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recpies.services';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItems: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  passRecipe() {
    this.recipesService.recipeSelected.emit(this.recipeItems);
  }

}
