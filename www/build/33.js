webpackJsonp([33],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletepaymentPageModule", function() { return CompletepaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__completepayment__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompletepaymentPageModule = /** @class */ (function () {
    function CompletepaymentPageModule() {
    }
    CompletepaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__completepayment__["a" /* CompletepaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__completepayment__["a" /* CompletepaymentPage */]),
            ],
        })
    ], CompletepaymentPageModule);
    return CompletepaymentPageModule;
}());

//# sourceMappingURL=completepayment.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletepaymentPage; });
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


var CompletepaymentPage = /** @class */ (function () {
    function CompletepaymentPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    CompletepaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompletepaymentPage');
    };
    CompletepaymentPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    CompletepaymentPage.prototype.success = function () {
        var modal = this.modalCtrl.create('SuccessPage');
        modal.present();
    };
    CompletepaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-completepayment',template:/*ion-inline-start:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\completepayment\completepayment.html"*/'<ion-header class="theme_background">\n    <div class="nav_header">\n      <button ion-button class="nav_btn floatLeft nav_back" (click)="back()"></button>\n      <div class="nav_header_title floatLeft">\n        <h5>ชำระเงิน</h5>\n      </div>\n      <button ion-button class="nav_btn floatRight nav_option"></button>\n      <button ion-button class="nav_btn floatRight nav_search"></button>\n      <div class="clear"></div>\n    </div>\n</ion-header>\n<ion-content padding>\n    <div class="pay_wrapper">\n        <h4>ดำเนินการ</h4>\n        <h5>จ่ายเงิน</h5>\n          <div class="contact_list">\n            <h6>บัตรเครดิตที่บันทึกไว้</h6>\n            <div class="cards_list" radio-group>\n              <ul>\n                <li>\n                  <ion-row>\n                    <ion-col col-1 class="check">\n                        <ion-radio value="1" ></ion-radio>\n                    </ion-col>\n                    <ion-col col-3>\n                        <ion-label>\n                          <img src="assets/imgs/card2.png">\n                        </ion-label>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-label>\n                          <p>xxxxx xxxxx 7890</p>\n                          <h6>Visa</h6>\n                        </ion-label>\n                    </ion-col>\n                    <ion-col col-2 class="delete">\n                        <ion-icon name="ios-trash"></ion-icon>\n                        <ion-icon name="md-create"></ion-icon>\n                    </ion-col>\n                  </ion-row>\n                </li>\n                <li>\n                    <ion-row>\n                      <ion-col col-1 class="check">\n                          <ion-radio value="2"></ion-radio>\n                      </ion-col>\n                      <ion-col col-3>\n                          <ion-label> <img src="assets/imgs/card1.png"></ion-label>\n                      </ion-col>\n                      <ion-col col-6>\n                          <ion-label>\n                            <p>xxxxx xxxxx 7890</p>\n                            <h6>Master Card</h6>\n                          </ion-label>\n                        </ion-col>\n                      <ion-col col-2 class="delete">\n                          <ion-icon name="ios-trash"></ion-icon>\n                          <ion-icon name="md-create"></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                </li>\n              </ul>\n              <button ion-button class="transfer" (click)="success()">ชำระเงิน</button>\n            </div>\n           </div>\n      </div>\n</ion-content>\n'/*ion-inline-end:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\completepayment\completepayment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], CompletepaymentPage);
    return CompletepaymentPage;
}());

//# sourceMappingURL=completepayment.js.map

/***/ })

});
//# sourceMappingURL=33.js.map