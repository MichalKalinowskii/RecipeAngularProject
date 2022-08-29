import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test desc','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Test Recipe', 'Test desc','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];

  getStuff() {
    this.recipes[0].imagePath
  }

  constructor() { }

  ngOnInit(): void {
  }

}
