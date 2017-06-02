import { Component, HostBinding } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {routeFadeStateTrigger, routeSlideStateTrigger} from './animations';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
     animations: [routeFadeStateTrigger,routeSlideStateTrigger ],
     styles: [`
        :host {
            display: block;
        }
     `]
})
export class AppComponent {
     @HostBinding('@routeSlideState') routeAnimation = true;
     constructor() {}
}