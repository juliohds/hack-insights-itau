webpackJsonp([5],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalhePage = /** @class */ (function () {
    function DetalhePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetalhePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalhePage');
    };
    DetalhePage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    DetalhePage.prototype.backToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    DetalhePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhe',template:/*ion-inline-start:"D:\dev\mkt.co\firebase-social-login\src\pages\detalhe\detalhe.html"*/'<!--\n  Generated template for the DetalhePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="header-main">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon class="color-txt" name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <p class="color-txt">MKT.co</p>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="header-btn" (click)="logout()">\n        <ion-icon name="md-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n\n    <img src="assets/imgs/img_ex_1_maps.jpg">\n    <ion-fab right top>\n      <button ion-fab>\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-item>\n      <ion-icon name="ios-eye" item-start large></ion-icon>\n      <h2>1.000 Pessoas Alcançadas</h2>\n      <p>Redes sociais, campanhas localizadas e postos gratuitos de distribuição</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-bus" item-start large></ion-icon>\n      <h2>380 nos mecanismos de veiculos</h2>\n      <p>Ponto de onibus, outdoors e stands</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-qr-scanner" item-start large></ion-icon>\n      <h2>520 acessaram qr code dos anuncios</h2>\n      <p>Todos os anuncios localizados proximos do estabelecimento</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-globe" item-start large></ion-icon>\n      <h2>100 pessoas acessaram via o aplicativo</h2>\n      <p>pessoas proximas de você anda clicando nos seus anuncios</p>\n    </ion-item>\n      \n    <ion-item>\n      <span item-start></span>\n      <span item-start></span>\n      <button ion-button icon-start clear item-end (click)="backToHome()">\n        <ion-icon name="back"></ion-icon>\n        Voltar\n      </button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Desativar Anuncio</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n  </ion-card>\n\n  <button ion-button color="secondary" outline>Migrar para Plano Avançado</button>\n</ion-content>'/*ion-inline-end:"D:\dev\mkt.co\firebase-social-login\src\pages\detalhe\detalhe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetalhePage);
    return DetalhePage;
}());

//# sourceMappingURL=detalhe.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NovoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NovoPage = /** @class */ (function () {
    function NovoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NovoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NovoPage');
    };
    NovoPage.prototype.backToMenu = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    var _a, _b;
    NovoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-novo',template:/*ion-inline-start:"D:\dev\mkt.co\firebase-social-login\src\pages\novo\novo.html"*/'<!--\n  Generated template for the NovoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="header-main">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon class="color-txt" name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <p class="color-txt">MKT.co</p>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="header-btn" (click)="logout()">\n        <ion-icon name="md-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list inset>\n\n    <ion-item>\n      <ion-label>Nome Empresa</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Descrição</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-item>\n    <ion-label>Area de atuação</ion-label>\n    <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Cancelar" okText="Salvar!">\n      <ion-option value="bacon" selected="true">Vendas</ion-option>\n      <ion-option value="olives">Roupas</ion-option>\n      <ion-option value="xcheese" selected="true">Feminino</ion-option>\n      <ion-option value="peppers">Moda</ion-option>\n      <ion-option value="mushrooms">Mulheres</ion-option>\n      <ion-option value="onions">Negócios</ion-option>\n      <ion-option value="pepperoni">Varejo</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-buttons end>\n    <p>Enviar Imagem:</p>\n    <button ion-button>\n      <ion-icon name="ios-image-outline"></ion-icon>\n    </button>\n  </ion-buttons>\n\n  <!-- Only icon (no text) -->\n  <button ion-button icon-only color="light" (click)="backToMenu()">\n    <ion-icon name="md-arrow-round-back"></ion-icon>\n  </button>\n\n  <!-- Float the icon right -->\n  <button ion-button icon-end color="secondary">\n    Criar Anuncio\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\dev\mkt.co\firebase-social-login\src\pages\novo\novo.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], NovoPage);
    return NovoPage;
}());

