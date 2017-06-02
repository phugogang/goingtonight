import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from "./app.component";
import {HomeComponent} from './home/home.component';
import {LoginPageComponent} from './auth/Login/login.component';
import {RegisterPageComponent} from './auth/Register/register.component';

import {BookMarkComponent} from './bookmark/bookmark.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'bookmarks', component: BookMarkComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}