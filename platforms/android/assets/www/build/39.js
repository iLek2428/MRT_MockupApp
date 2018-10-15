webpackJsonp([39],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcardPageModule", function() { return AddcardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addcard__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddcardPageModule = /** @class */ (function () {
    function AddcardPageModule() {
    }
    AddcardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addcard__["a" /* AddcardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addcard__["a" /* AddcardPage */]),
            ],
        })
    ], AddcardPageModule);
    return AddcardPageModule;
}());

//# sourceMappingURL=addcard.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcardPage; });
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


var AddcardPage = /** @class */ (function () {
    function AddcardPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    AddcardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddcardPage');
    };
    AddcardPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    AddcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addcard',template:/*ion-inline-start:"D:\Build\Amal\noveroApp\src\pages\addcard\addcard.html"*/'<ion-header class="theme_background">\n    <div class="nav_header">\n      <button ion-button class="nav_btn floatLeft nav_back" (click)="back()"></button>\n      <div class="nav_header_title floatLeft">\n        <h5>Account Details</h5>\n      </div>\n      <button ion-button class="nav_btn floatRight nav_option"></button>\n      <button ion-button class="nav_btn floatRight nav_search"></button>\n      <div class="clear"></div>\n    </div>\n</ion-header>\n<ion-content padding>\n    <div class="pay_wrapper">\n        <ion-row>\n          <ion-col col-12>\n              <h4>Add new Card</h4>\n          </ion-col>\n        </ion-row>\n          <div class="contact_list">\n            <ion-row>\n              <ion-col col-12>\n                  <h6>CARD NUMBER</h6>\n                <ion-input placeholder="012 2336 001254 2255"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-5>\n                <ion-input placeholder="DD/MM"></ion-input>\n              </ion-col>\n              <ion-col col-1>\n                <p>/</p>\n              </ion-col>\n              <ion-col col-6>\n                <ion-input placeholder="YYYY"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-12>\n                    <h6>CARD HOLDER NAME</h6>\n                  <ion-input placeholder="ANN ALEXANDER"></ion-input>\n                </ion-col>\n              </ion-row>\n          </div>\n    </div>\n</ion-content>\n<ion-footer padding>\n  <button ion-button class="transfer">ADD CARD</button>\n</ion-footer>\n\n'/*ion-inline-end:"D:\Build\Amal\noveroApp\src\pages\addcard\addcard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], AddcardPage);
    return AddcardPage;
}());

//# sourceMappingURL=addcard.js.map

/***/ })

});
//# sourceMappingURL=39.js.map