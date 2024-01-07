import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the NosotrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nosotros',
  templateUrl: 'nosotros.html',
})
export class NosotrosPage {
  modal: any; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NosotrosPage');
  }
  /* backButtonAction(){
    if(this.modal && this.modal.index === 0) { 
     this.modal.dismiss(); 
    } else { 
     this.navCtrl.setRoot(HomePage);
    } 
   }  */

}
