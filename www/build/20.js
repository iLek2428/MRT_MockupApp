webpackJsonp([20],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailPageModule", function() { return OrderdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderdetail__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderdetailPageModule = /** @class */ (function () {
    function OrderdetailPageModule() {
    }
    OrderdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orderdetail__["a" /* OrderdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderdetail__["a" /* OrderdetailPage */]),
            ],
        })
    ], OrderdetailPageModule);
    return OrderdetailPageModule;
}());

//# sourceMappingURL=orderdetail.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderdetailPage; });
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


var OrderdetailPage = /** @class */ (function () {
    function OrderdetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderdetailPage');
    };
    OrderdetailPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    OrderdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderdetail',template:/*ion-inline-start:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\orderdetail\orderdetail.html"*/'<ion-header class="theme_background">\n  <div class="nav_header">\n    <button ion-button class="nav_btn floatLeft nav_back" (click)="back()"></button>\n    <div class="nav_header_title floatLeft">\n      <h5>คำสั่งซื้อที่ : 5568999</h5>\n    </div>\n    <button ion-button class="nav_btn floatRight nav_option"></button>\n    <button ion-button class="nav_btn floatRight nav_search"></button>\n    <div class="clear"></div>\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div class="order_detail_wrapper">\n    <div class="order_detail_banner">\n      <div class="order_detail_left">\n        <div class="order_detail">\n            <img src="assets/imgs/mrtqr.png">\n        </div>\n        <div class="bottom_circle"></div>\n      </div>\n      <div class="order_detail_right">\n        <h4>บัตรหมดอายุ</h4>\n        <h5>6 พฤศจิกายน 2561</h5>\n        <p>MRT N02 -> MRT N20<br>\n        <strong>฿ 100</strong></p>\n      </div>\n      <div class="clear"></div>\n    </div>\n    <div class="textCenter" padding>\n      <button ion-button class="trach_detail_btn">รายละเอียด</button>\n    </div>\n    <div class="applied_code_div">\n      <div class="applied_code_inner">\n        <h5>รหัสส่วนลด</h5>\n        <h6>NEW 10</h6>\n        <p>ใช้ส่วนลดเมื่อวันที่ 5 พ.ย. 61</p>\n      </div>\n    </div>\n    <div class="order_detail_content">\n      <h6>รายละเอียดผู้จำหน่าย</h6>\n      <div class="seller_photo">\n        <img src="../../assets/imgs/mrt126.png">\n      </div>\n      <div class="seller_detail">\n        <h5>การรถไฟฟ้าขนส่งมวลชนแห่งประเทศไทย</h5>\n        <p>นนทบุรี</p>\n      </div>\n      <div class="clear"></div>\n      <div class="download_list">\n        <ul>\n          <li>\n            <span><img src="../../assets/imgs/download.png"></span>\n            <span>ดาวน์โหลดสำเนาใบเสร็จรับเงิน</span>\n            <ion-icon name="md-download" class="red"></ion-icon>\n            <div class="clear"></div>\n          </li>\n          <li>\n            <span><img src="../../assets/imgs/return.png"></span>\n            <span>เงื่อนไขการคืนสินค้า</span>\n            <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            <div class="clear"></div>\n          </li>\n          <li>\n            <span><img src="../../assets/imgs/contact.png"></span>\n            <span>ติดต่อผู้จัดจำหน่าย</span>\n            <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            <div class="clear"></div>\n          </li>\n        </ul>\n      </div>\n      <div class="download_list">\n          <ul>\n              <h6>รายละเอียดเส้นทาง</h6>\n            <li>\n              <ion-row class="p0">\n                <ion-col col-1  class="p0">\n                    <span><img src="../../assets/imgs/location.png"></span>\n                </ion-col>\n                <ion-col col-11  class="p0">\n                    <div class="border_line">MRT สถานีตลาดบางใหญ่ -> MRT สถานีหัวลำโพง\n                      </div>\n                </ion-col>\n              </ion-row>\n              <div class="clear"></div>\n            </li>\n          </ul>\n      </div>\n      <div class="download_list">\n          <ul>\n              <h6>รายละเอียดการชำระเงิน</h6>\n            <li>\n              <ion-row class="p0">\n                <ion-col col-6  class="p0">\n                  รายการสินค้า\n                </ion-col>\n                <ion-col col-6 class="p0 textRight">\n                  ฿100\n                </ion-col>\n              </ion-row>\n              <div class="clear"></div>\n            </li>\n            <li>\n                <ion-row class="p0">\n                  <ion-col col-6  class="p0">\n                    ค่าขนส่ง\n                  </ion-col>\n                  <ion-col col-6 class="p0 textRight">\n                   + ฿0\n                  </ion-col>\n                </ion-row>\n                <div class="clear"></div>\n            </li>\n            <hr>\n            <li>\n                <ion-row class="p0">\n                  <ion-col col-6  class="p0">\n                    <strong>รวมทั้งสิ้น</strong>\n                  </ion-col>\n                  <ion-col col-6 class="p0 textRight">\n                   <strong>฿100</strong>\n                  </ion-col>\n                </ion-row>\n                <div class="clear"></div>\n            </li>\n            <li>\n                <ion-row class="p0">\n                  <ion-col col-6  class="p0 green">\n                    เงินคืนที่ได้รับ\n                  </ion-col>\n                  <ion-col col-6 class="p0 textRight green">\n                   - ฿5\n                  </ion-col>\n                </ion-row>\n                <div class="clear"></div>\n            </li>\n\n          </ul>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\orderdetail\orderdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], OrderdetailPage);
    return OrderdetailPage;
}());

//# sourceMappingURL=orderdetail.js.map

/***/ })

});
//# sourceMappingURL=20.js.map