webpackJsonp([27],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BombuscaroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chismosa_chismosa__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__poderosa_poderosa__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__urruquita_urruquita__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transporte_transporte__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__higuerones_higuerones__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mirador_mirador__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cabania_cabania__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rio_bombuscaro_rio_bombuscaro__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_photo_viewer__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var BombuscaroPage = /** @class */ (function () {
    function BombuscaroPage(navCtrl, navParams, http, _translate, photoViewer, file) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this._translate = _translate;
        this.photoViewer = photoViewer;
        this.file = file;
        this._translate.get("PAGES.BOMBUSCARO.JSON").subscribe(function (res) {
            _this.objeto = res;
        });
        /* this.objeto = navParams.data; */
        console.log(this.objeto);
        var localData = http.get('assets/' + this.objeto).map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
            console.log(_this.information);
        });
    }
    BombuscaroPage.prototype.openImage = function () {
        this.photoViewer.show(this.file.applicationDirectory + 'www/assets/imgs/cajanuma.jpg', "", { share: false });
    };
    BombuscaroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BombuscaroPage');
    };
    BombuscaroPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    BombuscaroPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    BombuscaroPage.prototype.goToPage = function (item) {
        if (item == "ChismosaPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chismosa_chismosa__["a" /* ChismosaPage */], null);
        }
        else if (item == "PoderosaPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__poderosa_poderosa__["a" /* PoderosaPage */], null);
        }
        else if (item == "RioBombuscaroPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__rio_bombuscaro_rio_bombuscaro__["a" /* RioBombuscaroPage */], null);
        }
        else if (item == "UrruquitaPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__urruquita_urruquita__["a" /* UrruquitaPage */], null);
        }
        else if (item == "HigueronesPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__higuerones_higuerones__["a" /* HigueronesPage */], null);
        }
        else if (item == "MiradorPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__mirador_mirador__["a" /* MiradorPage */], null);
        }
        else if (item == "CabaniaPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__cabania_cabania__["a" /* CabaniaPage */], null);
        }
        else if (item == "TransportePage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__transporte_transporte__["a" /* TransportePage */], null);
        }
    };
    BombuscaroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bombuscaro',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\bombuscaro\bombuscaro.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title> <ion-icon item-left name="map"></ion-icon> {{ \'PAGES.BOMBUSCARO.TITLE_PAGE\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="trips detail-bg">\n\n      <div (click)="openImage()">\n          <img src="assets/imgs/bombuscaro.jpeg">\n      </div>\n      \n          <!-- <div class="sub" > \n              \n              <ion-icon name="partly-sunny" class="text-white"></ion-icon>\n              <span ion-text class="text-white">Temp. Prom. 15°C</span>\n              <ion-icon name="arrow-up" class="text-white"></ion-icon>\n              <span ion-text class="text-white">Altitud 1600-3600 m.s.n.m.</span>\n          </div> -->\n      <!-- <ion-card>\n          <img src="assets/imgs/cajanuma.jpg">\n          <div class="sub" > \n              <ion-icon name="partly-sunny" class="text-white"></ion-icon>\n              <span ion-text class="text-white">Temp. Prom. 15°C</span>\n              <ion-icon name="arrow-up" class="text-white"></ion-icon>\n              <span ion-text class="text-white">Altitud 1600-3600 m.s.n.m.</span>\n          </div>\n      </ion-card> -->\n\n <!--  <img src="assets/imgs/cajanuma.jpg"> -->\n  <ion-list class="accordion-list">\n    <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n      <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n        <ion-row align-items-center>\n        <img src="assets/imgs/{{item.icon}}" ion-col col-3>\n        <p ion-col col-7>{{ item.name }}</p>\n        <img src="assets/imgs/aba.svg" *ngIf="item.open" ion-col col-2>\n        <img src="assets/imgs/der.svg" *ngIf="!item.open" ion-col col-2>\n        </ion-row>\n      </button>\n      <ion-list *ngIf="item.children && item.open" no-lines>\n        <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n          <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n            <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n            <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n            {{ child.name }}\n          </button>\n          <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n              <ion-grid *ngIf="child.modelo==\'1\'">\n                <ion-row>\n                  <ion-col col-12>\n                    <h2>{{ child.name }}</h2>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                <ion-col col-9>\n                  <p align="justify">{{ child.info1 }}<br>{{ child.info2 }}<br>{{ child.info3 }}<br>{{ child.info4 }}<br>{{ child.info5 }}</p>\n                  </ion-col>\n                    <ion-col col-3>\n                      <button ng-mousedown="class=\'fb-down\'" ng-mouseup="class=\'fb-up\'" class="{{class}}" item-end (click)="goToPage(child.link)" id="botonimagen">\n                        <img src="assets/imgs/leer2.svg"/>\n                      </button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <ion-grid *ngIf="child.modelo==\'2\'">\n                <ion-row>\n                <ion-col col-12>\n                  <p align="justify">{{ child.information }}</p>\n                </ion-col>\n                </ion-row>\n              </ion-grid>\n              <ion-grid *ngIf="child.modelo==\'3\'">\n                <ion-row>\n                <ion-col col-12>\n                  <p>{{ child.information }}</p>\n                </ion-col>\n                </ion-row>\n              </ion-grid>\n              <ion-grid *ngIf="child.modelo==\'4\'">\n                <ion-row>\n                <ion-col col-12>\n                  <p align="justify">{{ child.information }}</p>\n                </ion-col>\n                </ion-row>\n              </ion-grid>\n              <ion-grid *ngIf="child.modelo==\'5\'">\n                <ion-row>\n                <ion-col col-9>\n                  <p align="justify">{{ child.info1 }}<br>{{ child.info2 }}<br>{{ child.info3 }}<br>{{ child.info4 }}<br>{{ child.info5 }}</p>\n                </ion-col>\n                    <ion-col col-3>\n                      <button ng-mousedown="class=\'fb-down\'" ng-mouseup="class=\'fb-up\'" class="{{class}}" item-end (click)="goToPage(child.link)" id="botonimagen">\n                        <img src="assets/imgs/leer2.svg"/>\n                      </button>\n                    </ion-col>\n                </ion-row>\n              </ion-grid>\n              <ion-grid *ngIf="child.modelo==\'6\'">\n                <ion-row>\n                  <ion-col col-12>\n                    <h2 align="justify">{{ child.name }}</h2>\n                  </ion-col>\n                  <ion-col col-12>\n                    <p align="justify">{{ child.info1 }}<br>{{ child.info2 }}<br>{{ child.info3 }}<br>{{ child.info4 }}<br>{{ child.info5 }}<br>{{ child.info6 }}<br>{{ child.info7 }}</p>\n                  </ion-col>\n                </ion-row>\n                <!-- <ion-row>\n                  <ion-col col-9>\n                  <p align="justify">{{child.information}}</p>\n                  </ion-col>\n                </ion-row> -->\n                \n              </ion-grid>\n              <!-- <ion-grid *ngIf="child.modelo==\'6\'">\n                <ion-row>\n                  <ion-col col-12>\n                    <h2 align="justify">{{ child.name }}</h2>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-9>\n                  <p align="justify">{{child.information}}</p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid> -->\n              <ion-grid *ngIf="child.modelo==\'7\'">\n                <ion-row>\n                  <ion-col col-12>\n                    <h2>{{ child.name }}</h2>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                <ion-col col-9>\n                  <p align="justify">{{child.information}}</p>\n                  </ion-col>\n                    <ion-col col-3>\n                      <button ng-mousedown="class=\'fb-down\'" ng-mouseup="class=\'fb-up\'" class="{{class}}" item-end (click)="goToPage(child.link)" id="botonimagen">\n                        <img src="assets/imgs/leer2.svg"/>\n                      </button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n            <ion-slides pager *ngIf="child.modelo==\'2\'">\n              <ion-slide>\n                  <img src="assets/imgs/florabom/{{child.img1}}">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/florabom/{{child.img2}}">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/florabom/{{child.img3}}">\n              </ion-slide>\n            </ion-slides>\n            \n            <ion-slides pager *ngIf="child.modelo==\'3\'">\n              <ion-slide>\n                  <img src="assets/imgs/faunabom/{{child.img1}}">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/faunabom/{{child.img2}}">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/faunabom/{{child.img3}}">\n              </ion-slide>\n            </ion-slides>\n            <ion-slides pager *ngIf="child.modelo==\'4\'">\n              <ion-slide>\n                  <img src="assets/imgs/paisabom/{{child.img1}}">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/paisabom/{{child.img2}}">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/paisabom/{{child.img3}}">\n              </ion-slide>\n            </ion-slides>\n          </ion-item>\n        </ion-list-header>\n      </ion-list>\n    </ion-list-header>\n</ion-list>\n</ion-content>\n<!-- <ion-content padding>\n    <ion-fab right top>\n        <button ion-fab color="secondary">\n                <ion-icon name="pin" ></ion-icon>\n            </button>\n    </ion-fab>\n    <ion-card>\n        <img src="assets/imgs/dummy/cajanuma.JPG">\n        <ion-card-content>\n            <p>\n              Se conoce con tal nombre debido a que es el primer sendero creado en el parque, además se podía observar el oso de anteojos. \n              En este sendero se puede observar variedad de flora y fauna. En el mes de marzo se puede visualizar el tucán andino ya que llegan en busca del árbol de Pumamaqui.             \n            </p>\n        </ion-card-content>\n    </ion-card>\n        <hr/>\n        <ion-list class="accordion-list">\n            <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n              <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n                <ion-row align-items-center>\n                <img src="assets/imgs/{{item.icon}}">\n                <p ion-col col-7>{{ item.name }}</p>\n                <img src="assets/imgs/aba-fle.png" *ngIf="item.open">\n                <img src="assets/imgs/der-fle.png" *ngIf="!item.open">\n                </ion-row>\n              </button>\n              <ion-list *ngIf="item.children && item.open" no-lines>\n                <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n                  <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n                    <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n                    <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n                    {{ child.name }}\n                  </button>\n                  <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n                    <h2>{{ child.name }}</h2>\n                    <p text-lowercase>{{ child.information }}</p>\n                    <button ng-mousedown="class=\'fb-down\'" ng-mouseup="class=\'fb-up\'" class="{{class}}" item-end (click)="goToDetail(null)">\n                      <img src="assets/imgs/leer.png" alt="" title=""/>\n                    </button>\n                  </ion-item>\n                  <ion-list *ngIf="child.children && child.open">\n                    <ion-item *ngFor="let item of child.children; let k = index" detail-none class="child-item" text-wrap>\n                      <h2>{{ item.name }}</h2>\n                      <p text-lowercase>{{ item.information }}</p>\n                      <button ion-button outline item-end (click)="buyItem(item)">{{ item.price }}</button>\n                    </ion-item>\n                  </ion-list>\n                </ion-list-header>\n              </ion-list>\n            </ion-list-header>\n            <hr/>\n            <ion-item>\n              <ion-slides pager>\n                  <ion-slide>\n                      <img src="assets/imgs/dummy/caja1.jpg">\n                  </ion-slide>\n                  <ion-slide>\n                      <img src="assets/imgs/dummy/caja2.jpg">\n                  </ion-slide>\n                  <ion-slide>\n                      <img src="assets/imgs/dummy/caja3.jpg">\n                  </ion-slide>\n              </ion-slides>\n              <FONT FACE="times new roman" SIZE=2 COLOR="gray"><i> \n                (galery)</i></FONT>\n              <hr/>\n            </ion-item>\n          </ion-list>\n        <hr/>\n</ion-content>\n -->'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\bombuscaro\bombuscaro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */]])
    ], BombuscaroPage);
    return BombuscaroPage;
}());

//# sourceMappingURL=bombuscaro.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChismosaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChismosaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChismosaPage = /** @class */ (function () {
    function ChismosaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChismosaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChismosaPage');
    };
    ChismosaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chismosa',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\chismosa\chismosa.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title> <ion-icon item-left name="walk"></ion-icon> {{ \'PAGES.CHISMOSA.TITLE_PAGE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-fab right top>\n      <button ion-fab color="secondary">\n              <ion-icon name="pin" ></ion-icon>\n          </button>\n  </ion-fab>\n  <ion-card>\n    <div class="contenedor">\n        <img src="assets/imgs/chis/chip.JPG">\n        <h6 class="centrado">{{ \'PAGES.CHISMOSA.TITLE_PAGE\' | translate }}</h6>\n    </div>\n      <ion-card-content>\n          <p align="justify">\n            {{ \'PAGES.CHISMOSA.DESCRIPCION\' | translate }}\n          </p>\n           <p align="justify">\n                <b>{{ \'PAGES.CHISMOSA.INFO\' | translate }}</b><br>{{ \'PAGES.CHISMOSA.INFO1\' | translate }}<br>{{ \'PAGES.CHISMOSA.INFO2\' | translate }}<br>{{ \'PAGES.CHISMOSA.INFO3\' | translate }}<br>{{ \'PAGES.CHISMOSA.INFO4\' | translate }}<br>{{ \'PAGES.CHISMOSA.INFO5\' | translate }}<br>\n           </p>\n        <p align="justify">\n          <b>{{ \'PAGES.CHISMOSA.TITLE2\' | translate }}</b><br>\n          <b>{{ \'PAGES.CHISMOSA.TITLE3\' | translate }}</b><br>\n          {{ \'PAGES.CHISMOSA.LLEVAR\' | translate }}<br>\n          <b>{{ \'PAGES.CHISMOSA.TITLE4\' | translate }}</b><br>\n          {{ \'PAGES.CHISMOSA.OPCIONAL\' | translate }}<br>\n          <b>{{ \'PAGES.CHISMOSA.TITLE5\' | translate }}</b><br>\n          {{ \'PAGES.CHISMOSA.RECOMENDADO\' | translate }}\n        </p>\n      </ion-card-content>\n      <ion-item>\n          <ion-slides pager>\n              <ion-slide>\n                  <img src="assets/imgs/chis/chi1.JPG">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/chis/chi2.JPG">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/chis/chi3.JPG">\n              </ion-slide>\n          </ion-slides>\n      </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\chismosa\chismosa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChismosaPage);
    return ChismosaPage;
}());

