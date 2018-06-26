import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Feta and Spinach Filo Pie',
      'A super quick and brilliantly simple feta and spinach pie',
      'https://www.eatlivetravelwrite.com/wp-content/uploads/2012/01/DSC_9249.jpg'
    ),
    new Recipe(
      'Test 2',
      'Test 2',
      'https://www.seriouseats.com/recipes/images/2016/08/20160827-cherry-tomato-pasta-13.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
