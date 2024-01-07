import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
//IMPORTARMOS PARA LA GEOLOCALIZACION
import { NgZone } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import L from 'leaflet';

@Component({
  selector: 'OsoDeAnteojosPage',
  templateUrl: 'oso-de-anteojos.html'
})
export class OsoDeAnteojosPage {
  mapOso: L.Map;
  logs: string[] = [];
  //VARIABLES GEOLOC
  public watch: any;   
  public lat: number = 0;
  public lng: number = 0;
  public clickable: boolean ;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public zone: NgZone,
    private backgroundGeolocation: BackgroundGeolocation,
    private geolocation: Geolocation,
    public platform: Platform) {}


ionViewDidEnter() {
    this.prepareMap();
  }

   prepareMap() {
      this.mapOso = L.map('mapOso', {
          center: [-4.115833	,	-79.173012], //centro RefugioParque
          zoom: 18,
          minZoom: 17,
          maxZoom: 18,
          attributionControl: true,
          zoomControl:true
      });

      L.tileLayer('./assets/imgs/cajanuma/{z}/{x}/{y}.jpg').addTo(this.mapOso);
      //var senderos = L.layerGroup([mirador, lagunas]);

      //SECTOR CAJANUMA 
      //  LINEAS EN EL MAPA - SEB¡NDERO OSO DE ANTEOJOS
      var osoAnteojos = L.polyline([
        [-4.115892	,	-79.172401],
        [-4.115896	,	-79.172409],
        [-4.115925	,	-79.172424],
        [-4.11594	,	-79.172455],
        [-4.115918	,	-79.172531],
        [-4.115917	,	-79.172554],
        [-4.115913	,	-79.172569],
        [-4.11591	,	-79.172607],
        [-4.115891	,	-79.172691],
        [-4.11585	,	-79.172752], //1
        [-4.115857	,	-79.172813], 
        [-4.115836	,	-79.172913],
        [-4.115833	,	-79.173012],
        [-4.115823	,	-79.173042],
        [-4.115858	,	-79.173164],
        [-4.115859	,	-79.17318],
        [-4.11578	,	-79.173386],
        [-4.115709	,	-79.173431],
        [-4.115699	,	-79.173447],
        [-4.115613	,	-79.173615],
        [-4.115581	,	-79.17366], //2
        [-4.11557	,	-79.173866],
        [-4.115571	,	-79.173897],
        [-4.115564	,	-79.173965],
        [-4.115564	,	-79.174057],
        [-4.11554	,	-79.174019],
        [-4.115481	,	-79.173904],
        [-4.115451	,	-79.173843],
        [-4.11542	,	-79.17379],
        [-4.115341	,	-79.173668],
        [-4.115384	,	-79.173531], 
        [-4.115428	,	-79.173378],//3
        [-4.115439	,	-79.173363],
        [-4.115476	,	-79.173317],
        [-4.115549	,	-79.173126],
        [-4.115555	,	-79.173073],
        [-4.115593	,	-79.172913],
        [-4.115636	,	-79.172745],
        [-4.115633	,	-79.172699],
        [-4.115661	,	-79.172690],
        [-4.115661	,	-79.172680],
        [-4.115661	,	-79.172670]], 
        {
          color: "orange",
          //dashArray: "16,22",
      }).bindPopup("<img src='./assets/imgs/oso.jpg' alt='Oso_Sendero' width='100%'/> <br> Oso de anteojos: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br>  Distancia: 400m <br> Tiempo aprox: 15min <br> Altitud: 2.808 m.s.n.m <br> Dificultad: baja").addTo(this.mapOso);
      
      //MARCADORES
      //-------\\\\\LEYENDA_MAPA/////--------------------
      var Dist1 = L.marker([-4.115857	,	-79.172813]).bindPopup( 'Distancia: 120 metros ').addTo(this.mapOso);
      var Dist2 = L.marker([-4.115581	,	-79.17366]).bindPopup( 'Distancia: 240 metros').addTo(this.mapOso);
      var Dist3 = L.marker([-4.115428	,	-79.173378]).bindPopup( 'Distancia: 260 metros').addTo(this.mapOso);
      
      var Distancias = L.layerGroup([Dist1, Dist2, Dist3]);


      var rutasBase = {  
          "<span style= 'color: green'>Oso de Anteojos</span>": osoAnteojos,
      };
      var marcasMapa = {
          "Distancias": Distancias
          //"<img src='./assets/imgs/orquidea.jpg' alt='Orquidea_R_mirador' width='80px'/>Mirador": punto,
          //"<span style= 'color: green'>Grayscale</span>": punto,
      };
      

      //CONTROL LEYENDA posc y tipo
      L.control.layers(rutasBase, marcasMapa, {
        position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
        collapsed: true // true
      }).addTo(this.mapOso);
      

      var icono_Inicio = L.icon({
        iconUrl: './assets/imgs/inicio.svg',
        iconSize: [39, 49], // size of the icon
        popupAnchor: [0,-10],
      });
      var icono_Fin = L.icon({
        iconUrl: './assets/imgs/fin.svg',
        iconSize: [39, 49], // size of the icon
        popupAnchor: [0,-10],
      });
          
          // create popup contents
          var inicioSendero = "<b><u>Inicio del Sendero:</u>  <br> Oso de Anteojos </b><br/>";
          var finSendero = "<b><u>Fin del Sendero:</u>  <br> Oso de Anteojos </b><br/>";
          //var customPopup = "Imagen cabaña Bombuscaro<br/><img src='./assets/imgs/LOS_HIGUERONES.jpg' alt='Cabañas PNP' width='680px'/>";
          //var customPopup2 = "Imagen 2<br/><img src='./assets/imgs/DSC00878.jpg' alt='Cabañas PNP' width='980px'/>";
          //var subimg1 = "<b><u>Orquidea - Sendero Oso de Anteojos</u></b> <br/><img src='./assets/imgs/orquidea.jpg' alt='Orquidea_R_mirador' width='980px'/>";
          // specify popup options 
          /* var customOptions =
              {
              'maxWidth': '1000',
              'className' : 'custom'
              } */
          // create marker object, pass custom icon as option, pass content and options to popup, add to mapOso
          //L.marker([-4.011633, -79.200972], {icon: firefoxIcon}).bindPopup(customPopup,/* customOptions */).addTo(this.mapOso);
          //L.marker([-3.993817, -79.203379], {icon: firefoxIcon2}).bindPopup(customPopup2,/* customOptions */).addTo(this.mapOso);
          //MARCADOR RUTA MIRADORES 
          //L.marker([-4.11393, -79.174634], {icon: orquidea_mirador}).bindPopup(subimg1).addTo(this.mapOso);
          //L.marker([-4.115593	,	-79.172913], {icon: orquidea_mirador}).bindPopup(subimg1).addTo(this.mapOso);
          L.marker([-4.115892	,	-79.172401], {icon: icono_Inicio}).bindPopup(inicioSendero,/* customOptions */).addTo(this.mapOso);
          L.marker([-4.115661	,	-79.172670], {icon: icono_Fin}).bindPopup(finSendero,/* customOptions */).addTo(this.mapOso);
          
          
    }; 
   
    dondeEstas(e) {
      var radius = 50 / 2;
      var icono_Inicio = L.icon({
        iconUrl: './assets/imgs/hombre.svg',
        iconSize: [39, 49], // size of the icon
        popupAnchor: [0,-10]});

      L.marker([this.lat, this.lng], {icon: icono_Inicio}).addTo(this.mapOso)
          .bindPopup("Estas aprox a " + radius + " metros de este punto").openPopup();
        L.circle([this.lat, this.lng], radius).addTo(this.mapOso);   
      this.mapOso.on('dondeEstas', this.dondeEstas);
      this.mapOso.locate({setView: true, maxZoom:17});

    };
  
        
    startTracking() {
      
      //var radius = 30 / 2;
      //MARCARDOR SE UBICA EN EL MAPA CON LAS COORDENADAS
      //L.marker([this.lat, this.lng],{draggable: false}).addTo(this.mapOso);

      //Centra el mapa en la localizacion que arroja LatLng
      this.mapOso.locate({setView: true, maxZoom:17});
              
      /* L.circle([this.lat, this.lng], radius).addTo(this.mapOso)
        .bindPopup("Estas aprox a " + radius + " metros de este punto").openPopup(); */

      // // Get L.LatLng object of the circle
      // var circleLatLng = L.circle([this.lat, this.lng]);
      // // Get L.LatLng object of the marker
      // var markerLatLng = L.marker([this.lat, this.lng]);
      // // Calculate distance:
      // var distance = circleLatLng.distanceTo(markerLatLng);
      // // Use distance in a condition:
      // if (distance > 15) {
      //     // Out of bounds, do stuff
      //     console.log('Estas fuera del camino!')
      // }
      

      // Background Tracking
      let config = {
        desiredAccuracy: 0,
        stationaryRadius: 20,
        distanceFilter: 0,
        debug: false, //para ocultar notificaciones en segundo plano
        interval: 0,
        fastestInterval: 2500,
        notificationTitle: "LOCATIONTEST", // Android
        notificationText: "Background location tracking is ON.", // Android
        notificationIconLarge: "icon", // Android
        notificationIconSmall: "icon", // Android
        startOnBoot: true,
        startForeground: false,
    
        batchSync: true,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
        autoSync: true,         // <-- [Default: true] Set true to sync each location to server as it arrives.
        maxDaysToPersist: 1, 
    
        activityType: 'AutomotiveNavigation',
        stopOnTerminate: true,
      };
     
      this.backgroundGeolocation.configure(config).subscribe((location) => {
     
        console.log('Localizacion 2º Plano:  ' + location.latitude + ',' + location.longitude);
        
        // Run update inside of Angular's zone
        this.zone.run(() => {
          this.lat = location.latitude;
          this.lng = location.longitude;
        });
      }, (err) => {
        console.log(err);
      });
     
      // Turn ON the background-geolocation system.
      this.backgroundGeolocation.start();
     
      // Foreground Tracking
    let options = {
      frequency: 1200,
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 100
    };
     
      this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
        console.log(position);
        // Run update inside of Angular's zone
        this.zone.run(() => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          
          var icono_Inicio = L.icon({
            iconUrl: './assets/imgs/hombre.svg',
            iconSize: [39, 49], // size of the icon
            popupAnchor: [0,-10],
            
          });
          //LINEA TRAZO DE LA RUTA GPS TIEMPO REAL
          /* L.polyline([[this.lat, this.lng],[position.coords.latitude, position.coords.longitude]], {
              color: "red",
              //dashArray: "5,10",
              //clickable: true
            }).addTo(this.maprioBombus); */
            L.marker([position.coords.latitude, position.coords.longitude], {icon: icono_Inicio}).addTo(this.mapOso);
  
        });
      });
                
    };

    stopTracking() {
      console.log('Parar Tracking');      
      this.backgroundGeolocation.finish();
      //this.watch.unsubscribe();
      this.backgroundGeolocation.stop().then(
        (stopOnTerminar: true) => { console.log("Navegacion Desactivada!");}
      );
    };

  }