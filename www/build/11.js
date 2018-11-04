webpackJsonp([11],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchlistPageModule", function() { return SearchlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__searchlist__ = __webpack_require__(338);
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

/***/ 338:
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
            selector: 'page-searchlist',template:/*ion-inline-start:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\searchlist\searchlist.html"*/'<ion-header>\n  <div class="nav_header nav_white_header">\n      <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n      </button>\n      <div class="nav_header_title floatLeft">\n          <h5>BKK - SGN</h5>\n          <p>จันทร์ 24 พ.ย. 61</p>\n      </div>\n      <button class="nav_btn nav_filter_dark floatRight" (click)="filter()">\n        </button>\n      <div class="clear"></div>\n  </div>\n</ion-header>\n<ion-content padding class="search_list_background">\n  <div class="search_list">\n    <ion-list>\n      <ion-item (click)="seat()">\n          <ion-row>\n              <ion-col col-12>\n                <h4>เจ็ทสตาร์</h4>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-12>\n                 <p>ฟรีน้ำหนักกระเป๋า 15 กิโลกรัม</p>\n              </ion-col>\n          </ion-row>\n        <ion-row>\n          <ion-col col-3>\n            <h6>12 ที่นั่ง</h6>\n          </ion-col>\n          <ion-col col-3>\n              <h6>1 ชม. 40 นาที</h6>\n            </ion-col>\n            <ion-col col-6 class="textRight">\n              <h6><strong>15.25 น.</strong><span>|</span>17.05 น.</h6>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-2>\n            <div class="rate">\n              4.8\n            </div>\n          </ion-col>\n          <ion-col col-7>\n            <h5>105 รีวิว<span>|</span>\n              <button class="view_route">สำรองที่นั่ง</button>\n            </h5>\n          </ion-col>\n          <ion-col col-3>\n            <div class="amount">\n              ฿ 1,589\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item (click)="seat()">\n          <ion-row>\n              <ion-col col-12>\n                <h4>เวียดเจ็ทแอร์</h4>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-12>\n                 <p>บินตรงไม่หยุดพัก, ฟรีกระเป๋าเดินทาง 15 กิโลกรัม</p>\n              </ion-col>\n          </ion-row>\n        <ion-row>\n          <ion-col col-3>\n            <h6>2 ที่นั่ง</h6>\n          </ion-col>\n          <ion-col col-3>\n              <h6>1 ชม. 30 นาที</h6>\n            </ion-col>\n            <ion-col col-6 class="textRight">\n              <h6><strong>14.40 น.</strong><span>|</span>13:10 น.</h6>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-2>\n            <div class="rate">\n              4.5\n            </div>\n          </ion-col>\n          <ion-col col-7>\n            <h5>52 รีวิว<span>|</span>\n              <button class="view_route">สำรองที่นั่ง</button>\n            </h5>\n          </ion-col>\n          <ion-col col-3>\n            <div class="amount">\n              ฿ 1,765\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item (click)="seat()">\n          <ion-row>\n              <ion-col col-12>\n                <h4>แอร์เอเชีย</h4>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-12>\n                 <p>ฟรีกระเป๋าเดินทาง 15 กิโลกรัม</p>\n              </ion-col>\n          </ion-row>\n        <ion-row>\n          <ion-col col-3>\n            <h6>20 ที่นั่ง</h6>\n          </ion-col>\n          <ion-col col-3>\n              <h6>1 ชม. 35 นาที</h6>\n            </ion-col>\n            <ion-col col-6 class="textRight">\n              <h6><strong>15:55 น.</strong><span>|</span>17.30 น.</h6>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-2>\n            <div class="rate">\n              3.5\n            </div>\n          </ion-col>\n          <ion-col col-7>\n            <h5>296 รีวิว<span>|</span>\n              <button class="view_route">สำรองที่นั่ง</button>\n            </h5>\n          </ion-col>\n          <ion-col col-3>\n            <div class="amount">\n              ฿ 2,130\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item (click)="seat()">\n          <ion-row>\n              <ion-col col-12>\n                <h4>นกแอร์</h4>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-12>\n                 <p>ความบันเทิงบนตัวเครื่อง, ฟรีอาหาร, ฟรีน้ำหนักกระเป๋า 10 กิโลกรัม</p>\n              </ion-col>\n          </ion-row>\n        <ion-row>\n          <ion-col col-3>\n            <h6>5 ที่นั่ง</h6>\n          </ion-col>\n          <ion-col col-3>\n              <h6>1 ชม. 30 นาที</h6>\n            </ion-col>\n            <ion-col col-6 class="textRight">\n              <h6><strong>19.30 น.</strong><span>|</span>21.00 น.</h6>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-2>\n            <div class="rate">\n              4.3\n            </div>\n          </ion-col>\n          <ion-col col-7>\n            <h5>150 รีวิว<span>|</span>\n              <button class="view_route">สำรองที่นั่ง</button>\n            </h5>\n          </ion-col>\n          <ion-col col-3>\n            <div class="amount">\n              ฿ 2,199\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\searchlist\searchlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], SearchlistPage);
    return SearchlistPage;
}());

//# sourceMappingURL=searchlist.js.map

/***/ })

});
//# sourceMappingURL=11.js.map