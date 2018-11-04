webpackJsonp([0],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet__ = __webpack_require__(351);
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

/***/ 351:
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
            selector: 'page-wallet',template:/*ion-inline-start:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\wallet\wallet.html"*/'<ion-header class="theme_background">\n    <div class="nav_header">\n        <button ion-button class="nav_btn floatLeft nav_menu" menuToggle></button>\n        <div class="nav_header_title floatLeft">\n            <h5>กระเป๋า MRT+</h5>\n        </div>\n        <button ion-button class="nav_btn floatRight nav_option"></button>\n        <button ion-button class="nav_btn floatRight nav_search"></button>\n        <div class="clear"></div>\n    </div>\n</ion-header>\n<ion-content>\n    <div class="wallet_wrapper">\n        <h6>ยอดเงินคงเหลือ</h6>\n        <h1>888,888.00</h1>\n        <h4>บาท</h4>\n        <div class="textCenter" padding>\n            <button ion-button class="pay_now" (click)="pay()">ชำระ</button>\n            <button ion-button class="add_money">เติมเงิน</button>\n        </div>\n        <div class="wallet_tab_bay">\n            <ul>\n                <li [class.active]="tab == \'all\'" (click)="tab_swap(\'all\')">ทั้งหมด\n                    <hr>\n                </li>\n                <li [class.active]="tab == \'receive\'" (click)="tab_swap(\'receive\')">รายการเข้า\n                    <hr>\n                </li>\n                <li [class.active]="tab == \'sent\'" (click)="tab_swap(\'sent\')">รายการออก\n                    <hr>\n                </li>\n            </ul>\n        </div>\n        <div class="wallet_tab_content" [hidden]="tab !=\'all\'">\n            <ul>\n                <li>\n                    <h4>5 พ.ย. 2561</h4>\n                    <div class="payment_circle debit">\n\n                    </div>\n                    <div class="payment_detail">\n                        <h5>เติมเงินบัตรโดยสาร MRT</h5>\n                        <h6># 5568999</h6>\n                        <p>09:00 น.</p>\n                    </div>\n                    <div class="payment_price">\n                        <strong>- ฿ 100.00</strong>\n\n                    </div>\n                    <div class="clear"></div>\n                </li>\n                <li>\n                    <h4>13 ต.ค. 2561</h4>\n                    <div class="payment_circle credit ">\n\n                    </div>\n                    <div class="payment_detail">\n                        <h5>เติมเงินบัตรโดยสาร BTS</h5>\n                        <h6># 5568982</h6>\n                        <p>13:00 น.</p>\n                    </div>\n                    <div class="payment_price">\n                        <strong>- ฿ 300.00</strong>\n\n                    </div>\n                    <div class="clear"></div>\n                </li>\n                <li>\n                    <h4>25 ก.ย. 2561</h4>\n                    <div class="payment_circle debit">\n\n                    </div>\n                    <div class="payment_detail">\n                        <h5>ซื้อบัตรโดยสารรถเมล์</h5>\n                        <h6># 5568952</h6>\n                        <p>19:30 น.</p>\n                    </div>\n                    <div class="payment_price">\n                        <strong>- ฿ 19.00</strong>\n\n                    </div>\n                    <div class="clear"></div>\n                </li>\n                <li>\n                    <h4>10 ส.ค. 2561</h4>\n                    <div class="payment_circle debit">\n\n                    </div>\n                    <div class="payment_detail">\n                        <h5>ชำระค่าโดยสารด้วย QR</h5>\n                        <h6># 5568923</h6>\n                        <p>05:40 น.</p>\n                    </div>\n                    <div class="payment_price">\n                        <strong>- ฿ 40.00</strong>\n\n                    </div>\n                    <div class="clear"></div>\n                </li>\n            </ul>\n        </div>\n        <div class="wallet_tab_content" [hidden]="tab !=\'receive\'">\n            <div class="on_demo">\n               <ul>\n                    <li>\n                            <h4>13 ต.ค. 2561</h4>\n                            <div class="payment_circle credit ">\n        \n                            </div>\n                            <div class="payment_detail">\n                                <h5>เติมเงินบัตรโดยสาร BTS</h5>\n                                <h6># 5568982</h6>\n                                <p>13:00 น.</p>\n                            </div>\n                            <div class="payment_price">\n                                <strong>- ฿ 300.00</strong>\n        \n                            </div>\n                            <div class="clear"></div>\n                    </li>\n               </ul>\n\n            </div>\n        </div>\n        <div class="wallet_tab_content" [hidden]="tab !=\'sent\'">\n            <div class="on_demo">\n                <ul>\n                <li>\n                    <h4>5 พ.ย. 2561</h4>\n                    <div class="payment_circle debit">\n\n                    </div>\n                    <div class="payment_detail">\n                        <h5>เติมเงินบัตรโดยสาร MRT</h5>\n                        <h6># 5568999</h6>\n                        <p>09:00 น.</p>\n                    </div>\n                    <div class="payment_price">\n                        <strong>- ฿ 100.00</strong>\n                    </div>\n                    <div class="clear"></div>\n                </li>\n                <li>\n                        <h4>25 ก.ย. 2561</h4>\n                        <div class="payment_circle debit">\n    \n                        </div>\n                        <div class="payment_detail">\n                            <h5>ซื้อบัตรโดยสารรถเมล์</h5>\n                            <h6># 5568952</h6>\n                            <p>19:30 น.</p>\n                        </div>\n                        <div class="payment_price">\n                            <strong>- ฿ 19.00</strong>\n    \n                        </div>\n                        <div class="clear"></div>\n                    </li>\n                    <li>\n                        <h4>10 ส.ค. 2561</h4>\n                        <div class="payment_circle debit">\n    \n                        </div>\n                        <div class="payment_detail">\n                            <h5>ชำระค่าโดยสารด้วย QR</h5>\n                            <h6># 5568923</h6>\n                            <p>05:40 น.</p>\n                        </div>\n                        <div class="payment_price">\n                            <strong>- ฿ 40.00</strong>\n    \n                        </div>\n                        <div class="clear"></div>\n                    </li>    \n                </ul>\n                    \n            </div>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ })

});
//# sourceMappingURL=0.js.map