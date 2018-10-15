webpackJsonp([22],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobprepaidPageModule", function() { return MobprepaidPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobprepaid__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MobprepaidPageModule = /** @class */ (function () {
    function MobprepaidPageModule() {
    }
    MobprepaidPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mobprepaid__["a" /* MobprepaidPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mobprepaid__["a" /* MobprepaidPage */]),
            ],
        })
    ], MobprepaidPageModule);
    return MobprepaidPageModule;
}());

//# sourceMappingURL=mobprepaid.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobprepaidPage; });
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


var MobprepaidPage = /** @class */ (function () {
    function MobprepaidPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MobprepaidPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MobprepaidPage');
        this.tab = "active";
    };
    MobprepaidPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    MobprepaidPage.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    MobprepaidPage.prototype.proceed = function () {
        this.navCtrl.push('MobproceedPage');
    };
    MobprepaidPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mobprepaid',template:/*ion-inline-start:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\mobprepaid\mobprepaid.html"*/'<ion-header class="theme_background">\n    <div class="nav_header">\n      <button ion-button class="nav_btn floatLeft nav_back" (click)="back()"></button>\n      <div class="nav_header_title floatLeft">\n        <h5>เติมเงินบัตรโดยสาร</h5>\n      </div>\n      <button ion-button class="nav_btn floatRight nav_option"></button>\n      <button ion-button class="nav_btn floatRight nav_search"></button>\n      <div class="clear"></div>\n    </div>\n</ion-header>\n<ion-content padding>\n  <div class="segement_wrapper">\n    <h4>บัตรโดยสารรถไฟฟ้า</h4>\n    <div class="segement_tab">\n      <ul  radio-group>\n        <li><ion-radio value="1" class="floatLeft" (click)="tab_swap(\'active\')" checked></ion-radio> <ion-label class="floatLeft">MRT</ion-label>\n        <div class="clear"></div></li>\n        <li><ion-radio value="2" class="floatLeft" (click)="tab_swap(\'inactive\')"></ion-radio> <ion-label class="floatLeft">BTS</ion-label>\n        <div class="clear"></div>\n        </li>\n      </ul>\n    </div>\n    <div class="segement_tab_content" [hidden]="tab==\'inactive\'">\n      <div class="mobile_number">\n        <input class="" placeholder="หมายเลขบัตรโดยสาร">\n        <div class="contact">\n        </div>\n        <div class="clear"></div>\n       </div>\n       <div class="check_payment">\n          <ion-checkbox class="floatLeft"></ion-checkbox>\n          <ion-label class="floatLeft"><p><strong>จ่ายแบบเร่งด่วน! </strong> โดยใช้กระเป๋า MRT+</p></ion-label>\n          <div class="clear"></div>\n       </div>\n       <button ion-button class="transfer" (click)="proceed()">ดำเนินการต่อ</button>\n       <div class="recent_history">\n         <h6>ล่าสุด</h6>\n          <ul>\n              <li>\n                <h4>10 ต.ค. 2561</h4>\n                <div class="payment_circle">\n                  <img src="assets/imgs/idea.png">\n                </div>\n                <div class="payment_detail">\n                  <h5>ดำรงศักดิ์ สัตบุตร</h5>\n                  <h6>123456789</h6>\n                  <p>19:00 น.</p>\n                </div>\n                <div class="payment_price">\n                  <strong>- ฿ 100</strong>\n\n                </div>\n                <div class="clear"></div>\n              </li>\n              <li>\n                  <h4>6 ต.ค. 2561</h4>\n                  <div class="payment_circle">\n                      <img src="assets/imgs/vodafone.png">\n                  </div>\n                  <div class="payment_detail">\n                    <h5>ดำรงศักดิ์ สัตบุตร</h5>\n                    <h6>123456789</h6>\n                    <p>15:30 น.</p>\n                  </div>\n                  <div class="payment_price">\n                    <strong>- ฿ 500.00</strong>\n\n                  </div>\n                  <div class="clear"></div>\n                </li>\n                <li>\n                    <h4>10 ส.ค. 2561</h4>\n                    <div class="payment_circle">\n                        <img src="assets/imgs/idea.png">\n                    </div>\n                    <div class="payment_detail">\n                      <h5>ดำรงศักดิ์ สัตบุตร</h5>\n                      <h6>123456789</h6>\n                      <p>21:29 น.</p>\n                    </div>\n                    <div class="payment_price">\n                      <strong>- ฿ 300.00</strong>\n                    </div>\n                    <div class="clear"></div>\n                </li>\n            </ul>\n       </div>\n    </div>\n    <div class="segement_tab_content" [hidden]="tab==\'active\'">\n        <div class="on_demo">\n            <img src="assets/imgs/error.png"><br>\n            This content is not available on demo\n          </div>\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\mobprepaid\mobprepaid.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MobprepaidPage);
    return MobprepaidPage;
}());

//# sourceMappingURL=mobprepaid.js.map

/***/ })

});
//# sourceMappingURL=22.js.map