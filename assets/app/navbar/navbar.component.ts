import { Component, OnInit, HostBinding } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
    selector: "navbar",
    templateUrl: './navbar.component.html',
   
   
})


export class NavbarComponent implements OnInit {
     
    // user_id: string;
    // username: string;   
    constructor(private _appService: AppService,
                private router: Router
    ) {
      
    }
    ngOnInit() {
    //    this.username = this._appService.username;
    //     this.user_id = this._appService.userId;
    }

   isAuthenticated() {
       return this._appService.isAuthenticated;
   }

   getUsername() {
       return this._appService.username;
   }

    onLogOut() {
        this._appService.resultsSave = [];
        localStorage.clear();      
        this.router.navigate(['/']);
       
    }

    
}