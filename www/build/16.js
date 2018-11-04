webpackJsonp([16],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductPageModule = /** @class */ (function () {
    function ProductPageModule() {
    }
    ProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */]),
            ],
        })
    ], ProductPageModule);
    return ProductPageModule;
}());

//# sourceMappingURL=product.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
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


var ProductPage = /** @class */ (function () {
    function ProductPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var id = this.navParams.get("id");
        this.slidertab = id;
        console.log("id", id);
        setTimeout(function () {
            _this.goToSlide(id);
        }, 500);
        this.slidertab = 0;
        this.currentIndex = 0;
        this.count = 0;
    }
    ProductPage.prototype.goToSlide = function (id) {
        this.slider.slideTo(id, 500);
    };
    ProductPage.prototype.slideChanged = function () {
        var currentIndex = this.slider.getActiveIndex();
        this.slidertab = currentIndex;
        console.log("Current index is", currentIndex);
    };
    ProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductPage');
    };
    ProductPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ProductPage.prototype.add = function () {
        this.count = this.count + 1;
    };
    ProductPage.prototype.sub = function () {
        this.count = this.count - 1;
    };
    ProductPage.prototype.addcart = function () {
        this.navCtrl.push("AddcartPage");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], ProductPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], ProductPage.prototype, "slider", void 0);
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\product\product.html"*/'<ion-header>\n    <div class="nav_header nav_white_header">\n        <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n        </button>\n        <div class="nav_header_title floatLeft">\n            <h5>Product Name</h5>\n        </div>\n        <button class="nav_btn floatRight nav_cart_dark">\n          </button>\n        <button class="nav_btn floatRight nav_search_dark">\n            </button>\n        <div class="clear"></div>\n    </div>\n</ion-header>\n<ion-content>\n    <div class="product_wrapper">\n        <div class="product_top_display">\n          <div class="fav_circle fav"></div>\n            <ion-slides pager="false" #mySlider class="hm_service_slide"  (ionSlideDidChange)="slideChanged()">\n                <ion-slide>\n                    <img src="assets/imgs/img1.png">\n                </ion-slide>\n                <ion-slide>\n                    <img src="assets/imgs/img1.png">\n                </ion-slide>\n                <ion-slide>\n                    <img src="assets/imgs/img1.png">\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <div class="product_image_list">\n            <ion-slides loop="true" slidesPerView="4">\n                <ion-slide (click)="goToSlide(0)">\n                    <div class="product_image_circle"  [ngClass]="{\'active\' : slidertab == 0}" >\n                      <img src="assets/imgs/pr1.png">\n                    </div>\n                </ion-slide>\n                <ion-slide  (click)="goToSlide(1)">\n                    <div class="product_image_circle" [ngClass]="{\'active\' : slidertab == 1}">\n                        <img src="assets/imgs/pr2.png">\n                      </div>\n                </ion-slide>\n                <ion-slide  (click)="goToSlide(2)">\n                    <div class="product_image_circle" [ngClass]="{\'active\' : slidertab == 2}">\n                        <img src="assets/imgs/pr1.png">\n                      </div>\n                </ion-slide>\n                <ion-slide  (click)="goToSlide(2)">\n                    <div class="product_image_circle" [ngClass]="{\'active\' : slidertab == 3}">\n                        <img src="assets/imgs/pr2.png">\n                      </div>\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <div class="product_header">\n          <div class="product_watermark">\n            <h2>Nike Flex</h2>\n            <h4>Nike Flex</h4>\n          </div>\n          <p>Contact Running Shoes</p>\n          <h6>Item # 9536</h6>\n          <div class="product_spec">\n            <ion-row>\n              <ion-col col-8 class="p0">\n                <h5>SELECT COLOR</h5>\n                <ul>\n                  <li id="custom_check_button">\n                    <label>\n                      <input id="1" type="radio" name="services" value="A">\n                      <p><img src="assets/imgs/shade1.png"></p>\n                    </label>\n                  </li>\n                  <li id="custom_check_button">\n                    <label>\n                      <input id="2" type="radio" name="services" value="B">\n                      <p><img src="assets/imgs/shade2.png"></p>\n                    </label>\n                  </li>\n                  <li id="custom_check_button">\n                    <label>\n                      <input id="3" type="radio" name="services" value="C">\n                      <p><img src="assets/imgs/shade3.png"></p>\n                    </label>\n                  </li>\n                  <li id="custom_check_button">\n                    <label>\n                      <input id="4" type="radio" name="services" value="D">\n                      <p><img src="assets/imgs/shade4.png"></p>\n                    </label>\n                  </li>\n                </ul>\n              </ion-col>\n              <ion-col col-4  class="p0">\n                  <h5>SELECT QTY</h5>\n                  <div class="increment_div">\n                    <button class="sub"  (click)="sub()">-</button>\n                    <div class="counter_circle">{{count}}</div>\n                    <button class="add" (click)="add()" >+</button>\n                  </div>\n                </ion-col>\n            </ion-row>\n          </div>\n          <div class="size_chart">\n            <h5>SELECT SIZE</h5>\n            <ul>\n              <li id="custom_check_button">\n                <label>\n                  <input id="5" type="radio" name="services" value="A">\n                  <p>S</p>\n                </label>\n              </li>\n              <li id="custom_check_button">\n                <label>\n                  <input id="6" type="radio" name="services" value="B">\n                  <p>M</p>\n                </label>\n              </li>\n              <li id="custom_check_button">\n                <label>\n                  <input id="7" type="radio" name="services" value="C">\n                  <p>L</p>\n                </label>\n              </li>\n              <li id="custom_check_button">\n                <label>\n                  <input id="8" type="radio" name="services" value="D">\n                  <p>XL</p>\n                </label>\n              </li>\n              <button ion-button class="seeall floatRight">Size Chart</button>\n              <div class="clear"></div>\n            </ul>\n          </div>\n          <div class="description">\n            <h5>DESCRIPTION</h5>\n            <p>\n              Stay firmly rooted on the ground no matter how you stretch or stride with the Nike Flex Contact!\n               These ultra-flexible running shoes boast\n               woven pattered uppers and a lightweight traction outsole for style and comfort. Take the day in style with the Nike Flex Contact!\n            </p>\n          </div>\n        </div>\n    </div>\n</ion-content>\n<ion-footer padding>\n  <button ion-button class="login_btn" (click)="addcart()">ADD TO CART</button>\n</ion-footer>\n'/*ion-inline-end:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\product\product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ })

});
//# sourceMappingURL=16.js.map