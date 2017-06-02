var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, HostListener } from '@angular/core';
import { Renderer2 } from '@angular/core';
var BookmarkDirective = (function () {
    function BookmarkDirective(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    BookmarkDirective.prototype.onClick = function (e) {
        this._el.nativeElement.remove();
    };
    return BookmarkDirective;
}());
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BookmarkDirective.prototype, "onClick", null);
BookmarkDirective = __decorate([
    Directive({
        selector: '[bookmark]',
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], BookmarkDirective);
export { BookmarkDirective };
