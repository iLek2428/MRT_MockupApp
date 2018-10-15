webpackJsonp([0],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WalletPageModule = /** @class */ (function () {
    function WalletPageModule() {
    }
    WalletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wallet__["a" /* WalletPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wallet__["a" /* WalletPage */]),
            ],
        })
    ], WalletPageModule);
    return WalletPageModule;
}());

//# sourceMappingURL=wallet.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
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


var WalletPage = /** @class */ (function () {
    function WalletPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scrollPosition = 0;
    }
    WalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletPage');
        this.tab = "all";
    };
    WalletPage.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    WalletPage.prototype.ngAfterViewInit = function () {
    };
    WalletPage.prototype.pay = function () {
        this.navCtrl.push('PayselectionPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], WalletPage.prototype, "content", void 0);
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet',template:/*ion-inline-start:"D:\Build\Amal\noveroApp\src\pages\wallet\wallet.html"*/'<ion-header class="theme_background">\n    <div class="nav_header">\n        <button ion-button class="nav_btn floatLeft nav_menu" menuToggle></button>\n        <div class="nav_header_title floatLeft">\n            <h5>Wallet</h5>\n        </div>\n        <button ion-button class="nav_btn floatRight nav_option"></button>\n        <button ion-button class="nav_btn floatRight nav_search"></button>\n        <div class="clear"></div>\n    </div>\n</ion-header>\n<ion-content>\n    <div class="wallet_wrapper">\n        <h6>Novero wallet balance</h6>\n        <h1>1000.00</h1>\n        <h4>in INR</h4>\n        <div class="textCenter" padding>\n            <button ion-button class="pay_now" (click)="pay()">Pay now</button>\n            <button ion-button class="add_money">Add money</button>\n        </div>\n        <div class="wallet_tab_bay">\n            <ul>\n                <li [class.active]="tab == \'all\'" (click)="tab_swap(\'all\')">All\n                    <hr>\n                </li>\n                <li [class.active]="tab == \'receive\'" (click)="tab_swap(\'receive\')">Received\n                    <hr>\n                </li>\n                <li [class.active]="tab == \'sent\'" (click)="tab_swap(\'sent\')">Sent\n                    <hr>\n                </li>\n            </ul>\n        </div>\n        <div class="wallet_tab_content" [hidden]="tab !=\'all\'">\n            <ul>\n                <li>\n                    <h4>05 Jan 2018</h4>\n                    <div class="payment_circle debit">\n\n                    </div>\n                    <div class="payment_detail">\n                        <h5>Paid for order</h5>\n                        <h6># 5568987</h6>\n                        <p>09:00 pm</p>\n                    </div>\n                    <div class="payment_price">\n                        <strong>- $ 5.60</strong>\n\n                    </div>\n                    <div class="clear"></div>\n                </li>\n                <li>\n                    <h4>05 Jan 2018</h4>\n                    <div class="payment_circle credit ">\n\n                    </div>\n                    <div class="payment_detail">\n                        <h5>Paid for order</h5>\n                        <h6># 5568987</h6>\n                        <p>09:00 pm</p>\n                    </div>\n                    <div class="payment_price">\n                        <strong>- $ 5.60</strong>\n\n                    </div>\n                    <div class="clear"></div>\n                </li>\n                <li>\n                    <h4>05 Jan 2018</h4>\n                    <div class="payment_circle debit">\n\n                    </div>\n                    <div class="payment_detail">\n                        <h5>Paid for order</h5>\n                        <h6># 5568987</h6>\n                        <p>09:00 pm</p>\n                    </div>\n                    <div class="payment_price">\n                        <strong>- $ 5.60</strong>\n\n                    </div>\n                    <div class="clear"></div>\n                </li>\n                <li>\n                    <h4>05 Jan 2018</h4>\n                    <div class="payment_circle debit">\n\n                    </div>\n                    <div class="payment_detail">\n                        <h5>Paid for order</h5>\n                        <h6># 5568987</h6>\n                        <p>09:00 pm</p>\n                    </div>\n                    <div class="payment_price">\n                        <strong>- $ 5.60</strong>\n\n                    </div>\n                    <div class="clear"></div>\n                </li>\n            </ul>\n        </div>\n        <div class="wallet_tab_content" [hidden]="tab !=\'receive\'">\n            <div class="on_demo">\n                <img src="assets/imgs/error.png"><br> This content is not available on demo\n            </div>\n        </div>\n        <div class="wallet_tab_content" [hidden]="tab !=\'sent\'">\n            <div class="on_demo">\n                <img src="assets/imgs/error.png"><br> This content is not available on demo\n            </div>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\Build\Amal\noveroApp\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ })

});
//# sourceMappingURL=0.js.map