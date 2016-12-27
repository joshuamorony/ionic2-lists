import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-groceries',
  templateUrl: 'groceries.html'
})
export class GroceriesPage {

	groceries: any;

	constructor(public navCtrl: NavController) {

		this.groceries = [
			'Bread',
			'Milk',
			'Cheese',
			'Snacks',
			'Apples',
			'Bananas',
			'Peanut Butter',
			'Chocolate',
			'Avocada',
			'Vegemite',
			'Muffins',
			'Paper towels'
		];

	}

}