import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiradorPage } from './mirador';

@NgModule({
  declarations: [
    MiradorPage,
  ],
  imports: [
    IonicPageModule.forChild(MiradorPage),
  ],
})
export class MiradorPageModule {}
