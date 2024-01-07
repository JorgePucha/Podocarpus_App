import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaunaPage } from './fauna';

@NgModule({
  declarations: [
    FaunaPage,
  ],
  imports: [
    IonicPageModule.forChild(FaunaPage),
  ],
})
export class FaunaPageModule {}
