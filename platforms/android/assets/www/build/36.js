webpackJsonp([36],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardinginfoPageModule", function() { return BoardinginfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boardinginfo__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BoardinginfoPageModule = /** @class */ (function () {
    function BoardinginfoPageModule() {
    }
    BoardinginfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__boardinginfo__["a" /* BoardinginfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__boardinginfo__["a" /* BoardinginfoPage */]),
            ],
        })
    ], BoardinginfoPageModule);
    return BoardinginfoPageModule;
}());

//# sourceMappingURL=boardinginfo.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardinginfoPage; });
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


var BoardinginfoPage = /** @class */ (function () {
    function BoardinginfoPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    BoardinginfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BoardinginfoPage');
    };
    BoardinginfoPage.prototype.book = function () {
        var modal = this.modalCtrl.create('SuccessPage');
        modal.present();
    };
    BoardinginfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-boardinginfo',template:/*ion-inline-start:"D:\Build\Amal\noveroApp\src\pages\boardinginfo\boardinginfo.html"*/'<ion-header>\n  <div class="nav_header nav_white_header">\n      <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n      </button>\n      <div class="nav_header_title floatLeft">\n          <h5>Evacay Travels</h5>\n          <p class="floatLeft">A/C, Dolby, Multiaxile</p>\n          <p class="floatRight">Thu, 23 Apr</p>\n          <div class="clear"></div>\n      </div>\n      <div class="clear"></div>\n    </div>\n</ion-header>\n\n<ion-content padding>\n    <div class="boarding_wrapper">\n      <h4>TRAVELLER INFORMATION</h4>\n      <br>\n      <div class="radio_div" radio-group>\n          <ion-row>\n            <ion-col>\n                <ion-radio value="male" checked class="floatLeft"></ion-radio>\n                <ion-label class="floatLeft">Male</ion-label>\n                <div class="clear"></div>\n            </ion-col>\n            <ion-col>\n                <ion-radio value="female"  class="floatLeft"></ion-radio>\n                <ion-label class="floatLeft">Female</ion-label>\n                <div class="clear"></div>\n            </ion-col>\n          </ion-row>\n      </div>\n      <ion-item>\n          <ion-input placeholder="Full name">\n          </ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-input placeholder="Age">\n          </ion-input>\n      </ion-item>\n      <br>\n      <h4>CONTACT INFORMATION</h4>\n      <p>Your ticket email and sms will be sent here</p>\n      <br>\n      <ion-item>\n          <ion-input placeholder="Mobile">\n          </ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-input placeholder="Email">\n          </ion-input>\n      </ion-item>\n    </div>\n</ion-content>\n\n<ion-footer padding>\n  <button ion-button class="login_btn" (click)="book()">Proceed to Book</button>\n</ion-footer>\n'/*ion-inline-end:"D:\Build\Amal\noveroApp\src\pages\boardinginfo\boardinginfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], BoardinginfoPage);
    return BoardinginfoPage;
}());

//# sourceMappingURL=boardinginfo.js.map

/***/ })

});
//# sourceMappingURL=36.js.map