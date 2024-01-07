import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InfraestructuraPage } from '../pages/infraestructura/infraestructura';
import { BombuscaroPage } from '../pages/bombuscaro/bombuscaro';
import { CajanumaPage } from '../pages/cajanuma/cajanuma';
import { MiguelPopoverPage } from '../pages/miguel-popover/miguel-popover';
import { NosotrosPage } from '../pages/nosotros/nosotros';
import { ContactoPage } from '../pages/contacto/contacto';
import { CorreoPage } from '../pages/correo/correo';
import { OsoPage } from '../pages/oso/oso';
import { TrasladoPage } from '../pages/traslado/traslado';
import { FloraPage } from '../pages/flora/flora';
import { FaunaPage } from '../pages/fauna/fauna';
import { BosquePage } from '../pages/bosque/bosque';
import { ChismosaPage } from '../pages/chismosa/chismosa';
import { PoderosaPage } from '../pages/poderosa/poderosa';
import { UrruquitaPage } from '../pages/urruquita/urruquita';
import { HigueronesPage } from '../pages/higuerones/higuerones';
import { MiradorPage } from '../pages/mirador/mirador';
import { MiradoresPage } from '../pages/miradores/miradores';
import { CabaniaPage } from '../pages/cabania/cabania';
import { LagunasPage } from '../pages/lagunas/lagunas';
import { OsoDeAnteojosPage } from '../pages/oso-de-anteojos/oso-de-anteojos';
import { TransportePage } from '../pages/transporte/transporte';
import { RioBombuscaroPage } from '../pages/rio-bombuscaro/rio-bombuscaro';
import { EcosistemasPage } from '../pages/ecosistemas/ecosistemas';
import { EcosistemicoPage } from '../pages/ecosistemico/ecosistemico';
import { GeneralidadesPage } from '../pages/generalidades/generalidades';
import { EmailComposer } from '@ionic-native/email-composer';
// Componentes externos que realizan peticiones
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Media, MediaObject } from '@ionic-native/media';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IdiomaPopoverPage } from '../pages/idioma-popover/idioma-popover';
import { IonicStorageModule } from '@ionic/storage';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { File } from '@ionic-native/file';
// Carga archivos de idioma escritos en formato JSON.
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';

export function customTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BombuscaroPage,
    CajanumaPage,
    MiguelPopoverPage,
    TutorialPage,
    CorreoPage,
    EcosistemicoPage,
    MiradoresPage,
    LagunasPage,
    OsoDeAnteojosPage,
    TrasladoPage,
    InfraestructuraPage,
    OsoPage,
    BosquePage,
    ContactoPage,
    NosotrosPage,
    GeneralidadesPage,
    FloraPage,
    FaunaPage,
    ChismosaPage,
    PoderosaPage,
    RioBombuscaroPage,
    UrruquitaPage,
    MiradorPage,
    TransportePage,
    HigueronesPage,
    CabaniaPage,
    EcosistemasPage,
    IdiomaPopoverPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: customTranslateLoader,
            deps: [HttpClient]
          }
        }
    ),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BombuscaroPage,
    CajanumaPage,
    MiguelPopoverPage,
    TutorialPage,
    LagunasPage,
    ContactoPage,
    NosotrosPage,
    TrasladoPage,
    CorreoPage,
    OsoDeAnteojosPage,
    BosquePage,
    FloraPage,
    EcosistemicoPage,
    MiradoresPage,
    InfraestructuraPage,
    OsoPage,
    FaunaPage,
    ChismosaPage,
    PoderosaPage,
    RioBombuscaroPage,
    CabaniaPage,
    UrruquitaPage,
    MiradorPage,
    HigueronesPage,
    TransportePage,
    EcosistemasPage,
    GeneralidadesPage,
    IdiomaPopoverPage
  ],
  providers: [
    LocationAccuracy,
    StatusBar,
    SplashScreen,
    Media, 
    EmailComposer,
    PhotoViewer,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackgroundGeolocation,
    Geolocation
  ]
})
export class AppModule {}
