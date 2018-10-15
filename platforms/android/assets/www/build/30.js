webpackJsonp([30],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricitybillPageModule", function() { return ElectricitybillPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electricitybill__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ElectricitybillPageModule = /** @class */ (function () {
    function ElectricitybillPageModule() {
    }
    ElectricitybillPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__electricitybill__["a" /* ElectricitybillPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__electricitybill__["a" /* ElectricitybillPage */]),
            ],
        })
    ], ElectricitybillPageModule);
    return ElectricitybillPageModule;
}());

//# sourceMappingURL=electricitybill.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricitybillPage; });
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


var ElectricitybillPage = /** @class */ (function () {
    function ElectricitybillPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ElectricitybillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ElectricitybillPage');
        this.tab = "active";
        this.tab1 = "active1";
    };
    ElectricitybillPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ElectricitybillPage.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    ElectricitybillPage.prototype.tab_swap1 = function (type) {
        this.tab1 = type;
    };
    ElectricitybillPage.prototype.proceed = function () {
        this.navCtrl.push('MobproceedPage');
    };
    ElectricitybillPage.prototype.promo = function () {
        var modal = this.modalCtrl.create('PromomodalPage');
        modal.present();
    };
    ElectricitybillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-electricitybill',template:/*ion-inline-start:"D:\Build\Amal\noveroApp\src\pages\electricitybill\electricitybill.html"*/'<ion-header class="theme_background">\n  <div class="nav_header">\n    <button ion-button class="nav_btn floatLeft nav_back" (click)="back()"></button>\n    <div class="nav_header_title floatLeft">\n      <h5>Mobile Prepaid</h5>\n    </div>\n    <button ion-button class="nav_btn floatRight nav_option"></button>\n    <button ion-button class="nav_btn floatRight nav_search"></button>\n    <div class="clear"></div>\n  </div>\n</ion-header>\n<ion-content padding>\n<div class="segement_wrapper">\n  <h4>Electricity Bill</h4>\n  <div class="segement_tab">\n    <ul  radio-group>\n      <li><ion-radio value="1" class="floatLeft" (click)="tab_swap(\'active\')" checked></ion-radio> <ion-label class="floatLeft">Elec Board</ion-label>\n      <div class="clear"></div></li>\n      <li><ion-radio value="2" class="floatLeft" (click)="tab_swap(\'inactive\')"></ion-radio> <ion-label class="floatLeft">Apartments</ion-label>\n      <div class="clear"></div>\n      </li>\n    </ul>\n  </div>\n  <div class="segement_tab_content" [hidden]="tab==\'inactive\'">\n      <ion-item>\n            <ion-select [(ngModel)]="state">\n                <ion-option value="1" selected>State</ion-option>\n                <ion-option value="2">Maharastra</ion-option>\n                <ion-option value="2">Karnataka</ion-option>\n                <ion-option value="2">Goa</ion-option>\n                <ion-option value="2">Assam</ion-option>\n                <ion-option value="2">Delhi</ion-option>\n            </ion-select>\n      </ion-item>\n      <br>\n      <ion-item>\n          <ion-select [(ngModel)]="board">\n              <ion-option value="1" selected>Electricity board</ion-option>\n              <ion-option value="2" selected>Power on Power</ion-option>\n              <ion-option value="3" selected>Sahya Energy</ion-option>\n              <ion-option value="4" selected>BGR Elect</ion-option>\n          </ion-select>\n    </ion-item>\n      <div class="mobile_number">\n        <input class="" placeholder="Consumer no.">\n        <div class="clear"></div>\n     </div>\n     <div class="check_payment">\n        <ion-checkbox class="floatLeft"></ion-checkbox>\n        <ion-label class="floatLeft"><p><strong>Instant Payment</strong> From Novero wallet balance</p></ion-label>\n        <div class="clear"></div>\n     </div>\n     <button ion-button class="transfer" (click)="proceed()">Proceed to Recharge</button>\n\n  </div>\n  <div class="segement_tab_content" [hidden]="tab==\'active\'">\n      <div class="on_demo">\n          <img src="assets/imgs/error.png"><br>\n          This content is not available on demo\n        </div>\n    </div>\n    <div class="proceed_wrapper">\n        <div class="proceed_tab">\n          <ul>\n            <li [class.active]="tab1 == \'active1\'" (click)="tab_swap1(\'active1\')">Hot Deals</li>\n            <li [class.active]="tab1 == \'inactive1\'" (click)="tab_swap1(\'inactive1\')">Coupons</li>\n          </ul>\n        </div>\n        <div class="proceed_content" [hidden]="tab1==\'inactive1\'">\n          <ul>\n            <li>\n              <div class="circle">\n\n              </div>\n              <div class="detail">\n                <h5>Flat 10% Off</h5>\n                <p>Novero</p>\n              </div>\n              <div class="add_btn" (click)="promo()">\n    Free\n              </div>\n              <div class="clear"></div>\n            </li>\n            <li>\n              <div class="circle">\n\n              </div>\n              <div class="detail">\n                <h5>Flat 10% Off</h5>\n                <p>Novero</p>\n              </div>\n              <div class="add_btn" (click)="promo()">\n    Free\n              </div>\n              <div class="clear"></div>\n            </li>\n            <li>\n              <div class="circle">\n\n              </div>\n              <div class="detail">\n                <h5>Flat 10% Off</h5>\n                <p>Novero</p>\n              </div>\n              <div class="add_btn" (click)="promo()">\n    Free\n              </div>\n              <div class="clear"></div>\n            </li>\n          </ul>\n        </div>\n        <div class="proceed_content" [hidden]="tab1==\'active1\'">\n            <div class="on_demo">\n                <img src="assets/imgs/error.png"><br>\n                This content is not available on demo\n              </div>\n          </div>\n      </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\Build\Amal\noveroApp\src\pages\electricitybill\electricitybill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], ElectricitybillPage);
    return ElectricitybillPage;
}());

//# sourceMappingURL=electricitybill.js.map

/***/ })

});
//# sourceMappingURL=30.js.map