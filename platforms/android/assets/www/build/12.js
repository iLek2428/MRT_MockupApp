webpackJsonp([12],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageModule", function() { return ResultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResultPageModule = /** @class */ (function () {
    function ResultPageModule() {
    }
    ResultPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__result__["a" /* ResultPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__result__["a" /* ResultPage */]),
            ],
        })
    ], ResultPageModule);
    return ResultPageModule;
}());

//# sourceMappingURL=result.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
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


var ResultPage = /** @class */ (function () {
    function ResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultPage');
    };
    ResultPage.prototype.product = function () {
        this.navCtrl.push("ProductPage");
    };
    ResultPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"D:\Build\Amal\noveroApp\src\pages\result\result.html"*/'<ion-header>\n    <div class="nav_header nav_white_header">\n        <button class="nav_btn nav_back_dark floatLeft" (click)="back()">\n      </button>\n        <div class="nav_header_title floatLeft">\n            <h5>More Results</h5>\n        </div>\n        <button class="nav_btn floatRight nav_filter_dark">\n          </button>\n        <div class="clear"></div>\n    </div>\n</ion-header>\n\n\n<ion-content padding>\n    <div class="result_wrapper">\n        <ul>\n            <li>\n                <div class="inner_result">\n                    <div class="fav_circle fav"></div>\n                    <img src="assets/imgs/product2.png">\n                </div>\n                <h5>Voyl bl</h5>\n                <p><strong>$30</strong>$28 </p>\n            </li>\n            <li>\n                <div class="inner_result">\n                    <div class="fav_circle not_fav"></div>\n                    <img src="assets/imgs/product3.png">\n                </div>\n                <h5>Voyl bl</h5>\n                <p><strong>$34</strong> $30 </p>\n            </li>\n            <li>\n                <div class="inner_result">\n                    <div class="fav_circle not_fav"></div>\n                    <img src="assets/imgs/product4.png">\n                </div>\n                <h5>Voyl bl</h5>\n                <p><strong>$25</strong> $23 </p>\n            </li>\n            <li>\n                <div class="inner_result">\n                    <div class="fav_circle not_fav"></div>\n                    <img src="assets/imgs/product2.png">\n                </div>\n                <h5>Voyl bl</h5>\n                <p><strong>$31</strong>$29</p>\n            </li>\n            <li>\n                <div class="inner_result">\n                    <div class="fav_circle fav"></div>\n                    <img src="assets/imgs/product2.png">\n                </div>\n                <h5>Voyl bl</h5>\n                <p><strong>$30</strong>$28 </p>\n            </li>\n            <li>\n                <div class="inner_result">\n                    <div class="fav_circle not_fav"></div>\n                    <img src="assets/imgs/product3.png">\n                </div>\n                <h5>Voyl bl</h5>\n                <p><strong>$34</strong> $30 </p>\n            </li>\n            <li>\n                <div class="inner_result">\n                    <div class="fav_circle not_fav"></div>\n                    <img src="assets/imgs/product4.png">\n                </div>\n                <h5>Voyl bl</h5>\n                <p><strong>$25</strong> $23 </p>\n            </li>\n            <li>\n                <div class="inner_result">\n                    <div class="fav_circle not_fav"></div>\n                    <img src="assets/imgs/product2.png">\n                </div>\n                <h5>Voyl bl</h5>\n                <p><strong>$31</strong>$29</p>\n            </li>\n            <li>\n                <div class="inner_result">\n                    <div class="fav_circle fav"></div>\n                    <img src="assets/imgs/product2.png">\n                </div>\n                <h5>Voyl bl</h5>\n                <p><strong>$30</strong>$28 </p>\n            </li>\n            <li>\n                <div class="inner_result">\n                    <div class="fav_circle not_fav"></div>\n                    <img src="assets/imgs/product3.png">\n                </div>\n                <h5>Voyl bl</h5>\n                <p><strong>$34</strong> $30 </p>\n            </li>\n            <li>\n                <div class="inner_result">\n                    <div class="fav_circle not_fav"></div>\n                    <img src="assets/imgs/product4.png">\n                </div>\n                <h5>Voyl bl</h5>\n                <p><strong>$25</strong> $23 </p>\n            </li>\n            <li>\n                <div class="inner_result">\n                    <div class="fav_circle not_fav"></div>\n                    <img src="assets/imgs/product2.png">\n                </div>\n                <h5>Voyl bl</h5>\n                <p><strong>$31</strong>$29</p>\n            </li>\n            <li>\n                <div class="inner_result">\n                    <div class="fav_circle fav"></div>\n                    <img src="assets/imgs/product2.png">\n                </div>\n                <h5>Voyl bl</h5>\n                <p><strong>$30</strong>$28 </p>\n            </li>\n            <li>\n                <div class="inner_result">\n                    <div class="fav_circle not_fav"></div>\n                    <img src="assets/imgs/product3.png">\n                </div>\n                <h5>Voyl bl</h5>\n                <p><strong>$34</strong> $30 </p>\n            </li>\n            <li>\n                <div class="inner_result">\n                    <div class="fav_circle not_fav"></div>\n                    <img src="assets/imgs/product4.png">\n                </div>\n                <h5>Voyl bl</h5>\n                <p><strong>$25</strong> $23 </p>\n            </li>\n            <li>\n                <div class="inner_result">\n                    <div class="fav_circle not_fav"></div>\n                    <img src="assets/imgs/product2.png">\n                </div>\n                <h5>Voyl bl</h5>\n                <p><strong>$31</strong>$29</p>\n            </li>\n        </ul>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\Build\Amal\noveroApp\src\pages\result\result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ResultPage);
    return ResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ })

});
//# sourceMappingURL=12.js.map