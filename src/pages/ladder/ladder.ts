import { Component } from '@angular/core';
import { NavController, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-ladder',
  templateUrl: 'ladder.html'
})
export class LadderPage {

	ladder: any;

	constructor(public navCtrl: NavController) {

		this.ladder = [
			'Adelaide',
			'Collingwood',
			'Essendon',
			'Hawthorn',
			'Carlton',
			'Sydney',
			'Western Bulldogs',
			'West Coast',
			'Fremantle',
			'North Melbourne',
			'Richmond',
			'Greater Western Sydney',
			'St Kilda',
			'Geelong',
			'Brisbane',
			'Melbourne',
			'Port Adelaide',
			'Gold Coast'
		];

	}

	reorderItems(indexes){
		this.ladder = reorderArray(this.ladder, indexes);
	}

}