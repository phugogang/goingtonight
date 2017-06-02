import {Component, OnInit, HostBinding} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { routeSlideStateTrigger, buttonStateTrigger} from '../../animations';
// import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    animations: [routeSlideStateTrigger, buttonStateTrigger],
    styles: [`
        :host {
            display: block;
        }
    `]
})

export class LoginPageComponent implements OnInit {
    @HostBinding('@routeSlideState') routeAnimation = true;
    loading: boolean = false;
    loginForm: FormGroup;
    message_error: string;
    constructor(private _appService: AppService, private _router: Router){}

    ngOnInit() {
        this.loginForm = new FormGroup({
            "username": new FormControl('', Validators.required),
            "password": new FormControl('', Validators.required)
        })
    }

    onSubmit() {
        this.loading = true;
        let {username, password} = this.loginForm.value;       
        this._appService.login(username, password)
              .subscribe((result) => {                                    
                    if (result.success) {                     
                        localStorage.setItem("token", result.token);
                        localStorage.setItem("username", result.username);
                        this._router.navigate(['/']);
                    } else {                      
                        this.message_error = result.message;                        
                    }                    
                })        
           
        }
        

    
    
}