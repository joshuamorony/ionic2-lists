import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactsPage } from '../pages/contacts/contacts';
import { GroceriesPage } from '../pages/groceries/groceries';
import { LadderPage } from '../pages/ladder/ladder';
import { NotesPage } from '../pages/notes/notes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactsPage,
    GroceriesPage,
    LadderPage,
    NotesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactsPage,
    GroceriesPage,
    LadderPage,
    NotesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
