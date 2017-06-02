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
const styles_LoginPageComponent:any[] = ['[_nghost-%COMP%] {\n            display: block;\n        }'];
export const RenderType_LoginPageComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 0,
  styles: styles_LoginPageComponent,
    data: {'animation': [
      {
        name: 'routeSlideState',
        definitions: [
          {
            type: 1,
            expr: ':enter',
            animation: [
              {
                type: 6,
                styles: {transform: 'translateY(-100%)'}
              }
              ,
              {
                type: 4,
                styles: (null as any),
                timings: 300
              }

            ]

          }
          ,
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

              }
              ,
              timings: 300
            }

          }

        ]

      }
      ,
      {
        name: 'buttonState',
        definitions: [
          {
            type: 0,
            name: 'buttonActive',
            styles: {
              type: 6,
              styles: {backgroundColor: '#39ce47'}
            }

          }
          ,
          {
            type: 0,
            name: 'default',
            styles: {
              type: 6,
              styles: {backgroundColor: '#f0ff4c'}
            }

          }
          ,
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
                      styles: {transform: 'scale(1.1)'}
                    }
                    ,
                    timings: 100
                  }
                  ,
                  {
                    type: 4,
                    styles: {
                      type: 6,
                      styles: {
                        backgroundColor: '#39ce47',
                        border: '3px solid #00f77f',
                        color: 'yellow'
                      }

                    }
                    ,
                    timings: 200
                  }

                ]

              }
              ,
              {
                type: 4,
                styles: {
                  type: 6,
                  styles: {transform: 'scale(1)'}
                }
                ,
                timings: 200
              }

            ]

          }
          ,
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
                      styles: {transform: 'scale(1.1)'}
                    }
                    ,
                    timings: 100
                  }
                  ,
                  {
                    type: 4,
                    styles: {
                      type: 6,
                      styles: {
                        backgroundColor: '#f0ff4c',
                        border: '3px solid #11f4c3',
                        color: 'red'
                      }

                    }
                    ,
                    timings: 200
                  }

                ]

              }
              ,
              {
                type: 4,
                styles: {
                  type: 6,
                  styles: {transform: 'scale(1)'}
                }
                ,
                timings: 200
              }

            ]

          }

        ]

      }

    ]
  }
}
);
function View_LoginPageComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Please enter a valid username.']))
  ]
  ,(null as any),(null as any));
}
function View_LoginPageComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Please enter a Password.']))
  ]
  ,(null as any),(null as any));
}
function View_LoginPageComponent_3(l:any):import0.ɵViewDefinition {
      return import0.ɵvid(0,[(l()(),import0.ɵeld(0,(null as any),(null as any),0,'p',[[
        'class',
        'text-danger'
      ]
      ],[[
        8,
        'innerText',
        0
      ]
  ],(null as any),(null as any),(null as any),(null as any)))],(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.message_error;
    ck(v,0,0,currVal_0);
  });
}
function View_LoginPageComponent_4(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),3,'div',[[
        'class',
        'text-center'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'i',[
      [
        'aria-hidden',
        'true'
      ]
      ,
      [
        'class',
        'fa fa-refresh fa-spin fa-4x'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        ']))
  ]
  ,(null as any),(null as any));
}
export function View_LoginPageComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),58,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),55,'div',[[
        'class',
        'col-md-4 col-md-offset-4'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h1',[[
        'class',
        'text-center'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Login:'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),46,'form',[[
        'novalidate',
        ''
      ]
    ],[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'ngSubmit'
      ]
      ,
      [
        (null as any),
        'submit'
      ]
      ,
      [
        (null as any),
        'reset'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import1.LoginPageComponent = v.component;
      if (('submit' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,9).onSubmit($event)) !== false);
        ad = (pd_0 && ad);
      }
      if (('reset' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,9).onReset()) !== false);
        ad = (pd_1 && ad);
      }
      if (('ngSubmit' === en)) {
        const pd_2:any = ((<any>co.onSubmit()) !== false);
        ad = (pd_2 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(16384,(null as any),0,import2.ɵbf,([] as any[]),(null as any),(null as any)),
    import0.ɵdid(540672,(null as any),0,import2.FormGroupDirective,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]

    ]
      ,{form: [
        0,
        'form'
      ]
    },{ngSubmit: 'ngSubmit'}),
    import0.ɵprd(2048,(null as any),import2.ControlContainer,(null as any),[import2.FormGroupDirective]),
    import0.ɵdid(16384,(null as any),0,import2.NgControlStatusGroup,[import2.ControlContainer],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),14,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',[[
        'for',
        'username'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Username:'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'input',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'formControlName',
        'username'
      ]
      ,
      [
        'id',
        'username'
      ]
      ,
      [
        'type',
        'text'
      ]

    ]
    ,[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('input' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,19)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,19).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import0.ɵnov(v,19)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import0.ɵnov(v,19)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(16384,(null as any),0,import2.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef,
      [
        2,
        import2.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
    import0.ɵprd(1024,(null as any),import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.DefaultValueAccessor]),
    import0.ɵdid(671744,(null as any),0,import2.FormControlName,[
      [
        3,
        import2.ControlContainer
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
      ,{name: [
        0,
        'name'
      ]
    },(null as any)),
    import0.ɵprd(2048,(null as any),import2.NgControl,(null as any),[import2.FormControlName]),
    import0.ɵdid(16384,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_LoginPageComponent_1)),
    import0.ɵdid(16384,(null as any),0,import3.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),14,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',[[
        'for',
        'password'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Password:'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'input',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'formControlName',
        'password'
      ]
      ,
      [
        'id',
        'password'
      ]
      ,
      [
        'type',
        'password'
      ]

    ]
    ,[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('input' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,35)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,35).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import0.ɵnov(v,35)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import0.ɵnov(v,35)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(16384,(null as any),0,import2.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef,
      [
        2,
        import2.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
    import0.ɵprd(1024,(null as any),import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.DefaultValueAccessor]),
    import0.ɵdid(671744,(null as any),0,import2.FormControlName,[
      [
        3,
        import2.ControlContainer
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
      ,{name: [
        0,
        'name'
      ]
    },(null as any)),
    import0.ɵprd(2048,(null as any),import2.NgControl,(null as any),[import2.FormControlName]),
    import0.ɵdid(16384,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_LoginPageComponent_2)),
    import0.ɵdid(16384,(null as any),0,import3.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'div',[[
        'class',
        'form-group text-center'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_LoginPageComponent_3)),
    import0.ɵdid(16384,(null as any),0,import3.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[
      [
        'class',
        'btn btn-success btn-block'
      ]
      ,
      [
        'type',
        'submit'
      ]

    ]
    ,[
      [
        8,
        'disabled',
        0
      ]
      ,
      [
        24,
        '@buttonState',
        0
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Login'])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_LoginPageComponent_4)),
    import0.ɵdid(16384,(null as any),0,import3.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import1.LoginPageComponent = v.component;
    const currVal_7:any = co.loginForm;
    ck(v,9,0,currVal_7);
    const currVal_15:any = 'username';
    ck(v,21,0,currVal_15);
    const currVal_16:boolean = (!co.loginForm.get('username').valid && !co.loginForm.get('username').pristine);
    ck(v,26,0,currVal_16);
    const currVal_24:any = 'password';
    ck(v,37,0,currVal_24);
    const currVal_25:boolean = (!co.loginForm.get('password').valid && !co.loginForm.get('password').pristine);
    ck(v,42,0,currVal_25);
    const currVal_26:any = co.message_error;
    ck(v,48,0,currVal_26);
    const currVal_29:any = co.loading;
    ck(v,56,0,currVal_29);
  },(ck,v) => {
    var co:import1.LoginPageComponent = v.component;
    const currVal_0:any = import0.ɵnov(v,11).ngClassUntouched;
    const currVal_1:any = import0.ɵnov(v,11).ngClassTouched;
    const currVal_2:any = import0.ɵnov(v,11).ngClassPristine;
    const currVal_3:any = import0.ɵnov(v,11).ngClassDirty;
    const currVal_4:any = import0.ɵnov(v,11).ngClassValid;
    const currVal_5:any = import0.ɵnov(v,11).ngClassInvalid;
    const currVal_6:any = import0.ɵnov(v,11).ngClassPending;
    ck(v,7,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_8:any = import0.ɵnov(v,23).ngClassUntouched;
    const currVal_9:any = import0.ɵnov(v,23).ngClassTouched;
    const currVal_10:any = import0.ɵnov(v,23).ngClassPristine;
    const currVal_11:any = import0.ɵnov(v,23).ngClassDirty;
    const currVal_12:any = import0.ɵnov(v,23).ngClassValid;
    const currVal_13:any = import0.ɵnov(v,23).ngClassInvalid;
    const currVal_14:any = import0.ɵnov(v,23).ngClassPending;
    ck(v,18,0,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14);
    const currVal_17:any = import0.ɵnov(v,39).ngClassUntouched;
    const currVal_18:any = import0.ɵnov(v,39).ngClassTouched;
    const currVal_19:any = import0.ɵnov(v,39).ngClassPristine;
    const currVal_20:any = import0.ɵnov(v,39).ngClassDirty;
    const currVal_21:any = import0.ɵnov(v,39).ngClassValid;
    const currVal_22:any = import0.ɵnov(v,39).ngClassInvalid;
    const currVal_23:any = import0.ɵnov(v,39).ngClassPending;
    ck(v,34,0,currVal_17,currVal_18,currVal_19,currVal_20,currVal_21,currVal_22,currVal_23);
    const currVal_27:boolean = !co.loginForm.valid;
    const currVal_28:any = (co.loginForm.valid? 'buttonActive': 'default');
    ck(v,50,0,currVal_27,currVal_28);
  });
}
function View_LoginPageComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'login',([] as any[]),[[
        40,
        '@routeSlideState',
        0
      ]
    ],(null as any),(null as any),View_LoginPageComponent_0,RenderType_LoginPageComponent)),
    import0.ɵdid(114688,(null as any),0,import1.LoginPageComponent,[
      import4.AppService,
      import5.Router
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,1).routeAnimation;
    ck(v,0,0,currVal_0);
  });
}
export const LoginPageComponentNgFactory:import0.ComponentFactory<import1.LoginPageComponent> = import0.ɵccf('login',import1.LoginPageComponent,View_LoginPageComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRjovZXhlcmNpc2Uvd2hhdGdvaW5ndG9uaWdodC9hc3NldHMvYXBwL2F1dGgvTG9naW4vbG9naW4uY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Y6L2V4ZXJjaXNlL3doYXRnb2luZ3RvbmlnaHQvYXNzZXRzL2FwcC9hdXRoL0xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIm5nOi8vL0Y6L2V4ZXJjaXNlL3doYXRnb2luZ3RvbmlnaHQvYXNzZXRzL2FwcC9hdXRoL0xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRjovZXhlcmNpc2Uvd2hhdGdvaW5ndG9uaWdodC9hc3NldHMvYXBwL2F1dGgvTG9naW4vbG9naW4uY29tcG9uZW50LnRzLkxvZ2luUGFnZUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtbWQtb2Zmc2V0LTRcIj5cclxuICAgICAgICA8aDEgY2xhc3M9J3RleHQtY2VudGVyJz5Mb2dpbjo8L2gxPlxyXG4gICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPSdsb2dpbkZvcm0nIChuZ1N1Ym1pdCk9J29uU3VibWl0KCknPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGZvcm1Db250cm9sTmFtZT1cInVzZXJuYW1lXCIgaWQ9XCJ1c2VybmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj0nIWxvZ2luRm9ybS5nZXQoXCJ1c2VybmFtZVwiKS52YWxpZCAmJiAhbG9naW5Gb3JtLmdldChcInVzZXJuYW1lXCIpLnByaXN0aW5lJz5QbGVhc2UgZW50ZXIgYSB2YWxpZCB1c2VybmFtZS48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9J3Bhc3N3b3JkJz5QYXNzd29yZDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBmb3JtQ29udHJvbE5hbWU9J3Bhc3N3b3JkJyBpZD0ncGFzc3dvcmQnIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj0nIWxvZ2luRm9ybS5nZXQoXCJwYXNzd29yZFwiKS52YWxpZCAmJiAhbG9naW5Gb3JtLmdldChcInBhc3N3b3JkXCIpLnByaXN0aW5lJz5QbGVhc2UgZW50ZXIgYSBQYXNzd29yZC48L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz0ndGV4dC1kYW5nZXInIFtpbm5lclRleHRdPSdtZXNzYWdlX2Vycm9yJyAqbmdJZj0nbWVzc2FnZV9lcnJvcic+PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzcz0nYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9jaycgW2Rpc2FibGVkXT0nIWxvZ2luRm9ybS52YWxpZCcgW0BidXR0b25TdGF0ZV09XCJsb2dpbkZvcm0udmFsaWQ/ICdidXR0b25BY3RpdmUnOiAnZGVmYXVsdCdcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiICpuZ0lmPSdsb2FkaW5nJz5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1yZWZyZXNoIGZhLXNwaW4gZmEtNHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+IiwiPGxvZ2luPjwvbG9naW4+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNPZ0I7SUFBc0Y7Ozs7OztJQU10RjtJQUFzRjs7Ozs7NkJBS3RGO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtFQUFBOztJQUF1QjtJQUF2QixTQUF1QixTQUF2Qjs7Ozs7TUFNUjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXlDO0lBQ3JDO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUE4RDs7Ozs7O01BekIxRTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlCO01BQ2I7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFzQztNQUNsQztRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO0lBQVc7TUFDbkM7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUE4QjtRQUFBO1FBQUE7TUFBQTtNQUE5QjtJQUFBO2dCQUFBO2dCQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO0lBQXNEO01BQ2xEO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7TUFDcEI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFzQjtJQUFpQjtJQUN2QztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7OztNQUFBO1FBQUE7O01BQUE7O0lBQUE7S0FBQTtnQkFBQTtNQUFBO0lBQUE7Z0JBQUE7TUFBQTtRQUFBOztNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FB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
