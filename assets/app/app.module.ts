import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppService} from './app.service';
import {AppRoutingModule} from './app.routing';

import { AppComponent } from "./app.component";
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {LoginPageComponent} from './auth/Login/login.component';
import {RegisterPageComponent} from './auth/Register/register.component';
import {BookMarkComponent} from './bookmark/bookmark.component';

import {BookmarkDirective} from './directive/app.directive';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,        
        LoginPageComponent,
        RegisterPageComponent,
        BookMarkComponent,
        BookmarkDirective,
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
        ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule {

}