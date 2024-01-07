import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { NgForm } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-correo',
  templateUrl: 'correo.html',
})
export class CorreoPage {
  public orderForm: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorreoPage');
  }
  send(numero,email1,comentario) {
    console.log(email1);
    // alert(‘senemail enter’);
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
    
    }
    
    




    }
  

