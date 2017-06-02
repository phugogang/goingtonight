/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './navbar/navbar.component.ngfactory';
import * as import2 from './navbar/navbar.component';
import * as import3 from './app.service';
import * as import4 from '@angular/router';
import * as import5 from './app.component';
const styles_AppComponent:any[] = ['[_nghost-%COMP%] {\n            display: block;\n        }'];
export const RenderType_AppComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 0,
  styles: styles_AppComponent,
    data: {'animation': [
      {
        name: 'routeFadeState',
        definitions: [
          {
            type: 1,
            expr: ':enter',
            animation: [
              {
                type: 6,
                styles: {opacity: 0}
              }
              ,
              {
                type: 4,
                styles: (null as any),
                timings: '300'
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
                styles: {opacity: 0}
              }
              ,
              timings: 300
            }

          }

        ]

      }
      ,
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

    ]
  }
}
);
export function View_AppComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'navbar',([] as any[]),(null as any),(null as any),(null as any),import1.View_NavbarComponent_0,import1.RenderType_NavbarComponent)),
    import0.ɵdid(114688,(null as any),0,import2.NavbarComponent,[
      import3.AppService,
      import4.Router
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'container'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(16777216,(null as any),(null as any),1,'router-outlet',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(147456,(null as any),0,import4.RouterOutlet,[
      import4.RouterOutletMap,
      import0.ViewContainerRef,
      import0.ComponentFactoryResolver,
      [
        8,
        (null as any)
      ]

    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
function View_AppComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'my-app',([] as any[]),[[
        40,
        '@routeSlideState',
        0
      ]
    ],(null as any),(null as any),View_AppComponent_0,RenderType_AppComponent)),
    import0.ɵdid(49152,(null as any),0,import5.AppComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,1).routeAnimation;
    ck(v,0,0,currVal_0);
  });
}
export const AppComponentNgFactory:import0.ComponentFactory<import5.AppComponent> = import0.ɵccf('my-app',import5.AppComponent,View_AppComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRjovZXhlcmNpc2Uvd2hhdGdvaW5ndG9uaWdodC9hc3NldHMvYXBwL2FwcC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRjovZXhlcmNpc2Uvd2hhdGdvaW5ndG9uaWdodC9hc3NldHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJuZzovLy9GOi9leGVyY2lzZS93aGF0Z29pbmd0b25pZ2h0L2Fzc2V0cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRjovZXhlcmNpc2Uvd2hhdGdvaW5ndG9uaWdodC9hc3NldHMvYXBwL2FwcC5jb21wb25lbnQudHMuQXBwQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPG5hdmJhcj48L25hdmJhcj5cclxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48L2Rpdj4iLCI8bXktYXBwPjwvbXktYXBwPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO2dCQUFBOzs7SUFBQTtLQUFBO0lBQWlCO01BQ2pCO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBdUI7SUFDbkI7Z0JBQUE7Ozs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQStCOzs7SUFGbkM7Ozs7O01DQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7SUFBQTtJQUFBLFNBQUEsU0FBQTs7OyJ9