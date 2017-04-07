import { Component } from '@angular/core';
import { IonicPage, NavController, reorderArray } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ladder',
  templateUrl: 'ladder.html'
})
export class Ladder {

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