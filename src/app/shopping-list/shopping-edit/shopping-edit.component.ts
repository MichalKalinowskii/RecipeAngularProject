import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdd = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    this.ingredientAdd.emit({
      name: this.nameInput.nativeElement.value,
      amount: parseInt(this.amountInput.nativeElement.value)
    });
  }

}
