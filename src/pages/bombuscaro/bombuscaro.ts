import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChismosaPage } from '../chismosa/chismosa';
import { PoderosaPage } from '../poderosa/poderosa';
import { UrruquitaPage } from '../urruquita/urruquita';
import { TransportePage } from '../transporte/transporte';
import { HigueronesPage } from '../higuerones/higuerones';
import { MiradorPage } from '../mirador/mirador';
import { CabaniaPage } from '../cabania/cabania';
import { RioBombuscaroPage } from '../rio-bombuscaro/rio-bombuscaro';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { TranslateService } from '@ngx-translate/core';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { File } from '@ionic-native/file';
@IonicPage()
@Component({
  selector: 'page-bombuscaro',
  templateUrl: 'bombuscaro.html',
})
export class BombuscaroPage {
  objeto: any;
  information: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,private _translate: TranslateService,private photoViewer: PhotoViewer,private file: File) {
    this._translate. get ("PAGES.BOMBUSCARO.JSON"). subscribe (( res :  string ) => {
      this.objeto=res;
    });
    /* this.objeto = navParams.data; */
    console.log(this.objeto); 
    let localData = http.get('assets/'+this.objeto).map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
      console.log(this.information);
    })
  }
  openImage() {
    this.photoViewer.show(this.file.applicationDirectory+'www/assets/imgs/cajanuma.jpg', "", { share: false });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BombuscaroPage');
  }
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
  goToPage(item) {
    if(item=="ChismosaPage"){
      this.navCtrl.push(ChismosaPage,null);
    }else
    if(item=="PoderosaPage"){
      this.navCtrl.push(PoderosaPage,null);
    }else
    if(item=="RioBombuscaroPage"){
      this.navCtrl.push(RioBombuscaroPage,null);
    }else
    if(item=="UrruquitaPage"){
      this.navCtrl.push(UrruquitaPage,null);
    }else
    if(item=="HigueronesPage"){
      this.navCtrl.push(HigueronesPage,null);
    }else
    if(item=="MiradorPage"){
      this.navCtrl.push(MiradorPage,null);
    }else
    if(item=="CabaniaPage"){
      this.navCtrl.push(CabaniaPage,null);
    }else
    if(item=="TransportePage"){
      this.navCtrl.push(TransportePage,null);
    }
    
    
   } 

}
