/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from './login.component';
import * as import2 from '@angular/forms';
import * as import3 from '@angular/common';
import * as import4 from '../../app.service';
import * as import5 from '@angular/router';
var styles_LoginPageComponent = ['[_nghost-%COMP%] {\n            display: block;\n        }'];
export var RenderType_LoginPageComponent = import0.ɵcrt({
    encapsulation: 0,
    styles: styles_LoginPageComponent,
    data: { 'animation': [
            {
                name: 'routeSlideState',
                definitions: [
                    {
                        type: 1,
                        expr: ':enter',
                        animation: [
                            {
                                type: 6,
                                styles: { transform: 'translateY(-100%)' }
                            },
                            {
                                type: 4,
                                styles: null,
                                timings: 300
                            }
                        ]
                    },
                    {
                        type: 1,
                        expr: ':leave',
                        animation: {
                            type: 4,
                            styles: {
                                type: 6,
                                styles: {
                                    transform: 'translateY(100%)',
                                    opacity: 0
                                }
                            },
                            timings: 300
                        }
                    }
                ]
            },
            {
                name: 'buttonState',
                definitions: [
                    {
                        type: 0,
                        name: 'buttonActive',
                        styles: {
                            type: 6,
                            styles: { backgroundColor: '#39ce47' }
                        }
                    },
                    {
                        type: 0,
                        name: 'default',
                        styles: {
                            type: 6,
                            styles: { backgroundColor: '#f0ff4c' }
                        }
                    },
                    {
                        type: 1,
                        expr: 'default => buttonActive',
                        animation: [
                            {
                                type: 3,
                                steps: [
                                    {
                                        type: 4,
                                        styles: {
                                            type: 6,
                                            styles: { transform: 'scale(1.1)' }
                                        },
                                        timings: 100
                                    },
                                    {
                                        type: 4,
                                        styles: {
                                            type: 6,
                                            styles: {
                                                backgroundColor: '#39ce47',
                                                border: '3px solid #00f77f',
                                                color: 'yellow'
                                            }
                                        },
                                        timings: 200
                                    }
                                ]
                            },
                            {
                                type: 4,
                                styles: {
                                    type: 6,
                                    styles: { transform: 'scale(1)' }
                                },
                                timings: 200
                            }
                        ]
                    },
                    {
                        type: 1,
                        expr: 'buttonActive => default',
                        animation: [
                            {
                                type: 3,
                                steps: [
                                    {
                                        type: 4,
                                        styles: {
                                            type: 6,
                                            styles: { transform: 'scale(1.1)' }
                                        },
                                        timings: 100
                                    },
                                    {
                                        type: 4,
                                        styles: {
                                            type: 6,
                                            styles: {
                                                backgroundColor: '#f0ff4c',
                                                border: '3px solid #11f4c3',
                                                color: 'red'
                                            }
                                        },
                                        timings: 200
                                    }
                                ]
                            },
                            {
                                type: 4,
                                styles: {
                                    type: 6,
                                    styles: { transform: 'scale(1)' }
                                },
                                timings: 200
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
function View_LoginPageComponent_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Please enter a valid username.']))
    ], null, null);
}
function View_LoginPageComponent_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Please enter a Password.']))
    ], null, null);
}
function View_LoginPageComponent_3(l) {
    return import0.ɵvid(0, [(l()(), import0.ɵeld(0, null, null, 0, 'p', [[
                'class',
                'text-danger'
            ]
        ], [[
                8,
                'innerText',
                0
            ]
        ], null, null, null, null))], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.message_error;
        ck(v, 0, 0, currVal_0);
    });
}
function View_LoginPageComponent_4(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 3, 'div', [[
                'class',
                'text-center'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'i', [
            [
                'aria-hidden',
                'true'
            ],
            [
                'class',
                'fa fa-refresh fa-spin fa-4x'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        ']))
    ], null, null);
}
export function View_LoginPageComponent_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 58, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 55, 'div', [[
                'class',
                'col-md-4 col-md-offset-4'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [[
                'class',
                'text-center'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Login:'])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 46, 'form', [[
                'novalidate',
                ''
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'ngSubmit'
            ],
            [
                null,
                'submit'
            ],
            [
                null,
                'reset'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('submit' === en)) {
                var pd_0 = (import0.ɵnov(v, 9).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (import0.ɵnov(v, 9).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (co.onSubmit() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(16384, null, 0, import2.ɵbf, [], null, null),
        import0.ɵdid(540672, null, 0, import2.FormGroupDirective, [
            [
                8,
                null
            ],
            [
                8,
                null
            ]
        ], { form: [
                0,
                'form'
            ]
        }, { ngSubmit: 'ngSubmit' }),
        import0.ɵprd(2048, null, import2.ControlContainer, null, [import2.FormGroupDirective]),
        import0.ɵdid(16384, null, 0, import2.NgControlStatusGroup, [import2.ControlContainer], null, null),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 14, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [[
                'for',
                'username'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Username:'])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'input', [
            [
                'class',
                'form-control'
            ],
            [
                'formControlName',
                'username'
            ],
            [
                'id',
                'username'
            ],
            [
                'type',
                'text'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (import0.ɵnov(v, 19)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 19).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 19)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 19)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(16384, null, 0, import2.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import2.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵprd(1024, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.DefaultValueAccessor]),
        import0.ɵdid(671744, null, 0, import2.FormControlName, [
            [
                3,
                import2.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import2.NG_VALUE_ACCESSOR
            ]
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import0.ɵprd(2048, null, import2.NgControl, null, [import2.FormControlName]),
        import0.ɵdid(16384, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_LoginPageComponent_1)),
        import0.ɵdid(16384, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n\n            '])),
        (l()(), import0.ɵeld(0, null, null, 14, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [[
                'for',
                'password'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Password:'])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'input', [
            [
                'class',
                'form-control'
            ],
            [
                'formControlName',
                'password'
            ],
            [
                'id',
                'password'
            ],
            [
                'type',
                'password'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (import0.ɵnov(v, 35)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 35).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 35)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 35)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(16384, null, 0, import2.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import2.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵprd(1024, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.DefaultValueAccessor]),
        import0.ɵdid(671744, null, 0, import2.FormControlName, [
            [
                3,
                import2.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import2.NG_VALUE_ACCESSOR
            ]
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import0.ɵprd(2048, null, import2.NgControl, null, [import2.FormControlName]),
        import0.ɵdid(16384, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_LoginPageComponent_2)),
        import0.ɵdid(16384, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n\n            '])),
        (l()(), import0.ɵted(null, ['\n\n            '])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'form-group text-center'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_LoginPageComponent_3)),
        import0.ɵdid(16384, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [
            [
                'class',
                'btn btn-success btn-block'
            ],
            [
                'type',
                'submit'
            ]
        ], [
            [
                8,
                'disabled',
                0
            ],
            [
                24,
                '@buttonState',
                0
            ]
        ], null, null, null, null)),
        (l()(), import0.ɵted(null, ['Login'])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n\n        '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_LoginPageComponent_4)),
        import0.ɵdid(16384, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_7 = co.loginForm;
        ck(v, 9, 0, currVal_7);
        var currVal_15 = 'username';
        ck(v, 21, 0, currVal_15);
        var currVal_16 = (!co.loginForm.get('username').valid && !co.loginForm.get('username').pristine);
        ck(v, 26, 0, currVal_16);
        var currVal_24 = 'password';
        ck(v, 37, 0, currVal_24);
        var currVal_25 = (!co.loginForm.get('password').valid && !co.loginForm.get('password').pristine);
        ck(v, 42, 0, currVal_25);
        var currVal_26 = co.message_error;
        ck(v, 48, 0, currVal_26);
        var currVal_29 = co.loading;
        ck(v, 56, 0, currVal_29);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = import0.ɵnov(v, 11).ngClassUntouched;
        var currVal_1 = import0.ɵnov(v, 11).ngClassTouched;
        var currVal_2 = import0.ɵnov(v, 11).ngClassPristine;
        var currVal_3 = import0.ɵnov(v, 11).ngClassDirty;
        var currVal_4 = import0.ɵnov(v, 11).ngClassValid;
        var currVal_5 = import0.ɵnov(v, 11).ngClassInvalid;
        var currVal_6 = import0.ɵnov(v, 11).ngClassPending;
        ck(v, 7, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = import0.ɵnov(v, 23).ngClassUntouched;
        var currVal_9 = import0.ɵnov(v, 23).ngClassTouched;
        var currVal_10 = import0.ɵnov(v, 23).ngClassPristine;
        var currVal_11 = import0.ɵnov(v, 23).ngClassDirty;
        var currVal_12 = import0.ɵnov(v, 23).ngClassValid;
        var currVal_13 = import0.ɵnov(v, 23).ngClassInvalid;
        var currVal_14 = import0.ɵnov(v, 23).ngClassPending;
        ck(v, 18, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
        var currVal_17 = import0.ɵnov(v, 39).ngClassUntouched;
        var currVal_18 = import0.ɵnov(v, 39).ngClassTouched;
        var currVal_19 = import0.ɵnov(v, 39).ngClassPristine;
        var currVal_20 = import0.ɵnov(v, 39).ngClassDirty;
        var currVal_21 = import0.ɵnov(v, 39).ngClassValid;
        var currVal_22 = import0.ɵnov(v, 39).ngClassInvalid;
        var currVal_23 = import0.ɵnov(v, 39).ngClassPending;
        ck(v, 34, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23);
        var currVal_27 = !co.loginForm.valid;
        var currVal_28 = (co.loginForm.valid ? 'buttonActive' : 'default');
        ck(v, 50, 0, currVal_27, currVal_28);
    });
}
function View_LoginPageComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'login', [], [[
                40,
                '@routeSlideState',
                0
            ]
        ], null, null, View_LoginPageComponent_0, RenderType_LoginPageComponent)),
        import0.ɵdid(114688, null, 0, import1.LoginPageComponent, [
            import4.AppService,
            import5.Router
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, function (ck, v) {
        var currVal_0 = import0.ɵnov(v, 1).routeAnimation;
        ck(v, 0, 0, currVal_0);
    });
}
export var LoginPageComponentNgFactory = import0.ɵccf('login', import1.LoginPageComponent, View_LoginPageComponent_Host_0, {}, {}, []);
