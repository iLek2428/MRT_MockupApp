webpackJsonp([40],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddaddressPageModule", function() { return AddaddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addaddress__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddaddressPageModule = /** @class */ (function () {
    function AddaddressPageModule() {
    }
    AddaddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addaddress__["a" /* AddaddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addaddress__["a" /* AddaddressPage */]),
            ],
        })
    ], AddaddressPageModule);
    return AddaddressPageModule;
}());

//# sourceMappingURL=addaddress.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddaddressPage; });
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


var AddaddressPage = /** @class */ (function () {
    function AddaddressPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    AddaddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddaddressPage');
    };
    AddaddressPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    AddaddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addaddress',template:/*ion-inline-start:"D:\Build\Amal\noveroApp\src\pages\addaddress\addaddress.html"*/'<ion-header>\n    <div class="nav_header nav_white_header">\n        <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n        </button>\n        <div class="nav_header_title floatLeft">\n            <h5>Add Address</h5>\n        </div>\n        <button class="nav_btn floatRight nav_search_dark">\n            </button>\n        <div class="clear"></div>\n    </div>\n</ion-header>\n<ion-content padding>\n  <div class="add_address">\n    <ion-item>\n      <ion-input type="text" placeholder="Address 1"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input type="text" placeholder="Address 2"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-select>\n            <ion-option value="1" selected>State</ion-option>\n            <ion-option value="2"></ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-select>\n            <ion-option value="1" selected>City</ion-option>\n            <ion-option value="2">Kerala</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-select>\n            <ion-option value="1" selected>Landmark</ion-option>\n            <ion-option value="2"></ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-select>\n            <ion-option value="1" selected>Place</ion-option>\n            <ion-option value="2"></ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-input type="text" placeholder="Phone Number"></ion-input>\n    </ion-item>\n  </div>\n</ion-content>\n<ion-footer padding>\n  <button ion-button class="login_btn">SAVE ADDRESS</button>\n</ion-footer>\n'/*ion-inline-end:"D:\Build\Amal\noveroApp\src\pages\addaddress\addaddress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], AddaddressPage);
    return AddaddressPage;
}());

//# sourceMappingURL=addaddress.js.map

/***/ })

});
//# sourceMappingURL=40.js.map