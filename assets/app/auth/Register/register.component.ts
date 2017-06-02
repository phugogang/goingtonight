import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routeSlideStateTrigger, buttonStateTrigger} from '../../animations';
import { AppService } from '../../app.service';


@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    animations: [routeSlideStateTrigger, buttonStateTrigger],
      
    styles: [`
    :host {
        display: block;
    }
    `]
})

export class RegisterPageComponent implements OnInit {
    @HostBinding('@routeSlideState') routeAnimation = true;
    loading = false;
    signUpForm: FormGroup;
    error_message: string;

    constructor(private _appService: AppService, private _router: Router) { }


    ngOnInit() {
        this.signUpForm = new FormGroup({
            'username': new FormControl('', Validators.required),
            'email': new FormControl('', [Validators.required, Validators.email]),
            'password': new FormControl('', Validators.required),
            'confirmPassword': new FormControl('', [Validators.required, this.isMatchPassword('password')])
        });
    }



    onSubmit() {
        this.loading = true;
        let { username, email, password } = this.signUpForm.value;
        this._appService.register({ username, email, password })
            .subscribe((user) => {
                if (user.success) {
                    localStorage.setItem("token", user.token);
                    localStorage.setItem("username", user.username);
                    this._router.navigate(['/']);
                } else {
                    this.error_message = 'Server Error. Plese try again.';
                }
            })

    }




    isMatchPassword(otherControlName: string) {
        let thisControl: FormControl;
        let otherControl: FormControl;

        return (control: FormControl): { [s: string]: boolean } => {
            if (!control.parent) {
                return null;
            }

            // Initializing the validator.
            if (!thisControl) {
                thisControl = control;
                otherControl = control.parent.get(otherControlName) as FormControl;

                otherControl.valueChanges.subscribe(() => {
                    thisControl.updateValueAndValidity();
                });
            }


            if (otherControl.value !== thisControl.value) {
                return { matchOther: true };
            }

            return null;


        }

    }



}