//# sourceMappingURL=chismosa.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoderosaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PoderosaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PoderosaPage = /** @class */ (function () {
    function PoderosaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PoderosaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PoderosaPage');
    };
    PoderosaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-poderosa',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\poderosa\poderosa.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title> <ion-icon item-left name="walk"></ion-icon> {{ \'PAGES.PODEROSA.TITLE_PAGE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-fab right top>\n      <button ion-fab color="secondary">\n              <ion-icon name="pin" ></ion-icon>\n          </button>\n  </ion-fab>\n  <ion-card>\n    <div class="contenedor">\n        <img src="assets/imgs/pode/podep.JPG">\n        <h6 class="centrado">{{ \'PAGES.PODEROSA.TITLE_PAGE\' | translate }}</h6>\n    </div>\n      <ion-card-content>\n          <p align="justify">\n            {{ \'PAGES.PODEROSA.DESCRIPCION\' | translate }}\n          </p>\n          <p align="justify">\n                <b>{{ \'PAGES.PODEROSA.INFO\' | translate }}</b><br>{{ \'PAGES.PODEROSA.INFO1\' | translate }}<br>{{ \'PAGES.PODEROSA.INFO2\' | translate }}<br>{{ \'PAGES.PODEROSA.INFO3\' | translate }}<br>{{ \'PAGES.PODEROSA.INFO4\' | translate }}<br>{{ \'PAGES.PODEROSA.INFO5\' | translate }}<br>\n          </p>\n        <p align="justify">\n          <b>{{ \'PAGES.PODEROSA.TITLE2\' | translate }}</b><br>\n          <b>{{ \'PAGES.PODEROSA.TITLE3\' | translate }}</b><br>\n          {{ \'PAGES.PODEROSA.LLEVAR\' | translate }}<br>\n          <b>{{ \'PAGES.PODEROSA.TITLE4\' | translate }}</b><br>\n          {{ \'PAGES.PODEROSA.OPCIONAL\' | translate }}<br>\n          <b>{{ \'PAGES.PODEROSA.TITLE5\' | translate }}</b><br>\n          {{ \'PAGES.PODEROSA.RECOMENDADO\' | translate }}\n        </p>\n      </ion-card-content>\n      <ion-item>\n          <ion-slides pager>\n              <ion-slide>\n                  <img src="assets/imgs/pode/pode1.JPG">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/pode/pode2.JPG">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/pode/pode3.jpg">\n              </ion-slide>\n          </ion-slides>\n      </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\poderosa\poderosa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PoderosaPage);
    return PoderosaPage;
}());

//# sourceMappingURL=poderosa.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrruquitaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UrruquitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UrruquitaPage = /** @class */ (function () {
    function UrruquitaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UrruquitaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UrruquitaPage');
    };
    UrruquitaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-urruquita',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\urruquita\urruquita.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title> <ion-icon item-left name="walk"></ion-icon> {{ \'PAGES.URRUQUITA.TITLE_PAGE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-fab right top>\n      <button ion-fab color="secondary">\n              <ion-icon name="pin" ></ion-icon>\n          </button>\n  </ion-fab>\n  <ion-card>\n    <div class="contenedor">\n            <img src="assets/imgs/urru/urrup.JPG">\n            <h6 class="centrado">{{ \'PAGES.URRUQUITA.TITLE_PAGE\' | translate }}</h6>\n    </div>\n      <ion-card-content>\n          <p align="justify">\n            {{ \'PAGES.URRUQUITA.DESCRIPCION\' | translate }}\n          </p>\n          <p align="justify">\n                <b>{{ \'PAGES.URRUQUITA.INFO\' | translate }}</b><br>{{ \'PAGES.URRUQUITA.INFO1\' | translate }}<br>{{ \'PAGES.URRUQUITA.INFO2\' | translate }}<br>{{ \'PAGES.URRUQUITA.INFO3\' | translate }}<br>{{ \'PAGES.URRUQUITA.INFO4\' | translate }}<br>{{ \'PAGES.URRUQUITA.INFO5\' | translate }}<br>\n          </p>\n        <p align="justify">\n          <b>{{ \'PAGES.URRUQUITA.TITLE2\' | translate }}</b><br>\n          <b>{{ \'PAGES.URRUQUITA.TITLE3\' | translate }}</b><br>\n          {{ \'PAGES.URRUQUITA.LLEVAR\' | translate }}<br>\n          <b>{{ \'PAGES.URRUQUITA.TITLE4\' | translate }}</b><br>\n          {{ \'PAGES.URRUQUITA.OPCIONAL\' | translate }}<br>\n          <b>{{ \'PAGES.URRUQUITA.TITLE5\' | translate }}</b><br>\n          {{ \'PAGES.URRUQUITA.RECOMENDADO\' | translate }}\n        </p>\n      </ion-card-content>\n      <ion-item>\n          <ion-slides pager>\n              <ion-slide>\n                  <img src="assets/imgs/urru/urru1.JPG">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/urru/urru2.jpg">\n              </ion-slide>\n          </ion-slides>\n      </ion-item>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\urruquita\urruquita.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UrruquitaPage);
    return UrruquitaPage;
}());

//# sourceMappingURL=urruquita.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TransportePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransportePage = /** @class */ (function () {
    function TransportePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransportePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransportePage');
    };
    TransportePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transporte',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\transporte\transporte.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title> <ion-icon item-left name="bus"></ion-icon> {{ \'PAGES.TRANSPORTE.TITLE_PAGE\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <p align="justify"><b>{{ \'PAGES.TRANSPORTE.DESC\' | translate }}</b><br>{{ \'PAGES.TRANSPORTE.DESC1\' | translate }}<br>{{ \'PAGES.TRANSPORTE.DESC2\' | translate }}</p>\n  <p align="justify"><b>{{ \'PAGES.TRANSPORTE.TITLE_PAGE\' | translate }}</b><br>{{ \'PAGES.TRANSPORTE.DESCRIPCION\' | translate }}</p>\n  <p align="justify"><b>{{ \'PAGES.TRANSPORTE.DESC3\' | translate }}</b></p>\n  <ion-scroll scrollX="true">\n      <ion-segment style="width: 400px;">\n          <img src="assets/imgs/llegar/trans.JPG">\n      </ion-segment>\n  </ion-scroll>\n  <p align="justify">{{ \'PAGES.TRANSPORTE.DESC4\' | translate }}</p>\n  <!-- <ion-grid class="letrapequenia">\n      <ion-row>\n        <ion-col col-4>\n          {{ \'PAGES.TRANSPORTE.INFO1\' | translate }}  \n        </ion-col>\n        <ion-col col-2>\n          {{ \'PAGES.TRANSPORTE.INFO2\' | translate }}\n        </ion-col>\n        <ion-col col-2>\n          {{ \'PAGES.TRANSPORTE.INFO3\' | translate }} \n        </ion-col>\n        <ion-col col-2>\n          {{ \'PAGES.TRANSPORTE.INFO4\' | translate }}\n        </ion-col>\n        <ion-col col-2>\n          {{ \'PAGES.TRANSPORTE.INFO5\' | translate }} \n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-4>\n            {{ \'PAGES.TRANSPORTE.INFO11\' | translate }}  \n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO21\' | translate }}\n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO31\' | translate }} \n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO41\' | translate }}\n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO51\' | translate }} \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            {{ \'PAGES.TRANSPORTE.INFO12\' | translate }}  \n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO22\' | translate }}\n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO32\' | translate }} \n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO42\' | translate }}\n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO52\' | translate }} \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            {{ \'PAGES.TRANSPORTE.INFO13\' | translate }}  \n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO23\' | translate }}\n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO33\' | translate }} \n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO43\' | translate }}\n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO53\' | translate }} \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            {{ \'PAGES.TRANSPORTE.INFO14\' | translate }}  \n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO24\' | translate }}\n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO34\' | translate }} \n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO44\' | translate }}\n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO54\' | translate }} \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            {{ \'PAGES.TRANSPORTE.INFO15\' | translate }}  \n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO25\' | translate }}\n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO35\' | translate }} \n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO45\' | translate }}\n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO55\' | translate }} \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            {{ \'PAGES.TRANSPORTE.INFO16\' | translate }}  \n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO26\' | translate }}\n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO36\' | translate }} \n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO46\' | translate }}\n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO56\' | translate }} \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            {{ \'PAGES.TRANSPORTE.INFO17\' | translate }}  \n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO27\' | translate }}\n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO37\' | translate }} \n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO47\' | translate }}\n          </ion-col>\n          <ion-col col-2>\n            {{ \'PAGES.TRANSPORTE.INFO57\' | translate }} \n          </ion-col>\n        </ion-row>\n    </ion-grid> -->\n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\transporte\transporte.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TransportePage);
    return TransportePage;
}());

//# sourceMappingURL=transporte.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HigueronesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HigueronesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HigueronesPage = /** @class */ (function () {
    function HigueronesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HigueronesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HigueronesPage');
    };
    HigueronesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-higuerones',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\higuerones\higuerones.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title> <ion-icon item-left name="walk"></ion-icon> {{ \'PAGES.HIGUERONES.TITLE_PAGE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-fab right top>\n      <button ion-fab color="secondary">\n              <ion-icon name="pin" ></ion-icon>\n          </button>\n  </ion-fab>\n  <ion-card>\n    <div class="contenedor">\n            <img src="assets/imgs/higue/higuep.JPG">\n            <h6 class="centrado">{{ \'PAGES.HIGUERONES.TITLE_PAGE\' | translate }}</h6>\n        </div>\n      <ion-card-content>\n          <p align="justify">\n            {{ \'PAGES.HIGUERONES.DESCRIPCION\' | translate }}\n          </p>\n          <p align="justify">\n                <b>{{ \'PAGES.HIGUERONES.INFO\' | translate }}</b><br>{{ \'PAGES.HIGUERONES.INFO1\' | translate }}<br>{{ \'PAGES.HIGUERONES.INFO2\' | translate }}<br>{{ \'PAGES.HIGUERONES.INFO3\' | translate }}<br>{{ \'PAGES.HIGUERONES.INFO4\' | translate }}<br>{{ \'PAGES.HIGUERONES.INFO5\' | translate }}<br>\n           </p>\n        <p align="justify">\n          <b>{{ \'PAGES.HIGUERONES.TITLE2\' | translate }}</b><br>\n          <b>{{ \'PAGES.HIGUERONES.TITLE3\' | translate }}</b><br>\n          {{ \'PAGES.HIGUERONES.LLEVAR\' | translate }}<br>\n          <b>{{ \'PAGES.HIGUERONES.TITLE4\' | translate }}</b><br>\n          {{ \'PAGES.HIGUERONES.OPCIONAL\' | translate }}<br>\n          <b>{{ \'PAGES.HIGUERONES.TITLE5\' | translate }}</b><br>\n          {{ \'PAGES.HIGUERONES.RECOMENDADO\' | translate }}\n        </p>\n      </ion-card-content>\n      <ion-item>\n          <ion-slides pager>\n              <ion-slide>\n                  <img src="assets/imgs/higue/higue1.jpg">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/higue/higue2.jpg">\n              </ion-slide>\n          </ion-slides>\n      </ion-item>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\higuerones\higuerones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HigueronesPage);
    return HigueronesPage;
}());

//# sourceMappingURL=higuerones.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiradorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MiradorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MiradorPage = /** @class */ (function () {
    function MiradorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MiradorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MiradorPage');
    };
    MiradorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mirador',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\mirador\mirador.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title> <ion-icon item-left name="walk"></ion-icon> {{ \'PAGES.MIRADOR.TITLE_PAGE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-fab right top>\n      <button ion-fab color="secondary">\n              <ion-icon name="pin" ></ion-icon>\n          </button>\n  </ion-fab>\n  <ion-card>\n        <div class="contenedor">\n            <img src="assets/imgs/mira/mirap.JPG">\n            <h6 class="centrado">{{ \'PAGES.MIRADOR.TITLE_PAGE\' | translate }}</h6>\n        </div>\n      <ion-card-content>\n          <p align="justify">\n            {{ \'PAGES.MIRADOR.DESCRIPCION\' | translate }}\n          </p>\n          <p align="justify">\n                <b>{{ \'PAGES.MIRADOR.INFO\' | translate }}</b><br>{{ \'PAGES.MIRADOR.INFO1\' | translate }}<br>{{ \'PAGES.MIRADOR.INFO2\' | translate }}<br>{{ \'PAGES.MIRADOR.INFO3\' | translate }}<br>{{ \'PAGES.MIRADOR.INFO4\' | translate }}<br>{{ \'PAGES.MIRADOR.INFO5\' | translate }}<br>\n           </p>\n        <p align="justify">\n          <b>{{ \'PAGES.MIRADOR.TITLE2\' | translate }}</b><br>\n          <b>{{ \'PAGES.MIRADOR.TITLE3\' | translate }}</b><br>\n          {{ \'PAGES.MIRADOR.LLEVAR\' | translate }}<br>\n          <b>{{ \'PAGES.MIRADOR.TITLE4\' | translate }}</b><br>\n          {{ \'PAGES.MIRADOR.OPCIONAL\' | translate }}<br>\n        </p>\n      </ion-card-content>\n      <ion-item>\n          <ion-slides pager>\n              <ion-slide>\n                  <img src="assets/imgs/mira/mira1.JPG">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/mira/mira2.JPG">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/mira/mira3.jpg">\n              </ion-slide>\n          </ion-slides>\n      </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\mirador\mirador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MiradorPage);
    return MiradorPage;
}());

//# sourceMappingURL=mirador.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabaniaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CabaniaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CabaniaPage = /** @class */ (function () {
    function CabaniaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CabaniaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CabaniaPage');
    };
    CabaniaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cabania',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\cabania\cabania.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title> <ion-icon item-left name="bonfire"></ion-icon> {{ \'PAGES.CABANIA.TITLE_PAGE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-fab right top>\n      <button ion-fab color="secondary">\n              <ion-icon name="pin" ></ion-icon>\n          </button>\n  </ion-fab>\n  <ion-card>\n      <ion-card-content>\n          <p align="justify">\n            {{ \'PAGES.CABANIA.DESCRIPCION\' | translate }}\n          </p>\n          <p align="justify">\n            <b>{{ \'PAGES.CABANIA.DESC\' | translate }}</b><br>{{ \'PAGES.CABANIA.DESC1\' | translate }}<br>{{ \'PAGES.CABANIA.DESC2\' | translate }}\n        </p>\n      </ion-card-content>\n      <p><b>{{ \'PAGES.CABANIA.INFO\' | translate }}</b></p>\n      <img src="assets/imgs/cabania.jpg">\n        <p align="justify">\n            {{ \'PAGES.CABANIA.INFO1\' | translate }}\n        </p>\n      <p><b>{{ \'PAGES.CABANIA.INFO3\' | translate }}</b></p>\n      <img src="assets/imgs/cabania1.jpg">\n      <p align="justify">\n            {{ \'PAGES.CABANIA.INFO4\' | translate }}\n        </p>\n      <ion-card-content>\n          <p><b>{{ \'PAGES.CABANIA.TITLE2\' | translate }}</b></p>\n          <img src="assets/imgs/caba/camping.jpg">\n          <p align="justify">{{ \'PAGES.CABANIA.CAMPING\' | translate }}</p>\n          <p><b>{{ \'PAGES.CABANIA.TITLE21\' | translate }}</b></p>\n          <img src="assets/imgs/caba/area.jpg">\n          <p align="justify">{{ \'PAGES.CABANIA.AREA\' | translate }}</p>\n      </ion-card-content>\n      <p><b>{{ \'PAGES.CABANIA.TITLE4\' | translate }}</b></p>\n      <img src="assets/imgs/centro.jpg">\n      <p align="justify">{{ \'PAGES.CABANIA.CENTRO\' | translate }}</p>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\cabania\cabania.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CabaniaPage);
    return CabaniaPage;
}());

