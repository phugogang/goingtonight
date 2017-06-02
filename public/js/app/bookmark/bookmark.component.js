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
import { itemStateTrigger } from '../animations';
import { AppService } from '../app.service';
var BookMarkComponent = (function () {
    function BookMarkComponent(_appService) {
        this._appService = _appService;
        this.displayData = [];
        this.loading = true;
    }
    BookMarkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._appService.getAllBookMark()
            .subscribe(function (data) {
            _this.results = data.bars;
            // this.displayData.push(this.results[0]);
            _this.displayData.push(_this.results[0]);
            _this.loading = false;
        });
    };
    BookMarkComponent.prototype.onLoadingData = function (event, lastId) {
        if (event.fromState != 'void') {
            return;
        }
        if (this.results.length > lastId + 1) {
            // this.displayData.push(this.results[lastId + 1]);
            this.displayData.push(this.results[lastId + 1]);
        }
        else {
            this.displayData = this.results;
            //  this.displayData = this.results;
        }
    };
    BookMarkComponent.prototype.onRemoveBookmark = function (id, index) {
        var _this = this;
        this._appService.removeBookmark(id)
            .subscribe(function (res) {
            _this.displayData.splice(index, 1);
        });
    };
    return BookMarkComponent;
}());
BookMarkComponent = __decorate([
    Component({
        selector: 'boomark',
        templateUrl: './bookmark.component.html',
        animations: [itemStateTrigger],
        styles: ["       \n        \n\nh1 {\n            color: red;\n        }\n\n    .thumbnail {\n        margin-top: 40px;\n        position: relative;   \n    \n    }\n    .xtag_close {\n        position: absolute;\n        top: -25px;\n        right: -25px;\n        color: darksalmon;\n        /*opacity: 0.9;*/\n        transition: all 500ms ease-out;\n    }\n\n    .xtag_close:hover {\n        cursor: pointer;\n        opacity: 1;\n        transform: scale(1.2) rotate(90deg);\n        color:violet;\n    }\n     \n       \n\n        .remove:after {\n            content: '';\n            margin-top: 40px;\n            margin-bottom: 0;\n        }\n\n        .col-md-4:nth-child(3n+1){\n            clear: left;\n        }\n\n\n\n        .row {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display:         flex;\n        flex-wrap: wrap;\n        }\n        .row > [class*='col-'] {\n        display: flex;\n        flex-direction: row;\n        }\n\n\n    "]
    }),
    __metadata("design:paramtypes", [AppService])
], BookMarkComponent);
export { BookMarkComponent };
