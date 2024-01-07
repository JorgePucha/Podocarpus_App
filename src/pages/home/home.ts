import { Component,ViewChild } from '@angular/core';
import { NavController,Nav,PopoverController,MenuController } from 'ionic-angular';
import{IdiomaPopoverPage}from '../idioma-popover/idioma-popover';
// Componentes externos que realizan peticiones
import { TranslateService } from '@ngx-translate/core';
import{BombuscaroPage}from '../bombuscaro/bombuscaro';
import{CajanumaPage}from '../cajanuma/cajanuma';
import{MiguelPopoverPage}from '../miguel-popover/miguel-popover';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',



})
export class HomePage {
  selectedData:any = {title:"Español",id:"es",img:"espanol.jpg",detalle:"informacion.json"};
  @ViewChild('NAV') nav:Nav;
  dish: any;
  idioms: any[] = [];
  /* file:MediaObject = this.media.create('../assets/audio/Asesina.mp3'); */
  flipState: String = 'notFlipped';
  flyInOutState: String = 'in';
  fadeState: String = 'visible';
  bounceState: String = 'noBounce';
 
  constructor(
    public navCtrl: NavController,
    private _translate: TranslateService,
    public popoverCtrl:PopoverController,
    public menuCtrl: MenuController
  ) {
    
    this.idioms = [
      {
        value: 'es',
        label: 'Español'
      },
      {
        value: 'en',
        label: 'Ingles'
      }
    ];
  }

  /**
   * Cambia el idioma mediante el servicio de @ngx-translate.
   * @param idioma recibe idioma en formato de XX.
   */
  cambiaIdioma(idioma: string) {
    console.log(`Traduzco a: ${idioma}`);
    this._translate.use(idioma);
  }
  openIdiomaPopover(event){
    let popover=this.popoverCtrl.create(IdiomaPopoverPage);
    popover.present({
      ev:event
    });
  }
  presentPopover(ev) {
    let listData = [{title:"Español",id:"es",img:"espanol.jpg",detalle:"informacion.json"},{title:"English",id:"en",img:"ingles.jpg",detalle:"information.json"}]
    let popover = this.popoverCtrl.create(IdiomaPopoverPage, { listData });
    popover.present({
      ev: ev
    });
    popover.onDidDismiss(data => {
     console.log(data);
     if(data!=null){
        /* this.selectedData = data
        this._translate.use(data.id); */
        this.selectedData = data
        this._translate.use(data);
     }
   })
  }
  choose(lang) {
    
    this._translate.use(lang);
  }
  openBombuscaro() {
    /* this.nativeAudio.stop('reggae'); */
    this.navCtrl.push(BombuscaroPage);
   }
   openMiguelPopover(event){
    let popover=this.popoverCtrl.create(MiguelPopoverPage);
    popover.present({
      ev:event
    });
  }
  openMenu() {
    this.menuCtrl.open();
  }
  openCajanuma() {
    this.navCtrl.push(CajanumaPage);
   }
 
}