//# sourceMappingURL=cabania.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RioBombuscaroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RioBombuscaroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RioBombuscaroPage = /** @class */ (function () {
    function RioBombuscaroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RioBombuscaroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RioBombuscaroPage');
    };
    RioBombuscaroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rio-bombuscaro',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\rio-bombuscaro\rio-bombuscaro.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title> <ion-icon item-left name="walk"></ion-icon> {{ \'PAGES.RIOBOMBUSCARO.TITLE_PAGE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-fab right top>\n      <button ion-fab color="secondary">\n              <ion-icon name="pin" ></ion-icon>\n          </button>\n  </ion-fab>\n  <ion-card>\n    <div class="contenedor">\n        <img src="assets/imgs/riob/riop.jpg">\n        <h6 class="centrado">{{ \'PAGES.RIOBOMBUSCARO.TITLE_PAGE\' | translate }}</h6>\n    </div>\n      <ion-card-content>\n          <p align="justify">\n            {{ \'PAGES.RIOBOMBUSCARO.DESCRIPCION\' | translate }}\n          </p>\n          <p align="justify">\n                <b>{{ \'PAGES.RIOBOMBUSCARO.INFO\' | translate }}</b><br>{{ \'PAGES.RIOBOMBUSCARO.INFO1\' | translate }}<br>{{ \'PAGES.RIOBOMBUSCARO.INFO2\' | translate }}<br>{{ \'PAGES.RIOBOMBUSCARO.INFO3\' | translate }}<br>{{ \'PAGES.RIOBOMBUSCARO.INFO4\' | translate }}<br>{{ \'PAGES.RIOBOMBUSCARO.INFO5\' | translate }}<br>\n           </p>\n        <p align="justify">\n          <b>{{ \'PAGES.RIOBOMBUSCARO.TITLE2\' | translate }}</b><br>\n          <b>{{ \'PAGES.RIOBOMBUSCARO.TITLE3\' | translate }}</b><br>\n          {{ \'PAGES.RIOBOMBUSCARO.LLEVAR\' | translate }}<br>\n          <b>{{ \'PAGES.RIOBOMBUSCARO.TITLE4\' | translate }}</b><br>\n          {{ \'PAGES.RIOBOMBUSCARO.OPCIONAL\' | translate }}<br>\n          <b>{{ \'PAGES.RIOBOMBUSCARO.TITLE5\' | translate }}</b><br>\n          {{ \'PAGES.RIOBOMBUSCARO.RECOMENDADO\' | translate }}\n        </p>\n      </ion-card-content>\n      <ion-item>\n          <ion-slides pager>\n              <ion-slide>\n                  <img src="assets/imgs/riob/rio1.JPG">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/riob/rio2.JPG">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/riob/rio3.JPG">\n              </ion-slide>\n          </ion-slides>\n      </ion-item>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\rio-bombuscaro\rio-bombuscaro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RioBombuscaroPage);
    return RioBombuscaroPage;
}());

//# sourceMappingURL=rio-bombuscaro.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BosquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BosquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BosquePage = /** @class */ (function () {
    function BosquePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BosquePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BosquePage');
    };
    BosquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bosque',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\bosque\bosque.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title> <ion-icon item-left name="walk"></ion-icon> {{ \'PAGES.BOSQUE.TITLE_PAGE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-fab right top>\n      <button ion-fab color="secondary">\n              <ion-icon name="pin" ></ion-icon>\n          </button>\n  </ion-fab>\n  <ion-card>\n    <div class="contenedor">\n        <img src="assets/imgs/bosque/bosquep.jpg">\n        <h6 class="centrado">{{ \'PAGES.BOSQUE.TITLE_PAGE\' | translate }}</h6>\n    </div>\n      <ion-card-content>\n          <p align="justify">\n            {{ \'PAGES.BOSQUE.DESCRIPCION\' | translate }}\n          </p>\n           <p align="justify">\n                <b>{{ \'PAGES.BOSQUE.INFO\' | translate }}</b><br>{{ \'PAGES.BOSQUE.INFO1\' | translate }}<br>{{ \'PAGES.BOSQUE.INFO2\' | translate }}<br>{{ \'PAGES.BOSQUE.INFO3\' | translate }}<br>{{ \'PAGES.BOSQUE.INFO4\' | translate }}<br>{{ \'PAGES.BOSQUE.INFO5\' | translate }}<br>\n           </p>\n        <p align="justify">\n          <b>{{ \'PAGES.BOSQUE.TITLE2\' | translate }}</b><br>\n          <b>{{ \'PAGES.BOSQUE.TITLE3\' | translate }}</b><br>\n          {{ \'PAGES.BOSQUE.LLEVAR\' | translate }}<br>\n          <b>{{ \'PAGES.BOSQUE.TITLE4\' | translate }}</b><br>\n          {{ \'PAGES.BOSQUE.OPCIONAL\' | translate }}<br>\n          <b>{{ \'PAGES.BOSQUE.TITLE5\' | translate }}</b><br>\n          {{ \'PAGES.BOSQUE.RECOMENDADO\' | translate }}\n        </p>\n      </ion-card-content>\n      <ion-item>\n          <ion-slides pager>\n              <ion-slide>\n                  <img src="assets/imgs/bosque/bosque1.jpg">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/bosque/bosque2.jpg">\n              </ion-slide>\n          </ion-slides>\n      </ion-item>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\bosque\bosque.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BosquePage);
    return BosquePage;
}());

//# sourceMappingURL=bosque.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CajanumaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_viewer__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__oso_oso__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__traslado_traslado__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bosque_bosque__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__miradores_miradores__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lagunas_lagunas__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ecosistemico_ecosistemico__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__infraestructura_infraestructura__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var CajanumaPage = /** @class */ (function () {
    function CajanumaPage(navCtrl, navParams, _translate, photoViewer, file, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._translate = _translate;
        this.photoViewer = photoViewer;
        this.file = file;
        this.http = http;
        this._translate.get("PAGES.CAJANUMA.JSON").subscribe(function (res) {
            _this.objeto = res;
        });
        var localData = http.get('assets/' + this.objeto).map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
            console.log(_this.information);
        });
    }
    CajanumaPage.prototype.openImage = function () {
        this.photoViewer.show(this.file.applicationDirectory + 'www/assets/imgs/cajanuma.jpg', "", { share: false });
    };
    CajanumaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CajanumaPage');
    };
    CajanumaPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    CajanumaPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    CajanumaPage.prototype.goToPage = function (item) {
        if (item == "OsoPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__oso_oso__["a" /* OsoPage */], null);
        }
        else if (item == "BosquePage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__bosque_bosque__["a" /* BosquePage */], null);
        }
        else if (item == "MiradoresPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__miradores_miradores__["a" /* MiradoresPage */], null);
        }
        else if (item == "LagunasPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__lagunas_lagunas__["a" /* LagunasPage */], null);
        }
        else if (item == "InfraestructuraPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__infraestructura_infraestructura__["a" /* InfraestructuraPage */], null);
        }
        else if (item == "EcosistemicoPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__ecosistemico_ecosistemico__["a" /* EcosistemicoPage */], null);
        }
        else if (item == "TrasladoPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__traslado_traslado__["a" /* TrasladoPage */], null);
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
    };
    CajanumaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cajanuma',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\cajanuma\cajanuma.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> <ion-icon item-left name="map"></ion-icon> {{ \'PAGES.CAJANUMA.TITLE_PAGE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="trips detail-bg">\n\n    <div (click)="openImage()">\n        <img src="assets/imgs/cajanuma.jpeg">\n    </div>\n<ion-list class="accordion-list">\n  <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n    <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n      <ion-row align-items-center>\n      <img src="assets/imgs/{{item.icon}}" ion-col col-3>\n      <p ion-col col-7>{{ item.name }}</p>\n      <img src="assets/imgs/aba.svg" *ngIf="item.open" ion-col col-2>\n      <img src="assets/imgs/der.svg" *ngIf="!item.open" ion-col col-2>\n      </ion-row>\n    </button>\n    <ion-list *ngIf="item.children && item.open" no-lines>\n      <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n        <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n          <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n          <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n          {{ child.name }}\n        </button>\n        <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n            <ion-grid *ngIf="child.modelo==\'1\'">\n              <ion-row>\n                <ion-col col-12>\n                  <h2>{{ child.name }}</h2>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n              <ion-col col-9>\n                <p align="justify">{{ child.info1 }}<br>{{ child.info2 }}<br>{{ child.info3 }}<br>{{ child.info4 }}<br>{{ child.info5 }}</p>\n                </ion-col>\n                  <ion-col col-3>\n                    <button ng-mousedown="class=\'fb-down\'" ng-mouseup="class=\'fb-up\'" class="{{class}}" item-end (click)="goToPage(child.link)" id="botonimagen">\n                      <img src="assets/imgs/leer2.svg"/>\n                    </button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <ion-grid *ngIf="child.modelo==\'2\'">\n              <ion-row>\n              <ion-col col-12>\n                <p align="justify">{{ child.information }}</p>\n              </ion-col>\n              </ion-row>\n            </ion-grid>\n            <ion-grid *ngIf="child.modelo==\'3\'">\n              <ion-row>\n              <ion-col col-12>\n                <p>{{ child.information }}</p>\n              </ion-col>\n              </ion-row>\n            </ion-grid>\n            <ion-grid *ngIf="child.modelo==\'4\'">\n              <ion-row>\n              <ion-col col-12>\n                <p align="justify">{{ child.information }}</p>\n              </ion-col>\n              </ion-row>\n            </ion-grid>\n            <ion-grid *ngIf="child.modelo==\'5\'">\n              <ion-row>\n              <ion-col col-9>\n                <p align="justify">{{ child.info1 }}<br>{{ child.info2 }}<br>{{ child.info3 }}<br>{{ child.info4 }}<br>{{ child.info5 }}</p>\n              </ion-col>\n                  <ion-col col-3>\n                    <button ng-mousedown="class=\'fb-down\'" ng-mouseup="class=\'fb-up\'" class="{{class}}" item-end (click)="goToPage(child.link)" id="botonimagen">\n                      <img src="assets/imgs/leer2.svg"/>\n                    </button>\n                  </ion-col>\n              </ion-row>\n            </ion-grid>\n            <ion-grid *ngIf="child.modelo==\'51\'">\n              <ion-row>\n              <ion-col col-9>\n                <p align="justify">{{ child.info1 }}<br>{{ child.info2 }}<br>{{ child.info3 }}<br>{{ child.info4 }}</p>\n              </ion-col>\n                  <ion-col col-3>\n                    <button ng-mousedown="class=\'fb-down\'" ng-mouseup="class=\'fb-up\'" class="{{class}}" item-end (click)="goToPage(child.link)" id="botonimagen">\n                      <img src="assets/imgs/leer2.svg"/>\n                    </button>\n                  </ion-col>\n              </ion-row>\n            </ion-grid>\n            <ion-grid *ngIf="child.modelo==\'6\'">\n              <ion-row>\n                <ion-col col-12>\n                  <h2 align="justify">{{ child.name }}</h2>\n                </ion-col>\n                <ion-col col-12>\n                  <p align="justify">{{ child.info1 }}<br>{{ child.info2 }}<br>{{ child.info3 }}<br>{{ child.info4 }}<br>{{ child.info5 }}<br>{{ child.info6 }}<br>{{ child.info7 }}<br>{{ child.info8 }}<br>{{ child.info9 }}<br><b>{{ child.info10 }}</b><br>{{ child.info11 }}<br>{{ child.info12 }}</p>\n                </ion-col>\n              </ion-row>\n              <!-- <ion-row>\n                <ion-col col-9>\n                <p align="justify">{{child.information}}</p>\n                </ion-col>\n              </ion-row> -->\n              \n            </ion-grid>\n            <!-- <ion-grid *ngIf="child.modelo==\'6\'">\n              <ion-row>\n                <ion-col col-12>\n                  <h2 align="justify">{{ child.name }}</h2>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-9>\n                <p align="justify">{{child.information}}</p>\n                </ion-col>\n              </ion-row>\n            </ion-grid> -->\n            <ion-grid *ngIf="child.modelo==\'7\'">\n              <ion-row>\n                <ion-col col-12>\n                  <h2>{{ child.name }}</h2>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n              <ion-col col-9>\n                <p align="justify">{{child.information}}</p>\n                </ion-col>\n                  <ion-col col-3>\n                    <button ng-mousedown="class=\'fb-down\'" ng-mouseup="class=\'fb-up\'" class="{{class}}" item-end (click)="goToPage(child.link)" id="botonimagen">\n                      <img src="assets/imgs/leer2.svg"/>\n                    </button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n          <ion-slides pager *ngIf="child.modelo==\'2\'">\n            <ion-slide>\n                <img src="assets/imgs/floracaja/{{child.img1}}">\n            </ion-slide>\n            <ion-slide>\n                <img src="assets/imgs/floracaja/{{child.img2}}">\n            </ion-slide>\n            <ion-slide>\n                <img src="assets/imgs/floracaja/{{child.img3}}">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/floracaja/{{child.img4}}">\n            </ion-slide>\n          </ion-slides>\n          \n          <ion-slides pager *ngIf="child.modelo==\'3\'">\n            <ion-slide>\n                <img src="assets/imgs/faunacaja/{{child.img1}}">\n            </ion-slide>\n            <ion-slide>\n                <img src="assets/imgs/faunacaja/{{child.img2}}">\n            </ion-slide>\n            <ion-slide>\n                <img src="assets/imgs/faunacaja/{{child.img3}}">\n            </ion-slide>\n          </ion-slides>\n          <ion-slides pager *ngIf="child.modelo==\'4\'">\n            <ion-slide>\n                <img src="assets/imgs/paisacaja/{{child.img1}}">\n            </ion-slide>\n            <ion-slide>\n                <img src="assets/imgs/paisacaja/{{child.img2}}">\n            </ion-slide>\n            <ion-slide>\n                <img src="assets/imgs/paisacaja/{{child.img3}}">\n            </ion-slide>\n          </ion-slides>\n        </ion-item>\n      </ion-list-header>\n    </ion-list>\n  </ion-list-header>\n</ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\cajanuma\cajanuma.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */]])
    ], CajanumaPage);
    return CajanumaPage;
}());

