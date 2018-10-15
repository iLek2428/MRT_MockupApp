webpackJsonp([15],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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


var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.editprofile = function () {
        var modal = this.modalCtrl.create('EditprofilePage');
        modal.present();
    };
    ProfilePage.prototype.logout = function () {
        this.navCtrl.push('LoginPage');
    };
    ProfilePage.prototype.changepass = function () {
        this.navCtrl.push('ChangepasswordPage');
    };
    ProfilePage.prototype.address = function () {
        this.navCtrl.push("AddressbookPage");
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\profile\profile.html"*/'<ion-header class="theme_background">\n    <div class="nav_header">\n        <button ion-button class="nav_btn floatLeft nav_menu" menuToggle></button>\n        <div class="nav_header_title floatLeft">\n            <ion-searchbar class="home_search_bar" placeholder="ค้นหา">\n            </ion-searchbar>\n        </div>\n        <div class="clear"></div>\n    </div>\n</ion-header>\n<ion-content>\n    <div class="profile_wrapper">\n        <div class="profile_banner">\n            <ion-fab bottom right>\n                <button ion-fab class="theme_light" (click)="editprofile()"><ion-icon name="md-create"></ion-icon></button>\n            </ion-fab>\n            <div class="profie_circle">\n\n            </div>\n            <h5>ดำรงศักดิ์ สัตบุตร</h5>\n            <p>me@dmg.st</p>\n            <hr>\n        </div>\n        <div class="profile_content">\n            <ul>\n                <li class="menu1" (click)="changepass()">เปลี่ยนรหัสผ่าน</li>\n                <li class="menu2">การแจ้งเตือน</li>\n                <li class="menu3">กระเป๋า</li>\n                <li class="menu4">ช๊อปปิ้ง</li>\n                <li class="menu5" (click)="address()">ที่อยู่</li>\n                <li class="menu6">ตั้งค่า</li>\n                <li class="menu7" (click)="logout()">ออกจากระบบ</li>\n            </ul>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=15.js.map