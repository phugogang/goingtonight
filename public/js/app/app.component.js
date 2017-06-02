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
import { routeFadeStateTrigger, routeSlideStateTrigger } from './animations';
var AppComponent = (function () {
    function AppComponent() {
        this.routeAnimation = true;
    }
    return AppComponent;
}());
__decorate([
    HostBinding('@routeSlideState'),
    __metadata("design:type", Object)
], AppComponent.prototype, "routeAnimation", void 0);
AppComponent = __decorate([
    Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        animations: [routeFadeStateTrigger, routeSlideStateTrigger],
        styles: ["\n        :host {\n            display: block;\n        }\n     "]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
export { AppComponent };
