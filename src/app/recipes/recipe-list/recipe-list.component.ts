import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';  //import Model recipe

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
//Add recipe objects to this array using Recipe class
recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test ','https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
  new Recipe('A Test Recipe', 'This is simply a test ','https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg')
];

  constructor() { }

  ngOnInit() {
  }

}
