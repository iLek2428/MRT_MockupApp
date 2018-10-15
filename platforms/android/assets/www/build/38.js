webpackJsonp([38],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcartPageModule", function() { return AddcartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addcart__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddcartPageModule = /** @class */ (function () {
    function AddcartPageModule() {
    }
    AddcartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addcart__["a" /* AddcartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addcart__["a" /* AddcartPage */]),
            ],
        })
    ], AddcartPageModule);
    return AddcartPageModule;
}());

//# sourceMappingURL=addcart.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcartPage; });
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


var AddcartPage = /** @class */ (function () {
    function AddcartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shownGroup = null;
        this.count = 0;
        this.shownGroup = 0;
        console.log(this.shownGroup);
    }
    AddcartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddcartPage');
    };
    AddcartPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    AddcartPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    AddcartPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    AddcartPage.prototype.add = function () {
        this.count = this.count + 1;
    };
    AddcartPage.prototype.sub = function () {
        this.count = this.count - 1;
    };
    AddcartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addcart',template:/*ion-inline-start:"D:\Build\Amal\noveroApp\src\pages\addcart\addcart.html"*/'<ion-header>\n  <div class="nav_header nav_white_header">\n      <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n      </button>\n      <div class="nav_header_title floatLeft">\n          <h5>Add Cart</h5>\n      </div>\n      <button class="nav_btn floatRight nav_cart_dark">\n        </button>\n      <button class="nav_btn floatRight nav_search_dark">\n          </button>\n      <div class="clear"></div>\n  </div>\n</ion-header>\n<ion-content padding>\n  <div class="addcart_wrapper">\n      <div class="address">\n        <h5 class="floatLeft">DELIVERS TO</h5>\n        <button class="seeall">Edit</button>\n        <div class="clear"></div>\n        <br>\n        <div class="loc_icon floatLeft">\n        </div>\n        <div class="address_bay floatRight">\n          <p>\n              Techware solution, Carnival Infopark, Phase 1, Kusumagiri (po), Kakkanad, Kochi\n          </p>\n        </div>\n        <div class="clear"></div>\n        <br>\n        <br>\n      </div>\n      <div class="cart_item">\n          <h5 class="">ITEMS IN YOUR CART</h5>\n          <ul>\n            <li>\n              <div class="cart_left floatLeft">\n                <div class="cart_circle">\n                  <img src="assets/imgs/pr1.png">\n                </div>\n              </div>\n              <div class="cart_right floatRight">\n                <h5>Nike Flex</h5>\n                <p>Contact running shoes</p>\n                <h4>$ 120</h4>\n                <div class="color_circle">\n                  <img src="assets/imgs/shade1.png">\n                </div>\n                <div class="size_circle">\n                  M\n                </div>\n                <div class="increment_div">\n                    <button class="sub"  (click)="sub()">-</button>\n                    <div class="counter_circle">{{count}}</div>\n                    <button class="add" (click)="add()" >+</button>\n                </div>\n                <div class="clear"></div>\n                <div class="bottom_bay">\n                    <button ion-button class="remove floatLeft">Remove</button>\n                    <button ion-button class="edit floatRight" (click)="toggleGroup(0)" [ngClass]="{active:isGroupShown(0)}">More</button>\n                    <div class="clear"></div>\n                </div>\n              </div>\n              <div class="clear"></div>\n              <div class="" *ngIf="isGroupShown(0)">\n                  <div class="order_detail_content">\n                      <h6>Seller Details</h6>\n                      <div class="seller_photo">\n                        <img src="assets/imgs/nike.png">\n                      </div>\n                      <div class="seller_detail">\n                        <h5>Nike Authorised Dealer</h5>\n                        <p>Gurgon</p>\n                      </div>\n                      <div class="clear"></div>\n                  </div>\n                  <div class="mobile_number">\n                      <input class="" placeholder="Seller Promocode">\n                      <div class="apply">\n                        Apply\n                      </div>\n                      <div class="clear"></div>\n                  </div>\n              </div>\n            </li>\n          </ul>\n      </div>\n      <div class="download_list">\n          <ul>\n              <h5>Payment Details</h5>\n            <li>\n              <ion-row class="p0">\n                <ion-col col-6  class="p0">\n                  Order Total\n                </ion-col>\n                <ion-col col-6 class="p0 textRight">\n                  $ 201\n                </ion-col>\n              </ion-row>\n              <div class="clear"></div>\n            </li>\n            <li>\n                <ion-row class="p0">\n                  <ion-col col-6  class="p0">\n                    Shipping\n                  </ion-col>\n                  <ion-col col-6 class="p0 textRight">\n                   + $ 10\n                  </ion-col>\n                </ion-row>\n                <div class="clear"></div>\n            </li>\n            <hr>\n            <li>\n                <ion-row class="p0">\n                  <ion-col col-6  class="p0">\n                    <strong>Bag Total</strong>\n                  </ion-col>\n                  <ion-col col-6 class="p0 textRight">\n                   <strong>$ 211</strong>\n                  </ion-col>\n                </ion-row>\n                <div class="clear"></div>\n            </li>\n            <div class="mobile_number">\n                <input class="" placeholder="App Promocode">\n                <div class="apply">\n                  Apply\n                </div>\n                <div class="clear"></div>\n            </div>\n          </ul>\n      </div>\n  </div>\n</ion-content>\n<ion-footer padding>\n    <button ion-button class="login_btn">ADD TO CART</button>\n</ion-footer>\n'/*ion-inline-end:"D:\Build\Amal\noveroApp\src\pages\addcart\addcart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AddcartPage);
    return AddcartPage;
}());

//# sourceMappingURL=addcart.js.map

/***/ })

});
//# sourceMappingURL=38.js.map