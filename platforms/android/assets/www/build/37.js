webpackJsonp([37],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressbookPageModule", function() { return AddressbookPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addressbook__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddressbookPageModule = /** @class */ (function () {
    function AddressbookPageModule() {
    }
    AddressbookPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addressbook__["a" /* AddressbookPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addressbook__["a" /* AddressbookPage */]),
            ],
        })
    ], AddressbookPageModule);
    return AddressbookPageModule;
}());

//# sourceMappingURL=addressbook.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressbookPage; });
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


var AddressbookPage = /** @class */ (function () {
    function AddressbookPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    AddressbookPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddressbookPage');
    };
    AddressbookPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    AddressbookPage.prototype.addaddress = function () {
        var modal = this.modalCtrl.create("AddaddressPage");
        modal.present();
    };
    AddressbookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addressbook',template:/*ion-inline-start:"D:\Build\Amal\noveroApp\src\pages\addressbook\addressbook.html"*/'<ion-header>\n    <div class="nav_header nav_white_header">\n        <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n        </button>\n        <div class="nav_header_title floatLeft">\n            <h5>Address book</h5>\n        </div>\n        <button class="nav_btn floatRight nav_cart_dark">\n          </button>\n        <button class="nav_btn floatRight nav_search_dark">\n            </button>\n        <div class="clear"></div>\n    </div>\n</ion-header>\n<ion-content padding>\n  <div class="address_wrapper">\n      <div class="address">\n          <h5 class="floatLeft">DELIVERY ADDRESS</h5>\n          <ul>\n            <li>\n              <div class="clear"></div>\n              <br>\n              <div class="loc_icon floatLeft">\n              </div>\n              <div class="address_bay floatRight">\n                <h6>HOME</h6>\n                <p>\n                    Techware solution, Carnival Infopark, Phase 1, Kusumagiri (po), Kakkanad, Kochi\n                </p>\n                <button ion-button class="c_btn edit">Edit</button>\n                <button ion-button class="c_btn delete">Delete</button>\n                <button ion-button class="c_btn default">Set us Default</button>\n              </div>\n              <div class="clear"></div>\n            </li>\n            <li>\n                <div class="clear"></div>\n                <br>\n                <div class="loc_icon floatLeft">\n                </div>\n                <div class="address_bay floatRight">\n                  <h6>HOME</h6>\n                  <p>\n                      Techware solution, Carnival Infopark, Phase 1, Kusumagiri (po), Kakkanad, Kochi\n                  </p>\n                  <button ion-button class="c_btn edit">Edit</button>\n                  <button ion-button class="c_btn delete">Delete</button>\n                  <button ion-button class="c_btn default">Set us Default</button>\n                </div>\n                <div class="clear"></div>\n              </li>\n          </ul>\n      </div>\n  </div>\n</ion-content>\n<ion-footer padding>\n  <button ion-button class="login_btn" (click)="addaddress()">ADD NEW ADDRESS</button>\n</ion-footer>\n'/*ion-inline-end:"D:\Build\Amal\noveroApp\src\pages\addressbook\addressbook.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], AddressbookPage);
    return AddressbookPage;
}());

//# sourceMappingURL=addressbook.js.map

/***/ })

});
//# sourceMappingURL=37.js.map