//# sourceMappingURL=cajanuma.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OsoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oso_de_anteojos_oso_de_anteojos__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OsoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OsoPage = /** @class */ (function () {
    function OsoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OsoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OsoPage');
    };
    OsoPage.prototype.openMapa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__oso_de_anteojos_oso_de_anteojos__["a" /* OsoDeAnteojosPage */]);
    };
    OsoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-oso',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\oso\oso.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title> <ion-icon item-left name="walk"></ion-icon> {{ \'PAGES.OSO.TITLE_PAGE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-fab right top>\n      <button ion-fab color="secondary" (click)="openMapa()">\n              <ion-icon name="pin" ></ion-icon>\n          </button>\n  </ion-fab>\n  <ion-card>\n    <div class="contenedor">\n        <img src="assets/imgs/oso/oso1.jpg">\n        <h6 class="centrado">{{ \'PAGES.OSO.TITLE_PAGE\' | translate }}</h6>\n    </div>\n      <ion-card-content>\n          <p align="justify">\n            {{ \'PAGES.OSO.DESCRIPCION\' | translate }}\n          </p>\n           <p align="justify">\n                <b>{{ \'PAGES.OSO.INFO\' | translate }}</b><br>{{ \'PAGES.OSO.INFO1\' | translate }}<br>{{ \'PAGES.OSO.INFO2\' | translate }}<br>{{ \'PAGES.OSO.INFO3\' | translate }}<br>{{ \'PAGES.OSO.INFO4\' | translate }}<br>{{ \'PAGES.OSO.INFO5\' | translate }}<br>\n           </p>\n        <p align="justify">\n          <b>{{ \'PAGES.OSO.TITLE2\' | translate }}</b><br>\n          <b>{{ \'PAGES.OSO.TITLE3\' | translate }}</b><br>\n          {{ \'PAGES.OSO.LLEVAR\' | translate }}<br>\n          <b>{{ \'PAGES.OSO.TITLE4\' | translate }}</b><br>\n          {{ \'PAGES.OSO.OPCIONAL\' | translate }}<br>\n          <b>{{ \'PAGES.OSO.TITLE5\' | translate }}</b><br>\n          {{ \'PAGES.OSO.RECOMENDADO\' | translate }}\n        </p>\n      </ion-card-content>\n      <img src="assets/imgs/oso/oso2.jpg">\n      <!-- <ion-item>\n          <ion-slides pager>\n              <ion-slide>\n                  <img src="assets/imgs/chis/chi1.JPG">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/chis/chi2.JPG">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/chis/chi3.JPG">\n              </ion-slide>\n          </ion-slides>\n      </ion-item> -->\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\oso\oso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], OsoPage);
    return OsoPage;
}());

//# sourceMappingURL=oso.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrasladoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TrasladoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrasladoPage = /** @class */ (function () {
    function TrasladoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrasladoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrasladoPage');
    };
    TrasladoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-traslado',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\traslado\traslado.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title> <ion-icon item-left name="bus"></ion-icon> {{ \'PAGES.TRASLADO.TITLE_PAGE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<p align="justify"><b>{{ \'PAGES.TRASLADO.DESC\' | translate }}</b><br>{{ \'PAGES.TRASLADO.DESC1\' | translate }}<br>{{ \'PAGES.TRASLADO.DESC2\' | translate }}</p>\n<p align="justify"><b>{{ \'PAGES.TRASLADO.TITLE_PAGE\' | translate }}</b><br>{{\'PAGES.TRASLADO.DESCRIPCION\' | translate }}</p>\n<p align="justify"><b>{{ \'PAGES.TRASLADO.DESC3\' | translate }}</b></p>\n<ion-scroll scrollX="true">\n    <ion-segment style="width: 400px;">\n        <img src="assets/imgs/traslado.JPG">\n    </ion-segment>\n</ion-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\traslado\traslado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TrasladoPage);
    return TrasladoPage;
}());

//# sourceMappingURL=traslado.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiradoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MiradoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MiradoresPage = /** @class */ (function () {
    function MiradoresPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MiradoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MiradoresPage');
    };
    MiradoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-miradores',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\miradores\miradores.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title> <ion-icon item-left name="walk"></ion-icon> {{ \'PAGES.LOSMIRADORES.TITLE_PAGE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-fab right top>\n      <button ion-fab color="secondary">\n              <ion-icon name="pin" ></ion-icon>\n          </button>\n  </ion-fab>\n  <ion-card>\n    <div class="contenedor">\n        <img src="assets/imgs/mira2/mirp.jpg">\n        <h6 class="centrado">{{ \'PAGES.LOSMIRADORES.TITLE_PAGE\' | translate }}</h6>\n    </div>\n      <ion-card-content>\n          <p align="justify">\n            {{ \'PAGES.LOSMIRADORES.DESCRIPCION\' | translate }}\n          </p>\n           <p align="justify">\n                <b>{{ \'PAGES.LOSMIRADORES.INFO\' | translate }}</b><br>{{ \'PAGES.LOSMIRADORES.INFO1\' | translate }}<br>{{ \'PAGES.LOSMIRADORES.INFO2\' | translate }}<br>{{ \'PAGES.LOSMIRADORES.INFO3\' | translate }}<br>{{ \'PAGES.LOSMIRADORES.INFO4\' | translate }}<br>{{ \'PAGES.LOSMIRADORES.INFO5\' | translate }}<br>\n           </p>\n        <p align="justify">\n          <b>{{ \'PAGES.LOSMIRADORES.TITLE2\' | translate }}</b><br>\n          <b>{{ \'PAGES.LOSMIRADORES.TITLE3\' | translate }}</b><br>\n          {{ \'PAGES.LOSMIRADORES.LLEVAR\' | translate }}<br>\n          <b>{{ \'PAGES.LOSMIRADORES.TITLE4\' | translate }}</b><br>\n          {{ \'PAGES.LOSMIRADORES.OPCIONAL\' | translate }}<br>\n          <b>{{ \'PAGES.LOSMIRADORES.TITLE5\' | translate }}</b><br>\n          <b>{{ \'PAGES.LOSMIRADORES.TITLE6\' | translate }}</b><br>\n          {{ \'PAGES.LOSMIRADORES.OBLIGATORIO\' | translate }}<br>\n          <b>{{ \'PAGES.LOSMIRADORES.TITLE7\' | translate }}</b><br>\n          {{ \'PAGES.LOSMIRADORES.OPCIONAL2\' | translate }}<br>\n        </p>\n      </ion-card-content>\n      <ion-item>\n          <ion-slides pager>\n              <ion-slide>\n                <img src="assets/imgs/mira2/mir1.jpg">\n              </ion-slide>\n              <ion-slide>\n                <img src="assets/imgs/mira2/mir2.jpg">\n              </ion-slide>\n          </ion-slides>\n      </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\miradores\miradores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MiradoresPage);
    return MiradoresPage;
}());

//# sourceMappingURL=miradores.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LagunasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LagunasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LagunasPage = /** @class */ (function () {
    function LagunasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LagunasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LagunasPage');
    };
    LagunasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lagunas',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\lagunas\lagunas.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title> <ion-icon item-left name="walk"></ion-icon> {{ \'PAGES.LAGUNAS.TITLE_PAGE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-fab right top>\n      <button ion-fab color="secondary">\n              <ion-icon name="pin" ></ion-icon>\n          </button>\n  </ion-fab>\n  <ion-card>\n    <div class="contenedor">\n        <img src="assets/imgs/laguna/lagup.JPG">\n        <h6 class="centrado">{{ \'PAGES.LAGUNAS.TITLE_PAGE\' | translate }}</h6>\n    </div>\n      <ion-card-content>\n          <p align="justify">\n            {{ \'PAGES.LAGUNAS.DESCRIPCION\' | translate }}\n          </p>\n           <p align="justify">\n                <b>{{ \'PAGES.LAGUNAS.INFO\' | translate }}</b><br>{{ \'PAGES.LAGUNAS.INFO1\' | translate }}<br>{{ \'PAGES.LAGUNAS.INFO2\' | translate }}<br>{{ \'PAGES.LAGUNAS.INFO3\' | translate }}<br>{{ \'PAGES.LAGUNAS.INFO4\' | translate }}<br>{{ \'PAGES.LAGUNAS.INFO5\' | translate }}<br>\n           </p>\n        <p align="justify">\n          <b>{{ \'PAGES.LAGUNAS.TITLE2\' | translate }}</b><br>\n          <b>{{ \'PAGES.LAGUNAS.TITLE3\' | translate }}</b><br>\n          {{ \'PAGES.LAGUNAS.LLEVAR\' | translate }}<br>\n          <b>{{ \'PAGES.LAGUNAS.TITLE5\' | translate }}</b><br>\n          <b>{{ \'PAGES.LAGUNAS.TITLE6\' | translate }}</b><br>\n          {{ \'PAGES.LAGUNAS.OBLIGATORIO\' | translate }}<br>\n          <b>{{ \'PAGES.LAGUNAS.TITLE7\' | translate }}</b><br>\n          {{ \'PAGES.LAGUNAS.OPCIONAL2\' | translate }}<br>\n        </p>\n      </ion-card-content>\n      <ion-item>\n          <ion-slides pager>\n              <ion-slide>\n                  <img src="assets/imgs/laguna/lagu1.JPG">\n              </ion-slide>\n              <ion-slide>\n                  <img src="assets/imgs/laguna/lagu2.JPG">\n              </ion-slide>\n              <!-- <ion-slide>\n                  <img src="assets/imgs/chis/chi3.JPG">\n              </ion-slide> -->\n          </ion-slides>\n      </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\lagunas\lagunas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LagunasPage);
    return LagunasPage;
}());

//# sourceMappingURL=lagunas.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcosistemicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EcosistemicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EcosistemicoPage = /** @class */ (function () {
    function EcosistemicoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EcosistemicoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EcosistemicoPage');
    };
    EcosistemicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ecosistemico',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\ecosistemico\ecosistemico.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title> <ion-icon item-left name="water"></ion-icon> {{ \'PAGES.ECOSISTEMICO.TITLE_PAGE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-fab right top>\n      <button ion-fab color="secondary">\n         <ion-icon name="pin" ></ion-icon>\n      </button>\n  </ion-fab>\n  <ion-card>\n          <p align="justify">\n            <b>{{ \'PAGES.ECOSISTEMICO.TITLE1\' | translate }}</b><br>\n            {{ \'PAGES.ECOSISTEMICO.INFO\' | translate }}<br>\n            {{ \'PAGES.ECOSISTEMICO.INFO1\' | translate }}<br>\n            {{ \'PAGES.ECOSISTEMICO.INFO2\' | translate }}<br>\n            {{ \'PAGES.ECOSISTEMICO.INFO3\' | translate }}<br>\n            {{ \'PAGES.ECOSISTEMICO.INFO4\' | translate }}\n          </p>\n          <p align="justify">\n            <b>{{ \'PAGES.ECOSISTEMICO.INFO41\' | translate }}</b>\n          </p>\n          <img src="assets/imgs/ecosis/ecosis1.jpg">\n          <p align="justify">\n            <b>{{ \'PAGES.ECOSISTEMICO.INFO42\' | translate }}</b><br>\n            {{ \'PAGES.ECOSISTEMICO.INFO43\' | translate }}\n          </p>\n          <p align="justify">\n            <b>{{ \'PAGES.ECOSISTEMICO.INFO44\' | translate }}</b>\n          </p>\n          <ion-slides spacesBetween="10" pager> \n            <ion-slide>\n              <img src="assets/imgs/ecosis/ecosis2.jpg">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/ecosis/ecosis3.jpg">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/ecosis/ecosis4.jpg">\n            </ion-slide>\n          </ion-slides>\n          <p align="justify">\n            <b>{{ \'PAGES.ECOSISTEMICO.INFO45\' | translate }}</b>\n          </p>\n          <p align="justify">\n            <b>{{ \'PAGES.ECOSISTEMICO.INFO46\' | translate }}</b>\n          </p>\n          <ion-slides spacesBetween="10" pager> \n            <ion-slide>\n              <img src="assets/imgs/ecosis/ecosis5.jpg">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/ecosis/ecosis6.jpg">\n            </ion-slide>\n          </ion-slides>\n          <p align="justify">\n            <b>{{ \'PAGES.ECOSISTEMICO.INFO48\' | translate }}</b>\n          </p>\n          <ion-slides spacesBetween="10" pager> \n            <ion-slide>\n              <img src="assets/imgs/ecosis/ecosis7.jpg">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/ecosis/ecosis8.jpg">\n            </ion-slide>\n          </ion-slides>\n          <p align="justify">\n            <b>{{ \'PAGES.ECOSISTEMICO.INFO49\' | translate }}</b>\n          </p>\n          <img src="assets/imgs/ecosis/ecosis9.jpg">\n          <p align="justify">\n            <b>{{ \'PAGES.ECOSISTEMICO.INFO50\' | translate }}</b><br>\n            {{ \'PAGES.ECOSISTEMICO.INFO51\' | translate }}\n          </p>\n          <p align="justify">\n            <b>{{ \'PAGES.ECOSISTEMICO.INFO52\' | translate }}</b><br>\n            {{ \'PAGES.ECOSISTEMICO.INFO53\' | translate }}\n          </p>\n          <p align="justify">\n            <b>{{ \'PAGES.ECOSISTEMICO.INFO54\' | translate }}</b><br>\n            {{ \'PAGES.ECOSISTEMICO.INFO55\' | translate }}\n          </p>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\ecosistemico\ecosistemico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EcosistemicoPage);
    return EcosistemicoPage;
}());

