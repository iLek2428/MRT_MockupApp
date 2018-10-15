webpackJsonp([18],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrginPageModule", function() { return OrginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orgin__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrginPageModule = /** @class */ (function () {
    function OrginPageModule() {
    }
    OrginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orgin__["a" /* OrginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orgin__["a" /* OrginPage */]),
            ],
        })
    ], OrginPageModule);
    return OrginPageModule;
}());

//# sourceMappingURL=orgin.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrginPage; });
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


var OrginPage = /** @class */ (function () {
    function OrginPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    OrginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrginPage');
    };
    OrginPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    OrginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orgin',template:/*ion-inline-start:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\orgin\orgin.html"*/'<ion-header>\n  <div class="nav_header orgin_theme">\n      <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n      </button>\n      <div class="nav_header_title floatLeft">\n          <h5>Orgin City</h5>\n      </div>\n      <div class="clear"></div>\n  </div>\n</ion-header>\n<ion-content class="orgin_theme">\n  <div class="orgin_wrapper">\n      <ion-searchbar class="home_search_bar" placeholder="Origin"></ion-searchbar>\n      <div class="origin_inner">\n        <div class="orign_main_cities">\n          <ion-row>\n            <ion-col>\n              <div class="origin_city_div">\n                <img src="assets/imgs/pune.png">\n                <p>Pune</p>\n              </div>\n            </ion-col>\n            <ion-col>\n                <div class="origin_city_div">\n                    <img src="assets/imgs/bangalore.png">\n                    <p>Bangalore</p>\n                </div>\n            </ion-col>\n            <ion-col>\n                <div class="origin_city_div">\n                    <img src="assets/imgs/chennai.png">\n                    <p>Chennai</p>\n                </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <div class="origin_city_div">\n                      <img src="assets/imgs/delhi.png">\n                      <p>Delhi</p>\n                  </div>\n              </ion-col>\n              <ion-col>\n                  <div class="origin_city_div">\n                      <img src="assets/imgs/hyderabad.png">\n                      <p>Hyderabad</p>\n                  </div>\n              </ion-col>\n              <ion-col>\n                  <div class="origin_city_div">\n                      <img src="assets/imgs/jaipur.png">\n                      <p>Jaipur</p>\n                  </div>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <div class="origin_city_div">\n                      <img src="assets/imgs/kolkatta.png">\n                      <p>kolkatta</p>\n                  </div>\n              </ion-col>\n              <ion-col>\n                  <div class="origin_city_div">\n                      <img src="assets/imgs/lucknow.png">\n                      <p>Lucknow</p>\n                  </div>\n              </ion-col>\n              <ion-col>\n                  <div class="origin_city_div">\n                      <img src="assets/imgs/mumbai.png">\n                      <p>Mumbai</p>\n                  </div>\n              </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <div class="other_cities">\n        <h6>OTHER CITIES</h6>\n        <ul>\n          <li>Trivandrum</li>\n          <li>Kochin</li>\n          <li>Kanyakumari</li>\n          <li>Coimbatore</li>\n          <li>Nagpur</li>\n        </ul>\n      </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\orgin\orgin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], OrginPage);
    return OrginPage;
}());

//# sourceMappingURL=orgin.js.map

/***/ })

});
//# sourceMappingURL=18.js.map