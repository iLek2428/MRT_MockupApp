webpackJsonp([25],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.origin = function () {
        var modal = this.modalCtrl.create('OrginPage');
        modal.onDidDismiss(function (data) {
        });
        modal.present();
    };
    HomePage.prototype.mobprepaid = function () {
        this.navCtrl.push('MobprepaidPage');
    };
    HomePage.prototype.electricitybill = function () {
        this.navCtrl.push('ElectricitybillPage');
    };
    HomePage.prototype.fashionstore = function () {
        this.navCtrl.push('FashionstorePage');
    };
    HomePage.prototype.travel = function () {
        this.navCtrl.push('TravelPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\home\home.html"*/'<ion-header class="theme_background">\n    <div class="nav_header">\n        <button ion-button class="nav_btn floatLeft nav_menu" menuToggle></button>\n        <div class="nav_header_title floatLeft">\n            <img src="assets/imgs/logo_white.png">\n        </div>\n        <button ion-button class="nav_btn floatRight nav_option" (click)="origin()"></button>\n        <div class="clear"></div>\n    </div>\n    <div class="nav_header">\n        <ion-searchbar class="home_search_bar" placeholder="search">\n        </ion-searchbar>\n    </div>\n</ion-header>\n<ion-content>\n    <div class="home_content">\n        <div class="home_menu_banner">\n            <ul>\n                <li (click)="mobprepaid()">\n                    <img src="assets/imgs/item1.png">\n                    <p>Mobile<br>Prepaid</p>\n                </li>\n                <li (click)="mobprepaid()">\n                    <img src="assets/imgs/item2.png">\n                    <p>Mobile<br>Postpaid</p>\n                </li>\n                <li (click)="electricitybill()">\n                    <img src="assets/imgs/item3.png">\n                    <p>Electricity<br>Bill</p>\n                </li>\n                <li>\n                    <img src="assets/imgs/item4.png">\n                    <p>DTH<br></p>\n                </li>\n                <li>\n                    <img src="assets/imgs/item5.png">\n                    <p>Movie<br></p>\n                </li>\n                <li (click)="travel(1)">\n                    <img src="assets/imgs/item6.png">\n                    <p>Train<br></p>\n                </li>\n                <li>\n                    <img src="assets/imgs/item7.png">\n                    <p>Daily needs<br></p>\n                </li>\n                <li (click)="travel(2)">\n                    <img src="assets/imgs/item8.png">\n                    <p>Flight<br></p>\n                </li>\n                <li (click)="travel(3)">\n                    <img src="assets/imgs/item9.png">\n                    <p>Bus<br></p>\n                </li>\n                <li>\n                    <img src="assets/imgs/item10.png">\n                    <p>Petrol<br></p>\n                </li>\n                <div class="clear"></div>\n            </ul>\n        </div>\n        <div class="home_detail_contents">\n            <div class="scroll_section">\n                <ion-scroll scrollX="true" style="height:250px;">\n                    <ion-row nowrap>\n                        <ion-list>\n                            <ion-item>\n                                <ion-card>\n                                    <ion-card-content class="pink_card">\n                                        <div class="item_image">\n                                            <h3>\n                                                Fashion 12 pm<br>\n                                                <strong>SALE</strong>\n                                            </h3>\n                                            <button ion-button (click)="fashionstore()">Shop now</button>\n                                        </div>\n                                    </ion-card-content>\n                                </ion-card>\n                            </ion-item>\n                            <ion-item>\n                                <ion-card>\n                                    <ion-card-content class="blue_card">\n                                        <div class="item_image">\n                                            <h3>\n                                                <strong>50</strong>% off<br> on mobile recharging\n                                            </h3>\n                                            <button ion-button (click)="mobprepaid()">Recharge</button>\n                                        </div>\n                                    </ion-card-content>\n                                </ion-card>\n                            </ion-item>\n\n                        </ion-list>\n                    </ion-row>\n                </ion-scroll>\n            </div>\n        </div>\n        <div class="offer_slider">\n            <ion-slides loop="true" autoplay="2000"speed="1000" slidesPerView="1.5" spaceBetween="5px">\n                <ion-slide>\n                  <img src="assets/imgs/offer1.png">\n                </ion-slide>\n                <ion-slide>\n                  <img src="assets/imgs/offer2.png">\n                </ion-slide>\n                <ion-slide>\n                  <img src="assets/imgs/offer3.png">\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=25.js.map