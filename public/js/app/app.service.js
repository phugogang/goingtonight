var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
var AppService = (function () {
    function AppService(_http) {
        this._http = _http;
        this.displayData = [];
    }
    AppService.prototype.login = function (username, password) {
        return this._http.post('/auth/login', { username: username, password: password }, this.tokenHeader)
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.register = function (users) {
        return this._http.post('/auth/register', users, this.tokenHeader)
            .map(function (res) { return res.json(); });
    };
    Object.defineProperty(AppService.prototype, "username", {
        get: function () {
            return localStorage.getItem('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "isAuthenticated", {
        get: function () {
            return localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "setResults", {
        set: function (results) {
            this.resultsSave = results;
        },
        enumerable: true,
        configurable: true
    });
    AppService.prototype.getBars = function (location) {
        return this._http.post('/api/search-bars', { location: location }, this.tokenHeader)
            .map(function (res) {
            return res.json();
        });
    };
    AppService.prototype.getReviews = function (bar_id) {
        return this._http.post('/api/search-reviews', { bar_id: bar_id }, this.tokenHeader)
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.postBookmark = function (bar) {
        return this._http.post('/api/bookmark-bars', bar, this.tokenHeader)
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.getAllBookMark = function () {
        return this._http.get('/profile/bookmark', this.tokenHeader)
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.removeBookmark = function (id) {
        return this._http.delete("/api/bookmarks/" + id, this.tokenHeader)
            .map(function (res) { return res.json(); });
    };
    Object.defineProperty(AppService.prototype, "tokenHeader", {
        get: function () {
            var headers = new Headers({
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-type': 'application/json',
            });
            return new RequestOptions({ headers: headers });
        },
        enumerable: true,
        configurable: true
    });
    return AppService;
}());
AppService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], AppService);
export { AppService };
