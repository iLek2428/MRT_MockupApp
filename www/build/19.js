webpackJsonp([19],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]),
            ],
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());

//# sourceMappingURL=orders.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
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


var OrdersPage = /** @class */ (function () {
    function OrdersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdersPage');
    };
    OrdersPage.prototype.orderdetail = function () {
        this.navCtrl.push('OrderdetailPage');
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\orders\orders.html"*/'<ion-header class="theme_background">\n\n    <div class="nav_header">\n\n        <button ion-button class="nav_btn floatLeft nav_menu" menuToggle></button>\n\n        <div class="nav_header_title floatLeft">\n\n            <img src="assets/imgs/logo_white.png">\n\n        </div>\n\n        <button ion-button class="nav_btn floatRight nav_option"></button>\n\n        <div class="clear"></div>\n\n    </div>\n\n    <div class="nav_header">\n\n        <ion-searchbar class="home_search_bar" placeholder="search">\n\n        </ion-searchbar>\n\n    </div>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div class="orders_wrapper heightFull">\n\n        <!-- <div class="orders_empty heightFull">\n\n        <h4>ORDERS</h4>\n\n        <div class="order_nil_empty">\n\n            <img src="assets/imgs/order_none.png">\n\n            <p>You have not made any<br> orders yet</p>\n\n            <hr>\n\n        </div>\n\n    </div> -->\n\n        <div class="order_list heightFull">\n\n            <div class="order_list_head">\n\n                <h4>คำสั่งซื้อ</h4>\n\n                <button ion-button class="nav_btn">\n\n        </button>\n\n                <hr>\n\n                <div class="clear"></div>\n\n            </div>\n\n            <ul>\n\n                <ion-list>\n\n                    <ion-item (click)="orderdetail()">\n\n                        <div class="list_top">\n\n                            <h5>คำสั่งซื้อเลขที่ : 5568999</h5>\n\n                            <p>5 พ.ย. 2561, 09:30 น.</p>\n\n                        </div>\n\n                        <div class="list_bottom">\n\n                            <div class="list_circle">\n\n                                <img src="assets/imgs/mrtqr.png">\n\n                            </div>\n\n                            <div class="list_detail">\n\n                                <h4>ตั๋วโดยสาร MRT+ (QR)</h4>\n\n                                <h6>ติดต่อผู้จัดจำหน่าย</h6>\n\n                                <div>\n\n                                    <div class="floatLeft price">฿ 100</div>\n\n                                    <div class="floatRight order_status approve">เสร็จสมบูรณ์</div>\n\n                                    <div class="clear"></div>\n\n                                </div>\n\n                            </div>\n\n                            <div class="clear"></div>\n\n                        </div>\n\n                    </ion-item>\n\n                    <ion-item (click)="orderdetail()">\n\n                        <div class="list_top">\n\n                            <h5>คำสั่งซื้อเลขที่ : 331245855</h5>\n\n                            <p>14 ต.ค. 2561, 05:30 น.</p>\n\n                        </div>\n\n                        <div class="list_bottom">\n\n                            <div class="list_circle">\n\n                                <img src="assets/imgs/product1.png">\n\n                            </div>\n\n                            <div class="list_detail">\n\n                                <h4>Nike Flex</h4>\n\n                                <h6>Contact Running Shoes</h6>\n\n                                <div>\n\n                                    <div class="floatLeft price">฿ 189</div>\n\n                                    <div class="floatRight order_status reject">ยกเลิก</div>\n\n                                    <div class="clear"></div>\n\n                                </div>\n\n                            </div>\n\n                            <div class="clear"></div>\n\n                        </div>\n\n                    </ion-item>\n\n                    <ion-item (click)="orderdetail()">\n\n                        <div class="list_top">\n\n                            <h5>คำสั่งซื้อเลขที่ : 331245855</h5>\n\n                            <p>14 june 2017, 05:00 pm</p>\n\n                        </div>\n\n                        <div class="list_bottom">\n\n                            <div class="list_circle">\n\n                                <img src="assets/imgs/product1.png">\n\n                            </div>\n\n                            <div class="list_detail">\n\n                                <h4>Nike Flex</h4>\n\n                                <h6>Contact Running Shoes</h6>\n\n                                <div>\n\n                                    <div class="floatLeft price">฿ 189</div>\n\n                                    <div class="floatRight order_status approve">เสร็จสมบูรณ์</div>\n\n                                    <div class="clear"></div>\n\n                                </div>\n\n                            </div>\n\n                            <div class="clear"></div>\n\n                        </div>\n\n                    </ion-item>\n\n                    <ion-item (click)="orderdetail()">\n\n                        <div class="list_top">\n\n                            <h5>คำสั่งซื้อเลขที่ : 331245855</h5>\n\n                            <p>14 june 2017, 05:00 pm</p>\n\n                        </div>\n\n                        <div class="list_bottom">\n\n                            <div class="list_circle">\n\n                                <img src="assets/imgs/product1.png">\n\n                            </div>\n\n                            <div class="list_detail">\n\n                                <h4>Nike Flex</h4>\n\n                                <h6>Contact Running Shoes</h6>\n\n                                <div>\n\n                                    <div class="floatLeft price">฿ 189</div>\n\n                                    <div class="floatRight order_status reject">ยกเลิก</div>\n\n                                    <div class="clear"></div>\n\n                                </div>\n\n                            </div>\n\n                            <div class="clear"></div>\n\n                        </div>\n\n                    </ion-item>\n\n                    <ion-item (click)="orderdetail()">\n\n                        <div class="list_top">\n\n                            <h5>คำสั่งซื้อเลขที่ : 331245855</h5>\n\n                            <p>14 june 2017, 05:00 pm</p>\n\n                        </div>\n\n                        <div class="list_bottom">\n\n                            <div class="list_circle">\n\n                                <img src="assets/imgs/product1.png">\n\n                            </div>\n\n                            <div class="list_detail">\n\n                                <h4>Nike Flex</h4>\n\n                                <h6>Contact Running Shoes</h6>\n\n                                <div>\n\n                                    <div class="floatLeft price">฿ 189</div>\n\n                                    <div class="floatRight order_status approve">เสร็จสมบูรณ์</div>\n\n                                    <div class="clear"></div>\n\n                                </div>\n\n                            </div>\n\n                            <div class="clear"></div>\n\n                        </div>\n\n                    </ion-item>\n\n                    <ion-item (click)="orderdetail()">\n\n                        <div class="list_top">\n\n                            <h5>คำสั่งซื้อเลขที่ : 331245855</h5>\n\n                            <p>14 june 2017, 05:00 pm</p>\n\n                        </div>\n\n                        <div class="list_bottom">\n\n                            <div class="list_circle">\n\n                                <img src="assets/imgs/product1.png">\n\n                            </div>\n\n                            <div class="list_detail">\n\n                                <h4>Nike Flex</h4>\n\n                                <h6>Contact Running Shoes</h6>\n\n                                <div>\n\n                                    <div class="floatLeft price">฿ 189</div>\n\n                                    <div class="floatRight order_status reject">ยกเลิก</div>\n\n                                    <div class="clear"></div>\n\n                                </div>\n\n                            </div>\n\n                            <div class="clear"></div>\n\n                        </div>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ul>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ })

});
//# sourceMappingURL=19.js.map