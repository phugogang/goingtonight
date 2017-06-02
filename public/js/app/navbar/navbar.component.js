var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
var NavbarComponent = (function () {
    // user_id: string;
    // username: string;   
    function NavbarComponent(_appService, router) {
        this._appService = _appService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        //    this.username = this._appService.username;
        //     this.user_id = this._appService.userId;
    };
    NavbarComponent.prototype.isAuthenticated = function () {
        return this._appService.isAuthenticated;
    };
    NavbarComponent.prototype.getUsername = function () {
        return this._appService.username;
    };
    NavbarComponent.prototype.onLogOut = function () {
        localStorage.clear();
        this.router.navigate(['/']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Component({
        selector: "navbar",
        templateUrl: './navbar.component.html',
    }),
    __metadata("design:paramtypes", [AppService,
        Router])
], NavbarComponent);
export { NavbarComponent };
