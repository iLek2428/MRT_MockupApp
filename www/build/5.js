webpackJsonp([5],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPageModule", function() { return TransferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfer__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransferPageModule = /** @class */ (function () {
    function TransferPageModule() {
    }
    TransferPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transfer__["a" /* TransferPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transfer__["a" /* TransferPage */]),
            ],
        })
    ], TransferPageModule);
    return TransferPageModule;
}());

//# sourceMappingURL=transfer.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferPage; });
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


var TransferPage = /** @class */ (function () {
    function TransferPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransferPage');
    };
    TransferPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    TransferPage.prototype.accountdetails = function () {
        this.navCtrl.push('AccountdetailsPage');
    };
    TransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transfer',template:/*ion-inline-start:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\transfer\transfer.html"*/'<ion-header class="theme_background">\n    <div class="nav_header">\n      <button ion-button class="nav_btn floatLeft nav_back" (click)="back()"></button>\n      <div class="nav_header_title floatLeft">\n        <h5>Transfer Money</h5>\n      </div>\n      <button ion-button class="nav_btn floatRight nav_option"></button>\n      <button ion-button class="nav_btn floatRight nav_search"></button>\n      <div class="clear"></div>\n    </div>\n</ion-header>\n<ion-content padding>\n    <div class="pay_wrapper">\n      <ul>\n        <li>\n          <div class="pay_div">\n            <img src="assets/imgs/bank.png">\n          </div>\n          <div class="pay_detail">\n            <h5>Transfer to</h5>\n            <h6>Bank</h6>\n          </div>\n          <div class="balance">\n            <p>Balance</p>\n            <h6>$ 1000</h6>\n          </div>\n          <div class="clear"></div>\n        </li>\n        <button ion-button (click)="accountdetails()">Account details</button>\n        <h4>Amount Payable</h4>\n        <input class="amount" placeholder ="000">\n      </ul>\n    </div>\n  </ion-content>\n  <ion-footer padding>\n    <button ion-button class="transfer">TRANSFER</button>\n  </ion-footer>\n'/*ion-inline-end:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\transfer\transfer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TransferPage);
    return TransferPage;
}());

//# sourceMappingURL=transfer.js.map

/***/ })

});
//# sourceMappingURL=5.js.map