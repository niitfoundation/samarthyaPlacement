webpackJsonp([1,4],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = (function () {
    //   public data2 :LoginComponent  ;
    function EmailService(http) {
        this.http = http;
        this.url = "";
    }
    EmailService.prototype.getEmail = function (email) {
        this.url = '/emailverify/checkEmail?Email=' + email;
        return this.http.get(this.url).map(function (response) { return response.json(); });
    };
    ;
    EmailService.prototype.postdata = function (mailObj) {
        this.url = '/emailverify/sendmail';
        var mailObjString = JSON.stringify(mailObj);
        var params = { json: mailObjString };
        var res;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url, params, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    EmailService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], EmailService);
    return EmailService;
    var _a;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/email.service.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiDetails; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UiDetails = (function () {
    function UiDetails(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.url = '/api/layout/navigationlinks';
    }
    ;
    UiDetails.prototype.getMenuDetails = function (token) {
        console.log("menu");
        return this.http.get(this.url, this.authoriZation(token))
            .map(function (response) {
            var body = response.json();
            return body;
        });
    };
    UiDetails.prototype.authoriZation = function (userToken) {
        if (userToken) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': userToken });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    UiDetails = __decorate([
        // map operatror for observable
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], UiDetails);
    return UiDetails;
    var _a, _b;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/uidetails.service.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(851),
            styles: [__webpack_require__(833)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/about-us.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_placement_register_service__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_json_data_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_services_data_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var AdminRegistrationComponent = (function () {
    function AdminRegistrationComponent(fb, data, JsonDataService, PlacementRegisterService, route, router) {
        this.data = data;
        this.JsonDataService = JsonDataService;
        this.PlacementRegisterService = PlacementRegisterService;
        this.route = route;
        this.router = router;
        this.disabled = "false";
        this.areaList = [];
        this.emailDisable = false;
        //Dropdown values.Should be data driven
        this.roles = ['Admin', 'Coorinator', 'Supervisor'];
        this.professions = ['FullStackDeveloper', 'BPO'];
        this.placementCenters = ['Pune', 'Bangalore', 'Chennai'];
        this.languages = ['English', 'Hindi', 'Tamizh'];
        //building the form using FormBuilder and FormGroup
        this.userForm = fb.group({
            firstNameControl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[A-Za-z]{2,}')]],
            lastNameControl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[A-Za-z ]{1,}')]],
            genderControl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            registrationControl: [''],
            emailControl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            aadharControl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^\d{12}$/)]],
            passwordControl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            confirmPasswordControl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, this.matchPassword()]],
            mobileControl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[0-9]{10}')]],
            roleControl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            professionControl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            pincodeControl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[0-9]{6}')]],
            locationControl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            placementControl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            languageControl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
        });
    }
    AdminRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.queryParams['email']) {
            this.userForm.patchValue({
                'emailControl': this.route.snapshot.queryParams['email']
            });
            this.emailDisable = true;
        }
        this.route.params.subscribe(function (params) { return _this.title = params['title']; });
        if (this.title == 'Coordinator') {
            this.userForm.patchValue({
                roleControl: "Coordinator"
            });
            this.hiddenRole = true;
            this.hiddenParticularRole = false;
            this.disabled = "true";
        }
        else if (this.title == 'Supervisor') {
            this.userForm.patchValue({
                roleControl: "Supervisor"
            });
            this.hiddenRole = true;
            this.hiddenParticularRole = false;
            this.disabled = "true";
        }
        else if (this.title == 'Admin') {
            this.title = "Admin";
            this.disabled = "false";
            this.hiddenRole = false;
            this.hiddenParticularRole = true;
        }
    };
    //password validation which is calling from form building of passwordControl
    AdminRegistrationComponent.prototype.passwordValidator = function () {
        var _this = this;
        return function (c) {
            if (_this.userForm && _this.userForm.get('confirmPasswordControl').value) {
                if (_this.userForm.get('passwordControl').value == _this.userForm.get('confirmPasswordControl').value) {
                    return null;
                }
                else {
                    return { valid: false };
                }
            }
        };
    };
    //password validation which is calling from form building of confirmPasswordControl
    AdminRegistrationComponent.prototype.matchPassword = function () {
        var _this = this;
        return function (c) {
            if (_this.userForm && _this.userForm.get('passwordControl').value) {
                if (_this.userForm.get('passwordControl').value == _this.userForm.get('confirmPasswordControl').value) {
                    return null;
                }
                else {
                    return { valid: false };
                }
            }
        };
    };
    //user choose the location by pincode which is calling from close dialog and it should set location to the entered pincode
    AdminRegistrationComponent.prototype.getPincode = function () {
        var _this = this;
        if (this.userForm.get('pincodeControl').value.length == 6 && this.userForm.get('pincodeControl').valid) {
            this.JsonDataService.getPincode(this.userForm.get('pincodeControl').value).subscribe(function (resPincodeData) { return [_this.pincodeLocation = resPincodeData, _this.getPincodeLocation()]; });
        }
        else {
            this.areaList = [];
            this.userForm.patchValue({
                'locationControl': ''
            });
        }
    };
    // get pincode locations after checking pincode
    AdminRegistrationComponent.prototype.getPincodeLocation = function () {
        var _this = this;
        this.userForm.value.locationControl = '';
        this.areaList = [];
        this.pincodeLocation.forEach(function (element) {
            _this.areaList.push(element['officename'] + ', ' + element['Districtname'] + ', ' + element['statename']);
        });
        if (this.areaList.length === 0) {
            this.data.openSnackBar('No Location Found', 'Please Try again');
        }
        else {
            this.data.openSnackBar(this.areaList.length + ' Locations Found', 'Please Select');
        }
    };
    //user choose the location by pincode which is calling from html pincode input and it should set location to the entered pincode and close the dialog
    AdminRegistrationComponent.prototype.close = function (dialog) {
        this.getPincode();
        dialog.close();
    };
    //after submitting the form,it should executed and call service to add the data to json
    AdminRegistrationComponent.prototype.save = function (userdata) {
        var _this = this;
        var userData = {
            FirstName: userdata.get('firstNameControl').value, LastName: userdata.get('lastNameControl').value,
            Gender: userdata.get('genderControl').value, Email: userdata.get('emailControl').value,
            MobileNumber: userdata.get('mobileControl').value, Role: userdata.get('roleControl').value,
            Profession: userdata.get('professionControl').value,
            Location: userdata.get('locationControl').value,
            PlacementCenter: userdata.get('placementControl').value,
            Language: userdata.get('languageControl').value
        };
        if (this.userForm.value.aadharControl) {
            userData['AadharNumber'] = this.userForm.value.aadharControl;
        }
        if (this.userForm.value.registrationControl) {
            userData['RegistrationID'] = this.userForm.value.registrationControl;
        }
        var userCredentialsData = {
            Email: userdata.get('emailControl').value, Password: userdata.get('passwordControl').value,
        };
        this.PlacementRegisterService.add(userData, userCredentialsData).subscribe(function (resJsonData) {
            console.log(resJsonData);
            if (resJsonData['success'] == true) {
                _this.userForm.reset();
                _this.router.navigate(['/login']);
                _this.data.openSnackBar("Registered successfully", "You can login");
                return true;
            }
            else {
                _this.data.openSnackBar('TECHNICAL ISSUE', 'Please Try after some time');
            }
        }, function (error) {
            _this.data.openSnackBar('TECHNICAL ISSUE', 'Please Try after some time');
        });
        return true;
    };
    AdminRegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-registration',
            template: __webpack_require__(852),
            styles: [__webpack_require__(834)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_placement_register_service__["a" /* PlacementRegisterService */]]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_app_services_data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_app_services_data_service__["a" /* Data */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_placement_register_service__["a" /* PlacementRegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_placement_register_service__["a" /* PlacementRegisterService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _f) || Object])
    ], AdminRegistrationComponent);
    return AdminRegistrationComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/admin-registration.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CandidateRegisterComponent = (function () {
    function CandidateRegisterComponent() {
    }
    CandidateRegisterComponent.prototype.ngOnInit = function () {
    };
    CandidateRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-candidate-register',
            template: __webpack_require__(853),
            styles: [__webpack_require__(835)]
        }), 
        __metadata('design:paramtypes', [])
    ], CandidateRegisterComponent);
    return CandidateRegisterComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/candidate-register.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CandidateSearchComponent = (function () {
    function CandidateSearchComponent() {
    }
    CandidateSearchComponent.prototype.ngOnInit = function () {
    };
    CandidateSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-candidate-search',
            template: __webpack_require__(854),
            styles: [__webpack_require__(836)]
        }), 
        __metadata('design:paramtypes', [])
    ], CandidateSearchComponent);
    return CandidateSearchComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/candidate-search.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uidetails_service__ = __webpack_require__(270);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(route, data, uiDetails, router) {
        this.route = route;
        this.data = data;
        this.uiDetails = uiDetails;
        this.router = router;
        // this.dataByRole=JSON.stringify(this.data.storage);
        //  this.title=this.dataByRole;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tokenVerification = JSON.parse(localStorage.getItem('currentUser'))["token"];
        this.uiDetails.getMenuDetails(tokenVerification)
            .subscribe(function (role) {
            if (role["success"]) {
                _this.title = role["object"].Role;
            }
            else {
                tokenVerification = null;
                localStorage.removeItem('currentUser');
                _this.router.navigate(['/login']);
                _this.data.openSnackBar(role["message"], 'Ok');
            }
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(855),
            styles: [__webpack_require__(837)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* Data */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_uidetails_service__["a" /* UiDetails */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_uidetails_service__["a" /* UiDetails */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/dashboard.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventPostComponent = (function () {
    function EventPostComponent() {
    }
    EventPostComponent.prototype.ngOnInit = function () {
    };
    EventPostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-event-post',
            template: __webpack_require__(857),
            styles: [__webpack_require__(839)]
        }), 
        __metadata('design:paramtypes', [])
    ], EventPostComponent);
    return EventPostComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/event-post.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(fb, emailservice, snackBar, viewContainerRef, router, emailService) {
        this.emailservice = emailservice;
        this.snackBar = snackBar;
        this.viewContainerRef = viewContainerRef;
        this.router = router;
        this.emailService = emailService;
        this.emailId = '';
        // getting login form data
        this.userForm = fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
        });
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        // this.emailService.getRegister()
        //   .subscribe(resEmployeeData => {
        //     this.emailId = resEmployeeData.usermail2;
        //     console.log(this.emailId);
        //   });
    };
    // snackBar for notification
    ForgotPasswordComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    // verify user if already exist or not for password Reset
    ForgotPasswordComponent.prototype.verifyUserReset = function () {
        var _this = this;
        if (this.candidates.length != 0) {
            var link = "";
            this.infoobj = {
                'to': this.userForm.value.email,
                'subject': 'Password Reset',
            };
            this.emailservice.postdata(this.infoobj).subscribe(function (data) { return _this.postobject = data; }, function (error) { return [_this.openSnackBar('PASSWORD RESET LINK SENT', 'Please Check your mail'),
                _this.timer = setTimeout(function () { return _this.router.navigate(['/login']); }, 500)
            ]; }, function () { return console.log('finished'); });
        }
        else {
            this.openSnackBar('User not Registered', 'Please Register');
        }
    };
    // on password reset submit
    ForgotPasswordComponent.prototype.onResetLink = function () {
        var _this = this;
        this.emailService.getEmail(this.userForm.value.email).subscribe(function (resEmailData) {
            _this.candidates = resEmailData.data, _this.verifyUserReset(),
                function (error) {
                    _this.openSnackBar('TECHNICAL ISSUE', 'Please Try after some time');
                };
        });
    };
    ForgotPasswordComponent.prototype.onBack = function () {
        this.router.navigate(['/login']);
    };
    ForgotPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(858),
            styles: [__webpack_require__(840)],
            providers: []
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */]) === 'function' && _f) || Object])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/forgetPassword.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobPostComponent = (function () {
    function JobPostComponent() {
    }
    JobPostComponent.prototype.ngOnInit = function () {
    };
    JobPostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-job-post',
            template: __webpack_require__(859),
            styles: [__webpack_require__(841)]
        }), 
        __metadata('design:paramtypes', [])
    ], JobPostComponent);
    return JobPostComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/job-post.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = (function () {
    function LandingPageComponent() {
        this.headingTitle = "Samarthya";
        this.subtitleDetails = "Reach out directly to most relevant job consultants and recruiters across India.";
        this.aboutus = ["Sam", "John", "Karol"];
    }
    LandingPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(860),
            styles: [__webpack_require__(842)],
        }), 
        __metadata('design:paramtypes', [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/landing-page.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_uidetails_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_data_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var LoginComponent = (function () {
    function LoginComponent(fb, emailservice, JsonDataService, snackBar, viewContainerRef, router, route, authenticationService, uiDetails, data) {
        this.emailservice = emailservice;
        this.JsonDataService = JsonDataService;
        this.snackBar = snackBar;
        this.viewContainerRef = viewContainerRef;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.uiDetails = uiDetails;
        this.data = data;
        this.candidates = [];
        this.user = {};
        this.menuLinks = [];
        // getting login form data
        this.userForm = fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern("[A-Za-z0-9.@!$*&]{6,}")]]
        });
    }
    // on login submit
    LoginComponent.prototype.onSubmit = function () {
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.queryParams['message'])
            this.data.openSnackBar(this.route.snapshot.queryParams['message'], 'ok');
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.router.navigate(['/forgotPassword']);
    };
    LoginComponent.prototype.verifyEmail = function () {
        this.router.navigate(['/verifyEmail']);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var value = this.userForm.value;
        this.authenticationService.login(value["email"], value["password"])
            .subscribe(function (data) {
            _this.data.openSnackBar(data["message"], 'Ok');
            _this.router.navigate(['/home']);
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.redirect = function () {
        this.router.navigate(['/home']);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(861),
            styles: [__webpack_require__(843)],
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSnackBar */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__services_uidetails_service__["a" /* UiDetails */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_uidetails_service__["a" /* UiDetails */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* Data */]) === 'function' && _k) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/login.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_json_data_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_email_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_data_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_services_authentication_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







// declare var $: any;
var PasswordResetComponent = (function () {
    function PasswordResetComponent(fb, Data, AuthenticationService, JsonDataService, route, router, emailService) {
        this.Data = Data;
        this.AuthenticationService = AuthenticationService;
        this.JsonDataService = JsonDataService;
        this.route = route;
        this.router = router;
        this.emailService = emailService;
        this.jsonObj = {};
        this.languages = [];
        this.emailId = '';
        this.password = '';
        this.passwordMatchWarning = '';
        // register candidate form
        this.userForm = fb.group({
            email: [{ value: '', disabled: true }],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[A-Za-z0-9.@!$*&]{6,24}')]],
            conPassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[A-Za-z0-9.@!$*&]{6,24}')]],
        });
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.reset = params['reset']; });
        if (this.reset == 'reset') {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.userForm.patchValue({
                'email': currentUser.username
            });
        }
        else {
            this.AuthenticationService.getPasswordResetToken(this.route.snapshot.queryParams['token'], this.route.snapshot.queryParams['email']).
                subscribe(function (res) {
                if (!res.authToken) {
                    _this.Data.openSnackBar("Token expired Do Password reset again", "ok");
                    _this.router.navigate(['/login']);
                }
            }, function (error) {
                _this.Data.openSnackBar("Error...Please Do Password reset again", "ok");
                _this.router.navigate(['/login']);
            });
            this.userForm.patchValue({
                'email': this.route.snapshot.queryParams['email']
            });
        }
    };
    PasswordResetComponent.prototype.getdata = function (jsonData) {
        this.jsonObj = jsonData;
        this.languages = this.jsonObj['languages'];
    };
    // password confirm Validators
    PasswordResetComponent.prototype.passwordValue = function (pass) {
        this.password = pass;
    };
    PasswordResetComponent.prototype.conPasswordValue = function (conPass, pass) {
        if (pass !== conPass) {
            this.passwordMatchWarning = 'Password Not Match';
            document.getElementById('resetBtn').disabled = true;
        }
        else {
            this.passwordMatchWarning = '';
            document.getElementById('resetBtn').disabled = false;
        }
    };
    // on form submit
    PasswordResetComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.reset == 'reset') {
            this.AuthenticationService.passwordChange(this.userForm.get('email').value, this.userForm.get('password').value).subscribe(function (res) {
                if (res.success == true) {
                    _this.router.navigate(['/home']);
                    _this.Data.openSnackBar(res.message, 'OK');
                }
                else {
                    _this.Data.openSnackBar(res.message, 'OK');
                    _this.router.navigate(['/home']);
                }
            });
        }
        else {
            this.AuthenticationService.passwordChange(this.userForm.get('email').value, this.userForm.get('password').value).subscribe(function (res) {
                if (res.success == true) {
                    _this.router.navigate(['/login']);
                    _this.Data.openSnackBar(res.message, 'OK');
                }
                else {
                    _this.Data.openSnackBar(res.message, 'OK');
                    _this.router.navigate(['/login']);
                }
            });
        }
    };
    // on back button
    PasswordResetComponent.prototype.onBack = function () {
        this.router.navigate(['/login']);
    };
    PasswordResetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-password-reset',
            template: __webpack_require__(862),
            styles: [__webpack_require__(844)]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_app_services_data_service__["a" /* Data */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_app_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_app_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_email_service__["a" /* EmailService */]) === 'function' && _g) || Object])
    ], PasswordResetComponent);
    return PasswordResetComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/passwordReset.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_authentication_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_data_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterLoginHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AfterLoginHeaderComponent = (function () {
    function AfterLoginHeaderComponent(JsonDataService, AuthenticationService, data, router) {
        this.JsonDataService = JsonDataService;
        this.AuthenticationService = AuthenticationService;
        this.data = data;
        this.router = router;
        this.languages = [];
        this.navList = [];
    }
    AfterLoginHeaderComponent.prototype.ngOnInit = function () {
        // getting languages form json file
        var _this = this;
        this.JsonDataService.getJsonData().subscribe(function (resJsonData) { return _this.getdata(resJsonData); });
        var tokenVerification = JSON.parse(localStorage.getItem('currentUser'))["token"];
        this.JsonDataService.getJsonNavList(tokenVerification)
            .subscribe(function (role) {
            if (role["success"]) {
                _this.getNavList(role["jsondata"]);
            }
            else {
                tokenVerification = null;
                localStorage.removeItem('currentUser');
                _this.router.navigate(['/login']);
                _this.data.openSnackBar(role["message"], 'Ok');
            }
        }, function (error) {
            console.log(error);
        });
    };
    AfterLoginHeaderComponent.prototype.getdata = function (jsonData) {
        this.languages = jsonData;
    };
    AfterLoginHeaderComponent.prototype.getNavList = function (navListItem) {
        this.navList = navListItem;
    };
    AfterLoginHeaderComponent.prototype.logoutUser = function () {
        this.AuthenticationService.logout();
        this.data.openSnackBar("logged out successfully", "OK");
    };
    AfterLoginHeaderComponent.prototype.changePassword = function () {
        this.router.navigate(['/home/passwordReset/reset']);
    };
    AfterLoginHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(864),
            styles: [__webpack_require__(846)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */], __WEBPACK_IMPORTED_MODULE_2_app_services_authentication_service__["a" /* AuthenticationService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_data_service__["a" /* Data */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], AfterLoginHeaderComponent);
    return AfterLoginHeaderComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/headerLayout.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_data_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyEmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var VerifyEmailComponent = (function () {
    function VerifyEmailComponent(fb, data, emailservice, snackBar, viewContainerRef, router) {
        this.data = data;
        this.emailservice = emailservice;
        this.snackBar = snackBar;
        this.viewContainerRef = viewContainerRef;
        this.router = router;
        this.candidates = [];
        // getting login form data
        this.userForm = fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            role: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]]
        });
    }
    VerifyEmailComponent.prototype.ngOnInit = function () { };
    // verify user if already exist or not for registration
    VerifyEmailComponent.prototype.verifyUserRegistration = function () {
        var _this = this;
        if (this.candidates.length == 0) {
            this.infoobj = {
                'title': this.userForm.value.role,
                'to': this.userForm.value.email,
                'subject': 'Email verification',
                'redirect': 'http://localhost:3002/register/Coordinator',
                'mailBody': "<h1>SAMARTHYA</h1><br><img src='https://cellpartzone.com/image/catalog/Career.jpg' alt='W3Schools.com'><br><h3 style='color : red'>Confirm your mail and kick start your career by registring youself  with Samarthya<h3> <br><button type='button' style='background-color : green;padding: 14px 25px;'>"
            };
            this.emailservice.postdata(this.infoobj).subscribe(function (data) { return _this.postobject = data; }, function (error) { return [_this.data.openSnackBar('mail sent succefully', 'Please Check your MAIL'),
                _this.timer = setTimeout(function () { return _this.router.navigate(['/login']); }, 500)]; }, function () { return console.log('finished'); });
        }
        else {
            this.data.openSnackBar('User already Exist', 'Please Login');
            this.timer = setTimeout(function () { return _this.router.navigate(['/login']); }, 500);
        }
    };
    // on create account submit
    VerifyEmailComponent.prototype.onVerifyLink = function () {
        var _this = this;
        // console.log(this.userForm.value.email);
        this.emailservice.getEmail(this.userForm.value.email).subscribe(function (resJsonData) { return [
            _this.candidates = resJsonData.data, _this.verifyUserRegistration()]; }, function (error) {
            _this.data.openSnackBar('TECHNICAL ISSUE', 'Please Try after some time');
        });
    };
    // go back to login
    VerifyEmailComponent.prototype.onBack = function () {
        this.router.navigate(['/login']);
    };
    VerifyEmailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(867),
            styles: [__webpack_require__(849)],
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_app_services_data_service__["a" /* Data */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _f) || Object])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/verifyEmail.component.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// auhentication gaurd if without login user will try to access differnt menu links navigate it to login page
var AuthGuard = (function () {
    function AuthGuard(router, data) {
        this.router = router;
        this.data = data;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            //logged in user return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        //this.data.openSnackBar('Please Login!!',"OK");
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* Data */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/auth.guard.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacementRegisterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {CandidateRegister} from '../modal/candidate-register.modal';
var PlacementRegisterService = (function () {
    function PlacementRegisterService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.url = '/api/addCandidate';
    }
    PlacementRegisterService.prototype.add = function (userdata, userCredentialsData) {
        return this.http.post(this.url, { userData: userdata, userCredentialsData: userCredentialsData }).map(function (response) { return response.json(); });
    };
    PlacementRegisterService.prototype.handleError = function (error) {
        return false;
    };
    PlacementRegisterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], PlacementRegisterService);
    return PlacementRegisterService;
    var _a;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/placement-register.service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//  this service is used to pass the data between components
var Data = (function () {
    function Data(snackBar) {
        this.snackBar = snackBar;
    }
    Data.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    Data = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */]) === 'function' && _a) || Object])
    ], Data);
    return Data;
    var _a;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/data.service.js.map

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 554;


