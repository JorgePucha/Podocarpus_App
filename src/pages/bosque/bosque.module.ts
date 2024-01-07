import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BosquePage } from './bosque';

@NgModule({
  declarations: [
    BosquePage,
  ],
  imports: [
    IonicPageModule.forChild(BosquePage),
  ],
})
export class BosquePageModule {}
