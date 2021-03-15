import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

Ingridients:Ingredient[] = [
  new Ingredient('Apple', 5),
  new Ingredient('Lemons', 2),
];

  constructor() { }

  ngOnInit(): void {
  }

}
