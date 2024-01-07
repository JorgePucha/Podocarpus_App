import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FloraPage } from './flora';

@NgModule({
  declarations: [
    FloraPage,
  ],
  imports: [
    IonicPageModule.forChild(FloraPage),
  ],
})
export class FloraPageModule {}
