import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

	tab1Root: any = 'Groceries';
	tab2Root: any = 'Notes';
	tab3Root: any = 'Contacts';
	tab4Root: any = 'Ladder';

	constructor(public navCtrl: NavController) {

	}

}