webpackJsonp([35],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardingpointPageModule", function() { return BoardingpointPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boardingpoint__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BoardingpointPageModule = /** @class */ (function () {
    function BoardingpointPageModule() {
    }
    BoardingpointPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__boardingpoint__["a" /* BoardingpointPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__boardingpoint__["a" /* BoardingpointPage */]),
            ],
        })
    ], BoardingpointPageModule);
    return BoardingpointPageModule;
}());

//# sourceMappingURL=boardingpoint.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardingpointPage; });
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


var BoardingpointPage = /** @class */ (function () {
    function BoardingpointPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    BoardingpointPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BoardingpointPage');
        this.tab = "active";
    };
    BoardingpointPage.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    BoardingpointPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    BoardingpointPage.prototype.next = function () {
        this.navCtrl.push("BoardinginfoPage");
    };
    BoardingpointPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-boardingpoint',template:/*ion-inline-start:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\boardingpoint\boardingpoint.html"*/'<ion-header>\n    <div class="nav_header nav_white_header">\n        <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n        </button>\n        <div class="nav_header_title floatLeft">\n            <h5>เวียดเจ็ทสตาร์</h5>\n            <p class="floatLeft">ฟรีน้ำหนักกระเป๋า 15 กิโลกรัม</p>\n            <p class="floatRight">จันทร์ 24 พ.ย. 61</p>\n            <div class="clear"></div>\n        </div>\n        <div class="clear"></div>\n      </div>\n  </ion-header>\n  <ion-content padding >\n    <div class="boarding_wrapper">\n      <div class="boarding_tab">\n        <li [class.active]="tab == \'active\'" (click)="tab_swap(\'active\')">\n          <p>เวลาออก</p>\n          <h6>15.25 น.</h6>\n          <hr>\n        </li>\n        <li [class.active]="tab == \'inactive\'" (click)="tab_swap(\'inactive\')">\n            <p>เวลาถึง</p>\n            <h6>17.50 น.</h6>\n            <hr>\n        </li>\n        <div class="clear"></div>\n      </div>\n      <div class="boarding_tab_content" [hidden]="tab==\'inactive\'">\n          <div class="radio_div" radio-group>\n              <ion-row>\n                <ion-col>\n                    <ion-radio value="1" checked class="floatLeft"></ion-radio>\n                    <ion-label class="floatLeft">สนามบินสุวรรณภูมิ</ion-label>\n                    <div class="clear"></div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                    <ion-radio value="2" class="floatLeft"></ion-radio>\n                    <ion-label class="floatLeft">สนามบินดอนเมือง</ion-label>\n                    <div class="clear"></div>\n                </ion-col>\n              </ion-row>\n            </div>\n      </div>\n    </div>\n  </ion-content>\n  <ion-footer padding>\n      <button ion-button class="login_btn" (click)="next()">ถัดไป</button>\n</ion-footer>\n\n'/*ion-inline-end:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\boardingpoint\boardingpoint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], BoardingpointPage);
    return BoardingpointPage;
}());

//# sourceMappingURL=boardingpoint.js.map

/***/ })

});
//# sourceMappingURL=35.js.map