import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GroceriesPage } from '../groceries/groceries';
import { ContactsPage } from '../contacts/contacts';
import { LadderPage } from '../ladder/ladder';
import { NotesPage } from '../notes/notes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	tab1Root: any = GroceriesPage;
	tab2Root: any = NotesPage;
	tab3Root: any = ContactsPage;
	tab4Root: any = LadderPage;

	constructor(public navCtrl: NavController) {

	}

}