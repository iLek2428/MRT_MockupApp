webpackJsonp([3],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPageModule", function() { return TravelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__travel__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TravelPageModule = /** @class */ (function () {
    function TravelPageModule() {
    }
    TravelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__travel__["a" /* TravelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__travel__["a" /* TravelPage */]),
            ],
        })
    ], TravelPageModule);
    return TravelPageModule;
}());

//# sourceMappingURL=travel.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelPage; });
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


var TravelPage = /** @class */ (function () {
    function TravelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TravelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TravelPage');
        this.tab = "flight";
    };
    TravelPage.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    TravelPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    TravelPage.prototype.search = function () {
        this.navCtrl.push("SearchlistPage");
    };
    TravelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-travel',template:/*ion-inline-start:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\travel\travel.html"*/'<ion-header>\n    <div class="nav_header nav_white_header">\n        <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n        </button>\n        <div class="nav_header_title floatLeft">\n            <h5>Travel</h5>\n        </div>\n        <button class="nav_btn nav_search_dark floatRight">\n          </button>\n        <div class="clear"></div>\n    </div>\n  </ion-header>\n<ion-content padding>\n  <div class="travel_wrapper">\n    <div class="offer_slider">\n        <ion-slides loop="true" autoplay="2000"speed="1000" slidesPerView="1.5" spaceBetween="5px">\n            <ion-slide>\n              <img src="assets/imgs/offer1.png">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/offer2.png">\n            </ion-slide>\n            <ion-slide>\n              <img src="assets/imgs/offer3.png">\n            </ion-slide>\n        </ion-slides>\n    </div>\n    <div class="travel_tab_bay">\n        <ul>\n            <li [class.active]="tab == \'flight\'" (click)="tab_swap(\'flight\')">Flight\n                <hr>\n            </li>\n            <li [class.active]="tab == \'bus\'" (click)="tab_swap(\'bus\')">Bus\n                <hr>\n            </li>\n            <li [class.active]="tab == \'train\'" (click)="tab_swap(\'train\')">Train\n                <hr>\n            </li>\n            <li [class.active]="tab == \'cab\'" (click)="tab_swap(\'cab\')">Cab\n                <hr>\n            </li>\n        </ul>\n    </div>\n    <div class="travel_tab_content" [hidden]="tab !=\'flight\'">\n        <div class="relative">\n            <div class="arrow">\n            </div>\n            <ion-input type="text" placeholder="From" class="from"></ion-input>\n            <ion-input type="text" placeholder="To" class="to"></ion-input>\n            <h6>DEPARTURE DATE</h6>\n            <ion-item>\n              <ion-datetime displayFormat="DD-MM-YYYY" placeholder="Date"></ion-datetime>\n            </ion-item>\n        </div>\n    </div>\n    <div class="travel_tab_content" [hidden]="tab !=\'bus\'">\n        <div class="on_demo">\n            <img src="assets/imgs/error.png"><br>\n            This content is not available on demo\n          </div>\n    </div>\n    <div class="travel_tab_content" [hidden]="tab !=\'train\'">\n        <div class="on_demo">\n            <img src="assets/imgs/error.png"><br>\n            This content is not available on demo\n          </div>\n    </div>\n    <div class="travel_tab_content" [hidden]="tab !=\'cab\'">\n        <div class="on_demo">\n            <img src="assets/imgs/error.png"><br>\n            This content is not available on demo\n          </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer padding>\n<button ion-button class="login_btn" (click)="search()">Search Ride</button>\n</ion-footer>\n'/*ion-inline-end:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\travel\travel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TravelPage);
    return TravelPage;
}());

//# sourceMappingURL=travel.js.map

/***/ })

});
//# sourceMappingURL=3.js.map