//# sourceMappingURL=ecosistemico.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfraestructuraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InfraestructuraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfraestructuraPage = /** @class */ (function () {
    function InfraestructuraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfraestructuraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfraestructuraPage');
    };
    InfraestructuraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-infraestructura',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\infraestructura\infraestructura.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title> <ion-icon item-left name="bonfire"></ion-icon> {{ \'PAGES.INFRAESTRUCTURA.TITLE_PAGE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-fab right top>\n      <button ion-fab color="secondary">\n         <ion-icon name="pin" ></ion-icon>\n      </button>\n  </ion-fab>\n  <ion-card>\n      <ion-card-content>\n          <p align="justify">\n            {{ \'PAGES.INFRAESTRUCTURA.DESCRIPCION\' | translate }}\n          </p>\n          <p align="justify">\n            <b>{{ \'PAGES.INFRAESTRUCTURA.DESC\' | translate }}</b><br>{{ \'PAGES.INFRAESTRUCTURA.DESC1\' | translate }}<br>{{ \'PAGES.INFRAESTRUCTURA.DESC2\' | translate }}\n        </p>\n      </ion-card-content>\n      <p><b>{{ \'PAGES.INFRAESTRUCTURA.INFO\' | translate }}</b></p>\n      <img src="assets/imgs/infra/inf1.jpg">\n        <p align="justify">\n            {{ \'PAGES.INFRAESTRUCTURA.INFO1\' | translate }}\n        </p>\n      <p><b>{{ \'PAGES.INFRAESTRUCTURA.INFO3\' | translate }}</b></p>\n      <img src="assets/imgs/infra/inf2.jpg">\n      <p align="justify">\n            {{ \'PAGES.INFRAESTRUCTURA.INFO4\' | translate }}\n        </p>\n      <p><b>{{ \'PAGES.INFRAESTRUCTURA.INFO41\' | translate }}</b></p>\n      <img src="assets/imgs/infra/inf3.jpg">\n      <p align="justify">\n            {{ \'PAGES.INFRAESTRUCTURA.INFO42\' | translate }}\n        </p>\n        <p><b>{{ \'PAGES.INFRAESTRUCTURA.INFO43\' | translate }}</b></p>\n        <img src="assets/imgs/infra/inf4.jpg">\n        <p align="justify">\n              {{ \'PAGES.INFRAESTRUCTURA.INFO44\' | translate }}\n          </p>\n        <p><b>{{ \'PAGES.INFRAESTRUCTURA.INFO45\' | translate }}</b></p>\n        <img src="assets/imgs/infra/inf5.jpg">\n        <p><b>{{ \'PAGES.INFRAESTRUCTURA.INFO46\' | translate }}</b></p>\n        <img src="assets/imgs/infra/inf6.jpg">\n        <p align="justify">\n            {{ \'PAGES.INFRAESTRUCTURA.CAMPING\' | translate }}\n        </p>\n        <img src="assets/imgs/infra/inf7.jpg">\n        <p align="justify">\n            {{ \'PAGES.INFRAESTRUCTURA.CAMPING2\' | translate }}\n        </p>\n        <p><b>{{ \'PAGES.INFRAESTRUCTURA.INFO47\' | translate }}</b></p>\n        <img src="assets/imgs/infra/inf8.JPG">\n        <p align="justify">\n            {{ \'PAGES.INFRAESTRUCTURA.INFO48\' | translate }}\n        </p>\n        <p><b>{{ \'PAGES.INFRAESTRUCTURA.INFO49\' | translate }}</b></p>\n        <img src="assets/imgs/infra/inf9.jpg">\n        <p align="justify">\n            {{ \'PAGES.INFRAESTRUCTURA.INFO5\' | translate }}\n        </p>\n        <p><b>{{ \'PAGES.INFRAESTRUCTURA.INFO51\' | translate }}</b></p>\n        <img src="assets/imgs/infra/inf10.jpg">\n        <p align="justify">\n            {{ \'PAGES.INFRAESTRUCTURA.INFO52\' | translate }}\n        </p>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\infraestructura\infraestructura.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], InfraestructuraPage);
    return InfraestructuraPage;
}());

//# sourceMappingURL=infraestructura.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactoPage = /** @class */ (function () {
    function ContactoPage(navCtrl, navParams, alertCtrl, platform, _translate, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this._translate = _translate;
        this.emailComposer = emailComposer;
        this.numero = '';
        this.email1 = '';
        this.comentario = '';
        this.orderForm = __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */];
    }
    ContactoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactoPage');
    };
    ContactoPage.prototype.enviar = function () {
        var _this = this;
        this._translate.get("PAGES.CONTACTO.ALERT_TITLE").subscribe(function (res) {
            _this.title1 = res;
        });
        this._translate.get("PAGES.CONTACTO.ALERT_SUBTITLE").subscribe(function (res) {
            _this.subTitle1 = res;
        });
        var alert = this.alertCtrl.create({
            title: this.title1,
            subTitle: this.subTitle1,
            buttons: ['OK']
        });
        alert.present();
    };
    ContactoPage.prototype.send = function (numero, email1, comentario) {
        var _this = this;
        /* console.log(email1); */
        this._translate.get("PAGES.CONTACTO.ALERT_TITLE").subscribe(function (res) {
            _this.title1 = res;
        });
        this._translate.get("PAGES.CONTACTO.ALERT_SUBTITLE").subscribe(function (res) {
            _this.subTitle1 = res;
        });
        var email = {
            to: 'jorge28pucha@gmail.com',
            cc: email1,
            bcc: [email1, ''],
            attachments: [],
            subject: 'Contacto con Podocarpus Tourist Guide',
            body: comentario + '<p>Phone Number: ' + numero,
            isHtml: true
        };
        this.emailComposer.open(email);
        var alert = this.alertCtrl.create({
            title: this.title1,
            subTitle: this.subTitle1,
            buttons: ['OK']
        });
        alert.present();
        this.clearSearch();
    };
    ContactoPage.prototype.clearSearch = function () {
        this.numero = null;
        this.email1 = null;
        this.comentario = null;
    };
    ContactoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacto',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\contacto\contacto.html"*/'<!-- <ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{ \'PAGES.CONTACTO.TITLE_PAGE\' | translate }}</ion-title>\n      </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n  <form ion-grid fixed #form="ngForm">\n  <p>{{ \'PAGES.CONTACTO.TITLE1\' | translate }}</p>\n  <ion-list ion-row>\n    <ion-item ion-col col-12 col-sm-6 col-md-4>\n      <ion-label floating>{{ \'PAGES.CONTACTO.PERFIL\' | translate }}</ion-label>\n      <ion-input type="text" name="numero" [(ngModel)]="numero" required="required" clearInput="true"></ion-input>\n    </ion-item>\n    <ion-item ion-col col-12 col-sm-6 col-md-4>\n        <ion-label floating>{{ \'PAGES.CONTACTO.CORREO\' | translate }}</ion-label>\n        <ion-input type="text" name="email1" [(ngModel)]="email1" required="required" clearInput="true"></ion-input>\n    </ion-item>\n    <ion-item ion-col col-12 col-md-4>\n        <ion-label floating>{{ \'PAGES.CONTACTO.COMENTARIO\' | translate }}</ion-label>\n        <ion-textarea name="comentario" [(ngModel)]="comentario" required="required"></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <div ion-col col-12 margin text-center>\n      <button type="submit" ion-button icon-left round [disabled]="form.invalid" (click)="send(numero,email1,comentario)">\n          <ion-icon name="send"></ion-icon>\n          {{ \'PAGES.CONTACTO.ENVIAR\' | translate }}\n      </button>\n  </div> \n  </form>\n  </ion-content> -->\n\n<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title> <ion-icon item-left name="mail"></ion-icon> {{ \'PAGES.CONTACT.TITLE_PAGE\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n        <!-- <ion-row style="align-items:center;">\n                <ion-col col-12>\n                    \n              </ion-col>\n        </ion-row> -->\n        <img src="assets/imgs/mae2.jpg">\n        <p align="center">\n                <b>{{\'PAGES.CONTACT.TITLE1\' | translate}}</b><br>{{\'PAGES.CONTACT.TITLE2\' | translate}}<br>{{\'PAGES.CONTACT.TITLE3\' | translate}}\n        </p> \n        <p align="center">\n                <b>{{\'PAGES.CONTACT.TITLE4\' | translate}}</b><br>{{\'PAGES.CONTACT.TITLE5\' | translate}}<br>{{\'PAGES.CONTACT.TITLE6\' | translate}}\n        </p> \n        <ion-row style="align-items:center;">\n                <ion-col col-4>\n                </ion-col>\n                <ion-col col-4>\n                    <img src="assets/imgs/pnpc.jpg">\n              </ion-col>\n              <ion-col col-4>\n              </ion-col>\n        </ion-row>\n        <p align="center">\n                <b>{{\'PAGES.CONTACT.TITLE7\' | translate}}</b><br><b>{{\'PAGES.CONTACT.TITLE8\' | translate}}</b><br>{{\'PAGES.CONTACT.TITLE9\' | translate}}<br><b>{{\'PAGES.CONTACT.TITLE10\' | translate}}</b><br>{{\'PAGES.CONTACT.TITLE11\' | translate}}<br><b>{{\'PAGES.CONTACT.TITLE101\' | translate}}</b><br>{{\'PAGES.CONTACT.TITLE111\' | translate}}\n        </p> \n        <ion-row style="align-items:center;">\n                <ion-col col-4>\n                </ion-col>\n                <ion-col col-4>\n                    <img src="assets/imgs/email.jpg">\n              </ion-col>\n              <ion-col col-4>\n              </ion-col>\n        </ion-row>\n        <p align="center">\n                <b>{{\'PAGES.CONTACT.TITLE12\' | translate}}</b><br>{{\'PAGES.CONTACT.TITLE13\' | translate}}<br>{{\'PAGES.CONTACT.TITLE14\' | translate}}\n        </p>\n        <ion-row style="align-items:center;">\n            <ion-col col-2>\n            </ion-col>\n            <ion-col col-2>\n                <img src="assets/imgs/face.jpg">\n            </ion-col>\n            <ion-col col-2>\n            </ion-col>\n            <ion-col col-2>\n            </ion-col>\n            <ion-col col-2>\n                <img src="assets/imgs/twiter.png">\n            </ion-col>\n            <ion-col col-2>\n            </ion-col>\n        </ion-row>\n        <ion-row style="align-items:center;">\n                <ion-col col-6>\n                    <h6>{{ \'PAGES.CONTACT.TITLE15\' | translate }}</h6>\n                    <h6>{{ \'PAGES.CONTACT.TITLE16\' | translate }}</h6>\n                </ion-col>\n                <ion-col col-6>\n                    <h6>{{ \'PAGES.CONTACT.TITLE17\' | translate }}</h6>\n                    <h6>{{ \'PAGES.CONTACT.TITLE18\' | translate }}</h6>\n              </ion-col>\n        </ion-row>\n        <p align="center">\n                <b>{{\'PAGES.CONTACT.TITLE19\' | translate}}</b>\n        </p>\n        <ion-row style="align-items:center;">\n                <ion-col col-4>\n                    <img src="assets/imgs/ecu.png">\n                </ion-col>\n                <ion-col col-4>\n                </ion-col>\n                <ion-col col-4>\n                    <img src="assets/imgs/delito.png">\n                </ion-col>\n        </ion-row>\n    \n    \n    \n</ion-content>'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\contacto\contacto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], ContactoPage);
    return ContactoPage;
}());

//# sourceMappingURL=contacto.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorreoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CorreoPage = /** @class */ (function () {
    function CorreoPage(navCtrl, navParams, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
    }
    CorreoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CorreoPage');
    };
    CorreoPage.prototype.send = function (numero, email1, comentario) {
        console.log(email1);
        // alert(‘senemail enter’);
        var email = {
            to: 'jorge28pucha@gmail.com',
            cc: email1,
            bcc: [email1, ''],
            attachments: [],
            subject: 'Contacto con Podocarpus Tourist Guide',
            body: comentario + '<p>Phone Number: ' + numero,
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    CorreoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-correo',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\correo\correo.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>{{ \'PAGES.CONTACTO.TITLE_PAGE\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n<form ion-grid fixed #form="ngForm">\n<p>{{ \'PAGES.CONTACTO.TITLE1\' | translate }}</p>\n<ion-list ion-row>\n  <ion-item ion-col col-12 col-sm-6 col-md-4>\n    <ion-label floating>{{ \'PAGES.CONTACTO.PERFIL\' | translate }}</ion-label>\n    <ion-input type="text" name="numero" [(ngModel)]="numero" required="required" clearInput="true"></ion-input>\n  </ion-item>\n  <ion-item ion-col col-12 col-sm-6 col-md-4>\n      <ion-label floating>{{ \'PAGES.CONTACTO.CORREO\' | translate }}</ion-label>\n      <ion-input type="text" name="email1" [(ngModel)]="email1" required="required" clearInput="true"></ion-input>\n  </ion-item>\n  <ion-item ion-col col-12 col-md-4>\n      <ion-label floating>{{ \'PAGES.CONTACTO.COMENTARIO\' | translate }}</ion-label>\n      <ion-textarea name="comentario" [(ngModel)]="comentario" required="required"></ion-textarea>\n  </ion-item>\n  <!-- <ion-item ion-col col-12>\n      <ion-label>{{ \'PAGES.CONTACTO.ROBOT\' | translate }}</ion-label>\n      <ion-checkbox required></ion-checkbox>\n  </ion-item> -->\n</ion-list>\n<div ion-col col-12 margin text-center>\n    <button type="submit" ion-button icon-left round [disabled]="form.invalid" (click)="send(numero,email1,comentario)">\n        <ion-icon name="send"></ion-icon>\n        {{ \'PAGES.CONTACTO.ENVIAR\' | translate }}\n    </button>\n</div> \n</form>\n</ion-content>'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\correo\correo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], CorreoPage);
    return CorreoPage;
}());

