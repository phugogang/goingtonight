var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { routeSlideStateTrigger, buttonStateTrigger } from '../../animations';
// import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
var LoginPageComponent = (function () {
    function LoginPageComponent(_appService, _router) {
        this._appService = _appService;
        this._router = _router;
        this.routeAnimation = true;
        this.loading = false;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.loginForm = new FormGroup({
            "username": new FormControl('', Validators.required),
            "password": new FormControl('', Validators.required)
        });
    };
    LoginPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var _a = this.loginForm.value, username = _a.username, password = _a.password;
        this._appService.login(username, password)
            .subscribe(function (result) {
            if (result.success) {
                localStorage.setItem("token", result.token);
                localStorage.setItem("username", result.username);
                _this._router.navigate(['/']);
            }
            else {
                _this.message_error = result.message;
            }
        });
    };
    return LoginPageComponent;
}());
__decorate([
    HostBinding('@routeSlideState'),
    __metadata("design:type", Object)
], LoginPageComponent.prototype, "routeAnimation", void 0);
LoginPageComponent = __decorate([
    Component({
        selector: 'login',
        templateUrl: './login.component.html',
        animations: [routeSlideStateTrigger, buttonStateTrigger],
        styles: ["\n        :host {\n            display: block;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [AppService, Router])
], LoginPageComponent);
export { LoginPageComponent };
