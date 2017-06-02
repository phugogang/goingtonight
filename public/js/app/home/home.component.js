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
import { FormGroup, FormControl } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { searchStateTrigger, itemStateTrigger } from '../animations';
import 'rxjs/Rx';
import { AppService } from '../app.service';
var HomeComponent = (function () {
    function HomeComponent(_appService, _el) {
        this._appService = _appService;
        this._el = _el;
        this.loading = false;
        this.isSearching = false;
        this.reviews = [];
        this.searchForm = new FormGroup({
            search: new FormControl("")
        });
        if (this._appService.isAuthenticated) {
            this.bars = this._appService.resultsSave;
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForm.get('search').valueChanges
            .debounceTime(1000)
            .distinctUntilChanged()
            .flatMap(function (location) {
            _this.isSearching = true;
            _this.loading = true;
            return _this._appService.getBars(location);
        })
            .subscribe(function (results) {
            _this.bars = results;
            var _loop_1 = function (i) {
                _this._appService.getReviews(results[i].id)
                    .subscribe(function (review) {
                    _this.bars[i].reviews = [];
                    _this.bars[i].reviews.push(review);
                    // this.reviews.push(review);
                    _this.loading = false;
                });
            };
            for (var i in results) {
                _loop_1(i);
            }
            _this._appService.resultsSave = _this.bars;
        });
    };
    HomeComponent.prototype.onBookMark = function (result) {
        var name = result.name;
        var rating = result.rating;
        var phone = result.phone;
        var image_url = result.image_url || '';
        var photos = result.photos || [];
        var address = result.location.display_address;
        var reviews = [];
        for (var _i = 0, _a = result.reviews[0]; _i < _a.length; _i++) {
            var i = _a[_i];
            reviews.push(i);
        }
        this._appService.postBookmark({ name: name, rating: rating, phone: phone, photos: photos, address: address, reviews: reviews, image_url: image_url })
            .subscribe(function (data) {
            return;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        selector: 'homepage',
        templateUrl: './home.component.html',
        animations: [searchStateTrigger,
            itemStateTrigger,
        ],
        styles: ["\n        input {\n            background-color: inherit;\n            border: 1px solid white;\n            color: white;\n        }\n\n        input::placeholder {\n            color: white;\n        }\n\n        .list {\n            transition: all 500ms ease-out;\n        }\n        .list:hover {    \n          \n            // background-color: #1f699b;     \n            box-shadow: 8px 8px 5px black;       \n            background: #2980b9;  /* fallback for old browsers */\n            background: -webkit-linear-gradient(to right, #2c3e50, #2980b9);  /* Chrome 10-25, Safari 5.1-6 */\n        background: linear-gradient(to right, #2980b9, #2c3e50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n        }\n\n\n\n        .icons i {\n            margin-top: 20px;\n            display: inline-block;\n            margin-right: 15px;\n        }\n\n\n        .bookmark_icon > i {\n            color: cornsilk;\n            transition: all 500ms ease-out; \n        }\n\n        .bookmark_icon > i:hover {\n            cursor: pointer;\n            transform: scale(1.3);\n            color: #ffff00;\n        }\n\n    "]
    }),
    __metadata("design:paramtypes", [AppService, ElementRef])
], HomeComponent);
export { HomeComponent };
