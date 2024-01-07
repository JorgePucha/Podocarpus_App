import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, AlertController, IonicApp } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NosotrosPage } from '../pages/nosotros/nosotros';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { CorreoPage } from '../pages/correo/correo';
import { HomePage } from '../pages/home/home';
import { FloraPage } from '../pages/flora/flora';
import { FaunaPage } from '../pages/fauna/fauna';
import { EcosistemasPage } from '../pages/ecosistemas/ecosistemas';
import { GeneralidadesPage } from '../pages/generalidades/generalidades';
import { ContactoPage } from '../pages/contacto/contacto';
import { App } from 'ionic-angular';
// Componentes externos
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any,icon:string}>;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private _translate: TranslateService,public menu: MenuController,protected app: App,public alertCtrl: AlertController,public ionicApp: IonicApp) {
    this.initializeApp();
    // Valida el navegador y asigna el idioma de acuerdo al lenguaje del mismo
    let idiomaUsuario = navigator.language.split('-')[0];
    idiomaUsuario = /(en|de|it|fr|es|be)/gi.test(idiomaUsuario) ? idiomaUsuario : 'es';
    this._translate.use(idiomaUsuario);

 /*    this.pages = [
      { title:"Inicio", component: HomePage,icon:'home' },
      {title: "Nosotros",component:NosotrosPage,icon:'information-circle'},
      {title:"Contacto",component:ContactoPage,icon:'mail'} 
    ]; */

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.platform.registerBackButtonAction((event) => { 
      let activePortal = this.ionicApp._loadingPortal.getActive() || 
      this.ionicApp._modalPortal.getActive() || 
      this.ionicApp._toastPortal.getActive() || 
      this.ionicApp._overlayPortal.getActive(); 
      if(activePortal && activePortal.index === 0) { 
       activePortal.dismiss(); 
      } else { 
       if(this.nav.getActive().name == 'HomePage') {
        this.platform.exitApp(); 
       } else
       if(this.nav.getActive().name == 'ContactoPage') {
        this.nav.setRoot(HomePage); 
       } else
       if(this.nav.getActive().name == 'NosotrosPage') {
        this.nav.setRoot(HomePage); 
       } else
       if(this.nav.getActive().name == 'CorreoPage') {
        this.nav.setRoot(HomePage); 
       }if(this.nav.getActive().name == 'GeneralidadesPage') {
        this.nav.setRoot(HomePage); 
       }if(this.nav.getActive().name == 'FloraPage') {
        this.nav.setRoot(HomePage); 
       }if(this.nav.getActive().name == 'FaunaPage') {
        this.nav.setRoot(HomePage); 
       }if(this.nav.getActive().name == 'EcosistemasPage') {
        this.nav.setRoot(HomePage); 
       }else{
        this.nav.pop(); 
       }
       /* else { 
        if(this.nav.canGoBack()) 
         this.nav.pop(); 
        this.nav.setRoot(HomePage); 
       }  */
      } 
    },101); 
  }
  

  openHome() {
    this.nav.setRoot(HomePage);
    /* this.nav.push(HomePage); */
  }
  openCorreo() {
    this.nav.setRoot(CorreoPage);
    /* this.nav.push(HomePage); */
  }
  openUs() {
    this.nav.setRoot(NosotrosPage);
    /* this.nav.push(NosotrosPage); */
  }
  openContacto() {
    this.nav.setRoot(ContactoPage);
    /* this.nav.push(ContactoPage); */
  }
  openGeneral() {
    this.nav.setRoot(GeneralidadesPage);
    /* this.nav.push(ContactoPage); */
  }
  openFlora() {
    this.nav.setRoot(FloraPage);
    /* this.nav.push(ContactoPage); */
  }
  openFauna() {
    this.nav.setRoot(FaunaPage);
    /* this.nav.push(ContactoPage); */
  }
  openEcosistemas() {
    this.nav.setRoot(EcosistemasPage);
    /* this.nav.push(ContactoPage); */
  }
  openTutorial() {
    this.nav.setRoot(TutorialPage);
    /* this.nav.push(TutorialPage); */
    this.menu.enable(true);
  }
  
}
