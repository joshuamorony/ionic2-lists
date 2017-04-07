import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-groceries',
  templateUrl: 'groceries.html'
})
export class Groceries {

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