//# sourceMappingURL=novo.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterPage = /** @class */ (function () {
    function RegisterPage(platform, camera, file, filePath, actionSheetCtrl, toastCtrl, afAuth, fb, navCtrl, navParams, loadingProvider) {
        this.platform = platform;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.afAuth = afAuth;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingProvider = loadingProvider;
        this.lastImage = null;
        this.regData = { name: '', mail: '', pass: '', cnfpass: '' };
        this.passwordtype = 'password';
        this.cnfpasswordtype = 'password';
        this.cnfpasseye = 'eye';
        this.passeye = 'eye';
        this.authForm = this.fb.group({
            'username': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'cnfpass': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        this.username = this.authForm.controls['username'];
        this.email = this.authForm.controls['email'];
        this.password = this.authForm.controls['password'];
        this.cnfpass = this.authForm.controls['cnfpass'];
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.doRegister = function (regData) {
        var _this = this;
        if (regData.pass == regData.cnfpass) {
            this.loadingProvider.startLoading();
            this.afAuth.auth.createUserWithEmailAndPassword(regData.mail, regData.pass)
                .then(function (result) {
                _this.loadingProvider.stopLoading();
                _this.presentToast('Ragister Successfully..!');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
            }).catch(function (err) {
                _this.loadingProvider.stopLoading();
                console.log('err', err);
                _this.presentToast(err);
            });
        }
        else {
            this.presentToast('Both password are not matched!');
        }
    };
    RegisterPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    RegisterPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            allowEdit: true,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            alert('imagePath ' + imagePath);
            _this.cropImagePath = imagePath;
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    RegisterPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    RegisterPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        alert('pathName->>' + namePath + '->currentName-->' + currentName + '->newFileName-->' + newFileName);
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    RegisterPage.prototype.moveToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    RegisterPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    RegisterPage.prototype.managePassword = function () {
        if (this.passwordtype == 'password') {
            this.passwordtype = 'text';
            this.passeye = 'eye-off';
        }
        else {
            this.passwordtype = 'password';
            this.passeye = 'eye';
        }
    };
    RegisterPage.prototype.managecnfPassword = function () {
        if (this.cnfpasswordtype == 'password') {
            this.cnfpasswordtype = 'text';
            this.cnfpasseye = 'eye-off';
        }
        else {
            this.cnfpasswordtype = 'password';
            this.cnfpasseye = 'eye';
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\dev\mkt.co\firebase-social-login\src\pages\register\register.html"*/'\n\n<ion-content class="bg-img">\n  <div class="main-content">\n    <div padding text-center class="container-logo">\n      <img src="assets/imgs/mkt.co.jpg">\n    </div>\n\n    <div padding  style="width: 100%;">\n    <form [formGroup]="authForm">\n      <div class="errormsg">\n        <div *ngIf="username.errors && username.touched">\n          <p>Usuario é Obrigatório.</p>\n        </div>\n        <div class="error-box" *ngIf="email.errors && email.touched">\n          <p>Email é Obrigatório.</p>\n        </div>\n        <div *ngIf="password.errors && password.touched">\n          <p>Senha é Obrigatório.</p>\n        </div>\n        <div *ngIf="cnfpass.errors && cnfpass.touched">\n          <p>Confirmar Senha é Obrigatório.</p>\n        </div>\n      </div>\n      <ion-list>\n        <ion-item padding-right>\n          <ion-label><ion-icon ios="ios-person" md="md-person"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="regData.name" [formControl]="username" id="username" type="text" required placeholder="Usuario *"></ion-input>\n        </ion-item>\n\n         <ion-item>\n          <ion-label><ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="regData.mail" [formControl]="email" id="email" type="email" required placeholder="Email *"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label><ion-icon ios="ios-unlock" md="md-unlock"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="regData.pass" [formControl]="password" id="password" type="{{passwordtype}}" required placeholder="Senha *"></ion-input>\n          <button ion-button clear class="eye-icon-btn" type="button" item-right (click)="managePassword()"><ion-icon name="{{passeye}}"></ion-icon></button>\n        </ion-item>\n\n        <ion-item>\n          <ion-label><ion-icon ios="ios-unlock" md="md-unlock"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="regData.cnfpass" [formControl]="cnfpass" id="cnfpass" type="{{cnfpasswordtype}}" required placeholder="Confirmar Senha *"></ion-input>\n          <button ion-button clear class="eye-icon-btn" type="button" item-right (click)="managecnfPassword()"><ion-icon name="{{cnfpasseye}}"></ion-icon></button>\n        </ion-item>\n      </ion-list>\n      <button ion-button full color="dark" [disabled]="!authForm.valid" (click)="doRegister(regData)">Registrar</button>\n    </form>\n    <div class="sepretor-or" padding-horizontal> <p>Ou</p></div>\n    <div padding text-center class="form-bottom-text">\n        <label>Entrar com conta existente </label>\n        </div>\n    <div text-center class="socialLogin" padding>\n      <button ion-button class="google" (click)="socialLogin(\'google\')"><ion-icon name="logo-google" style="margin-right: 12px;"></ion-icon>Google</button>\n      <button ion-button class="facebook" (click)="socialLogin(\'facebook\')"><ion-icon name="logo-facebook" style="margin-right: 12px;"></ion-icon> Facebook</button>\n    </div>\n    <div padding text-center class="form-bottom-text">\n      <label> Ja tem uma conta? <a href="javascript:void(0);" (click)="moveToLogin()"> Entrar </a> </label>\n    </div>\n  </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\dev\mkt.co\firebase-social-login\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__["a" /* LoadingProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgetPage = /** @class */ (function () {
    function ForgetPage(navCtrl, navParams, fb, afAuth, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.afAuth = afAuth;
        this.toast = toast;
        this.forgetData = { email: '' };
        this.authForm = this.fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
        this.email = this.authForm.controls['email'];
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth();
    }
    ForgetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPage');
    };
    ForgetPage.prototype.forgetPassword = function (email) {
        var _this = this;
        this.resetPassword(email)
            .then(function (result) {
            _this.toast.create({
                message: 'Link was send successfully!',
                duration: 3000,
                position: 'top'
            }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }, function (error) {
            _this.toast.create({
                message: error.message,
                duration: 5000,
                position: 'top'
            }).present();
        });
    };
    ForgetPage.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    ForgetPage.prototype.moveToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    ForgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forget',template:/*ion-inline-start:"D:\dev\mkt.co\firebase-social-login\src\pages\forget\forget.html"*/'\n\n<ion-content class="bg-img">\n  <div class="main-content">\n    <div padding text-center class="container-logo" margin-bottom >\n      <img src="assets/imgs/mkt.co.jpg">\n    </div>\n    <div padding text-center class="form-bottom-text">\n      <h3> Resetar Senha</h3>\n      <label>Digite o email associado com sua conta, e revise sua conta de email.</label>\n    </div>\n    <div text-center class="socialLogin" padding></div>\n      <div padding style="width: 100%;">\n      <form [formGroup]="authForm" (ngSubmit)="forgetPassword(forgetData.email)">\n\n        <div class="errormsg">\n          <div *ngIf="email.errors && email.touched"><p>Email é obrigatorio.</p></div>\n        </div>\n\n        <ion-list>\n          <ion-item >\n            <ion-label><ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n            <ion-input [(ngModel)]="forgetData.email" [formControl]="email" id="email" type="email" required placeholder="Email *"></ion-input>\n          </ion-item>\n        </ion-list>\n        <button type="submit" ion-button full color="dark" [disabled]="!authForm.valid">Enviar</button>\n      </form>\n\n      <div padding text-center class="form-bottom-text">\n        <label>\n          <a href="javascript:void(0);" (click)="moveToLogin()">Voltar para o Login</a>\n        </label>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\dev\mkt.co\firebase-social-login\src\pages\forget\forget.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ForgetPage);
    return ForgetPage;
}());

//# sourceMappingURL=forget.js.map

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detalhe/detalhe.module": [
		470,
		4
	],
	"../pages/forget/forget.module": [
		471,
		3
	],
	"../pages/login/login.module": [
		472,
		2
	],
	"../pages/novo/novo.module": [
		473,
		1
	],
	"../pages/register/register.module": [
		474,
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
webpackAsyncContext.id = 197;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(318);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_detalhe_detalhe__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_forget_forget__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_loading_loading__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_novo_novo__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//Angular Firebase Module





var firebaseConfig = {
    apiKey: "AIzaSyAXjl9L_uUGLHYNGX0BvqsUx_VExs8zaeY",
    authDomain: "fir-auth-bdcc0.firebaseapp.com",
    databaseURL: "https://fir-auth-bdcc0.firebaseio.com",
    projectId: "fir-auth-bdcc0",
    storageBucket: "fir-auth-bdcc0.appspot.com",
    messagingSenderId: "544712685938"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_detalhe_detalhe__["a" /* DetalhePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_novo_novo__["a" /* NovoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_forget_forget__["a" /* ForgetPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detalhe/detalhe.module#DetalhePageModule', name: 'DetalhePage', segment: 'detalhe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget/forget.module#ForgetPageModule', name: 'ForgetPage', segment: 'forget', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/novo/novo.module#NovoPageModule', name: 'NovoPage', segment: 'novo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_detalhe_detalhe__["a" /* DetalhePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_novo_novo__["a" /* NovoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_forget_forget__["a" /* ForgetPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_loading_loading__["a" /* LoadingProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forget_forget__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = /** @class */ (function () {
    function LoginPage(toastCtrl, fb, navCtrl, navParams, afAuth, loadingProvider, facebook) {
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.loadingProvider = loadingProvider;
        this.facebook = facebook;
        this.loginData = { email: '', password: '' };
        this.passwordtype = 'password';
        this.passeye = 'eye';
        this.authForm = this.fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
        this.email = this.authForm.controls['email'];
        this.password = this.authForm.controls['password'];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    /*------------------
    --------------------*/
    // For User Login
    LoginPage.prototype.userLogin = function (loginData) {
        var _this = this;
        this.loadingProvider.startLoading();
        console.log('loginData', loginData);
        this.afAuth.auth.signInWithEmailAndPassword(loginData.email, loginData.password)
            .then(function (result) {
            console.log('result >>', result);
            _this.loadingProvider.stopLoading();
            _this.moveToHome(result);
        }).catch(function (err) {
            _this.loadingProvider.stopLoading();
            console.log('err', err);
            _this.presentToast(err);
        });
    };
    // For Social Login
    LoginPage.prototype.socialLogin = function (isLogin) {
        var _this = this;
        if (isLogin == "facebook") {
            this.loadingProvider.startLoading();
            var provider = new __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth.FacebookAuthProvider();
            __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().signInWithRedirect(provider).then(function () {
                _this.loadingProvider.startLoading();
                __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().getRedirectResult().then(function (result) {
                    console.log('result', result);
                    _this.moveToHome(result.user);
                    _this.loadingProvider.stopLoading();
                }).catch(function (error) {
                    this.loadingProvider.stopLoading();
                    alert(error.message);
                    console.log('error', error);
                });
                _this.loadingProvider.stopLoading();
            }).catch(function (error) {
                this.loadingProvider.stopLoading();
                alert(error.message);
                console.log('error', error);
            });
            this.loadingProvider.stopLoading();
        }
        else if (isLogin == "google") {
            this.loadingProvider.startLoading();
            var provider = new __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth.GoogleAuthProvider();
            __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().signInWithRedirect(provider).then(function () {
                _this.loadingProvider.startLoading();
                __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().getRedirectResult().then(function (result) {
                    console.log('result', result);
                    _this.loadingProvider.stopLoading();
                    _this.moveToHome(result.user);
                }).catch(function (error) {
                    this.loadingProvider.stopLoading();
                    alert(error.message);
                    console.log('error', error);
                });
                _this.loadingProvider.stopLoading();
            }).catch(function (error) {
                this.loadingProvider.stopLoading();
                alert(error.message);
                console.log('error', error);
            });
            this.loadingProvider.stopLoading();
        }
        else if (isLogin == "twitter") {
            // this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
            // 	.then(res => {
            // 		 this.moveToHome(res);
            // 	})
            // 	.catch(err => console.log('err',err));
        }
        else if (isLogin == "github") {
            // this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
            // 	.then(res => {
            // 		 this.moveToHome(res);
            // 	})
            // 	.catch(err => console.log('err',err));
        }
    };
    // Move to register page
    LoginPage.prototype.moveToRegister = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    //Move to Home Page
    LoginPage.prototype.moveToHome = function (res) {
        console.log('res', res);
        //this.navCtrl.setRoot(DashPage);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], { res: res });
    };
    LoginPage.prototype.presentToast = function (err) {
        var toast = this.toastCtrl.create({
            message: err.message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    LoginPage.prototype.presentAlert = function (err) {
    };
    LoginPage.prototype.managePassword = function () {
        if (this.passwordtype == 'password') {
            this.passwordtype = 'text';
            this.passeye = 'eye-off';
        }
        else {
            this.passwordtype = 'password';
            this.passeye = 'eye';
        }
    };
    LoginPage.prototype.forgetpassword = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__forget_forget__["a" /* ForgetPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\dev\mkt.co\firebase-social-login\src\pages\login\login.html"*/'<!--\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>\n    <ion-icon name="md-contact"></ion-icon>\n    &nbsp;Sign In</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content class="bg-img">\n\n  <div class="main-content">\n    <div padding text-center class="container-logo">\n      <img src="assets/imgs/mkt.co.jpg">\n    </div>\n    <div text-center class="socialLogin" padding>\n      <button ion-button full class="google" (click)="socialLogin(\'google\')"><ion-icon name="logo-google" style="margin-right: 12px;"></ion-icon>Entrar com Google</button>\n      <button ion-button full class="facebook" (click)="socialLogin(\'facebook\')"><ion-icon name="logo-facebook" style="margin-right: 12px;"></ion-icon>Entrar com Facebook</button>\n    </div>\n    <div class="sepretor-or" padding-horizontal> <p>Ou</p></div>\n\n    <div padding class="container-bottom">\n    <form [formGroup]="authForm" (ngSubmit)="userLogin(loginData)">\n\n      <div class="errormsg">\n        <div *ngIf="email.errors && email.touched">\n            <p>Email obrigatório.</p>\n        </div>\n        <div *ngIf="password.errors && password.touched">\n            <p>Senha obrigatória.</p>\n        </div>\n      </div>\n\n        <ion-list>\n          <ion-item padding-right>\n            <ion-label>\n              <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n            </ion-label>\n            <ion-input [(ngModel)]="loginData.email" [formControl]="email" id="email" type="text" required placeholder="Email *"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <ion-icon ios="ios-unlock" md="md-unlock"></ion-icon>\n            </ion-label>\n              <ion-input [(ngModel)]="loginData.password" [formControl]="password" id="password" type="{{passwordtype}}" required placeholder="Password *"></ion-input>\n            <button ion-button clear class="eye-icon-btn" type="button" item-right (click)="managePassword()"><ion-icon name="{{passeye}}"></ion-icon></button>\n          </ion-item>\n        </ion-list>\n        <button type="submit" ion-button full color="dark" [disabled]="!authForm.valid">Entrar</button>\n    </form>\n    <div padding text-center class="form-bottom-text" ><a href="javascript:void(0);" (click)="forgetpassword()"> Esqueceu a senha?</a></div>\n        <div padding text-center class="form-bottom-text">\n          <label>Não tem uma conta? <a href="javascript:void(0);" (click)="moveToRegister()">Registre-se</a></label>\n        </div>\n\n  </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\dev\mkt.co\firebase-social-login\src\pages\login\login.html"*/,
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(68);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.pages = [
            { titulo: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { titulo: 'Anuncios', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'ios-megaphone-outline' },
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToPage = function (page) {
        this.nav.setRoot(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\dev\mkt.co\firebase-social-login\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-content>\n        <ion-list>\n            <button ion-item *ngFor="let page of pages" (click)="goToPage(page.component)">\n                <ion-icon class="color-txt" item-left name="{{page.icon}}"></ion-icon>\n                {{ page.titulo }}\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n\n<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\dev\mkt.co\firebase-social-login\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detalhe_detalhe__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__novo_novo__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(afAuth, navCtrl, navParam, loadingProvider, platform) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.loadingProvider = loadingProvider;
        this.pet = "puppies";
        this.isAndroid = false;
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "assets/img/ica-slidebox-img-1.png",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/img/ica-slidebox-img-2.png",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/img/ica-slidebox-img-3.png",
            }
        ];
        this.isAndroid = platform.is('android');
        this.userData = this.navParam.get('res');
        console.log('userData', this.userData);
    }
    HomePage.prototype.goToDetalhe = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__detalhe_detalhe__["a" /* DetalhePage */]);
    };
    HomePage.prototype.goToNovo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__novo_novo__["a" /* NovoPage */]);
    };
    HomePage.prototype.logout = function () {
        this.loadingProvider.startLoading();
        this.afAuth.auth.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        this.loadingProvider.stopLoading();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\dev\mkt.co\firebase-social-login\src\pages\home\home.html"*/'<!-- <ion-header class="header-main">\n  <ion-navbar color="dark">\n    <ion-title>\n    {{userData.email}}\n    </ion-title>\n    <ion-buttons>\n	    <button ion-button clear (click)="logout()">\n	      	<ion-icon name="md-exit"></ion-icon>\n	    </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-header class="header-main">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon class="color-txt" name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <p class="color-txt">MKT.co</p>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="header-btn" (click)="logout()">\n        <ion-icon name="md-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      Seus Anuncios\n    </ion-card-header>\n    \n  <ion-fab right top>\n    <button ion-fab (click)="goToNovo()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n  </ion-card>\n\n  <div padding>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="kittens">\n        FREE\n      </ion-segment-button>\n      <ion-segment-button value="puppies">\n        Básico\n      </ion-segment-button>\n      <ion-segment-button value="puppies2">\n        Avançado\n      </ion-segment-button>\n      <ion-segment-button value="plus">\n        Plus\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'kittens\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/anuncio_basico.jpg">\n        </ion-thumbnail>\n        <ion-item>\n          <ion-icon name="ios-megaphone-outline" item-start></ion-icon>\n          500 pessoas\n          <ion-badge item-end>\n            <ion-icon name="ios-eye" item-start></ion-icon>\n          </ion-badge>\n          <ion-badge item-end color="danger">\n            <ion-icon name="md-close" item-start></ion-icon>\n          </ion-badge>\n        </ion-item>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'puppies\'">\n      <ion-item (click)="goToDetalhe()">\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/anuncio_basico.jpg">\n        </ion-thumbnail>\n        <ion-item>\n          <ion-icon name="ios-megaphone-outline" item-start></ion-icon>\n          1 mil\n          <ion-badge item-end>\n            <ion-icon name="ios-eye" item-start></ion-icon>\n          </ion-badge>\n          <ion-badge item-end color="danger">\n            <ion-icon name="md-close" item-start></ion-icon>\n          </ion-badge>\n        </ion-item>\n      </ion-item>\n      <ion-item (click)="goToDetalhe()">\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/anuncio_basico2.jpg">\n        </ion-thumbnail>\n        <ion-item>\n          <ion-icon name="ios-megaphone-outline" item-start></ion-icon>\n          1 mil\n          <ion-badge item-end>\n            <ion-icon name="ios-eye" item-start></ion-icon>\n          </ion-badge>\n          <ion-badge item-end color="danger">\n            <ion-icon name="md-close" item-start></ion-icon>\n          </ion-badge>\n        </ion-item>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'puppies2\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/anuncio_basico.jpg">\n        </ion-thumbnail>\n        <ion-item>\n          <ion-icon name="ios-megaphone-outline" item-start></ion-icon>\n          10 mil\n          <ion-badge item-end>\n            <ion-icon name="ios-eye" item-start></ion-icon>\n          </ion-badge>\n          <ion-badge item-end color="danger">\n            <ion-icon name="md-close" item-start></ion-icon>\n          </ion-badge>\n        </ion-item>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'plus\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/anuncio_basico.jpg">\n        </ion-thumbnail>\n        <ion-item>\n          <ion-icon name="ios-megaphone-outline" item-start></ion-icon>\n          100 mil\n          <ion-badge item-end>\n            <ion-icon name="ios-eye" item-start></ion-icon>\n          </ion-badge>\n          <ion-badge item-end color="danger">\n            <ion-icon name="md-close" item-start></ion-icon>\n          </ion-badge>\n        </ion-item>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-card>\n    <ion-card-header>\n      Indique Anunciantes e ganhe\n    </ion-card-header>\n  </ion-card>\n\n  <ion-item>\n    <ion-label>Url:</ion-label>\n    <ion-input type="text" value="bit.ly.ID=USKOWK23k3k3kkkK"></ion-input>\n  </ion-item>\n\n\n  <div style="width: 100%; height: 222px;">\n    <ion-slides pager>\n\n      <ion-slide style="background-image: url(\'assets/imgs/interested.jpg\')">\n      </ion-slide>\n\n      <ion-slide style="background-image: url(\'assets/imgs/interested.jpg\')">\n      </ion-slide>\n\n      <ion-slide style="background-image: url(\'assets/imgs/insterested2.jpg\')">\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n\n  \n\n</ion-content>'/*ion-inline-end:"D:\dev\mkt.co\firebase-social-login\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingProvider.prototype.startLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Carregando aguarde...'
        });
        this.loading.present();
    };
    LoadingProvider.prototype.stopLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.loading.dismiss();
        }, 100);
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ })

},[298]);
//# sourceMappingURL=main.js.map