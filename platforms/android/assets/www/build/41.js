webpackJsonp([41],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountdetailsPageModule", function() { return AccountdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accountdetails__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountdetailsPageModule = /** @class */ (function () {
    function AccountdetailsPageModule() {
    }
    AccountdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__accountdetails__["a" /* AccountdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__accountdetails__["a" /* AccountdetailsPage */]),
            ],
        })
    ], AccountdetailsPageModule);
    return AccountdetailsPageModule;
}());

//# sourceMappingURL=accountdetails.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountdetailsPage; });
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


var AccountdetailsPage = /** @class */ (function () {
    function AccountdetailsPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    AccountdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountdetailsPage');
    };
    AccountdetailsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    AccountdetailsPage.prototype.addcard = function () {
        var Modal = this.modalCtrl.create('AddcardPage');
        Modal.present();
    };
    AccountdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accountdetails',template:/*ion-inline-start:"D:\Build\Amal\noveroApp\src\pages\accountdetails\accountdetails.html"*/'<ion-header class="theme_background">\n    <div class="nav_header">\n      <button ion-button class="nav_btn floatLeft nav_back" (click)="back()"></button>\n      <div class="nav_header_title floatLeft">\n        <h5>Account Details</h5>\n      </div>\n      <button ion-button class="nav_btn floatRight nav_option"></button>\n      <button ion-button class="nav_btn floatRight nav_search"></button>\n      <div class="clear"></div>\n    </div>\n</ion-header>\n<ion-content padding>\n    <div class="pay_wrapper">\n        <h4>Account Details</h4>\n          <div class="contact_list">\n            <h6>Saved Cards</h6>\n            <div class="cards_list" radio-group>\n              <ul>\n                <li>\n                  <ion-row>\n                    <ion-col col-1 class="check">\n                        <ion-radio value="1" ></ion-radio>\n                    </ion-col>\n                    <ion-col col-3>\n                        <ion-label>\n                          <img src="assets/imgs/card1.png">\n                        </ion-label>\n                    </ion-col>\n                    <ion-col col-7>\n                        <ion-label>\n                          <p>xxxxx xxxxx 7890</p>\n                          <h6>Visa</h6>\n                        </ion-label>\n                    </ion-col>\n                    <ion-col col-1 class="delete">\n                        <ion-icon name="md-create"></ion-icon>\n                    </ion-col>\n                  </ion-row>\n                </li>\n                <li>\n                    <ion-row>\n                      <ion-col col-1 class="check">\n                          <ion-radio value="2"></ion-radio>\n                      </ion-col>\n                      <ion-col col-3>\n                          <ion-label> <img src="assets/imgs/card2.png"></ion-label>\n                      </ion-col>\n                      <ion-col col-7>\n                          <ion-label>\n                            <p>xxxxx xxxxx 7890</p>\n                            <h6>Master Card</h6>\n                          </ion-label>\n                        </ion-col>\n                      <ion-col col-1 class="delete">\n                          <ion-icon name="md-create"></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                </li>\n              </ul>\n              <button ion-button class="add_card" (click)="addcard()">ADD CARD</button>\n            </div>\n           </div>\n      </div>\n</ion-content>\n'/*ion-inline-end:"D:\Build\Amal\noveroApp\src\pages\accountdetails\accountdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], AccountdetailsPage);
    return AccountdetailsPage;
}());

//# sourceMappingURL=accountdetails.js.map

/***/ })

});
//# sourceMappingURL=41.js.map