//# sourceMappingURL=correo.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcosistemasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EcosistemasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EcosistemasPage = /** @class */ (function () {
    function EcosistemasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EcosistemasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EcosistemasPage');
    };
    EcosistemasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ecosistemas',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\ecosistemas\ecosistemas.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title> <ion-icon item-left name="rose"></ion-icon> {{ \'PAGES.ECOSISTEMAS.TITLE_PAGE\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <!-- <ion-slides spacesBetween="10" pager> \n        <ion-slide>\n            <img src="assets/imgs/oso.jpg">\n            <h6 id="card-title">{{ \'PAGES.FAUNA.TITLE_PAGE\' | translate }}</h6>\n            <h6 id="card-subtitle">Woof1</h6>\n        </ion-slide>\n        <ion-slide>\n            <img src="assets/imgs/osoa.jpg">\n            <h6 id="card-title">Oso</h6>\n            <h6 id="card-subtitle">Fauna1</h6>\n        </ion-slide>\n      </ion-slides> -->\n      <div class="contenedor">\n        <img src="assets/imgs/eco.JPG">\n        <h6 class="centrado">{{ \'PAGES.ECOSISTEMAS.TITLE_PAGE\' | translate }}</h6>\n      </div>\n            <p align="justify">\n              {{ \'PAGES.ECOSISTEMAS.TITLE1\' | translate }}\n            </p> \n            \n            <!-- <ion-list>\n                    <ion-item >\n                      <ion-scroll scrollX="true">\n                            \n                                <img src="assets/imgs/ecotabla.jpg">\n                            \n                      </ion-scroll>\n                    </ion-item>\n            </ion-list> -->\n            <!-- <img src="assets/imgs/ecotabla.jpg"> -->\n            <ion-scroll scrollX="true">\n                <ion-segment style="width: 400px;">\n                    <img src="assets/imgs/ecotabla.jpg">\n                </ion-segment>\n            </ion-scroll>\n            <p align="justify">\n                {{\'PAGES.ECOSISTEMAS.TITLE2\' | translate}}<br>{{\'PAGES.ECOSISTEMAS.TITLE3\' | translate}}<br>{{\'PAGES.ECOSISTEMAS.TITLE4\' | translate}}<br>{{\'PAGES.ECOSISTEMAS.TITLE5\' | translate}}\n            </p> \n            <p align="justify">\n                <b>{{\'PAGES.ECOSISTEMAS.TITLE6\' | translate}}</b>\n            </p> \n            <img src="assets/imgs/ma1.jpg">\n            <ion-scroll scrollX="true">\n                <ion-segment style="width: 320px;">\n                    <img src="assets/imgs/le1.jpg">\n                </ion-segment>\n            </ion-scroll>\n            <!-- <img src="assets/imgs/le1.jpg"> -->\n            <img src="assets/imgs/ga3.jpg">\n            <img src="assets/imgs/ga4.jpg">\n   \n</ion-content>'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\ecosistemas\ecosistemas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EcosistemasPage);
    return EcosistemasPage;
}());

//# sourceMappingURL=ecosistemas.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaunaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FaunaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaunaPage = /** @class */ (function () {
    function FaunaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FaunaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaunaPage');
    };
    FaunaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fauna',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\fauna\fauna.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title> <ion-icon item-left name="paw"></ion-icon> {{ \'PAGES.FAUNA.TITLE_PAGE\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n            <ion-slides spacesBetween="10" pager> \n                <ion-slide>\n                    <img src="assets/imgs/fauna1.jpg">\n                    <h6 id="card-title">{{ \'PAGES.FAUNA.TITLE_PAGE\' | translate }}</h6>\n                </ion-slide>\n                <ion-slide>\n                    <img src="assets/imgs/fauna2.jpg">\n                    <h6 id="card-title">{{ \'PAGES.FAUNA.TITLE_PAGE\' | translate }}</h6>\n                </ion-slide>\n                <ion-slide>\n                    <img src="assets/imgs/fauna3.jpg">\n                    <h6 id="card-title">{{ \'PAGES.FAUNA.TITLE_PAGE\' | translate }}</h6>\n                </ion-slide>\n              </ion-slides>\n              <p align="justify">\n                    {{\'PAGES.FAUNA.TITLE1\' | translate}}\n                </p> \n              <p align="justify">\n                  <b>{{\'PAGES.FAUNA.TITLE2\' | translate}}</b><br>{{\'PAGES.FAUNA.TITLE3\' | translate}}<i>{{\'PAGES.FAUNA.TITLE4\' | translate}}</i>{{\'PAGES.FAUNA.TITLE5\' | translate}}<i>{{\'PAGES.FAUNA.TITLE6\' | translate}}</i>{{\'PAGES.FAUNA.TITLE7\' | translate}}<i>{{\'PAGES.FAUNA.TITLE8\' | translate}}</i>{{\'PAGES.FAUNA.TITLE9\' | translate}}<i>{{\'PAGES.FAUNA.TITLE10\' | translate}}</i>\n              </p> \n              <p align="justify">\n                <b>{{\'PAGES.FAUNA.TITLE11\' | translate}}</b><br>{{\'PAGES.FAUNA.TITLE12\' | translate}}<i>{{\'PAGES.FAUNA.TITLE13\' | translate}}</i>{{\'PAGES.FAUNA.TITLE14\' | translate}}<i>{{\'PAGES.FAUNA.TITLE15\' | translate}}</i>{{\'PAGES.FAUNA.TITLE16\' | translate}}<i>{{\'PAGES.FAUNA.TITLE17\' | translate}}</i>{{\'PAGES.FAUNA.TITLE18\' | translate}}<i>{{\'PAGES.FAUNA.TITLE19\' | translate}}</i>{{\'PAGES.FAUNA.TITLE20\' | translate}}<i>{{\'PAGES.FAUNA.TITLE21\' | translate}}</i>\n              </p> \n              <p align="justify">\n                <b>{{\'PAGES.FAUNA.TITLE22\' | translate}}</b><br>{{\'PAGES.FAUNA.TITLE23\' | translate}}<i>{{\'PAGES.FAUNA.TITLE24\' | translate}}</i>{{\'PAGES.FAUNA.TITLE25\' | translate}}<i>{{\'PAGES.FAUNA.TITLE26\' | translate}}</i>{{\'PAGES.FAUNA.TITLE27\' | translate}}<i>{{\'PAGES.FAUNA.TITLE28\' | translate}}</i>\n              </p> \n              \n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\fauna\fauna.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FaunaPage);
    return FaunaPage;
}());

//# sourceMappingURL=fauna.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FloraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FloraPage = /** @class */ (function () {
    function FloraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FloraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FloraPage');
    };
    FloraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flora',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\flora\flora.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title> <ion-icon item-left name="flower"></ion-icon> {{ \'PAGES.FLORA.TITLE_PAGE\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-slides spacesBetween="10" pager> \n        <ion-slide>\n            <img src="assets/imgs/flora1.jpg">\n            <h6 id="card-title">{{ \'PAGES.FLORA.TITLE_PAGE\' | translate }}</h6>\n        </ion-slide>\n        <ion-slide>\n            <img src="assets/imgs/flora2.jpg">\n            <h6 id="card-title">{{ \'PAGES.FLORA.TITLE_PAGE\' | translate }}</h6>\n        </ion-slide>\n        \n      </ion-slides>\n      <p align="justify">\n        {{\'PAGES.FLORA.TITLE1\' | translate}}<br>{{\'PAGES.FLORA.TITLE2\' | translate}}<br>{{\'PAGES.FLORA.TITLE3\' | translate}}<br>{{\'PAGES.FLORA.TITLE4\' | translate}}\n      </p> \n      <p align="justify">\n          <b>{{\'PAGES.FLORA.TITLE5\' | translate}}</b>\n      </p> \n      <img src="assets/imgs/flora3.jpg">\n      <ion-scroll scrollX="true">\n            <ion-segment style="width: 400px;">\n                <img src="assets/imgs/flora4.jpg">\n            </ion-segment>\n        </ion-scroll>\n      \n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\flora\flora.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FloraPage);
    return FloraPage;
}());

//# sourceMappingURL=flora.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralidadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GeneralidadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GeneralidadesPage = /** @class */ (function () {
    function GeneralidadesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GeneralidadesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeneralidadesPage');
    };
    GeneralidadesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-generalidades',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\generalidades\generalidades.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title> <ion-icon item-left name="information-circle"></ion-icon> {{ \'PAGES.GENERALIDADES.TITLE_PAGE\' | translate }}</ion-title>\n      \n    </ion-navbar>\n</ion-header>\n<ion-content padding class="card-background-page">\n  <!-- <div class="a">\n      <img src="assets/imgs/oso.jpg" alt="">\n      <h5 class="card-title">{{ \'PAGES.GENERALIDADES.TITLE_PAGE\' | translate }}</h5>\n      <h5 class="card-subtitle">Oso de Anteojos</h5>\n  </div> -->\n  <ion-slides spacesBetween="10" pager> \n        <ion-slide>\n            <img src="assets/imgs/general1.JPG">\n            <h6 id="card-title">{{ \'PAGES.GENERALIDADES.TITLE_PAGE\' | translate }}</h6>\n        </ion-slide>\n        <ion-slide>\n            <img src="assets/imgs/general2.jpg">\n            <h6 id="card-title">{{ \'PAGES.GENERALIDADES.TITLE_PAGE\' | translate }}</h6>\n        </ion-slide>\n      </ion-slides>\n            <p align="justify">\n              <b>{{\'PAGES.GENERALIDADES.TITLE1\' | translate}}</b><br>{{\'PAGES.GENERALIDADES.TITLE2\' | translate}}<i>{{\'PAGES.GENERALIDADES.TITLE211\' | translate}}</i>{{\'PAGES.GENERALIDADES.TITLE222\' | translate}}\n            </p> \n            <p align="justify">\n              <b>{{\'PAGES.GENERALIDADES.TITLE3\' | translate}}</b><br><b>{{\'PAGES.GENERALIDADES.TITLE4\' | translate}}</b>{{\'PAGES.GENERALIDADES.TITLE5\' | translate}}<br><b>{{\'PAGES.GENERALIDADES.TITLE6\' | translate}}</b>{{\'PAGES.GENERALIDADES.TITLE7\' | translate}}<br><b>{{\'PAGES.GENERALIDADES.TITLE8\' | translate}}</b>{{\'PAGES.GENERALIDADES.TITLE9\' | translate}}<br><b>{{\'PAGES.GENERALIDADES.TITLE10\' | translate}}</b>{{\'PAGES.GENERALIDADES.TITLE11\' | translate}}<br><b>{{\'PAGES.GENERALIDADES.TITLE12\' | translate}}</b>{{\'PAGES.GENERALIDADES.TITLE13\' | translate}}<br><b>{{\'PAGES.GENERALIDADES.TITLE14\' | translate}}</b><br>{{\'PAGES.GENERALIDADES.TITLE15\' | translate}}<br>{{\'PAGES.GENERALIDADES.TITLE16\' | translate}}\n              <br><br><b>{{\'PAGES.GENERALIDADES.TITLE17\'|translate}}</b><br>{{\'PAGES.GENERALIDADES.TITLE18\' | translate}}<br>{{\'PAGES.GENERALIDADES.TITLE19\' | translate}}<br>{{\'PAGES.GENERALIDADES.TITLE20\' | translate}}<br>{{\'PAGES.GENERALIDADES.TITLE21\' | translate}}<br>{{\'PAGES.GENERALIDADES.TITLE22\' | translate}}<br><br><b>{{\'PAGES.GENERALIDADES.TITLE23\'|translate}}</b><br>{{\'PAGES.GENERALIDADES.TITLE24\' | translate}}<br>{{\'PAGES.GENERALIDADES.TITLE25\' | translate}}<br>{{\'PAGES.GENERALIDADES.TITLE26\' | translate}}\n            </p> \n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\generalidades\generalidades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], GeneralidadesPage);
    return GeneralidadesPage;
}());

//# sourceMappingURL=generalidades.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdiomaPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IdiomaPopoverPage = /** @class */ (function () {
    function IdiomaPopoverPage(navCtrl, navParams, viewCtrl, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._translate = _translate;
        this._translate.get("PAGES.HOME.RADIO").subscribe(function (res) {
            _this.status = res;
        });
        /*     this.status=1; */
        this.items = this.navParams.get('listData');
        console.log(this.items);
    }
    IdiomaPopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IdiomaPopoverPage');
    };
    IdiomaPopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    IdiomaPopoverPage.prototype.dismiss = function (item) {
        var data = item;
        this.viewCtrl.dismiss(data);
    };
    IdiomaPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-idioma-popover',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\idioma-popover\idioma-popover.html"*/'<!--       <ion-content >\n          <ion-list>\n            <ion-item>\n              <p>LANGUAGE</p>\n            </ion-item>\n            <ion-item *ngFor="let item of items" (click)="dismiss(item)">\n              <img item-left src=\'assets/icon/{{item.img}}\'/>\n              <ion-label>{{item.title}}</ion-label> \n            </ion-item>\n          </ion-list>\n      </ion-content> -->\n      <ion-list radio-group [(ngModel)]="status">\n          <ion-item>\n            <p>LANGUAGE</p>\n          </ion-item>\n          <ion-item >\n            <img item-left src="assets/imgs/icon/espanol.jpg" alt="">\n            <ion-label>Español</ion-label>\n            <ion-radio name="status" value="1" (click)="dismiss(\'es\')"></ion-radio>\n          </ion-item>\n          <ion-item >\n            <img item-left src="assets/imgs/icon/ingles.jpg" alt="">\n            <ion-label>English</ion-label>\n            <ion-radio name="status" value="2" (click)="dismiss(\'en\')"></ion-radio>\n          </ion-item>\n      </ion-list>\n'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\idioma-popover\idioma-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], IdiomaPopoverPage);
    return IdiomaPopoverPage;
}());

//# sourceMappingURL=idioma-popover.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiguelPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MiguelPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MiguelPopoverPage = /** @class */ (function () {
    function MiguelPopoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MiguelPopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MiguelPopoverPage');
    };
    MiguelPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-miguel-popover',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\miguel-popover\miguel-popover.html"*/'<ion-list>\n  <ion-item >\n    <p align="center">{{ \'PAGES.MIGUEL.TITLE_PAGE\' | translate }}</p>\n  </ion-item>\n  <ion-item >\n    <ion-scroll scrollY="true">\n        <div id="textbox">\n            <p>\n                {{ \'PAGES.MIGUEL.INFO1\' | translate }}\n            </p> \n            <p>\n                {{ \'PAGES.MIGUEL.INFO2\' | translate }}\n            </p> \n            <p>\n                {{ \'PAGES.MIGUEL.INFO3\' | translate }}\n            </p> \n        </div>\n    </ion-scroll>\n  </ion-item>\n</ion-list>'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\miguel-popover\miguel-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MiguelPopoverPage);
    return MiguelPopoverPage;
}());

//# sourceMappingURL=miguel-popover.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NosotrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NosotrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NosotrosPage = /** @class */ (function () {
    function NosotrosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NosotrosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NosotrosPage');
    };
    NosotrosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nosotros',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\nosotros\nosotros.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title> <ion-icon item-left name="contact"></ion-icon> {{ \'PAGES.NOSOTROS.TITLE_PAGE\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div class="contenedor">\n        <img src="assets/imgs/fondo2.jpg">\n        <h6 class="centrado">{{ \'PAGES.NOSOTROS.TITLE_PAGE\' | translate }}</h6>\n    </div>\n          <p align="justify">\n            <b>{{\'PAGES.NOSOTROS.TITLE1\' | translate}}</b><br>{{\'PAGES.NOSOTROS.TITLE2\' | translate}}<br>{{\'PAGES.NOSOTROS.TITLE3\' | translate}}\n          </p> \n</ion-content>'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\nosotros\nosotros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NosotrosPage);
    return NosotrosPage;
}());

