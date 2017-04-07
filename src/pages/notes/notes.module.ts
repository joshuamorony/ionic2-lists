import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Notes } from './notes';

@NgModule({
  declarations: [
    Notes
  ],
  imports: [
    IonicPageModule.forChild(Notes),
  ],
  exports: [
    Notes
  ]
})
export class NotesModule {}
