webpackJsonp([11],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchlistPageModule", function() { return SearchlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__searchlist__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchlistPageModule = /** @class */ (function () {
    function SearchlistPageModule() {
    }
    SearchlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__searchlist__["a" /* SearchlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__searchlist__["a" /* SearchlistPage */]),
            ],
        })
    ], SearchlistPageModule);
    return SearchlistPageModule;
}());

//# sourceMappingURL=searchlist.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchlistPage; });
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


var SearchlistPage = /** @class */ (function () {
    function SearchlistPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    SearchlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchlistPage');
    };
    SearchlistPage.prototype.filter = function () {
        var modal = this.modalCtrl.create("FilterPage");
        modal.present();
    };
    SearchlistPage.prototype.seat = function () {
        var modal = this.modalCtrl.create("SeatPage");
        modal.present();
    };
    SearchlistPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    SearchlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-searchlist',template:/*ion-inline-start:"D:\Build\Amal\noveroApp\src\pages\searchlist\searchlist.html"*/'<ion-header>\n  <div class="nav_header nav_white_header">\n      <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n      </button>\n      <div class="nav_header_title floatLeft">\n          <h5>Bengaluru - Pune</h5>\n          <p>Thu, 24 Apr</p>\n      </div>\n      <button class="nav_btn nav_filter_dark floatRight" (click)="filter()">\n        </button>\n      <div class="clear"></div>\n  </div>\n</ion-header>\n<ion-content padding class="search_list_background">\n  <div class="search_list">\n    <ion-list>\n      <ion-item (click)="seat()">\n          <ion-row>\n              <ion-col col-12>\n                <h4>Evacay Travels</h4>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-12>\n                 <p>2+1, Scania Multi Axle Sleeper, AC</p>\n              </ion-col>\n          </ion-row>\n        <ion-row>\n          <ion-col col-3>\n            <h6>7 Seats</h6>\n          </ion-col>\n          <ion-col col-3>\n              <h6>12 Hrs</h6>\n            </ion-col>\n            <ion-col col-6 class="textRight">\n              <h6><strong>1:00 pm</strong><span>|</span>11:30 am</h6>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-2>\n            <div class="rate">\n              4.8\n            </div>\n          </ion-col>\n          <ion-col col-7>\n            <h5>8 Ratings<span>|</span>\n              <button class="view_route">View Route</button>\n            </h5>\n          </ion-col>\n          <ion-col col-3>\n            <div class="amount">\n              $ 150\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item (click)="seat()">\n          <ion-row>\n              <ion-col col-12>\n                <h4>Evacay Travels</h4>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-12>\n                 <p>2+1, Scania Multi Axle Sleeper, AC</p>\n              </ion-col>\n          </ion-row>\n        <ion-row>\n          <ion-col col-3>\n            <h6>7 Seats</h6>\n          </ion-col>\n          <ion-col col-3>\n              <h6>12 Hrs</h6>\n            </ion-col>\n            <ion-col col-6 class="textRight">\n              <h6><strong>1:00 pm</strong><span>|</span>11:30 am</h6>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-2>\n            <div class="rate">\n              4.8\n            </div>\n          </ion-col>\n          <ion-col col-7>\n            <h5>8 Ratings<span>|</span>\n              <button class="view_route">View Route</button>\n            </h5>\n          </ion-col>\n          <ion-col col-3>\n            <div class="amount">\n              $ 150\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item (click)="seat()">\n          <ion-row>\n              <ion-col col-12>\n                <h4>Evacay Travels</h4>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-12>\n                 <p>2+1, Scania Multi Axle Sleeper, AC</p>\n              </ion-col>\n          </ion-row>\n        <ion-row>\n          <ion-col col-3>\n            <h6>7 Seats</h6>\n          </ion-col>\n          <ion-col col-3>\n              <h6>12 Hrs</h6>\n            </ion-col>\n            <ion-col col-6 class="textRight">\n              <h6><strong>1:00 pm</strong><span>|</span>11:30 am</h6>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-2>\n            <div class="rate">\n              4.8\n            </div>\n          </ion-col>\n          <ion-col col-7>\n            <h5>8 Ratings<span>|</span>\n              <button class="view_route">View Route</button>\n            </h5>\n          </ion-col>\n          <ion-col col-3>\n            <div class="amount">\n              $ 150\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item (click)="seat()">\n          <ion-row>\n              <ion-col col-12>\n                <h4>Evacay Travels</h4>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-12>\n                 <p>2+1, Scania Multi Axle Sleeper, AC</p>\n              </ion-col>\n          </ion-row>\n        <ion-row>\n          <ion-col col-3>\n            <h6>7 Seats</h6>\n          </ion-col>\n          <ion-col col-3>\n              <h6>12 Hrs</h6>\n            </ion-col>\n            <ion-col col-6 class="textRight">\n              <h6><strong>1:00 pm</strong><span>|</span>11:30 am</h6>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-2>\n            <div class="rate">\n              4.8\n            </div>\n          </ion-col>\n          <ion-col col-7>\n            <h5>8 Ratings<span>|</span>\n              <button class="view_route">View Route</button>\n            </h5>\n          </ion-col>\n          <ion-col col-3>\n            <div class="amount">\n              $ 150\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Build\Amal\noveroApp\src\pages\searchlist\searchlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], SearchlistPage);
    return SearchlistPage;
}());

//# sourceMappingURL=searchlist.js.map

/***/ })

});
//# sourceMappingURL=11.js.map