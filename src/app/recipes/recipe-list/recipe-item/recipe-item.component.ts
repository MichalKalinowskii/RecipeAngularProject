import { Input, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItems: Recipe;
  @Output() recipeToPass = new EventEmitter <void>();

  constructor() { }

  ngOnInit(): void {
  }

  passRecipe(recipeItem: Recipe) {
    this.recipeToPass.emit();
  }

}
