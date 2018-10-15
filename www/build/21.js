webpackJsonp([21],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobproceedPageModule", function() { return MobproceedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobproceed__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MobproceedPageModule = /** @class */ (function () {
    function MobproceedPageModule() {
    }
    MobproceedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mobproceed__["a" /* MobproceedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mobproceed__["a" /* MobproceedPage */]),
            ],
        })
    ], MobproceedPageModule);
    return MobproceedPageModule;
}());

//# sourceMappingURL=mobproceed.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobproceedPage; });
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


var MobproceedPage = /** @class */ (function () {
    function MobproceedPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    MobproceedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MobproceedPage');
        this.tab = "active";
    };
    MobproceedPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    MobproceedPage.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    MobproceedPage.prototype.promo = function () {
        var modal = this.modalCtrl.create('PromomodalPage');
        modal.present();
    };
    MobproceedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mobproceed',template:/*ion-inline-start:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\mobproceed\mobproceed.html"*/'<ion-header class="theme_background">\n    <div class="nav_header">\n      <button ion-button class="nav_btn floatLeft nav_back" (click)="back()"></button>\n      <div class="nav_header_title floatLeft">\n        <h5>เติมเงินบัตรโดยสาร</h5>\n      </div>\n      <button ion-button class="nav_btn floatRight nav_option"></button>\n      <button ion-button class="nav_btn floatRight nav_search"></button>\n      <div class="clear"></div>\n    </div>\n</ion-header>\n<ion-content padding>\n  <div class="proceed_wrapper">\n    <div class="proceed_tab">\n      <ul>\n        <li [class.active]="tab == \'active\'" (click)="tab_swap(\'active\')">ดีลสุดฮอต</li>\n        <li [class.active]="tab == \'inactive\'" (click)="tab_swap(\'inactive\')">คูปอง</li>\n      </ul>\n    </div>\n    <div class="proceed_content" [hidden]="tab==\'inactive\'">\n      <ul>\n        <li>\n          <div class="circle">\n\n          </div>\n          <div class="detail">\n            <h5>ใช้งานแอปครั้งแรกลด 10%</h5>\n            <p>MRT+</p>\n          </div>\n          <div class="add_btn" (click)="promo()">\nฟรี\n          </div>\n          <div class="clear"></div>\n        </li>\n        <li>\n          <div class="circle">\n\n          </div>\n          <div class="detail">\n            <h5>เติมบัตรโดยสารครั้งแรกลด 10%</h5>\n            <p>MRT</p>\n          </div>\n          <div class="add_btn" (click)="promo()">\nฟรี\n          </div>\n          <div class="clear"></div>\n        </li>\n        <li>\n          <div class="circle">\n\n          </div>\n          <div class="detail">\n            <h5>เติมบัตรโดยสารครั้งแรกลด 5%</h5>\n            <p>BTS</p>\n          </div>\n          <div class="add_btn" (click)="promo()">\nฟรี\n          </div>\n          <div class="clear"></div>\n        </li>\n      </ul>\n    </div>\n    <div class="proceed_content" [hidden]="tab==\'active\'">\n        <div class="on_demo">\n            <img src="assets/imgs/error.png"><br>\n            This content is not available on demo\n          </div>\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\mobproceed\mobproceed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], MobproceedPage);
    return MobproceedPage;
}());

//# sourceMappingURL=mobproceed.js.map

/***/ })

});
//# sourceMappingURL=21.js.map