/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/router';
import * as import2 from '@angular/common';
import * as import3 from './navbar.component';
import * as import4 from '../app.service';
const styles_NavbarComponent:any[] = ([] as any[]);
export const RenderType_NavbarComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_NavbarComponent,
  data: {}
}
);
function View_NavbarComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),7,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (l()(),import0.ɵeld(0,(null as any),(null as any),6,'a',[[
        'routerLinkActive',
        'active'
      ]
    ],[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,2).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(671744,[[
        4,
        4
      ]
    ],0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(1),
    import0.ɵdid(1720320,(null as any),2,import1.RouterLinkActive,[
      import1.Router,
      import0.ElementRef,
      import0.Renderer,
      import0.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import0.ɵqud(603979776,3,{links: 1}),
    import0.ɵqud(603979776,4,{linksWithHrefs: 1}),
    (l()(),import0.ɵted((null as any),['My Bookmark']))
  ]
  ,(ck,v) => {
    const currVal_2:any = ck(v,3,0,'/bookmarks');
    ck(v,2,0,currVal_2);
    const currVal_3:any = 'active';
    ck(v,4,0,currVal_3);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,2).target;
    const currVal_1:any = import0.ɵnov(v,2).href;
    ck(v,1,0,currVal_0,currVal_1);
  });
}
function View_NavbarComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n\n        ']))
  ]
  ,(null as any),(null as any));
}
function View_NavbarComponent_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',([] as any[]),[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,3).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(671744,(null as any),0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(1),
    (l()(),import0.ɵted((null as any),['Register'])),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',([] as any[]),[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,9).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(671744,(null as any),0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(1),
    (l()(),import0.ɵted((null as any),['Login'])),
    (l()(),import0.ɵted((null as any),['\n        ']))
  ]
  ,(ck,v) => {
    const currVal_2:any = ck(v,4,0,'register');
    ck(v,3,0,currVal_2);
    const currVal_5:any = ck(v,10,0,'login');
    ck(v,9,0,currVal_5);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,3).target;
    const currVal_1:any = import0.ɵnov(v,3).href;
    ck(v,2,0,currVal_0,currVal_1);
    const currVal_3:any = import0.ɵnov(v,9).target;
    const currVal_4:any = import0.ɵnov(v,9).href;
    ck(v,8,0,currVal_3,currVal_4);
  });
}
function View_NavbarComponent_4(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'a',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      'Hello: ',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'a',([] as any[]),[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,7).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      if (('click' === en)) {
        const pd_1:any = ((<any>co.onLogOut()) !== false);
        ad = (pd_1 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(671744,(null as any),0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['Logout'])),
    (l()(),import0.ɵted((null as any),['\n        ']))
  ]
  ,(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.getUsername();
    ck(v,3,0,currVal_0);
    const currVal_1:any = import0.ɵnov(v,7).target;
    const currVal_2:any = import0.ɵnov(v,7).href;
    ck(v,6,0,currVal_1,currVal_2);
  });
}
export function View_NavbarComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),54,'nav',[[
        'class',
        'navbar navbar-inverse'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n  '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),50,'div',[[
        'class',
        'container'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),16,'div',[[
        'class',
        'navbar-header'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),10,'button',[
      [
        'aria-controls',
        'navbar'
      ]
      ,
      [
        'aria-expanded',
        'false'
      ]
      ,
      [
        'class',
        'navbar-toggle collapsed'
      ]
      ,
      [
        'data-target',
        '#navbar'
      ]
      ,
      [
        'data-toggle',
        'collapse'
      ]
      ,
      [
        'type',
        'button'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n              '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'sr-only'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Toggle navigation'])),
    (l()(),import0.ɵted((null as any),['\n              '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'span',[[
        'class',
        'icon-bar'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n              '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'span',[[
        'class',
        'icon-bar'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n              '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'span',[[
        'class',
        'icon-bar'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'a',[
      [
        'class',
        'navbar-brand'
      ]
      ,
      [
        'href',
        ''
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Voting Polls'])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),28,'div',[
      [
        'class',
        'navbar-collapse collapse'
      ]
      ,
      [
        'id',
        'navbar'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),15,'ul',[[
        'class',
        'nav navbar-nav'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),7,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (l()(),import0.ɵeld(0,(null as any),(null as any),6,'a',[[
        'routerLinkActive',
        'active'
      ]
    ],[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,28).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(671744,[[
        2,
        4
      ]
    ],0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(1),
    import0.ɵdid(1720320,(null as any),2,import1.RouterLinkActive,[
      import1.Router,
      import0.ElementRef,
      import0.Renderer,
      import0.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import0.ɵqud(603979776,1,{links: 1}),
    import0.ɵqud(603979776,2,{linksWithHrefs: 1}),
    (l()(),import0.ɵted((null as any),['Home'])),
    (l()(),import0.ɵted((null as any),['\n         '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_NavbarComponent_1)),
    import0.ɵdid(16384,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵted((null as any),['\n\n      '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),8,'ul',[[
        'class',
        'nav navbar-nav navbar-right'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_NavbarComponent_2)),
    import0.ɵdid(16384,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
    ,{
      ngIf: [
        0,
        'ngIf'
      ]
      ,
      ngIfThen: [
        1,
        'ngIfThen'
      ]
      ,
      ngIfElse: [
        2,
        'ngIfElse'
      ]

    }
    ,(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
      (l()(),import0.ɵand(0,[[
        'notauthenticate',
        2
      ]
    ],(null as any),0,(null as any),View_NavbarComponent_3)),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
      (l()(),import0.ɵand(0,[[
        'authenticate',
        2
      ]
    ],(null as any),0,(null as any),View_NavbarComponent_4)),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵted((null as any),['\n\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import3.NavbarComponent = v.component;
    const currVal_2:any = ck(v,29,0,'/');
    ck(v,28,0,currVal_2);
    const currVal_3:any = 'active';
    ck(v,30,0,currVal_3);
    const currVal_4:any = co.isAuthenticated();
    ck(v,36,0,currVal_4);
    const currVal_5:any = co.isAuthenticated();
    const currVal_6:any = import0.ɵnov(v,48);
    const currVal_7:any = import0.ɵnov(v,46);
    ck(v,44,0,currVal_5,currVal_6,currVal_7);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,28).target;
    const currVal_1:any = import0.ɵnov(v,28).href;
    ck(v,27,0,currVal_0,currVal_1);
  });
}
function View_NavbarComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'navbar',([] as any[]),(null as any),(null as any),(null as any),View_NavbarComponent_0,RenderType_NavbarComponent)),
    import0.ɵdid(114688,(null as any),0,import3.NavbarComponent,[
      import4.AppService,
      import1.Router
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const NavbarComponentNgFactory:import0.ComponentFactory<import3.NavbarComponent> = import0.ɵccf('navbar',import3.NavbarComponent,View_NavbarComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRjovZXhlcmNpc2Uvd2hhdGdvaW5ndG9uaWdodC9hc3NldHMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Y6L2V4ZXJjaXNlL3doYXRnb2luZ3RvbmlnaHQvYXNzZXRzL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsIm5nOi8vL0Y6L2V4ZXJjaXNlL3doYXRnb2luZ3RvbmlnaHQvYXNzZXRzL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRjovZXhlcmNpc2Uvd2hhdGdvaW5ndG9uaWdodC9hc3NldHMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzLk5hdmJhckNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWludmVyc2VcIj5cclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5hdmJhci10b2dnbGUgY29sbGFwc2VkXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiXCI+Vm90aW5nIFBvbGxzPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwibmF2YmFyXCIgY2xhc3M9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcIj5cclxuICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICA8bGkgKm5nSWY9J2lzQXV0aGVudGljYXRlZCgpJz48YSBbcm91dGVyTGlua109XCJbJy9ib29rbWFya3MnXVwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5NeSBCb29rbWFyazwvYT48L2xpPlxyXG4gICAgICAgIDwhLS08bGkgKm5nSWY9XCJpc0F1dGhlbnRpY2F0ZWQoKVwiPjxhIFtyb3V0ZXJMaW5rXT1cIlsndm90ZXMnLCAnbmV3J11cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+Q3JlYXRlIFBvbGw8L2E+PC9saT4tLT5cclxuICAgICAgICA8IS0tPGxpICpuZ0lmPVwiaXNBdXRoZW50aWNhdGVkKClcIj48YSBbcm91dGVyTGlua109XCJbJ215dm90ZScsIF9hcHBTZXJ2aWNlLnVzZXJJZF1cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+TXkgUG9vbHM8L2E+PC9saT4tLT5cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJpc0F1dGhlbnRpY2F0ZWQoKTsgdGhlbiBhdXRoZW50aWNhdGUgZWxzZSBub3RhdXRoZW50aWNhdGVcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjbm90YXV0aGVudGljYXRlPlxyXG4gICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsncmVnaXN0ZXInXVwiPlJlZ2lzdGVyPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydsb2dpbiddXCI+TG9naW48L2E+PC9saT5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI2F1dGhlbnRpY2F0ZT5cclxuICAgICAgICAgIDxsaT48YT5IZWxsbzoge3sgZ2V0VXNlcm5hbWUoKSB9fTwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpID48YSAoY2xpY2spPVwib25Mb2dPdXQoKVwiIFtyb3V0ZXJMaW5rXT1cIlwiPkxvZ291dDwvYT48L2xpPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tLy5uYXYtY29sbGFwc2UgLS0+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLS8uY29udGFpbmVyLWZsdWlkIC0tPlxyXG48L25hdj4iLCI8bmF2YmFyPjwvbmF2YmFyPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNlUztNQUE4QjtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUc7Z0JBQUg7Ozs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO0lBQTJEOzs7SUFBeEQ7SUFBSCxTQUFHLFNBQUg7SUFBaUM7SUFBakMsU0FBaUMsU0FBakM7O0lBQUE7SUFBQTtJQUFBLFNBQUEsbUJBQUE7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