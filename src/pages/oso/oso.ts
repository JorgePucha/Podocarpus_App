import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{OsoDeAnteojosPage}from '../oso-de-anteojos/oso-de-anteojos';

/**
 * Generated class for the OsoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oso',
  templateUrl: 'oso.html',
})
export class OsoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OsoPage');
  }
  openMapa() {
    this.navCtrl.push(OsoDeAnteojosPage);
   }
}
