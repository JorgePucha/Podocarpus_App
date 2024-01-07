import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-idioma-popover',
  templateUrl: 'idioma-popover.html',
})
export class IdiomaPopoverPage {
  items:any;
  public status:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,private _translate: TranslateService) {
    this._translate. get ("PAGES.HOME.RADIO"). subscribe (( res :  string ) => {
      this.status=res;
    });
/*     this.status=1; */
    this.items = this.navParams.get('listData');
    console.log(this.items)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdiomaPopoverPage');
  }
  close(){
    this.viewCtrl.dismiss();
  }
  dismiss(item) {
    let data = item;
    this.viewCtrl.dismiss(data);
  }

}