//# sourceMappingURL=nosotros.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TutorialPage = /** @class */ (function () {
    function TutorialPage(navCtrl, navParams, menu, storage, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.showSkip = true;
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
    TutorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialPage');
    };
    TutorialPage.prototype.startApp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd;
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('NAV'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], TutorialPage.prototype, "nav", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\tutorial\tutorial.html"*/'<ion-header no-shadow>\n  <ion-navbar>\n      <!-- <ion-buttons end *ngIf="showSkip">\n          <button ion-button (click)="startApp()" color="primary">Saltar</button>\n      </ion-buttons> -->\n      <ion-buttons end *ngIf="showSkip">\n        <button ion-button (click)="startApp()" color="primary">Saltar</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="bg-img">\n  <ion-slides (ionWillChange)="onSlideChangeStart($event)" pager>\n      <ion-slide *ngFor="let slide of slides">\n          <img [src]="slide.image" class="slide-image" alt="slide.title" />\n          <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n          <p [innerHTML]="slide.description"></p>\n      </ion-slide>\n      <ion-slide>\n          <img src="assets/imgs/ica-slidebox-img-4.png" class="slide-image" alt="slide" />\n          <h2 class="slide-title">Ready for hangout?</h2>\n          <button ion-button icon-right large clear (click)="startApp()">\n      Continuar a la app\n      <ion-icon name="jet"></ion-icon>\n    </button>\n      </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\tutorial\tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bombuscaro/bombuscaro.module": [
		331,
		26
	],
	"../pages/bosque/bosque.module": [
		332,
		25
	],
	"../pages/cabania/cabania.module": [
		333,
		24
	],
	"../pages/cajanuma/cajanuma.module": [
		334,
		23
	],
	"../pages/chismosa/chismosa.module": [
		335,
		22
	],
	"../pages/contacto/contacto.module": [
		336,
		21
	],
	"../pages/correo/correo.module": [
		337,
		20
	],
	"../pages/ecosistemas/ecosistemas.module": [
		338,
		19
	],
	"../pages/ecosistemico/ecosistemico.module": [
		339,
		18
	],
	"../pages/fauna/fauna.module": [
		340,
		17
	],
	"../pages/flora/flora.module": [
		341,
		16
	],
	"../pages/generalidades/generalidades.module": [
		342,
		15
	],
	"../pages/higuerones/higuerones.module": [
		343,
		14
	],
	"../pages/idioma-popover/idioma-popover.module": [
		344,
		13
	],
	"../pages/infraestructura/infraestructura.module": [
		345,
		12
	],
	"../pages/lagunas/lagunas.module": [
		346,
		11
	],
	"../pages/miguel-popover/miguel-popover.module": [
		347,
		10
	],
	"../pages/mirador/mirador.module": [
		348,
		9
	],
	"../pages/miradores/miradores.module": [
		349,
		8
	],
	"../pages/nosotros/nosotros.module": [
		350,
		7
	],
	"../pages/oso/oso.module": [
		351,
		6
	],
	"../pages/poderosa/poderosa.module": [
		352,
		5
	],
	"../pages/rio-bombuscaro/rio-bombuscaro.module": [
		353,
		4
	],
	"../pages/transporte/transporte.module": [
		354,
		3
	],
	"../pages/traslado/traslado.module": [
		355,
		2
	],
	"../pages/tutorial/tutorial.module": [
		356,
		1
	],
	"../pages/urruquita/urruquita.module": [
		357,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 190;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OsoDeAnteojosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_geolocation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//IMPORTARMOS PARA LA GEOLOCALIZACION





var OsoDeAnteojosPage = /** @class */ (function () {
    function OsoDeAnteojosPage(navCtrl, navParams, zone, backgroundGeolocation, geolocation, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zone = zone;
        this.backgroundGeolocation = backgroundGeolocation;
        this.geolocation = geolocation;
        this.platform = platform;
        this.logs = [];
        this.lat = 0;
        this.lng = 0;
    }
    OsoDeAnteojosPage.prototype.ionViewDidEnter = function () {
        this.prepareMap();
    };
    OsoDeAnteojosPage.prototype.prepareMap = function () {
        this.mapOso = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.map('mapOso', {
            center: [-4.115833, -79.173012],
            zoom: 18,
            minZoom: 17,
            maxZoom: 18,
            attributionControl: true,
            zoomControl: true
        });
        __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.tileLayer('./assets/imgs/cajanuma/{z}/{x}/{y}.jpg').addTo(this.mapOso);
        //var senderos = L.layerGroup([mirador, lagunas]);
        //SECTOR CAJANUMA 
        //  LINEAS EN EL MAPA - SEB¡NDERO OSO DE ANTEOJOS
        var osoAnteojos = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.polyline([
            [-4.115892, -79.172401],
            [-4.115896, -79.172409],
            [-4.115925, -79.172424],
            [-4.11594, -79.172455],
            [-4.115918, -79.172531],
            [-4.115917, -79.172554],
            [-4.115913, -79.172569],
            [-4.11591, -79.172607],
            [-4.115891, -79.172691],
            [-4.11585, -79.172752],
            [-4.115857, -79.172813],
            [-4.115836, -79.172913],
            [-4.115833, -79.173012],
            [-4.115823, -79.173042],
            [-4.115858, -79.173164],
            [-4.115859, -79.17318],
            [-4.11578, -79.173386],
            [-4.115709, -79.173431],
            [-4.115699, -79.173447],
            [-4.115613, -79.173615],
            [-4.115581, -79.17366],
            [-4.11557, -79.173866],
            [-4.115571, -79.173897],
            [-4.115564, -79.173965],
            [-4.115564, -79.174057],
            [-4.11554, -79.174019],
            [-4.115481, -79.173904],
            [-4.115451, -79.173843],
            [-4.11542, -79.17379],
            [-4.115341, -79.173668],
            [-4.115384, -79.173531],
            [-4.115428, -79.173378],
            [-4.115439, -79.173363],
            [-4.115476, -79.173317],
            [-4.115549, -79.173126],
            [-4.115555, -79.173073],
            [-4.115593, -79.172913],
            [-4.115636, -79.172745],
            [-4.115633, -79.172699],
            [-4.115661, -79.172690],
            [-4.115661, -79.172680],
            [-4.115661, -79.172670]
        ], {
            color: "orange",
        }).bindPopup("<img src='./assets/imgs/oso.jpg' alt='Oso_Sendero' width='100%'/> <br> Oso de anteojos: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br>  Distancia: 400m <br> Tiempo aprox: 15min <br> Altitud: 2.808 m.s.n.m <br> Dificultad: baja").addTo(this.mapOso);
        //MARCADORES
        //-------\\\\\LEYENDA_MAPA/////--------------------
        var Dist1 = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.marker([-4.115857, -79.172813]).bindPopup('Distancia: 120 metros ').addTo(this.mapOso);
        var Dist2 = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.marker([-4.115581, -79.17366]).bindPopup('Distancia: 240 metros').addTo(this.mapOso);
        var Dist3 = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.marker([-4.115428, -79.173378]).bindPopup('Distancia: 260 metros').addTo(this.mapOso);
        var Distancias = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.layerGroup([Dist1, Dist2, Dist3]);
        var rutasBase = {
            "<span style= 'color: green'>Oso de Anteojos</span>": osoAnteojos,
        };
        var marcasMapa = {
            "Distancias": Distancias
            //"<img src='./assets/imgs/orquidea.jpg' alt='Orquidea_R_mirador' width='80px'/>Mirador": punto,
            //"<span style= 'color: green'>Grayscale</span>": punto,
        };
        //CONTROL LEYENDA posc y tipo
        __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.control.layers(rutasBase, marcasMapa, {
            position: 'topright',
            collapsed: true // true
        }).addTo(this.mapOso);
        var icono_Inicio = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.icon({
            iconUrl: './assets/imgs/inicio.svg',
            iconSize: [39, 49],
            popupAnchor: [0, -10],
        });
        var icono_Fin = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.icon({
            iconUrl: './assets/imgs/fin.svg',
            iconSize: [39, 49],
            popupAnchor: [0, -10],
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
        __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.marker([-4.115892, -79.172401], { icon: icono_Inicio }).bindPopup(inicioSendero).addTo(this.mapOso);
        __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.marker([-4.115661, -79.172670], { icon: icono_Fin }).bindPopup(finSendero).addTo(this.mapOso);
    };
    ;
    OsoDeAnteojosPage.prototype.dondeEstas = function (e) {
        var radius = 50 / 2;
        var icono_Inicio = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.icon({
            iconUrl: './assets/imgs/hombre.svg',
            iconSize: [39, 49],
            popupAnchor: [0, -10]
        });
        __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.marker([this.lat, this.lng], { icon: icono_Inicio }).addTo(this.mapOso)
            .bindPopup("Estas aprox a " + radius + " metros de este punto").openPopup();
        __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.circle([this.lat, this.lng], radius).addTo(this.mapOso);
        this.mapOso.on('dondeEstas', this.dondeEstas);
        this.mapOso.locate({ setView: true, maxZoom: 17 });
    };
    ;
    OsoDeAnteojosPage.prototype.startTracking = function () {
        //var radius = 30 / 2;
        //MARCARDOR SE UBICA EN EL MAPA CON LAS COORDENADAS
        //L.marker([this.lat, this.lng],{draggable: false}).addTo(this.mapOso);
        var _this = this;
        //Centra el mapa en la localizacion que arroja LatLng
        this.mapOso.locate({ setView: true, maxZoom: 17 });
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
        var config = {
            desiredAccuracy: 0,
            stationaryRadius: 20,
            distanceFilter: 0,
            debug: false,
            interval: 0,
            fastestInterval: 2500,
            notificationTitle: "LOCATIONTEST",
            notificationText: "Background location tracking is ON.",
            notificationIconLarge: "icon",
            notificationIconSmall: "icon",
            startOnBoot: true,
            startForeground: false,
            batchSync: true,
            autoSync: true,
            maxDaysToPersist: 1,
            activityType: 'AutomotiveNavigation',
            stopOnTerminate: true,
        };
        this.backgroundGeolocation.configure(config).subscribe(function (location) {
            console.log('Localizacion 2º Plano:  ' + location.latitude + ',' + location.longitude);
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = location.latitude;
                _this.lng = location.longitude;
            });
        }, function (err) {
            console.log(err);
        });
        // Turn ON the background-geolocation system.
        this.backgroundGeolocation.start();
        // Foreground Tracking
        var options = {
            frequency: 1200,
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 100
        };
        this.watch = this.geolocation.watchPosition(options).filter(function (p) { return p.code === undefined; }).subscribe(function (position) {
            console.log(position);
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                var icono_Inicio = __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.icon({
                    iconUrl: './assets/imgs/hombre.svg',
                    iconSize: [39, 49],
                    popupAnchor: [0, -10],
                });
                //LINEA TRAZO DE LA RUTA GPS TIEMPO REAL
                /* L.polyline([[this.lat, this.lng],[position.coords.latitude, position.coords.longitude]], {
                    color: "red",
                    //dashArray: "5,10",
                    //clickable: true
                  }).addTo(this.maprioBombus); */
                __WEBPACK_IMPORTED_MODULE_5_leaflet___default.a.marker([position.coords.latitude, position.coords.longitude], { icon: icono_Inicio }).addTo(_this.mapOso);
            });
        });
    };
    ;
    OsoDeAnteojosPage.prototype.stopTracking = function () {
        console.log('Parar Tracking');
        this.backgroundGeolocation.finish();
        //this.watch.unsubscribe();
        this.backgroundGeolocation.stop().then(function (stopOnTerminar) { console.log("Navegacion Desactivada!"); });
    };
    ;
    OsoDeAnteojosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'OsoDeAnteojosPage',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\oso-de-anteojos\oso-de-anteojos.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Ruta Oso de Anteojos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div id="mapOso" style="width: 100%; height: 89%"></div>\n    <ion-row style="aling-items:center;">\n\n        <ion-col col-4>\n                Latitud: {{lat}}\n            </ion-col><ion-col col-1>\n            </ion-col>\n            <ion-col col-6>\n                Logitud: {{lng}}\n            </ion-col><ion-col col->\n            </ion-col>\n        </ion-row>\n    \n        <ion-row style="aling-items:center;">\n          <ion-col col-3>\n          </ion-col>\n          <ion-col col-3>\n              <h1><ion-icon color="primary" name="md-locate" item-left large (click)="dondeEstas()"></ion-icon></h1>\n          </ion-col>\n          <ion-col col-1>\n          </ion-col>  \n          <ion-col col-1>\n          </ion-col> \n          <ion-col col-3>\n              <h1><ion-icon color="secondary" name="md-navigate" item-left large (click)="startTracking()"></ion-icon></h1>\n          </ion-col>      \n          <ion-col col-1>\n          </ion-col> \n        </ion-row>\n      <ion-content>\n</ion-content> '/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\oso-de-anteojos\oso-de-anteojos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], OsoDeAnteojosPage);
    return OsoDeAnteojosPage;
}());

//# sourceMappingURL=oso-de-anteojos.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(259);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export customTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tutorial_tutorial__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_infraestructura_infraestructura__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_bombuscaro_bombuscaro__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cajanuma_cajanuma__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_miguel_popover_miguel_popover__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_nosotros_nosotros__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contacto_contacto__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_correo_correo__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_oso_oso__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_traslado_traslado__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_flora_flora__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_fauna_fauna__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_bosque_bosque__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_chismosa_chismosa__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_poderosa_poderosa__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_urruquita_urruquita__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_higuerones_higuerones__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_mirador_mirador__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_miradores_miradores__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_cabania_cabania__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_lagunas_lagunas__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_oso_de_anteojos_oso_de_anteojos__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_transporte_transporte__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_rio_bombuscaro_rio_bombuscaro__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_ecosistemas_ecosistemas__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_ecosistemico_ecosistemico__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_generalidades_generalidades__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_email_composer__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_common_http__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ngx_translate_http_loader__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_media__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_idioma_popover_idioma_popover__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_storage__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_photo_viewer__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_file__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_background_geolocation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_geolocation__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_location_accuracy__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_diagnostic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_background_mode__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































// Componentes externos que realizan peticiones











// Carga archivos de idioma escritos en formato JSON.





function customTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_36__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_bombuscaro_bombuscaro__["a" /* BombuscaroPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cajanuma_cajanuma__["a" /* CajanumaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_miguel_popover_miguel_popover__["a" /* MiguelPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_correo_correo__["a" /* CorreoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_ecosistemico_ecosistemico__["a" /* EcosistemicoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_miradores_miradores__["a" /* MiradoresPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_lagunas_lagunas__["a" /* LagunasPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_oso_de_anteojos_oso_de_anteojos__["a" /* OsoDeAnteojosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_traslado_traslado__["a" /* TrasladoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_infraestructura_infraestructura__["a" /* InfraestructuraPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_oso_oso__["a" /* OsoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_bosque_bosque__["a" /* BosquePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contacto_contacto__["a" /* ContactoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_nosotros_nosotros__["a" /* NosotrosPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_generalidades_generalidades__["a" /* GeneralidadesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_flora_flora__["a" /* FloraPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_fauna_fauna__["a" /* FaunaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_chismosa_chismosa__["a" /* ChismosaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_poderosa_poderosa__["a" /* PoderosaPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_rio_bombuscaro_rio_bombuscaro__["a" /* RioBombuscaroPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_urruquita_urruquita__["a" /* UrruquitaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_mirador_mirador__["a" /* MiradorPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_transporte_transporte__["a" /* TransportePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_higuerones_higuerones__["a" /* HigueronesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cabania_cabania__["a" /* CabaniaPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_ecosistemas_ecosistemas__["a" /* EcosistemasPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_idioma_popover_idioma_popover__["a" /* IdiomaPopoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_35__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_35__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: customTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_33__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bombuscaro/bombuscaro.module#BombuscaroPageModule', name: 'BombuscaroPage', segment: 'bombuscaro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bosque/bosque.module#BosquePageModule', name: 'BosquePage', segment: 'bosque', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cabania/cabania.module#CabaniaPageModule', name: 'CabaniaPage', segment: 'cabania', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cajanuma/cajanuma.module#CajanumaPageModule', name: 'CajanumaPage', segment: 'cajanuma', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chismosa/chismosa.module#ChismosaPageModule', name: 'ChismosaPage', segment: 'chismosa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacto/contacto.module#ContactoPageModule', name: 'ContactoPage', segment: 'contacto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/correo/correo.module#CorreoPageModule', name: 'CorreoPage', segment: 'correo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ecosistemas/ecosistemas.module#EcosistemasPageModule', name: 'EcosistemasPage', segment: 'ecosistemas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ecosistemico/ecosistemico.module#EcosistemicoPageModule', name: 'EcosistemicoPage', segment: 'ecosistemico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fauna/fauna.module#FaunaPageModule', name: 'FaunaPage', segment: 'fauna', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flora/flora.module#FloraPageModule', name: 'FloraPage', segment: 'flora', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/generalidades/generalidades.module#GeneralidadesPageModule', name: 'GeneralidadesPage', segment: 'generalidades', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/higuerones/higuerones.module#HigueronesPageModule', name: 'HigueronesPage', segment: 'higuerones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/idioma-popover/idioma-popover.module#IdiomaPopoverPageModule', name: 'IdiomaPopoverPage', segment: 'idioma-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/infraestructura/infraestructura.module#InfraestructuraPageModule', name: 'InfraestructuraPage', segment: 'infraestructura', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lagunas/lagunas.module#LagunasPageModule', name: 'LagunasPage', segment: 'lagunas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miguel-popover/miguel-popover.module#MiguelPopoverPageModule', name: 'MiguelPopoverPage', segment: 'miguel-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mirador/mirador.module#MiradorPageModule', name: 'MiradorPage', segment: 'mirador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miradores/miradores.module#MiradoresPageModule', name: 'MiradoresPage', segment: 'miradores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nosotros/nosotros.module#NosotrosPageModule', name: 'NosotrosPage', segment: 'nosotros', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/oso/oso.module#OsoPageModule', name: 'OsoPage', segment: 'oso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/poderosa/poderosa.module#PoderosaPageModule', name: 'PoderosaPage', segment: 'poderosa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rio-bombuscaro/rio-bombuscaro.module#RioBombuscaroPageModule', name: 'RioBombuscaroPage', segment: 'rio-bombuscaro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transporte/transporte.module#TransportePageModule', name: 'TransportePage', segment: 'transporte', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/traslado/traslado.module#TrasladoPageModule', name: 'TrasladoPage', segment: 'traslado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/urruquita/urruquita.module#UrruquitaPageModule', name: 'UrruquitaPage', segment: 'urruquita', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_41__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_bombuscaro_bombuscaro__["a" /* BombuscaroPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cajanuma_cajanuma__["a" /* CajanumaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_miguel_popover_miguel_popover__["a" /* MiguelPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_lagunas_lagunas__["a" /* LagunasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contacto_contacto__["a" /* ContactoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_nosotros_nosotros__["a" /* NosotrosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_traslado_traslado__["a" /* TrasladoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_correo_correo__["a" /* CorreoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_oso_de_anteojos_oso_de_anteojos__["a" /* OsoDeAnteojosPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_bosque_bosque__["a" /* BosquePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_flora_flora__["a" /* FloraPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_ecosistemico_ecosistemico__["a" /* EcosistemicoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_miradores_miradores__["a" /* MiradoresPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_infraestructura_infraestructura__["a" /* InfraestructuraPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_oso_oso__["a" /* OsoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_fauna_fauna__["a" /* FaunaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_chismosa_chismosa__["a" /* ChismosaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_poderosa_poderosa__["a" /* PoderosaPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_rio_bombuscaro_rio_bombuscaro__["a" /* RioBombuscaroPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cabania_cabania__["a" /* CabaniaPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_urruquita_urruquita__["a" /* UrruquitaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_mirador_mirador__["a" /* MiradorPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_higuerones_higuerones__["a" /* HigueronesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_transporte_transporte__["a" /* TransportePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_ecosistemas_ecosistemas__["a" /* EcosistemasPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_generalidades_generalidades__["a" /* GeneralidadesPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_idioma_popover_idioma_popover__["a" /* IdiomaPopoverPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_nosotros_nosotros__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tutorial_tutorial__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_correo_correo__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_flora_flora__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_fauna_fauna__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ecosistemas_ecosistemas__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_generalidades_generalidades__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contacto_contacto__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














// Componentes externos

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, _translate, menu, app, alertCtrl, ionicApp) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this._translate = _translate;
        this.menu = menu;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.ionicApp = ionicApp;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // Valida el navegador y asigna el idioma de acuerdo al lenguaje del mismo
        var idiomaUsuario = navigator.language.split('-')[0];
        idiomaUsuario = /(en|de|it|fr|es|be)/gi.test(idiomaUsuario) ? idiomaUsuario : 'es';
        this._translate.use(idiomaUsuario);
        /*    this.pages = [
             { title:"Inicio", component: HomePage,icon:'home' },
             {title: "Nosotros",component:NosotrosPage,icon:'information-circle'},
             {title:"Contacto",component:ContactoPage,icon:'mail'}
           ]; */
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.platform.registerBackButtonAction(function (event) {
            var activePortal = _this.ionicApp._loadingPortal.getActive() ||
                _this.ionicApp._modalPortal.getActive() ||
                _this.ionicApp._toastPortal.getActive() ||
                _this.ionicApp._overlayPortal.getActive();
            if (activePortal && activePortal.index === 0) {
                activePortal.dismiss();
            }
            else {
                if (_this.nav.getActive().name == 'HomePage') {
                    _this.platform.exitApp();
                }
                else if (_this.nav.getActive().name == 'ContactoPage') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
                }
                else if (_this.nav.getActive().name == 'NosotrosPage') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
                }
                else if (_this.nav.getActive().name == 'CorreoPage') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
                }
                if (_this.nav.getActive().name == 'GeneralidadesPage') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
                }
                if (_this.nav.getActive().name == 'FloraPage') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
                }
                if (_this.nav.getActive().name == 'FaunaPage') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
                }
                if (_this.nav.getActive().name == 'EcosistemasPage') {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
                }
                else {
                    _this.nav.pop();
                }
                /* else {
                 if(this.nav.canGoBack())
                  this.nav.pop();
                 this.nav.setRoot(HomePage);
                }  */
            }
        }, 101);
    };
    MyApp.prototype.openHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
        /* this.nav.push(HomePage); */
    };
    MyApp.prototype.openCorreo = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_correo_correo__["a" /* CorreoPage */]);
        /* this.nav.push(HomePage); */
    };
    MyApp.prototype.openUs = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_nosotros_nosotros__["a" /* NosotrosPage */]);
        /* this.nav.push(NosotrosPage); */
    };
    MyApp.prototype.openContacto = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_contacto_contacto__["a" /* ContactoPage */]);
        /* this.nav.push(ContactoPage); */
    };
    MyApp.prototype.openGeneral = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_generalidades_generalidades__["a" /* GeneralidadesPage */]);
        /* this.nav.push(ContactoPage); */
    };
    MyApp.prototype.openFlora = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_flora_flora__["a" /* FloraPage */]);
        /* this.nav.push(ContactoPage); */
    };
    MyApp.prototype.openFauna = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_fauna_fauna__["a" /* FaunaPage */]);
        /* this.nav.push(ContactoPage); */
    };
    MyApp.prototype.openEcosistemas = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_ecosistemas_ecosistemas__["a" /* EcosistemasPage */]);
        /* this.nav.push(ContactoPage); */
    };
    MyApp.prototype.openTutorial = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tutorial_tutorial__["a" /* TutorialPage */]);
        /* this.nav.push(TutorialPage); */
        this.menu.enable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title class="new-background"><img src="assets/imgs/logopnp.png" style="width:62%"></ion-title> \n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item (click)="openHome()">\n        <ion-icon item-left name="home" color="secondary"></ion-icon>\n        {{ \'PAGES.MENU.INICIO\' | translate }}\n      </button>\n      <button menuClose ion-item (click)="openGeneral()">\n        <ion-icon item-left name="information-circle" color="secondary"></ion-icon>\n        {{ \'PAGES.MENU.GENERALIDADES\' | translate }}\n      </button>\n      <button menuClose ion-item (click)="openFlora()">\n        <ion-icon item-left name="flower" color="secondary"></ion-icon>\n        {{ \'PAGES.MENU.FLORA\' | translate }}\n      </button>\n      <button menuClose ion-item (click)="openFauna()">\n        <ion-icon item-left name="paw" color="secondary"></ion-icon>\n        {{ \'PAGES.MENU.FAUNA\' | translate }}\n      </button>\n      <button menuClose ion-item (click)="openEcosistemas()">\n        <ion-icon item-left name="rose" color="secondary"></ion-icon>\n        {{ \'PAGES.MENU.ECOSISTEMAS\' | translate }}\n      </button>\n      <button menuClose ion-item (click)="openUs()">\n        <ion-icon item-left name="contact" color="secondary"></ion-icon>\n        {{ \'PAGES.MENU.NOSOTROS\' | translate }}\n      </button>\n      <button menuClose ion-item (click)="openContacto()">\n        <ion-icon item-left name="mail" color="secondary"></ion-icon>\n        {{ \'PAGES.MENU.CONTACTO\' | translate }}\n      </button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n          Tutorial\n      </ion-list-header>\n      <button ion-item menuClose (click)="openTutorial()">\n      <ion-icon item-left name="hammer" color="secondary"></ion-icon>\n      {{ \'PAGES.MENU.TUTORIAL\' | translate }}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idioma_popover_idioma_popover__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bombuscaro_bombuscaro__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cajanuma_cajanuma__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__miguel_popover_miguel_popover__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Componentes externos que realizan peticiones




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _translate, popoverCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this._translate = _translate;
        this.popoverCtrl = popoverCtrl;
        this.menuCtrl = menuCtrl;
        this.selectedData = { title: "Español", id: "es", img: "espanol.jpg", detalle: "informacion.json" };
        this.idioms = [];
        /* file:MediaObject = this.media.create('../assets/audio/Asesina.mp3'); */
        this.flipState = 'notFlipped';
        this.flyInOutState = 'in';
        this.fadeState = 'visible';
        this.bounceState = 'noBounce';
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
    HomePage.prototype.cambiaIdioma = function (idioma) {
        console.log("Traduzco a: " + idioma);
        this._translate.use(idioma);
    };
    HomePage.prototype.openIdiomaPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__idioma_popover_idioma_popover__["a" /* IdiomaPopoverPage */]);
        popover.present({
            ev: event
        });
    };
    HomePage.prototype.presentPopover = function (ev) {
        var _this = this;
        var listData = [{ title: "Español", id: "es", img: "espanol.jpg", detalle: "informacion.json" }, { title: "English", id: "en", img: "ingles.jpg", detalle: "information.json" }];
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__idioma_popover_idioma_popover__["a" /* IdiomaPopoverPage */], { listData: listData });
        popover.present({
            ev: ev
        });
        popover.onDidDismiss(function (data) {
            console.log(data);
            if (data != null) {
                /* this.selectedData = data
                this._translate.use(data.id); */
                _this.selectedData = data;
                _this._translate.use(data);
            }
        });
    };
    HomePage.prototype.choose = function (lang) {
        this._translate.use(lang);
    };
    HomePage.prototype.openBombuscaro = function () {
        /* this.nativeAudio.stop('reggae'); */
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__bombuscaro_bombuscaro__["a" /* BombuscaroPage */]);
    };
    HomePage.prototype.openMiguelPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__miguel_popover_miguel_popover__["a" /* MiguelPopoverPage */]);
        popover.present({
            ev: event
        });
    };
    HomePage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    HomePage.prototype.openCajanuma = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cajanuma_cajanuma__["a" /* CajanumaPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('NAV'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\home\home.html"*/'<script src="assets/js/web-animations.min.js"></script>\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle (click)="openMenu(\'rojo\')">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        {{ \'PAGES.HOME.BTN\' | translate }}\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  \n  <h6 ALIGN="center"><b>{{ \'PAGES.HOME.TITLE1\' | translate }}<br>{{ \'PAGES.HOME.TITLE2\' | translate }}</b></h6>\n  <img src="assets/imgs/fondopodo.jpg" />\n  <img src="assets/imgs/mae_publicaciones.jpg" />\n  <ion-row style="align-items:center;">\n          <ion-col col-4>\n              <button ng-mousedown="class=\'fb-down\'" ng-mouseup="class=\'fb-up\'" class="{{class}}" (click)="openCajanuma()">\n                  <img src="assets/imgs/icono1.jpg" alt="" title=""/>\n              </button>\n          </ion-col>\n          <ion-col col-4>\n              <button ng-mousedown="class=\'fb-down\'" ng-mouseup="class=\'fb-up\'" class="{{class}}" (click)="openMiguelPopover($event)">\n                  <img src="assets/imgs/miguel5.gif" alt="" title=""/>\n              </button>\n          </ion-col>\n          <ion-col col-4>\n              <button ng-mousedown="class=\'fb-down\'" ng-mouseup="class=\'fb-up\'" class="{{class}}" (click)="openBombuscaro()">\n                  <img src="assets/imgs/icono2.jpg" alt="" title=""/>\n              </button>\n        </ion-col>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Personal\Desktop\Ionic3-MultilenguajeSample-master\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[241]);
//# sourceMappingURL=main.js.map