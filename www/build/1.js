webpackJsonp([1],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function() { return VerifyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerifyPageModule = /** @class */ (function () {
    function VerifyPageModule() {
    }
    VerifyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verify__["a" /* VerifyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verify__["a" /* VerifyPage */]),
            ],
        })
    ], VerifyPageModule);
    return VerifyPageModule;
}());

//# sourceMappingURL=verify.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPage; });
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


var VerifyPage = /** @class */ (function () {
    function VerifyPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    VerifyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifyPage');
    };
    VerifyPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    VerifyPage.prototype.success = function () {
        this.navCtrl.push('VerifiedPage');
    };
    VerifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verify',template:/*ion-inline-start:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\verify\verify.html"*/'\n<ion-content padding class="login_bg">\n  <div class="login_content">\n    <div class="textCenter arrow_back">\n      <button ion-button class="" (click)="back()">\n          <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n    </div>\n    <h5>ยืนยันบัญชีผู้ใช้</h5>\n    <h4>รอสักครู่!</h4>\n    <h6>เรากำลังส่งรหัสยืนยันไปยังหมายเลขโทรศัพท์ที่ท่านให้ไว้</h6>\n    <hr>\n    <ion-list>\n        <ion-item>\n            <ion-input placeholder="รหัสยืนยัน"></ion-input>\n        </ion-item>\n    </ion-list>\n    <button ion-button class="login_btn" (click)="success()">\n      ยืนยันเดี๋ยวนี้\n    </button>\n    <p class="textCenter">ไม่ได้รับโค้ดยืนยันทางโทรศัพท์?<br>\n      <strong>ส่งอีกครั้ง</strong>\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\verify\verify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], VerifyPage);
    return VerifyPage;
}());

//# sourceMappingURL=verify.js.map

/***/ })

});
//# sourceMappingURL=1.js.map