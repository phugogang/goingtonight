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
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routeSlideStateTrigger, buttonStateTrigger } from '../../animations';
import { AppService } from '../../app.service';
var RegisterPageComponent = (function () {
    function RegisterPageComponent(_appService, _router) {
        this._appService = _appService;
        this._router = _router;
        this.routeAnimation = true;
        this.loading = false;
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
        this.signUpForm = new FormGroup({
            'username': new FormControl('', Validators.required),
            'email': new FormControl('', [Validators.required, Validators.email]),
            'password': new FormControl('', Validators.required),
            'confirmPassword': new FormControl('', [Validators.required, this.isMatchPassword('password')])
        });
    };
    RegisterPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var _a = this.signUpForm.value, username = _a.username, email = _a.email, password = _a.password;
        this._appService.register({ username: username, email: email, password: password })
            .subscribe(function (user) {
            if (user.success) {
                localStorage.setItem("token", user.token);
                localStorage.setItem("username", user.username);
                _this._router.navigate(['/']);
            }
            else {
                _this.error_message = 'Server Error. Plese try again.';
            }
        });
    };
    RegisterPageComponent.prototype.isMatchPassword = function (otherControlName) {
        var thisControl;
        var otherControl;
        return function (control) {
            if (!control.parent) {
                return null;
            }
            // Initializing the validator.
            if (!thisControl) {
                thisControl = control;
                otherControl = control.parent.get(otherControlName);
                otherControl.valueChanges.subscribe(function () {
                    thisControl.updateValueAndValidity();
                });
            }
            if (otherControl.value !== thisControl.value) {
                return { matchOther: true };
            }
            return null;
        };
    };
    return RegisterPageComponent;
}());
__decorate([
    HostBinding('@routeSlideState'),
    __metadata("design:type", Object)
], RegisterPageComponent.prototype, "routeAnimation", void 0);
RegisterPageComponent = __decorate([
    Component({
        selector: 'register',
        templateUrl: './register.component.html',
        animations: [routeSlideStateTrigger, buttonStateTrigger],
        styles: ["\n    :host {\n        display: block;\n    }\n    "]
    }),
    __metadata("design:paramtypes", [AppService, Router])
], RegisterPageComponent);
export { RegisterPageComponent };
