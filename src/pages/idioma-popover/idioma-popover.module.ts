import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdiomaPopoverPage } from './idioma-popover';

@NgModule({
  declarations: [
    IdiomaPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(IdiomaPopoverPage),
  ],
})
export class IdiomaPopoverPageModule {}
