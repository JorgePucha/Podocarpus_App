import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,Platform,ToastController,App , ModalController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { EmailComposer } from '@ionic-native/email-composer';
import { NgForm,FormsModule } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
  numero:string = '';
  email1:string = '';
  comentario:string = '';
  public orderForm: any;
  title1: any;
  subTitle1: any;
  modal: any; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public platform: Platform,private _translate: TranslateService,private emailComposer: EmailComposer) {
  this.orderForm=NgForm;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }
  enviar(){
    this._translate. get ("PAGES.CONTACTO.ALERT_TITLE"). subscribe (( res :  string ) => {
      this.title1=res;
    });
    this._translate. get ("PAGES.CONTACTO.ALERT_SUBTITLE"). subscribe (( res :  string ) => {
      this.subTitle1=res;
    });
    let alert=this.alertCtrl.create({
        title: this.title1,
        subTitle: this.subTitle1,
        buttons: ['OK']
      });
    alert.present();
  }
  send(numero,email1,comentario) {
    /* console.log(email1); */
    this._translate. get ("PAGES.CONTACTO.ALERT_TITLE"). subscribe (( res :  string ) => {
      this.title1=res;
    });
    this._translate. get ("PAGES.CONTACTO.ALERT_SUBTITLE"). subscribe (( res :  string ) => {
      this.subTitle1=res;
    });
    let email = {
      to: 'jorge28pucha@gmail.com',
      cc: email1,
      bcc: [email1, ''],
      attachments: [],
      subject: 'Contacto con Podocarpus Tourist Guide',
      body: comentario+'<p>Phone Number: ' +numero,
      isHtml: true
    };
    this.emailComposer.open(email);
    let alert=this.alertCtrl.create({
      title: this.title1,
      subTitle: this.subTitle1,
      buttons: ['OK']
    });
    alert.present();
    this.clearSearch();
    }
    clearSearch() {
      this.numero = null;
      this.email1 = null;
      this.comentario = null;
    }
  
}
