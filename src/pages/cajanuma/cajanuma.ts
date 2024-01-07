import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map'
import { TranslateService } from '@ngx-translate/core';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { File } from '@ionic-native/file';
import { Http } from '@angular/http';
import { OsoPage } from '../oso/oso';
import { TrasladoPage } from '../traslado/traslado';
import { BosquePage } from '../bosque/bosque';
import { MiradoresPage } from '../miradores/miradores';
import { LagunasPage } from '../lagunas/lagunas';
import { EcosistemicoPage } from '../ecosistemico/ecosistemico';
import { InfraestructuraPage } from '../infraestructura/infraestructura';

@IonicPage()
@Component({
  selector: 'page-cajanuma',
  templateUrl: 'cajanuma.html',
})
export class CajanumaPage {
  objeto: any;
  information: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private _translate: TranslateService,private photoViewer: PhotoViewer,private file: File,private http: Http) {
    this._translate. get ("PAGES.CAJANUMA.JSON"). subscribe (( res :  string ) => {
      this.objeto=res;
    });
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
    console.log('ionViewDidLoad CajanumaPage');
  }
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
  goToPage(item) {
    if(item=="OsoPage"){
      this.navCtrl.push(OsoPage,null);
    }else
    if(item=="BosquePage"){
      this.navCtrl.push(BosquePage,null);
    }else
    if(item=="MiradoresPage"){
      this.navCtrl.push(MiradoresPage,null);
    }else
    if(item=="LagunasPage"){
      this.navCtrl.push(LagunasPage,null);
    }else
    if(item=="InfraestructuraPage"){
      this.navCtrl.push(InfraestructuraPage,null);
    }
    else
    if(item=="EcosistemicoPage"){
      this.navCtrl.push(EcosistemicoPage,null);
    }else
    if(item=="TrasladoPage"){
      this.navCtrl.push(TrasladoPage,null);
    }
    /* else
    if(item=="PoderosaPage"){
      this.navCtrl.push(PoderosaPage,null);
    }
    else
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
    } */
    
    
   } 
  

}