/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(729);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/main.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JsonDataService = (function () {
    function JsonDataService(http, snackBar, router) {
        this.http = http;
        this.snackBar = snackBar;
        this.router = router;
        // url to store data from json file for Registration details
        this.urlRegister = '';
        // url to retrive data from json file for languages
        this.url = "";
        this.urlPincode = 'api/pincodeDetails';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    //snackBar for notification
    JsonDataService.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    // Store Registration details in json file
    JsonDataService.prototype.create = function (formData) {
        var _this = this;
        this.http.post(this.urlRegister, formData).subscribe(function (data) {
            _this.openSnackBar(formData.email, 'Register Successfully');
            _this.timer = setTimeout(function () { return _this.router.navigate(['/login']); }, 4000);
        }, function (error) {
            console.log(error.json());
        });
    };
    // get json data for langauges and dropdown
    JsonDataService.prototype.getJsonData = function () {
        this.url = "/api/languages";
        return this.http.get(this.url).map(function (response) { return response.json().data; });
    };
    ;
    JsonDataService.prototype.getJsonNavList = function (tokenVerification) {
        this.url = '/api/layout/navigationlinks';
        return this.http.get(this.url, this.authoriZation(tokenVerification))
            .map(function (response) {
            var body = response.json();
            return body;
        });
    };
    JsonDataService.prototype.authoriZation = function (userToken) {
        if (userToken) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': userToken });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    JsonDataService.prototype.getPincode = function (pincode) {
        return this.http.post(this.urlPincode, { pincode: pincode })
            .map(function (response) { return response.json().pincodeData; });
    };
    ;
    JsonDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], JsonDataService);
    return JsonDataService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/json-data.service.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about_us_about_us_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_candidate_search_candidate_search_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_candidate_register_candidate_register_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_event_post_event_post_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_job_post_job_post_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_registration_admin_registration_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_guard__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_postlogin_registration_layout_header_layout_headerLayout_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_components_verify_email_verifyEmail_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_components_forget_password_forgetPassword_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_components_password_reset_passwordReset_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_components_landing_page_landing_page_component__ = __webpack_require__(477);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















// routes
var routes = [
    { path: '', redirectTo: '/samarthya', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'samarthya', component: __WEBPACK_IMPORTED_MODULE_15_app_components_landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    { path: 'verifyEmail', component: __WEBPACK_IMPORTED_MODULE_12_app_components_verify_email_verifyEmail_component__["a" /* VerifyEmailComponent */] },
    { path: 'forgotPassword', component: __WEBPACK_IMPORTED_MODULE_13_app_components_forget_password_forgetPassword_component__["a" /* ForgotPasswordComponent */] },
    { path: 'passwordReset', component: __WEBPACK_IMPORTED_MODULE_14_app_components_password_reset_passwordReset_component__["a" /* PasswordResetComponent */] },
    { path: 'register/:title', component: __WEBPACK_IMPORTED_MODULE_9__components_admin_registration_admin_registration_component__["a" /* AdminRegistrationComponent */] },
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__components_postlogin_registration_layout_header_layout_headerLayout_component__["a" /* AfterLoginHeaderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'aboutUs', component: __WEBPACK_IMPORTED_MODULE_3__components_about_us_about_us_component__["a" /* AboutUsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'candidateRegister', component: __WEBPACK_IMPORTED_MODULE_6__components_candidate_register_candidate_register_component__["a" /* CandidateRegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'candidateSearch', component: __WEBPACK_IMPORTED_MODULE_5__components_candidate_search_candidate_search_component__["a" /* CandidateSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'eventPost', component: __WEBPACK_IMPORTED_MODULE_7__components_event_post_event_post_component__["a" /* EventPostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'jobPost', component: __WEBPACK_IMPORTED_MODULE_8__components_job_post_job_post_component__["a" /* JobPostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'passwordReset/:reset', component: __WEBPACK_IMPORTED_MODULE_14_app_components_password_reset_passwordReset_component__["a" /* PasswordResetComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'register/:title', component: __WEBPACK_IMPORTED_MODULE_9__components_admin_registration_admin_registration_component__["a" /* AdminRegistrationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
            { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
;
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/app-routing.module.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.loading = true;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.doLogOut = function () {
        this.authService.logout();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(850),
            styles: [__webpack_require__(832)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/app.component.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_md2__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_about_us_about_us_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_candidate_register_candidate_register_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_candidate_search_candidate_search_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_employers_employers_component__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_event_post_event_post_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_job_post_job_post_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_registration_admin_registration_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_authentication_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_placement_register_service__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_guard__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_services_email_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_app_services_json_data_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_app_services_uidetails_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_app_services_data_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_google_maps_core__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_prelogin_registration_layout_login_header_login_header_component__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_prelogin_registration_layout_login_footer_login_footer_component__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_postlogin_registration_layout_header_layout_headerLayout_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_postlogin_registration_layout_footer_layout_footer_component__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_app_components_verify_email_verifyEmail_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_app_components_forget_password_forgetPassword_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_app_components_password_reset_passwordReset_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_app_components_landing_page_landing_page_component__ = __webpack_require__(477);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["FlexLayoutModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_md2__["a" /* Md2Module */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_26_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAFrDXmfEyDR7DPrwGJYtmK4fAyXGgRic4'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__services_placement_register_service__["a" /* PlacementRegisterService */], __WEBPACK_IMPORTED_MODULE_19__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_21__services_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_23_app_services_json_data_service__["a" /* JsonDataService */], __WEBPACK_IMPORTED_MODULE_22_app_services_email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_24_app_services_uidetails_service__["a" /* UiDetails */], __WEBPACK_IMPORTED_MODULE_25_app_services_data_service__["a" /* Data */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_candidate_register_candidate_register_component__["a" /* CandidateRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_candidate_search_candidate_search_component__["a" /* CandidateSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_employers_employers_component__["a" /* EmployersComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_event_post_event_post_component__["a" /* EventPostComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_job_post_job_post_component__["a" /* JobPostComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_admin_registration_admin_registration_component__["a" /* AdminRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_prelogin_registration_layout_login_header_login_header_component__["a" /* LoginHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_prelogin_registration_layout_login_footer_login_footer_component__["a" /* LoginFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_postlogin_registration_layout_header_layout_headerLayout_component__["a" /* AfterLoginHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_postlogin_registration_layout_footer_layout_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_admin_registration_admin_registration_component__["a" /* AdminRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_31_app_components_verify_email_verifyEmail_component__["a" /* VerifyEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_32_app_components_forget_password_forgetPassword_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_33_app_components_password_reset_passwordReset_component__["a" /* PasswordResetComponent */],
                __WEBPACK_IMPORTED_MODULE_34_app_components_landing_page_landing_page_component__["a" /* LandingPageComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/app.module.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployersComponent = (function () {
    function EmployersComponent() {
    }
    EmployersComponent.prototype.ngOnInit = function () {
    };
    EmployersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employers',
            template: __webpack_require__(856),
            styles: [__webpack_require__(838)]
        }), 
        __metadata('design:paramtypes', [])
    ], EmployersComponent);
    return EmployersComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/employers.component.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(863),
            styles: [__webpack_require__(845)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/footer.component.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginFooterComponent = (function () {
    function LoginFooterComponent(JsonDataService) {
        this.JsonDataService = JsonDataService;
        this.languages = [];
    }
    LoginFooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.JsonDataService.getJsonData().subscribe(function (resJsonData) { return _this.getdata(resJsonData); });
    };
    LoginFooterComponent.prototype.getdata = function (jsonData) {
        this.languages = jsonData;
    };
    LoginFooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-footer',
            template: __webpack_require__(865),
            styles: [__webpack_require__(847)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _a) || Object])
    ], LoginFooterComponent);
    return LoginFooterComponent;
    var _a;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/login-footer.component.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginHeaderComponent = (function () {
    function LoginHeaderComponent(JsonDataService, router) {
        this.JsonDataService = JsonDataService;
        this.router = router;
        this.languages = [];
    }
    LoginHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // getting languages form json file
        this.JsonDataService.getJsonData().subscribe(function (resJsonData) { return _this.getdata(resJsonData); });
    };
    LoginHeaderComponent.prototype.getdata = function (jsonData) {
        this.languages = jsonData;
    };
    LoginHeaderComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    LoginHeaderComponent.prototype.verifyEmail = function () {
        this.router.navigate(['/verifyEmail']);
    };
    LoginHeaderComponent.prototype.samarthya = function () {
        this.router.navigate(['/samarthya']);
    };
    LoginHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-header',
            template: __webpack_require__(866),
            styles: [__webpack_require__(848)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginHeaderComponent);
    return LoginHeaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/login-header.component.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/environment.js.map

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "md-card {\n    width: 600px;\n}\n\n.formIcons {\n    padding-bottom: 25px;\n    color: gray;\n}\n\n.loading {\n    position: fixed;\n    z-index: 100000;\n    background-color: black;\n    display: block;\n    height: 100%;\n    width: 100%;\n    opacity: .5;\n}\n.division{\n    /*margin:10px;*/\n    text-shadow: 2px 2px 5px gray;\n    margin-bottom: 10px;\n    margin-top: 30px;\n    padding-bottom: 10px;\n    font-size: 18px;\n    color:dimgray;\n    /*border-bottom: 2px solid lightgray;*/\n}\n\n.gender {\n    height: 70px;\n    padding-bottom: 15px;\n}\n\n.dropdown {\n    height: 70px;\n    padding-bottom: 15px;\n}\n\n.full-width {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.findAreaBtn {\n    padding: 10px;\n    height: 70px;\n    line-height: unset;\n}\n\n.location {\n    margin-top: 10px;\n}\n\n.levelIcon {\n    padding-top: 0px;\n    padding-bottom: 12px;\n}\n\nbutton {\n    font-size: 15px;\n}\n\nmd-card-title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.registerBtn {\n    margin-top: 50px;\n}\n\n.errorStyle {\n    position: absolute;\n    font-size: 12px;\n    -webkit-transition: all .7s;\n    transition: all .7s;\n    color: #F44336;\n}\n\n.googleBtn {\n    background-color: #F44336;\n    color: white;\n}\n\n.fbBtn {\n    background-color: #3f51b5;\n    color: white;\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    md-card {\n        top: 56px;\n    }\n    .loading {\n        padding-left: 40%;\n        padding-top: 50%;\n    }\n}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    md-card {\n        top: 0px;\n    }\n    .loading {\n        padding-left: 40%;\n        padding-top: 50%;\n    }\n}\n\n\n/*for large screens*/\n\n@media (min-width: 768px) {\n    md-card {\n        top: 0px;\n    }\n    .loading {\n        padding-left: 47%;\n        padding-top: 10%;\n    }\n}"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = "md-card {\n    width: 500px;\n}\n\n.formIcons {\n    padding-bottom: 30px;\n    color: gray;\n}\n\nform {\n    font-size: 17px;\n}\n\nbutton {\n    font-size: 15px;\n}\n\nmd-card-title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.full-width {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.errorStyle {\n    position: absolute;\n    font-size: 12px;\n    -webkit-transition: all .7s;\n    transition: all .7s;\n    color: #F44336;\n}\n\n.googleBtn {\n    background-color: #F44336;\n    color: white;\n}\n\n.fbBtn {\n    background-color: #3f51b5;\n    color: white;\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    md-card {\n        top: 56px;\n    }\n}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    md-card {\n        top: 0px;\n    }\n}\n\n\n/*for large screens*/\n\n@media (min-width: 768px) {\n    md-card {\n        top: 0px;\n    }\n}"

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 842:
/***/ (function(module, exports) {

module.exports = ".item\n{\npadding: 10px;\nmargin: 5px;\nword-wrap: break-word;\nbox-shadow: -2px -1px 29px 2px rgba(135,118,135,0.95);\n}\n.item1\n{\n    background: url('https://tctechcrunch2011.files.wordpress.com/2013/04/job_search.jpg');\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    -webkit-animation: changebackground 5s infinite;\n            animation: changebackground 5s infinite;\n    \n}\n\n@-webkit-keyframes changebackground {\n  0% {\n    background:url('http://www.arnoldgroup.com.au/blog/wp-content/uploads/2015/09/job-search-1030x496.jpg');\n     background-repeat: no-repeat;\n    background-size: 100% 100%;\n  }\n  80% {\n    background: url('http://paazy.in/wp-content/uploads/2016/03/job-search.jpg');\n     background-repeat: no-repeat;\n     background-size: 100% 100%;\n  }\n}\n\n@keyframes changebackground {\n  0% {\n    background:url('http://www.arnoldgroup.com.au/blog/wp-content/uploads/2015/09/job-search-1030x496.jpg');\n     background-repeat: no-repeat;\n    background-size: 100% 100%;\n  }\n  80% {\n    background: url('http://paazy.in/wp-content/uploads/2016/03/job-search.jpg');\n     background-repeat: no-repeat;\n     background-size: 100% 100%;\n  }\n}\n\n\n.herosection\n{\npadding:20px;\nmargin:10px;\nmargin-top: 20px;\nword-wrap: break-word;\nbox-shadow: -2px -1px 29px 2px rgba(135,118,135,0.95);\n}\n.pull-right\n{\nfloat: right;\n}\n.pull-left\n{\n    float: left;\n}\n.pull-top\n{\nfloat:top;\n}\n.pull-bottom\n{\n    float:bottom;\n}\n.blink\n{\n/*-webkit-box-shadow: 0px 31px 32px 8px rgba(0,0,0,0.88);\n-moz-box-shadow: 0px 31px 32px 8px rgba(0,0,0,0.88);\nbox-shadow: 0px 31px 32px 8px rgba(0,0,0,0.88);*/\nbox-shadow: -2px -1px 29px 4px rgba(0,0,0,0.88);\n-webkit-animation: blinker 1s linear infinite;\n        animation: blinker 1s linear infinite;\n}\n@-webkit-keyframes blinker {  \n  50% {\nbox-shadow: -2px -1px 29px 0px rgba(135,118,135,0.95);\n   }\n}\n@keyframes blinker {  \n  50% {\nbox-shadow: -2px -1px 29px 0px rgba(135,118,135,0.95);\n   }\n}\n\n.footer-section\n{  \npadding:20px;\nmargin:10px;\nmargin-top: 20px;\nword-wrap: break-word;\nbox-shadow: -2px -1px 29px 1px  rgba(0,0,0,0.55);\n\n}\n\n\n.colorWhite\n{\n    color:white;\n}\n.img-circle\n{\n    border-radius: 75%;\n   width:120px;\n   height:120px;\n    \n    \n}\n.center\n{\ntext-align:center;   \n}\n\n.item-back\n{\n    background:url(\"./../..//images/mentor.jpg\");\n    background-repeat: no-repeat;\n    background-size:100% 100%; \n}\n.blinkimg\n{\n    -webkit-animation: blinkerimg 5s linear infinite;\n            animation: blinkerimg 5s linear infinite;\n}\n@-webkit-keyframes blinkerimg {  \n  50% { \n      opacity: 0;\n   }\n}\n@keyframes blinkerimg {  \n  50% { \n      opacity: 0;\n   }\n}\n.textalign-left\n{\n    text-align: left;\n}\n.item-padding\n{\n    padding:10px 15px;\n}\n.card-item\n{\n    padding: 20px;\n    border-radius: 15px;\n    background: url(\"./../..//images/cardback.jpg\");\n    \n\n}\n.container-padding\n{\n    padding: 20px;\n    \n}\n\n.rotate-translate\n{\n    -webkit-animation: infinite-spinning 5s linear infinite;\n            animation: infinite-spinning 5s linear infinite;\n}\n\n@-webkit-keyframes infinite-spinning {\n \n  50% {\n    -webkit-transform: translate(50px) rotate(360deg);\n            transform: translate(50px) rotate(360deg);\n  }\n  \n}\n\n@keyframes infinite-spinning {\n \n  50% {\n    -webkit-transform: translate(50px) rotate(360deg);\n            transform: translate(50px) rotate(360deg);\n  }\n  \n}\n\n.rotate\n{\n    -webkit-animation: infinite-spinning1 5s linear infinite;\n            animation: infinite-spinning1 5s linear infinite;\n}\n\n@-webkit-keyframes infinite-spinning1 {\n \n  50% {\n    -webkit-transform:  rotate(360deg);\n            transform:  rotate(360deg);\n  }\n  \n}\n\n@keyframes infinite-spinning1 {\n \n  50% {\n    -webkit-transform:  rotate(360deg);\n            transform:  rotate(360deg);\n  }\n  \n}\n\n.translate\n{\n    -webkit-animation: infinite-spinning2 5s linear infinite;\n            animation: infinite-spinning2 5s linear infinite;\n}\n\n@-webkit-keyframes infinite-spinning2 {\n \n  50% {\n    -webkit-transform: translate(40px) ;\n            transform: translate(40px) ;\n  }\n  \n}\n\n@keyframes infinite-spinning2 {\n \n  50% {\n    -webkit-transform: translate(40px) ;\n            transform: translate(40px) ;\n  }\n  \n}\n.about-item\n{\nbackground:#666;\nbackground-repeat: no-repeat;\nbackground-size: 100% 100%;\n}\n\n\n.btn-lg\n{\n    width:25%;\n}\n\n\n\n\n\n\nsvg {\n    \n    font: 10.5em 'Noto Serif';\n    width: 100%;\n    text-align: center;\n    \n}\n\n.text-copy {\n    fill: none;\n    stroke: white;\n    stroke-dasharray: 6% 29%;\n    stroke-width: 5px;\n    stroke-dashoffset: 0%;\n    -webkit-animation: stroke-offset 5.5s infinite linear;\n            animation: stroke-offset 5.5s infinite linear;\n}\n\n.text-copy:nth-child(1){\n    stroke: #4D163D;\n\t-webkit-animation-delay: -1;\n\t        animation-delay: -1;\n}\n\n.text-copy:nth-child(2){\n\tstroke: #840037;\n\t-webkit-animation-delay: -2s;\n\t        animation-delay: -2s;\n}\n\n.text-copy:nth-child(3){\n\tstroke: #BD0034;\n\t-webkit-animation-delay: -3s;\n\t        animation-delay: -3s;\n}\n\n.text-copy:nth-child(4){\n\tstroke: #BD0034;\n\t-webkit-animation-delay: -4s;\n\t        animation-delay: -4s;\n}\n\n.text-copy:nth-child(5){\n\tstroke: #FDB731;\n\t-webkit-animation-delay: -5s;\n\t        animation-delay: -5s;\n}\n\n@-webkit-keyframes stroke-offset{\n\t100% {stroke-dashoffset: -35%;}\n}\n\n@keyframes stroke-offset{\n\t100% {stroke-dashoffset: -35%;}\n}\n\n\n\nh1{\n    font-size:65px;\n}\n\n\n.btn-lg\n{\n    width:150px;\n    height:50px;\n}\n\n\n.max-height\n{\n height:700px;\n}\n\n.responsive-text\n{\n    font-size:30px;\n}\n@media (max-width: 599px){\n.img-circle\n{\n    border-radius: 50%;\n    width:100px;\n    height:100px;\n    padding: 10px;\n    \n}\n\n\n.max-height\n{\n height:100%;\n}\n\n\n.btn-lg\n{\n    width:100px;\n    height:50px;\n}\n\n\nsvg\n{\n      display: block;\n      font-size: 60px;\n}\n\n.text-copy\n{\n      stroke-width: 2px;\n\n}\nh1\n{\n    font-size:35px;\n}\n\n.responsive-text\n{\n    font-size:18px;\n}\n\n}\n@media (max-width: 800px) and (min-width:600px){\n\n.img-circle\n{\n    border-radius: 50%;\n    width:100px;\n    height:100px;\n    \n    \n}\n.btn-lg\n{\n    width:150px;\n    height:50px;\n}\n\n.max-height\n{\n height:500px;\n}\n\nsvg\n{\n      display: block;\n      font-size:80px;\n}\n\n.text-copy\n{\n    stroke-width: 2px;\n}\nh1\n{\n    font-size:50px;\n}\n\n\n.responsive-text\n{\n    font-size:20px;\n}\n}\n\n.color-violet\n{\n    color:#BD0034;\n}\n\n.subtitleDetails{\n        color: white;\n        text-shadow: 5px 5px 3px black;\n}\n\n\n\n\n\n\n"

/***/ }),

/***/ 843:
/***/ (function(module, exports) {

module.exports = "md-card {\n    width: 500px;\n}\n\n.formIcons {\n    padding-bottom: 30px;\n    color: gray;\n}\n\nform {\n    font-size: 17px;\n}\n\nbutton {\n    font-size: 15px;\n}\n\nmd-card-title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.full-width {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.errorStyle {\n    position: absolute;\n    font-size: 12px;\n    -webkit-transition: all .7s;\n    transition: all .7s;\n    color: #F44336;\n}\n\n.googleBtn {\n    background-color: #F44336;\n    color: white;\n    /*background-color: white;\n    color: #F44336;*/\n}\n\n.fbBtn {\n    background-color: #3f51b5;\n    color: white;\n    /*color: #3f51b5;\n    background-color: white;*/\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    md-card {\n        top: 56px;\n    }\n}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    md-card {\n        top: 0px;\n    }\n}\n\n\n/*for large screens*/\n\n@media (min-width: 768px) {\n    md-card {\n        top: 0px;\n    }\n}"

/***/ }),

/***/ 844:
/***/ (function(module, exports) {

module.exports = "md-card {\n    width: 500px;\n}\n\n.formIcons {\n    padding-bottom: 30px;\n    color: gray;\n}\n\nform {\n    font-size: 17px;\n}\n\nbutton {\n    font-size: 15px;\n}\n\nmd-card-title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.full-width {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.errorStyle {\n    position: absolute;\n    font-size: 12px;\n    -webkit-transition: all .7s;\n    transition: all .7s;\n    color: #F44336;\n}\n\n.googleBtn {\n    background-color: #F44336;\n    color: white;\n}\n\n.fbBtn {\n    background-color: #3f51b5;\n    color: white;\n}"

/***/ }),

/***/ 845:
/***/ (function(module, exports) {

module.exports = ".copyright {\n   \n  position: relative;\n  \n  bottom: 0;\n  text-align: center;\n}\n   \n  \n\n\n.copyright p {\n    font-size: 15px;\n    padding: 0px;\n    margin: auto;\n}\n\n"

/***/ }),

/***/ 846:
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\nmd-toolbar {\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    .toolbar {\n        font-size: 13px;\n    }\n    .navItem {\n        font-size: 13px;\n    }\n    md-sidenav {\n        width: 150px;\n    }\n}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    .toolbar {\n        font-size: 15px;\n    }\n    .navItem {\n        font-size: 15px;\n    }\n    md-sidenav {\n        width: 200px;\n    }\n}\n\n\n/*\nfor large screens*/\n\n@media (min-width: 768px) {\n    .toolbar {\n        font-size: 22px;\n    }\n    .navItem {\n        font-size: 18px;\n    }\n    md-sidenav {\n        width: 250px;\n    }\n}\n.formIcons {\n    line-height: unset;\n}\n\n.mainHeader {\n    top: 0px;\n    position: fixed;\n    z-index: 1000;\n}\n\n.langBar {\n   \n    background-color: #EEEEEE;\n    padding-left: 50px;\n    padding-right: 50px;\n    text-align: center;\n}\n\n.langBtn {\n    color: white;\n    color: #616161;\n    margin: 1px;\n}\n\n.logo {\n    text-align: center;\n    margin: auto;\n    font-size: 30px;\n    font-weight: bold;\n    color: whitesmoke;\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none\n}\n\n.center {\n    margin: auto;\n    text-align: center;\n}\n\nmd-select {\n    color: red;\n}\n\n.logo:hover {\n    color: white;\n}\n\n.footer {\n    margin-top: 100px;\n    opacity: .9;\n    display: block;\n    max-height: unset;\n    height: 150px;\n    /*display: block;*/\n    /*position: relative;*/\n}\n\n.footerHead {\n    margin: auto;\n    font-size: 20px;\n    text-align: center;\n    color: white;\n}\n\n.footerLinks {\n    color: white;\n}\n\n.footerLinks ul li a {\n    color: white;\n    font-size: 15px;\n    text-decoration: unset;\n}\n\n.footerLinks ul li {\n    list-style: none;\n}\n\n.copyright {\n    display: block;\n}\n\n.copyright p {\n    font-size: 15px;\n    padding: 0px;\n    margin: auto;\n}\n.material-icons{\n    font-weight: normal;\n    padding-right: 8px;\n}\nmd-nav-list{\n    width: 200px;\n}\n\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {}\n\n\n/*\nfor large screens*/\n\n@media (min-width: 768px) {}\n\n\n/*\n@media (min-height: 10px) {\n.page-footer {\nmargin: 0px;\ntext-align: center;\n}\n}\n\n@media (min-height: 1000px) {\n.page-footer {\nmargin: 0px;\nposition: absolute;\nbottom: 0px;\ntext-align: center;\nwidth: 100%;\n}\n}*/"

/***/ }),

/***/ 847:
/***/ (function(module, exports) {

module.exports = ".formIcons {\n    line-height: unset;\n}\n\n.fill-remaining-space {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\n.mainHeader {\n    top: 0px;\n    position: fixed;\n    z-index: 1000;\n}\n\n.langBar {\n    margin-top: 64px;\n    background-color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: center;\n    overflow: scroll;\n    height: 90px;\n}\n\n.langBtn {\n    color: white;\n    color: #616161;\n    margin: 5px;\n}\n\n.logo {\n    text-align: center;\n    margin: auto;\n    font-size: 30px;\n    font-weight: bold;\n    color: whitesmoke;\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none\n}\n\n.center {\n    margin: auto;\n    text-align: center;\n}\n\nmd-select {\n    color: red;\n}\n\n.logo:hover {\n    color: white;\n}\n\n.footer {\n    opacity: .9;\n    display: block;\n    max-height: unset;\n    height: 150px;\n    width: 100%;\n    /*margin-top: 80px;*/\n    /*display: block;*/\n    /*position: relative;*/\n}\n\n.footerHead {\n    /*margin: auto;*/\n    font-size: 20px;\n    text-align: center;\n    color: white;\n    /*margin: auto;*/\n    margin-top: 80px;\n    margin-left: 10%;\n}\n\n.footerLinks {\n    margin-top: 80px;\n    color: white;\n    margin-right: 10%;\n}\n\n.footerLinks ul li a {\n    color: white;\n    font-size: 15px;\n    text-decoration: unset;\n}\n\n.footerLinks ul li {\n    list-style: none;\n}\n\n.copyright {\n    display: block;\n}\n\n.copyright p {\n    font-size: 15px;\n    padding: 0px;\n    margin: auto;\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    .footer {\n        margin-top: 0;\n    }\n}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    .footer {\n        margin-top: 0;\n    }\n}\n\n\n/*\nfor large screens*/\n\n@media (min-width: 768px) {\n    .footer {\n        margin-top: 0px;\n    }\n}\n\n\n/*\n@media (min-height: 10px) {\n.page-footer {\nmargin: 0px;\ntext-align: center;\n}\n}\n\n@media (min-height: 1000px) {\n.page-footer {\nmargin: 0px;\nposition: absolute;\nbottom: 0px;\ntext-align: center;\nwidth: 100%;\n}\n}*/"

/***/ }),

/***/ 848:
/***/ (function(module, exports) {

module.exports = ".formIcons {\n    line-height: unset;\n}\n\n* {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.fill-remaining-space {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\n.mainHeader {\n    top: 0px;\n    position: fixed;\n    z-index: 1000;\n}\n\n.langBar {\n    margin-top: 64px;\n    /*background-color: #EEEEEE;*/\n    background-color: white;\n    padding-left: 50px;\n    padding-right: 50px;\n    text-align: center;\n}\n\n.langBtn {\n    color: white;\n    color: #616161;\n    margin: 1px;\n}\n\n.logo {\n    /*text-align: center;*/\n    /*margin: auto;*/\n    font-size: 20px;\n    font-weight: bold;\n    color: whitesmoke;\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none\n}\n\n.center {\n    margin: auto;\n    text-align: center;\n}\n\nmd-select {\n    color: red;\n}\n\n.logo:hover {\n    color: white;\n}\n\n.footer {\n    opacity: .9;\n    display: block;\n    max-height: unset;\n    height: 150px;\n    /*display: block;*/\n    /*position: relative;*/\n}\n\n.footerHead {\n    margin: auto;\n    font-size: 20px;\n    text-align: center;\n    color: white;\n}\n\n.footerLinks {\n    /*padding-left: 30%;*/\n    color: white;\n}\n\n.footerLinks ul li a {\n    color: white;\n    font-size: 15px;\n    text-decoration: unset;\n}\n\n.footerLinks ul li {\n    list-style: none;\n}\n\n.copyright {\n    display: block;\n}\n\n.copyright p {\n    font-size: 15px;\n    padding: 0px;\n    margin: auto;\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {}\n\n\n/*\nfor large screens*/\n\n@media (min-width: 768px) {}\n\n\n/*\n@media (min-height: 10px) {\n.page-footer {\nmargin: 0px;\ntext-align: center;\n}\n}\n@media (min-height: 1000px) {\n.page-footer {\nmargin: 0px;\nposition: absolute;\nbottom: 0px;\ntext-align: center;\nwidth: 100%;\n}\n}*/"

/***/ }),

/***/ 849:
/***/ (function(module, exports) {

module.exports = "md-card {\n    width: 500px;\n}\nbody{\n    -webkit-box-align: none;\n        -ms-flex-align: none;\n            align-items: none;\n}\n\n\n.formIcons {\n    padding-bottom: 30px;\n    color: gray;\n}\n\nform {\n    font-size: 17px;\n}\n\nbutton {\n    font-size: 15px;\n}\n\nmd-card-title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.full-width {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.errorStyle {\n    position: absolute;\n    font-size: 12px;\n    -webkit-transition: all .7s;\n    transition: all .7s;\n    color: #F44336;\n}\n\n.googleBtn {\n    background-color: #F44336;\n    color: white;\n}\n\n.fbBtn {\n    background-color: #3f51b5;\n    color: white;\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    md-card {\n        top: 56px;\n    }\n}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    md-card {\n        top: 0px;\n    }\n}\n\n\n/*for large screens*/\n\n@media (min-width: 768px) {\n    md-card {\n        top: 0px;\n    }\n}"

/***/ }),

/***/ 850:
/***/ (function(module, exports) {

module.exports = "<!--routing outlet-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ 851:
/***/ (function(module, exports) {

module.exports = "<p>\n    About us\n</p>\n<app-footer></app-footer>"

/***/ }),

/***/ 852:
/***/ (function(module, exports) {

module.exports = "<app-login-header *ngIf=\"title=='Coordinator' || title=='Supervisor'\">\n</app-login-header>\n<app-header *ngIf=\"title=='Admin'\"></app-header>\n\n<!--Register card-->\n<md-grid-list cols=\"1\" rowHeight=\"1750\">\n  <md-grid-tile>\n    <!--card Start-->\n    <md-card class=\"loginCard\">\n      <md-card-title>\n        <h2 class=\"text-center title\">{{title}} Registration</h2>\n      </md-card-title>\n      <md-card-content>\n        <form [formGroup]=\"userForm\">\n          <!--Credentials division-->\n          <div class=\"division\">\n            Credential Details\n          </div>\n          <!--Email-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">mail</i>\n            </div>\n\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-input-container class=\"full-width\">\n\n                <input formControlName=\"emailControl\" mdInput placeholder=\"Email\" [readonly]=\"emailDisable\" />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <!-- Email required validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('emailControl').hasError('required') && userForm.get('emailControl').touched\">\n                    Email is required\n                  </div>\n                  <!-- Email pattern validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('emailControl').hasError('pattern') && userForm.get('emailControl').touched\">\n                    Invalid email\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--passowrd-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">lock</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"passwordControl\" minlength=\"8\" type=\"password\" class=\"validate\" placeholder=\"Password\" />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <!-- Password required validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('passwordControl').hasError('required') && userForm.get('passwordControl').touched\">\n                    Password is required\n                  </div>\n                  <!--Password length validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('passwordControl').hasError('minlength') && userForm.get('passwordControl').touched\">\n                    Password should more than 7 character\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--confirm password-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">lock</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"confirmPasswordControl\" minlength=\"8\" type=\"password\" class=\"validate\" placeholder=\"Confirm Password\"\n                />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <!-- Confirm password required validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('confirmPasswordControl').hasError('required') && userForm.get('confirmPasswordControl').touched\">\n                    Confirm Password is required\n                  </div>\n                  <!--Confirm Password length validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('confirmPasswordControl').hasError('minlength') && userForm.get('confirmPasswordControl').touched\">\n                    Password should more than 7 character\n                  </div>\n                  <!-- Matching password  validation-->\n                  <div class=\"errorStyle\" *ngIf=\"(!userForm.get('confirmPasswordControl').valid) && !userForm.get('confirmPasswordControl').hasError('required') &&!userForm.get('passwordControl').hasError('required') && userForm.get('confirmPasswordControl').touched\">\n                    Mismatch Password\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n\n          <!--Personal info division-->\n          <div class=\"division\">\n            Personal Details\n          </div>\n\n          <!--First Name-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">perm_identity</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"firstNameControl\" id=\"fname\" type=\"text\" class=\"validate\" placeholder=\"First Name\" />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <!-- Name required validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('firstNameControl').hasError('required') && userForm.get('firstNameControl').touched\">\n                    Name is required\n                  </div>\n                  <!-- Name pattern validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('firstNameControl').hasError('pattern') && userForm.get('firstNameControl').touched\">\n                    Name should be more than 2 alphabets\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--Last Name-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">perm_identity</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"lastNameControl\" type=\"text\" class=\"validate\" placeholder=\"Last Name\" />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <!-- Name pattern validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('lastNameControl').hasError('pattern') && userForm.get('lastNameControl').touched\">\n                    Name should be more than 2 alphabets\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--Gender-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"gender\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons levelIcon\">wc</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\" class=\"full-width\">\n              <md-radio-group formControlName=\"genderControl\">\n                <md-radio-button value=\"male\">Male</md-radio-button>\n                <md-radio-button value=\"female\">Female</md-radio-button>\n              </md-radio-group><br>\n              <!-- Name required validation-->\n              <div class=\"errorStyle\" *ngIf=\"userForm.get('genderControl').hasError('required') && userForm.get('genderControl').touched\">\n                Gender is required\n              </div>\n            </div>\n          </div>\n\n          <!--Adhar-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">chrome_reader_mode</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"aadharControl\" type=\"text\" class=\"validate\" placeholder=\"Aadhar No. (Optional)\" />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <!--<div *ngIf=\"userForm.get('aadharControl').hasError('pattern')\" class=\"errorStyle\">Invaild Aadhar</div>-->\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n\n\n          <!--Date of Birth-->\n          <!--<div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex>\n              <md2-datepicker formControlName=\"dob\" [(ngModel)]=\"date\" class=\"full-width\">date</md2-datepicker>\n            </div>\n          </div>-->\n\n          <!--Contact info division-->\n          <div class=\"division\">\n            Contact Details\n          </div>\n\n          <!--Mobile No-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">call</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"mobileControl\" type=\"text\" class=\"validate\" placeholder=\"Mobile No.\" />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <!-- Mobile number required validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('mobileControl').hasError('required') && userForm.get('mobileControl').touched\">\n                    Mobile Number is required\n                  </div>\n                  <!-- Mobile number pattern validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('mobileControl').hasError('pattern') && userForm.get('mobileControl').touched\">\n                    Mobile Number should be 10 digit\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--location Pincode-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">dialpad</i>\n            </div>\n            <div fxFlex>\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"pincodeControl\" type=\"text\" class=\"validate\" placeholder=\"Pincode\" (keyup)=\"getPincode()\"\n                />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"userForm.get('pincodeControl').hasError('pattern')\" class=\"errorStyle\">Invaild Pincode</div>\n                  <div *ngIf=\"userForm.get('pincodeControl').hasError('required') && userForm.get('pincodeControl').touched\" class=\"errorStyle\">\n                    Pincode is required\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--location area-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"dropdown\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons levelIcon\">my_location</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-select formControlName=\"locationControl\" placeholder=\"Select Area*\" class=\"full-width\">\n                <md-option *ngFor=\"let area of areaList\" [value]=\"area\">\n                  {{ area }}\n                </md-option>\n              </md-select>\n              <!-- Location required validation-->\n              <div class=\"errorStyle\" *ngIf=\"userForm.get('locationControl').hasError('required') && userForm.get('locationControl').touched\">\n                Location is required\n              </div>\n            </div>\n          </div>\n\n          <!--Placement division-->\n          <div class=\"division\">\n            Placement Details\n          </div>\n          <!--Profession-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons \">layers</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md2-select formControlName=\"professionControl\" placeholder=\"Profession*\" [multiple]=\"true\" #selectMultipleControl>\n                <md2-option color=\"accent\" *ngFor=\"let currentProfession of professions\" value=\"{{currentProfession}}\">{{currentProfession}}</md2-option>\n              </md2-select>\n              <!-- Profession required validation-->\n              <div class=\"errorStyle\" *ngIf=\"userForm.get('professionControl').hasError('required') && userForm.get('professionControl').touched\">\n                Profession is required\n              </div>\n\n\n            </div>\n          </div>\n\n          <div [hidden]=\"hiddenParticularRole\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"dropdown\">\n              <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                <i class=\"material-icons formIcons levelIcon\">supervisor_account</i>\n              </div>\n              <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n                <md-input-container class=\"full-width\">\n                  <input formControlName=\"roleControl\" mdInput placeholder=\"Role*\" [readonly]=\"disabled\" />\n                </md-input-container>\n                <!-- Role required validation-->\n                <div class=\"errorStyle\" *ngIf=\"userForm.get('roleControl').hasError('required') && userForm.get('roleControl').touched\">\n                  Role is required\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div [hidden]=\"hiddenRole\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"dropdown\">\n              <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                <i class=\"material-icons formIcons levelIcon\">supervisor_account</i>\n              </div>\n              <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n                <md2-select formControlName=\"roleControl\" placeholder=\"Role*\" [multiple]=\"true\" #selectMultipleControl>\n                  <md2-option *ngFor=\"let currentRole of roles\" value=\"{{currentRole}}\">{{currentRole}}</md2-option>\n                </md2-select>\n\n                <!-- Role required validation-->\n                <div class=\"errorStyle\" *ngIf=\"userForm.get('roleControl').hasError('required') && userForm.get('roleControl').touched\">\n                  Role is required\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!--Registration ID-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">assignment_ind</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"registrationControl\" type=\"text\" class=\"validate\" placeholder=\"Registration Id\" />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"userForm.get('registrationControl').hasError('required') && userForm.get('registrationControl').touched\" class=\"errorStyle\">\n                    Registration ID is required\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--placementCenter-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"dropdown\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons levelIcon\">person_pin_circle</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-select formControlName=\"placementControl\" ng-model=\"placementSelect\" #placementCenterId class=\"full-width\" placeholder=\"Placement Center*\">\n                <md-option *ngFor=\"let center of placementCenters\" value=\"{{center}}\">{{center}}</md-option>\n              </md-select>\n              <!-- Placement center required validation-->\n              <div class=\"errorStyle\" *ngIf=\"userForm.get('placementControl').hasError('required') && userForm.get('placementControl').touched\">\n                Placement is required\n              </div>\n            </div>\n          </div>\n\n          <!--Langyuage-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"dropdown\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">language</i>\n            </div>\n            <div fxFlex>\n              <md2-select formControlName=\"languageControl\" placeholder=\"Language*\" [multiple]=\"true\" #selectMultipleControl>\n                <md2-option *ngFor=\"let language of languages\" value=\"{{language}}\">{{language}}\n\n                </md2-option>\n              </md2-select>\n              <!-- Name required validation-->\n              <div class=\"errorStyle\" *ngIf=\"userForm.get('languageControl').hasError('required') && userForm.get('languageControl').touched\">\n                Language is required\n              </div>\n            </div>\n          </div>\n\n          <!--Register Button-->\n          <div fxLayout=\"row\">\n            <button md-raised-button color=\"primary\" class=\"full-width registerBtn\" type=\"button\" (click)=\"save(userForm)\" [disabled]=\"!userForm.valid\">Register</button>\n          </div>\n        </form>\n      </md-card-content>\n    </md-card>\n  </md-grid-tile>\n</md-grid-list>\n\n<app-footer *ngIf=\"title=='Admin'\"></app-footer>\n<app-login-footer *ngIf=\"title=='Coordinator' || title=='Supervisor'\"></app-login-footer>"

/***/ }),

/***/ 853:
/***/ (function(module, exports) {

module.exports = "<p>\n    Candidate Register page\n</p>\n<p>\n    Coming soon...\n</p>\n<app-footer></app-footer>"

/***/ }),

/***/ 854:
/***/ (function(module, exports) {

module.exports = "<p>\n    Candidate Search page\n</p>\n<p>\n    Coming soon...\n</p>\n<app-footer></app-footer>"

/***/ }),

/***/ 855:
/***/ (function(module, exports) {

module.exports = "<p>\n    {{title}} Dashboard\n</p>\n<p>\n    Coming soon..\n</p>\n<app-footer></app-footer>"

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

module.exports = "<p>\n  employers works!\n</p>\n<app-footer></app-footer>"

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

module.exports = "<p>\n  event-post works!\n</p>\n<app-footer></app-footer>"

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

module.exports = "<!--login Header-->\n<app-login-header></app-login-header>\n\n<!--login card-->\n<md-grid-list cols=\"1\" rowHeight=\"350px\">\n    <md-grid-tile>\n        <md-card class=\"loginCard\">\n            <md-card-title>Password Reset</md-card-title>\n            <md-card-content>\n                <form [formGroup]=\"userForm\" (ngSubmit)=\"onResetLink()\">\n\n                    <!--Email input-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">email</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"email\" id=\"email\" type=\"text\" class=\"validate\" placeholder=\"Email\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('email').hasError('required') && userForm.get('email').touched\" class=\"errorStyle\">\n                                        Email is required\n                                    </div>\n                                    <div *ngIf=\"userForm.get('email').hasError('pattern') && userForm.get('email')\" class=\"errorStyle\">\n                                        Invalid email\n                                    </div>\n                                    <!--<app-control-messages [control]=\"userForm.controls.email\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--Reset Password button-->\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"accent\" class=\"full-width\" [disabled]=\"!userForm.valid\">Send Reset Link</button>\n                        </div>\n                        <div fxFlex></div>\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"warn\" (click)=onBack() class=\"full-width\">Back</button>\n                        </div>\n                    </div>\n\n                </form>\n            </md-card-content>\n        </md-card>\n        <!--card-ends-->\n    </md-grid-tile>\n</md-grid-list>\n\n<!--footer-->\n<app-login-footer></app-login-footer>"

/***/ }),

/***/ 859:
/***/ (function(module, exports) {

module.exports = "<p>\n  job-post works!\n</p>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 860:
/***/ (function(module, exports) {

module.exports = "<app-login-header></app-login-header>\n<!-- container for herosection -->\n<div class=\"container\" fxLayout fxLayout.xs=\"column\" fxLayoutGap=\"30px\" fxLayoutGap.xs=\"10px\">\n  <div class=\"item item1  max-height change-hero-background\" fxFlex=\"100%\">\n    <!-- logo -->\n    <img src=\" \" width=\"10%\">\n    <!-- login and register button-->\n     <button md-raised-button color=\"secondary\" class=\"btn-lg pull-right\" >Take A Tour</button>\n    <!-- headings -->\n      <svg >\n    <symbol id=\"s-text\">\n\t\t<text  y=\"80%\"> {{headingTitle}} </text>\n\t</symbol>\n\t<g class = \"g-ants\">\n\t\t<use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n\t\t<use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n\t\t<use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n\t\t<use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n\t\t<use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n\t</g>\n</svg>\n     \n  <!-- sub headings-->\n    <h1 class=\"color-violet subtitleDetails\">\n      {{subtitleDetails}}\n    </h1>\n    <!--take a tour button -->\n  </div>\n</div>\n<!-- end container for herosection -->\n\n<!-- containter for about items -->\n<div class=\"container container-padding about-item\" fxLayout fxLayout.xs=\"column\" fxLayoutGap=\"30px\" fxLayoutGap.xs=\"10px\">\n  <div fxFlex=\"33%\" class=\"item card-item center\" *ngFor=\"let about of aboutus\">\n    <div class=\"item-back\">\n      <img src=\"http://gulfinity.com/wp-content/themes/jobboard/images/default.jpg\" class=\"img-circle item-back blinkimg\" align=\"middle\">\n    </div>\n    <div>\n      <h2>{{about}}\n      </h2>\n      <hr>\n    </div>\n    <div class=\"item-padding\">\n      <p class=\"textalign-left\">\n        Nassau saw service in the North Sea at the beginning of World War I, in the II Division of the I Battle Squadron of the German\n        High Seas Fleet.permitted to remain in German ports.\n      </p>\n    </div>\n    <div>\n      <button md-button class=\"translate\">Know More>>></button>\n    </div>\n\n  </div>\n</div>\n<!-- end conatiner for about items-->\n<app-login-footer></app-login-footer>\n"

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = "<!--login Header-->\n<app-login-header></app-login-header>\n\n<!--login card-->\n<div *ngIf=\"showProgress\" class=\"progressBar\">\n  <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n</div>\n<md-grid-list cols=\"1\" rowHeight=\"600px\">\n  <md-grid-tile>\n    <md-card class=\"loginCard\">\n      <md-card-title>LOGIN</md-card-title>\n      <md-card-content>\n\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"login()\">\n          <!--Email input-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex>\n              <i class=\"material-icons formIcons\">mail</i>\n            </div>\n            <div fxFlex=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"email\" type=\"text\" class=\"validate\" placeholder=\"Email\" />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"userForm.get('email').hasError('required') && userForm.get('email').touched\" class=\"errorStyle\">\n                    Email is required\n                  </div>\n                  <div *ngIf=\"userForm.get('email').hasError('pattern') && userForm.get('email')\" class=\"errorStyle\">\n                    Invalid email\n                  </div>\n                  <!--<app-control-messages [control]=\"userForm.controls.email\" class=\"errorStyle\"></app-control-messages>-->\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--passowrd input-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex>\n              <i class=\"material-icons formIcons\">lock</i>\n            </div>\n            <div fxFlex=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput id=\"password\" type=\"password\" class=\"validate\" formControlName=\"password\" placeholder=\"Password\">\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"userForm.get('password').hasError('required') && userForm.get('password').touched\" class=\"errorStyle\">\n                    Password is required\n                  </div>\n                  <div *ngIf=\"userForm.get('password').hasError('pattern')\" class=\"errorStyle\">\n                    Invalid password. Password must be at least 6 characters long, and contain a number\n                  </div>\n                  <!--<app-control-messages [control]=\"userForm.controls.password\" class=\"errorStyle\"></app-control-messages>-->\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--sign in button-->\n          <div fxLayout=\"row\">\n            <div fxFlex=\"100\">\n              <button md-raised-button color=\"primary\" type=\"submit\" class=\"full-width largeBtn\" [disabled]=\"!userForm.valid\">Sign in</button>\n            </div>\n          </div>\n        </form>\n\n        <!--forgot Password button-->\n        <div fxLayout=\"row\">\n          <div fxFlex=\"100\" fxLayoutAlign=\"center center\">\n            <button md-button color=\"primary\" (click)=\"forgotPassword()\" class=\"\">Forgot Password ?</button>\n          </div>\n        </div>\n\n        <!--social media button-->\n        <!--<div fxLayout.gt-sm=\"row\" fxLayout.sm=\"column\" fxHide.sm>-->\n        <div fxLayout=\"row\" fxLayout.xs=\"column\">\n          <div fxFlex=\"48\">\n            <a href=\"http://localhost:8080/auth/google/\" md-raised-button class=\"full-width largeBtn googleBtn\">\n              <i class=\"zmdi zmdi-google zmdi-hc-lg\"></i> Login with Google\n            </a>\n          </div>\n          <div fxFlex></div>\n          <div fxFlex=\"48\">\n            <a href=\"http://localhost:8080/auth/facebook\" md-raised-button class=\"full-width largeBtn fbBtn\">\n              <i class=\"zmdi zmdi-facebook-box zmdi-hc-lg\"></i> Login with Facebook\n            </a>\n          </div>\n        </div>\n      </md-card-content>\n    </md-card>\n    <!--card-ends-->\n  </md-grid-tile>\n</md-grid-list>\n\n<!--footer-->\n<app-login-footer></app-login-footer>"

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = "<!--login Header-->\n<app-login-header *ngIf=\"reset!='reset'\"></app-login-header>\n\n<!--Reset Password card-->\n<md-grid-list cols=\"1\" rowHeight=\"600\">\n    <md-grid-tile>\n        <!--card Start-->\n        <md-card class=\"loginCard blue-grey-text\">\n            <md-card-title>Password Reset</md-card-title>\n            <md-card-content>\n                <form class=\"col s12\" [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n\n                    <!--Email-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">email</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"email\" id=\"email\" type=\"text\" class=\"validate\"  placeholder=\"Email\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <!--<app-control-messages [control]=\"userForm.controls.email\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--passowrd-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">lock</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"password\" id=\"password\" type=\"password\" class=\"validate\" #password (blur)=\"passwordValue(password.value)\" placeholder=\"Password\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('password').hasError('required') && userForm.get('password').touched\" class=\"errorStyle\">\n                                        Password is required\n                                    </div>\n                                    <div *ngIf=\"userForm.get('password').hasError('pattern')\" class=\"errorStyle\">\n                                        Invalid password. Password must be at least 6 characters long, and contain a number\n                                    </div>\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--confirm password-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">lock</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"conPassword\" id=\"conPassword\" type=\"password\" class=\"validate\" #conPassword (keyup)=\"conPasswordValue(conPassword.value,password.value)\" placeholder=\"Confirm Password\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('conPassword').hasError('required') && userForm.get('conPassword').touched\" class=\"errorStyle\">\n                                        Confirm Password is required\n                                    </div>\n                                    <div *ngIf=\"passwordMatchWarning\" class=\"errorStyle\">{{passwordMatchWarning}}</div>\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--Reset Button-->\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"accent\" class=\"full-width\" type=\"submit\" id=\"resetBtn\" [disabled]=\"!userForm.valid\">Reset</button>\n                        </div>\n                        <div fxFlex></div>\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"warn\" (click)=onBack() class=\"full-width\">Back</button>\n                        </div>\n                    </div>\n                </form>\n            </md-card-content>\n        </md-card>\n    </md-grid-tile>\n</md-grid-list>\n\n<!--footer-->\n<app-login-footer *ngIf=\"reset!='reset'\"></app-login-footer>\n"

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports = "<md-toolbar  color=\"primary\" class=\"copyright\" >\n    <p class=\"center\"> © Copyright Samarthya 2017</p>\n</md-toolbar>"

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = "<!--sidenav and toolbar with content-->\n<md-sidenav-container fullscreen>\n\n    <!--sidenav starts here..-->\n    <md-sidenav #sidenav mode=\"over\" opened=\"false\">\n\n        <!--sidenav toobar-->\n        <md-toolbar color=\"primary\" class=\"toolbar\">\n            <b>Samarthya</b>\n        </md-toolbar>\n\n        <!--sidenav ites list-->\n        <md-nav-list>\n          \n            <md-list-item *ngFor=\"let navItem of navList\" routerLink={{navItem.path}} routerLinkActive=\"active\" (click)=\"sidenav.toggle()\">\n                 <i class=\"material-icons\">{{navItem.icon}}</i>  \n                <p class=\"navItem\"> {{navItem.name}}</p>\n            </md-list-item>\n        </md-nav-list>\n    </md-sidenav>\n    <!--sidenav ends-->\n\n    <!--main appbar starts-->\n    <md-toolbar color=\"primary\" class=\"toolbar\">\n\n        <!--sidebar toggle button-->\n        <button md-icon-button (click)=\"sidenav.toggle()\" #myButton id=\"sidebarButton\">\n                <i class=\"material-icons\">menu</i>\n            </button>\n        <span><b>Samarthya Placement Portal</b></span>\n\n        <span class=\"fill-remaining-space\"></span>\n\n        <!--appbar buttons-->\n        <span>\n            <!--notification button-->\n            <button md-icon-button [mdMenuTriggerFor]=\"menuNotification\">\n                 <i class=\"material-icons\">notifications_active</i>  \n            </button>\n            <md-menu #menuNotification x-position=\"before\">\n               <md-list>\n                    <md-list-item>\n                        <p md-line>No new Notification</p>\n                    </md-list-item>\n                </md-list>\n            </md-menu>\n\n            <!--user account button-->\n            <button md-icon-button [mdMenuTriggerFor]=\"menuAccount\">\n                <i class=\"material-icons\">account_circle</i>  \n            </button>\n            <md-menu class=\"menu\" #menuAccount x-position=\"before\">\n                <md-nav-list>\n                    <md-list-item>\n    \n                        <p md-line><b>User</b></p>\n                    </md-list-item>\n                   \n                    <md-list-item>\n                         <i class=\"material-icons\">face</i> \n                        <p>Profile</p>\n                    </md-list-item>\n                    <md-list-item (click)=\"changePassword()\" routerLinkActive=\"active\">\n                        <i class=\"material-icons\">lock</i> \n                        <p>Change Password</p>\n                    </md-list-item>\n                    <md-list-item (click)=\"logoutUser()\" routerLinkActive=\"active\">\n                        <i class=\"material-icons\">power_settings_new</i> \n                        <p>Log Out</p>\n                    </md-list-item>\n                </md-nav-list>\n            </md-menu>\n        </span>\n    </md-toolbar>\n    <div class=\"langBar\" fxFlex fxHide.xs>\n    <button *ngFor=\"let lang of languages\" title={{lang.name}} class=\"langBtn\" md-button>\n   <div> {{lang.nativeName}}</div>\n    </button>\n</div>\n    <!--main appbar starts-->\n\n    <!--main ceiontent goes here-->\n \n                <!--routing outlet-->\n                <router-outlet></router-outlet>\n     \n\n    <!--add the components tags here....-->\n\n    <!--main content ends here-->\n</md-sidenav-container>\n<!--sidenav and toolbar with content ends-->\n\n"

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

module.exports = "<!--footer starts-->\n<div class=\"langBar\" fxFlex fxHide.gt-xs>\n  <button *ngFor=\"let lang of languages\" title={{lang.name}} class=\"langBtn\" md-button>\n   <div> {{lang.nativeName}}</div>\n    </button>\n</div>\n<md-toolbar color=\"primary\" class=\"footer\" fxLayout=\"column\">\n    <div fxFlex=\"50\" class=\"footerHead\">\n        <h5>Samarthya</h5>\n    </div>\n    <div fxFlex></div>\n    <div fxFlex=\"50\" class=\"footerLinks\">\n        <ul>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">Samarthya Candidate</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">Samarthya Placement</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">FAQ</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">About Us</a></li>\n        </ul>\n    </div>\n</md-toolbar>\n<md-toolbar color=\"primary\" class=\"copyright\">\n    <p> © Copyright Samarthya 2017</p>\n</md-toolbar>"

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = "<!--Header start-->\n<md-toolbar color=\"primary\" class=\"mainHeader\">\n  <!--<a href=\"/\">-->\n  <button md-button  (click)=\"samarthya()\" class=\"logo\">Samarthya</button>\n  <!--</a>-->\n  <span class=\"fill-remaining-space\"></span>\n\n  <!--login button-->\n  <div fxLayout=\"row\">\n    <div fxFlex=\"100\">\n      <button md-button color=\"accent\" (click)=\"login()\" class=\"full-width largeBtn\">Login</button>\n    </div>\n  </div>\n  <!--create account button-->\n  <div fxLayout=\"row\">\n    <div fxFlex=\"100\">\n      <button md-button color=\"accent\" (click)=\"verifyEmail()\" class=\"full-width largeBtn\">Sign Up</button>\n    </div>\n  </div>\n</md-toolbar>\n<div class=\"langBar\" fxFlex fxHide.xs>\n  <button *ngFor=\"let lang of languages\" title={{lang.name}} class=\"langBtn\" md-button>\n   <div> {{lang.nativeName}}</div>\n    </button>\n</div>"

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = "<!--login Header-->\n<app-login-header></app-login-header>\n\n<!--login card-->\n<md-grid-list cols=\"1\" rowHeight=\"600px\">\n    <md-grid-tile>\n        <md-card class=\"loginCard\">\n            <md-card-title>Verify Email</md-card-title>\n            <md-card-content>\n                <form class=\"col s12\" [formGroup]=\"userForm\" (ngSubmit)=\"onVerifyLink()\">\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start none\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">supervisor_account</i>\n                        </div>\n                        <div fxFlex=\"93\" >\n                            <md-radio-group formControlName=\"role\" class=\"full-width\">\n                                <md-radio-button value=\"Coordinator\">Coordinator</md-radio-button>\n                                <md-radio-button value=\"Supervisor\">Supervisor</md-radio-button>\n                            </md-radio-group>\n                        <div *ngIf=\"userForm.get('role').hasError('required') && userForm.get('role').touched\" class=\"errorStyle full-width\">\n                            Email is required\n                        </div>\n                          </div>\n                    </div>\n                    <!--Email input-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">email</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"email\" id=\"email\" type=\"text\" class=\"validate\" placeholder=\"Email\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('email').hasError('required') && userForm.get('email').touched\" class=\"errorStyle\">\n                                        Email is required\n                                    </div>\n                                    <div *ngIf=\"userForm.get('email').hasError('pattern') && userForm.get('email')\" class=\"errorStyle\">\n                                        Invalid email\n                                    </div>\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--Reset in button-->\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"primary\" class=\"full-width\" type=\"submit\" [disabled]=\"!userForm.valid\">Verify</button>\n                        </div>\n                        <div fxFlex></div>\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"warn\" class=\"full-width\" (click)=onBack()>Back</button>\n                        </div>\n                    </div>\n                </form>\n            </md-card-content>\n        </md-card>\n        <!--card-ends-->\n    </md-grid-tile>\n</md-grid-list>\n\n<!--footer-->\n<app-login-footer></app-login-footer>"

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// this service is used to authenticate the current user is logged in or not
var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post('/api/authenticate', { username: username, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json().auth_token;
            if (token) {
                console.log(response.json().message);
                var usertype = response.json().role;
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                // return true to indicate successful login
                return response.json();
            }
            else {
                // return false to indicate failed login
                return response.json();
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    };
    AuthenticationService.prototype.getPasswordResetToken = function (token, username) {
        var _this = this;
        return this.http.post('/emailverify/passwordResetToken', { username: username, token: token })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json().authToken;
            if (token) {
                // set token property
                _this.token = token;
                // return true to indicate successful login
                return response.json();
            }
            else {
                // return false to indicate failed login
                return response.json();
            }
        });
    };
    //change password for existing placement role user
    AuthenticationService.prototype.passwordChange = function (email, password) {
        return this.http.post('/api/passwordReset', { Email: email, Password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            return response.json();
        });
    };
    AuthenticationService = __decorate([
        // map operatror for observable
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/samarthyaPlacement/webclient/authentication.service.js.map

/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(555);


/***/ })

},[907]);
//# sourceMappingURL=main.bundle.map