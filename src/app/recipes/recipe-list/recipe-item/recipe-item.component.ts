import { Input} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItems: Recipe;
  @Input() index: number;

  ngOnInit(): void {
  }

}
