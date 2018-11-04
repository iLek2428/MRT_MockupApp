webpackJsonp([43],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		268,
		42
	],
	"../pages/accountdetails/accountdetails.module": [
		269,
		41
	],
	"../pages/addaddress/addaddress.module": [
		270,
		40
	],
	"../pages/addcard/addcard.module": [
		271,
		39
	],
	"../pages/addcart/addcart.module": [
		278,
		38
	],
	"../pages/addressbook/addressbook.module": [
		272,
		37
	],
	"../pages/boardinginfo/boardinginfo.module": [
		274,
		36
	],
	"../pages/boardingpoint/boardingpoint.module": [
		273,
		35
	],
	"../pages/changepassword/changepassword.module": [
		276,
		34
	],
	"../pages/completepayment/completepayment.module": [
		275,
		33
	],
	"../pages/contact/contact.module": [
		277,
		32
	],
	"../pages/editprofile/editprofile.module": [
		280,
		31
	],
	"../pages/electricitybill/electricitybill.module": [
		297,
		30
	],
	"../pages/fashionstore/fashionstore.module": [
		279,
		29
	],
	"../pages/favourate/favourate.module": [
		281,
		28
	],
	"../pages/filter/filter.module": [
		282,
		27
	],
	"../pages/forgot/forgot.module": [
		285,
		26
	],
	"../pages/home/home.module": [
		283,
		25
	],
	"../pages/landing/landing.module": [
		298,
		24
	],
	"../pages/login/login.module": [
		284,
		23
	],
	"../pages/mobprepaid/mobprepaid.module": [
		287,
		22
	],
	"../pages/mobproceed/mobproceed.module": [
		286,
		21
	],
	"../pages/orderdetail/orderdetail.module": [
		290,
		20
	],
	"../pages/orders/orders.module": [
		288,
		19
	],
	"../pages/orgin/orgin.module": [
		289,
		18
	],
	"../pages/payselection/payselection.module": [
		291,
		17
	],
	"../pages/product/product.module": [
		310,
		16
	],
	"../pages/profile/profile.module": [
		293,
		15
	],
	"../pages/promomodal/promomodal.module": [
		292,
		14
	],
	"../pages/rating/rating.module": [
		294,
		13
	],
	"../pages/result/result.module": [
		301,
		12
	],
	"../pages/searchlist/searchlist.module": [
		295,
		11
	],
	"../pages/seat/seat.module": [
		296,
		10
	],
	"../pages/shop/shop.module": [
		309,
		9
	],
	"../pages/signup/signup.module": [
		299,
		8
	],
	"../pages/success/success.module": [
		300,
		7
	],
	"../pages/tabs/tabs.module": [
		302,
		6
	],
	"../pages/transfer/transfer.module": [
		304,
		5
	],
	"../pages/transferfriend/transferfriend.module": [
		307,
		4
	],
	"../pages/travel/travel.module": [
		303,
		3
	],
	"../pages/verified/verified.module": [
		305,
		2
	],
	"../pages/verify/verify.module": [
		306,
		1
	],
	"../pages/wallet/wallet.module": [
		308,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/accountdetails/accountdetails.module#AccountdetailsPageModule', name: 'AccountdetailsPage', segment: 'accountdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addaddress/addaddress.module#AddaddressPageModule', name: 'AddaddressPage', segment: 'addaddress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addcard/addcard.module#AddcardPageModule', name: 'AddcardPage', segment: 'addcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addressbook/addressbook.module#AddressbookPageModule', name: 'AddressbookPage', segment: 'addressbook', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/boardingpoint/boardingpoint.module#BoardingpointPageModule', name: 'BoardingpointPage', segment: 'boardingpoint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/boardinginfo/boardinginfo.module#BoardinginfoPageModule', name: 'BoardinginfoPage', segment: 'boardinginfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/completepayment/completepayment.module#CompletepaymentPageModule', name: 'CompletepaymentPage', segment: 'completepayment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addcart/addcart.module#AddcartPageModule', name: 'AddcartPage', segment: 'addcart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fashionstore/fashionstore.module#FashionstorePageModule', name: 'FashionstorePage', segment: 'fashionstore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favourate/favourate.module#FavouratePageModule', name: 'FavouratePage', segment: 'favourate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mobproceed/mobproceed.module#MobproceedPageModule', name: 'MobproceedPage', segment: 'mobproceed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mobprepaid/mobprepaid.module#MobprepaidPageModule', name: 'MobprepaidPage', segment: 'mobprepaid', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orgin/orgin.module#OrginPageModule', name: 'OrginPage', segment: 'orgin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderdetail/orderdetail.module#OrderdetailPageModule', name: 'OrderdetailPage', segment: 'orderdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payselection/payselection.module#PayselectionPageModule', name: 'PayselectionPage', segment: 'payselection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/promomodal/promomodal.module#PromomodalPageModule', name: 'PromomodalPage', segment: 'promomodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rating/rating.module#RatingPageModule', name: 'RatingPage', segment: 'rating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searchlist/searchlist.module#SearchlistPageModule', name: 'SearchlistPage', segment: 'searchlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seat/seat.module#SeatPageModule', name: 'SeatPage', segment: 'seat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/electricitybill/electricitybill.module#ElectricitybillPageModule', name: 'ElectricitybillPage', segment: 'electricitybill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/success/success.module#SuccessPageModule', name: 'SuccessPage', segment: 'success', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/travel/travel.module#TravelPageModule', name: 'TravelPage', segment: 'travel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transfer/transfer.module#TransferPageModule', name: 'TransferPage', segment: 'transfer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verified/verified.module#VerifiedPageModule', name: 'VerifiedPage', segment: 'verified', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify/verify.module#VerifyPageModule', name: 'VerifyPage', segment: 'verify', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transferfriend/transferfriend.module#TransferfriendPageModule', name: 'TransferfriendPage', segment: 'transferfriend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shop/shop.module#ShopPageModule', name: 'ShopPage', segment: 'shop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'LandingPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-content class="theme_background" padding>\n        <div class="sidemenu_wrapper">\n            <div class="profile_banner">\n                <div class="profie_circle">\n                </div>\n                <h5>Ann Alexander</h5>\n                <hr>\n            </div>\n            <ul>\n                <li menuClose>\n                    <ion-icon name="ios-heart-outline"></ion-icon>Favourites\n                </li>\n                <li menuClose>\n                    <ion-icon name="ios-book-outline"></ion-icon>Orders</li>\n                <li menuClose>\n                    <ion-icon name="ios-log-out-outline"></ion-icon>Logout</li>\n            </ul>\n        </div>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]=" rootPage " #content swipeBackEnabled="false "></ion-nav>\n'/*ion-inline-end:"Z:\Codeing\MRT_Plus\MRT_MockupApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map