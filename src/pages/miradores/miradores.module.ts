import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiradoresPage } from './miradores';

@NgModule({
  declarations: [
    MiradoresPage,
  ],
  imports: [
    IonicPageModule.forChild(MiradoresPage),
  ],
})
export class MiradoresPageModule {}
