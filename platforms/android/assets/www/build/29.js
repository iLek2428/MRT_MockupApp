webpackJsonp([29],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionstorePageModule", function() { return FashionstorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fashionstore__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FashionstorePageModule = /** @class */ (function () {
    function FashionstorePageModule() {
    }
    FashionstorePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fashionstore__["a" /* FashionstorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fashionstore__["a" /* FashionstorePage */]),
            ],
        })
    ], FashionstorePageModule);
    return FashionstorePageModule;
}());

//# sourceMappingURL=fashionstore.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FashionstorePage; });
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


var FashionstorePage = /** @class */ (function () {
    function FashionstorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FashionstorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FashionstorePage');
    };
    FashionstorePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    FashionstorePage.prototype.product = function () {
        this.navCtrl.push('ProductPage');
    };
    FashionstorePage.prototype.seemore = function () {
        this.navCtrl.push('ResultPage');
    };
    FashionstorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fashionstore',template:/*ion-inline-start:"D:\Build\Amal\noveroApp\src\pages\fashionstore\fashionstore.html"*/'<ion-header>\n    <div class="nav_header nav_white_header">\n        <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n        </button>\n        <div class="nav_header_title floatLeft">\n            <h5>Fashion Store</h5>\n        </div>\n        <button class="nav_btn floatRight nav_cart_dark">\n          </button>\n        <button class="nav_btn floatRight nav_search_dark">\n            </button>\n        <div class="clear"></div>\n    </div>\n</ion-header>\n<ion-content>\n    <div class="fashion_store_wrapper">\n        <div class="fashion_banner_slider">\n            <ion-slides loop="true" pager="true" zoom="true" autoplay="2000" effect="coverflow" speed="1000" slidesPerView="1">\n                <ion-slide>\n                    <img src="assets/imgs/fashion_poster.png" (click)="product()">\n                </ion-slide>\n                <ion-slide>\n                    <img src="assets/imgs/fashion_poster2.png" (click)="product()">\n                </ion-slide>\n                <ion-slide>\n                    <img src="assets/imgs/fashion_poster3.png" (click)="product()">\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <div class="fashion_header">\n            <h6>TOP BRANDS</h6>\n            <button ion-button class="seeall seeall_blue" (click)="seemore()">See all</button>\n            <div class="clear"></div>\n        </div>\n        <div class="top_brand_slider">\n            <ion-slides loop="true" autoplay="1000" speed="1000" slidesPerView="2.5">\n                <ion-slide (click)="product()">\n                    <div class="top_brand_circle">\n                        <img src="assets/imgs/p1.png">\n                    </div>\n                    <h5>Adidas</h5>\n                    <p>Starting at 80 $</p>\n                </ion-slide>\n                <ion-slide (click)="product()">\n                    <div class="top_brand_circle">\n                        <img src="assets/imgs/p2.png">\n                    </div>\n                    <h5>Adidas</h5>\n                    <p>Starting at 80 $</p>\n                </ion-slide>\n                <ion-slide (click)="product()">\n                    <div class="top_brand_circle">\n                        <img src="assets/imgs/p3.png">\n                    </div>\n                    <h5>Adidas</h5>\n                    <p>Starting at 80 $</p>\n                </ion-slide>\n                <ion-slide (click)="product()">\n                    <div class="top_brand_circle">\n                        <img src="assets/imgs/p1.png">\n                    </div>\n                    <h5>Adidas</h5>\n                    <p>Starting at 80 $</p>\n                </ion-slide>\n                <ion-slide (click)="product()">\n                    <div class="top_brand_circle">\n                        <img src="assets/imgs/p2.png">\n                    </div>\n                    <h5>Adidas</h5>\n                    <p>Starting at 80 $</p>\n                </ion-slide>\n                <ion-slide (click)="product()">\n                    <div class="top_brand_circle">\n                        <img src="assets/imgs/p3.png">\n                    </div>\n                    <h5>Adidas</h5>\n                    <p>Starting at 80 $</p>\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <div class="fashion_header">\n            <h6>TOP TRENDS</h6>\n            <button ion-button class="seeall seeall_blue" (click)="seemore()">See all</button>\n            <div class="clear"></div>\n        </div>\n        <div class="fashion_store_slider">\n            <ion-slides loop="true" pager="false" zoom="true" effect="slide" speed="500" slidesPerView="1.5" spaceBetween="5">\n                <ion-slide (click)="product()">\n                    <img src="assets/imgs/poster1.png">\n                </ion-slide>\n                <ion-slide (click)="product()">\n                    <img src="assets/imgs/poster2.png">\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <div class="fashion_store_slider">\n            <ion-slides loop="true" pager="false" zoom="true" effect="slide" speed="500" slidesPerView="2" spaceBetween="5">\n                <ion-slide (click)="product()">\n                    <img src="assets/imgs/poster3.png">\n                </ion-slide>\n                <ion-slide (click)="product()">\n                    <img src="assets/imgs/fashion_poster3.png">\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <div class="fashion_header">\n            <h6>MOST VIEWED</h6>\n            <button ion-button class="seeall seeall_pink" (click)="seemore()">See all</button>\n            <div class="clear"></div>\n        </div>\n        <div class="fashion_most_viewed_slider">\n            <ion-slides loop="true" pager="false" zoom="true" effect="slide" speed="500" slidesPerView="3" spaceBetween="10">\n                <ion-slide (click)="product()">\n                    <div class="fav_circle fav"></div>\n                    <img src="assets/imgs/product2.png">\n                    <h5>Voyl bl</h5>\n                    <p>Get at<strong>$30</strong> </p>\n                </ion-slide>\n                <ion-slide (click)="product()">\n                    <div class="fav_circle not_fav"></div>\n                    <img src="assets/imgs/product3.png">\n                    <h5>Palace</h5>\n                    <p>Get at<strong>$27</strong> </p>\n                </ion-slide>\n                <ion-slide (click)="product()">\n                    <div class="fav_circle fav"></div>\n                    <img src="assets/imgs/product4.png">\n                    <h5>Sanfran</h5>\n                    <p>Get at <strong>$28</strong> </p>\n                </ion-slide>\n                <ion-slide (click)="product()">\n                    <div class="fav_circle not_fav"></div>\n                    <img src="assets/imgs/product5.png">\n                    <h5>Fostelo</h5>\n                    <p>Get at <strong>$32</strong> </p>\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\Build\Amal\noveroApp\src\pages\fashionstore\fashionstore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FashionstorePage);
    return FashionstorePage;
}());

//# sourceMappingURL=fashionstore.js.map

/***/ })

});
//# sourceMappingURL=29.js.map