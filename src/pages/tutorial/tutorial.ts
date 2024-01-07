import { Component,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController,ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Platform,Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
  @ViewChild('NAV') nav:Nav;
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController, public storage: Storage,public viewCtrl:ViewController) {
    this.slides = [
      {
        title: 'Welcome to <b>ION2Location</b>',
        description: 'ION2Location will help you to build quickly location based app.',
        image: 'assets/imgs/ica-slidebox-img-1.png',
      },
      {
        title: 'What is ION2Location?',
        description: 'This template will contains all required setup for starting the process and implement in your buisiness logic',
        image: 'assets/imgs/ica-slidebox-img-2.png',
      },
      {
        title: 'What is Ionic Platform?',
        description: 'The <b>Ionic Platform</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.',
        image: 'assets/imgs/ica-slidebox-img-3.png',
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  startApp() {
    this.navCtrl.setRoot(HomePage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
